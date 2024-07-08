<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bonus;
use App\Models\CircleBetting;
use App\Models\CircleRecords;
use App\Models\CircleSet;
use App\Models\FastParityBetting;
use App\Models\FastParityRecords;
use App\Models\FastParitySet;
use App\Models\JetRecords;
use App\Models\JetBetting;
use App\Models\JetSet;
use App\Models\ParityBetting;
use App\Models\ParityRecords;
use App\Models\ParitySet;
use App\Models\Transaction;
use App\Models\User;
use GrahamCampbell\ResultType\Success;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    public function fastParityResults(Request $request)
    {
        $user = $request->user();

        if ($user) {
            $periodData = FastParitySet::where('id', 1)->first();
            $period = $periodData->period;
            $cal = $period % 10;
            $limit = 39;
            $betRecData = FastParityRecords::orderBy('id', 'DESC')->limit($limit)->get();
            $betRecData = $betRecData->sortBy('period')->values()->toArray();

            $gamesold = FastParityBetting::where('username', $user->username)
                ->where('period', $periodData->period - 1)
                ->count();

            if ($gamesold > 0) {
                $isbet = true;
                $success = FastParityBetting::where('username', $user->username)
                    ->where('period', $periodData->period - 1)
                    ->where('res', 'success')
                    ->count();

                if ($success > 0) {
                    // Win case
                    $issuccess = true;
                    $amount = FastParityBetting::where('period', $periodData->period - 1)
                        ->where('username', $user->username)
                        ->where('res', 'success')
                        ->selectRaw('SUM(
                            CASE
                                WHEN color2 = "violet" THEN
                                    CASE
                                        WHEN ans = "green" OR ans = "red" THEN 98 / 100 * amount * 1.5
                                        WHEN ans = "violet" THEN 98 / 100 * amount * 4.5
                                        WHEN ans = "Big" THEN 98 / 100 * amount * 3.0
                                        ELSE 98 / 100 * amount * 9
                                    END
                                ELSE
                                    CASE
                                        WHEN ans = "green" OR ans = "red" THEN 98 / 100 * amount * 2
                                        WHEN ans = "violet" THEN 98 / 100 * amount * 1.5
                                        WHEN ans = "Big" THEN 98 / 100 * amount * 2.5
                                        WHEN ans = "Small" THEN 98 / 100 * amount * 2.5
                                        ELSE 98 / 100 * amount * 9
                                    END
                            END
                        ) as total_amount')
                        ->value('total_amount');

                    $ans = FastParityBetting::where('period', $periodData->period - 1)
                        ->where('username', $user->username)
                        ->get();
                } else {
                    // Loss case
                    $issuccess = false;
                    $ans = FastParityBetting::where('period', $periodData->period - 1)
                        ->where('username', $user->username)
                        ->get();
                    $amount = FastParityBetting::where('period', $periodData->period - 1)
                        ->where('username', $user->username)
                        ->where('res', 'fail')
                        ->selectRaw('SUM(98 / 100 * amount) as total_amount')
                        ->value('total_amount');
                }
            } else {
                $isbet = false;
                $issuccess = false;
                $amount = 0;
                $ans = null;
            }

            $last = FastParityRecords::where('period', $periodData->period - 1)->first();

            $userbet = [
                'isbet' => $isbet,
                'issuccess' => $issuccess,
                'amount' => $amount,
                'ans' => $ans,
                'last' => $last
            ];

            $currentDate = now()->toDateString();

            $probability = DB::table('betrec')
                ->select('clo', DB::raw('COUNT(clo) AS count_ans'))
                ->where('time', '>', $currentDate)
                ->groupBy('clo')
                ->unionAll(
                    DB::table('betrec')
                        ->select('res1', DB::raw('COUNT(res1) AS count_ans'))
                        ->where('res1', 'violet')
                        ->where('time', '>', $currentDate)
                        ->groupBy('res1')
                )
                ->unionAll(
                    DB::table('betrec')
                        ->select('ans', DB::raw('COUNT(ans) AS count_ans'))
                        ->where('time', '>', $currentDate)
                        ->groupBy('ans')->orderBy('ans')
                )
                ->get();

            $newResults = [];
            foreach ($probability as $p) {
                $newResults[$p->clo] = $p->count_ans;
            }

            if ($periodData) {
                return response()->json([
                    'msg' => 'Success',
                    'data' => $betRecData,
                    'next' => $periodData->period,
                    'userbet' => $userbet,
                    'prediction' => $newResults,
                ]);
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }

    public function fastParityUser(Request $request)
    {
        $user = $request->user();
        $betRecData = FastParityBetting::where('username', $user->username)->orderBy('id', 'DESC')->limit(10)->get();
        if ($betRecData) {
            return response()->json([
                'msg' => 'Success',
                'data' => $betRecData
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined Error',
            ], 400);
        }
    }
    public function fastParityUserBet(Request $request)
    {
        $request->validate([
            'period' => 'required',
            'amount' => 'required',
            'ans' => 'required',
        ]);
        $user = $request->user();
        if ($user) {
            if($user->is_bet == 0){
                $user->is_bet = 1;
                $user->save();
            }
            $b1 = (40 / 100) * ((2 / 100) * $request->amount);
            $b2 = (20 / 100) * ((2 / 100) *  $request->amount);
            $b3 = (10 / 100) * ((2 / 100) * $request->amount);
            error_log("Bonus b1: $b1, b2: $b2, b3: $b3");

            $r = $user->refcode;
            $r1 = $user->refcode1;
            $r2 = $user->refcode2;
            if ($r) {
                User::where('usercode', $r)
                    ->increment('bonus', $b1);
                Bonus::insert([
                    'giver' => $user->username,
                    'usercode' => $r,
                    'amount' => $b1,
                    'level' => '1'
                ]);
                if ($r1) {
                    User::where('usercode', $r1)
                        ->increment('bonus', $b2);

                    Bonus::insert([
                        'giver' => $user->username,
                        'usercode' => $r1,
                        'amount' => $b2,
                        'level' => '2'
                    ]);
                    if ($r2) {
                        User::where('usercode', $r2)
                            ->increment('bonus', $b3);
                        Bonus::insert([
                            'giver' => $user->username,
                            'usercode' => $r2,
                            'amount' => $b3,
                            'level' => '3'
                        ]);
                    }
                }
            }
            $trans = new Transaction();
            $trans->username = $user->username;
            $trans->reason = "Fast Parity Betting";
            $trans->amount = $request->amount;
            $trans->status = 1;
            $res1 = $trans->save();
            
            $betRecData = FastParityRecords::orderBy('id', 'DESC')->limit(1)->get();

            $betting = new FastParityBetting();
            $betting->username = $user->username;
            $betting->period = $betRecData[0]->period+1;
            $betting->ans = $request->ans;
            $betting->amount = $request->amount;
            $res2 = $betting->save();
            error_log("Betting save result: " . ($res2 ? 'Success' : 'Failure'));
            if ($res1 && $res2) {
                $user->balance = $user->balance - $request->amount;
                if ($user->update()) {
                    error_log("User balance updated to: " . $user->balance);
                    return response()->json([
                        'msg' => $request->amount . ' Bet placed.',
                    ]);
                } else {
                    return response()->json([
                        'msg' => 'Error ! Somthing went wrong',
                    ], 400);
                }
            } else {
                return response()->json([
                    'msg' => 'Error For Placing new Betting',
                ], 400);
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function parityResults(Request $request)
    {
        $user = $request->user();
        $user = User::where('username', $user->username)->first();
        if ($user) {
            $periodData = ParitySet::where('id', 1)->first();
            $period = $periodData->period;
            $cal = $period % 10;
            $limit = 19 + $cal;
            $betRecData = ParityRecords::orderBy('id', 'DESC')->limit($limit)->get();
            $betRecData = $betRecData->sortBy('period')->values()->toArray();
            $gamesold = ParityBetting::where('username', $user->username)->where('period', $periodData->period - 1)->count();
            if ($gamesold > 0) {
                $isbet = true;
                $success = ParityBetting::where('username', $user->username)->where('period', $periodData->period - 1)->where('res', 'success')->count();
                if ($success > 0) {
                    $issuccess = true;
                    $amount = ParityBetting::where('period', $periodData->period - 1)->where('username', $user->username)->where('res', 'success')
                        ->selectRaw('SUM(
                        CASE
                            WHEN color2 = "violet" THEN
                                CASE
                                    WHEN ans = "green" OR ans = "red" THEN 98 / 100 * amount * 1.5
                                    WHEN ans = "violet" THEN 98 / 100 * amount * 4.5
                                    ELSE 98 / 100 * amount * 9
                                END
                            ELSE
                                CASE
                                    WHEN ans = "green" OR ans = "red" THEN 98 / 100 * amount * 2
                                    WHEN ans = "violet" THEN 98 / 100 * amount * 1.5
                                    ELSE 98 / 100 * amount * 9
                                END
                        END
                    ) as total_amount')
                        ->value('total_amount');
                    $ans = ParityBetting::where('period', $periodData->period - 1)->where('username', $user->username) //->where('res', 'success')
                        ->get();
                } else {
                    $issuccess = false;
                    $ans = null;
                    $amount = ParityBetting::where('period', $periodData->period - 1)
                        ->where('username', $user->username)
                        ->where('res', 'fail')
                        ->selectRaw('SUM(98 / 100 * amount) as total_amount')
                        ->value('total_amount');
                }
            } else {
                $isbet = false;
                $issuccess = false;
                $amount = 0;
                $ans = null;
            }
            $last = ParityRecords::where('period', $periodData->period - 1)->first();
            $userbet = [
                'isbet' => $isbet,
                'issuccess' => $issuccess,
                'amount' => $amount,
                'ans' => $ans,
                'last' => $last
            ];
            $currentDate = now()->toDateString();
            $probability = DB::table('emredbetrec')
                ->select('clo', DB::raw('COUNT(clo) AS count_ans'))
                ->where('time', '>', $currentDate)
                ->groupBy('clo')
                ->unionAll(
                    DB::table('emredbetrec')
                        ->select('res1', DB::raw('COUNT(res1) AS count_ans'))
                        ->where('res1', 'violet')
                        ->where('time', '>', $currentDate)
                        ->groupBy('res1')
                )
                ->unionAll(
                    DB::table('emredbetrec')
                        ->select('ans', DB::raw('COUNT(ans) AS count_ans'))
                        ->where('time', '>', $currentDate)
                        ->groupBy('ans')->orderBy('ans')
                )
                ->get();
            $newResults = [];
            foreach ($probability as $p) {
                $newResults[$p->clo] = $p->count_ans;
            }
            return response()->json([
                'msg' => 'Success',
                'data' => $betRecData,
                'next' => $periodData->period,
                'userbet' => $userbet,
                'prediction' => $newResults,


            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function parityUser(Request $request)
    {
        $user = $request->user();
        $betRecData = ParityBetting::where('username', $user->username)->orderBy('id', 'DESC')->limit(10)->get();
        if ($betRecData) {
            return response()->json([
                'msg' => 'Success',
                'data' => $betRecData
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined Error',
            ], 400);
        }
    }
    public function parityUserBet(Request $request)
    {
        $request->validate([
            'period' => 'required',
            'amount' => 'required',
            'ans' => 'required',
        ]);
        $user = $request->user();
        if ($user) {
            if($user->is_bet == 0){
                $user->is_bet = 1;
                $user->save();
            }
            if($request->ans == 'red' || $request->ans == 'green'){
                $b1 = (40 / 100) * ((2.5 / 100) * $request->amount);
                $b2 = (20 / 100) * ((2.5 / 100) *  $request->amount);
                $b3 = (10 / 100) * ((2.5 / 100) * $request->amount);
            }else{
                $b1 = (40 / 100) * ((5 / 100) * $request->amount);
                $b2 = (20 / 100) * ((5 / 100) *  $request->amount);
                $b3 = (10 / 100) * ((5 / 100) * $request->amount);
            }
            $r = $user->refcode;
            $r1 = $user->refcode1;
            $r2 = $user->refcode2;
            if ($r) {
                User::where('usercode', $r)
                    ->increment('bonus', $b1);
                Bonus::insert([
                    'giver' => $user->username,
                    'usercode' => $r,
                    'amount' => $b1,
                    'level' => '1'
                ]);
                if ($r1) {
                    User::where('usercode', $r1)
                        ->increment('bonus', $b2);

                    Bonus::insert([
                        'giver' => $user->username,
                        'usercode' => $r1,
                        'amount' => $b2,
                        'level' => '2'
                    ]);
                    if ($r2) {
                        User::where('usercode', $r2)
                            ->increment('bonus', $b3);
                        Bonus::insert([
                            'giver' => $user->username,
                            'usercode' => $r2,
                            'amount' => $b3,
                            'level' => '3'
                        ]);
                    }
                }
            }
            $trans = new Transaction();
            $trans->username = $user->username;
            $trans->reason = "Fast Parity Betting";
            $trans->amount = $request->amount;
            $trans->status = 1;
            $res1 = $trans->save();
            
             $betRecData = ParityRecords::orderBy('id', 'DESC')->limit(1)->get();
            
            $betting = new ParityBetting();
            $betting->username = $user->username;
            $betting->period = $betting->period = $betRecData[0]->period+1;;
            $betting->ans = $request->ans;
            $betting->amount = $request->amount;
            $res2 = $betting->save();
            if ($res1 && $res2) {
                $user->balance = $user->balance - $request->amount;
                if ($user->update()) {
                    return response()->json([
                        'msg' => $request->amount . ' Bet placed.',
                    ]);
                } else {
                    return response()->json([
                        'msg' => 'Error ! Somthing went wrong',
                    ], 400);
                }
            } else {
                return response()->json([
                    'msg' => 'Error For Placing new Betting',
                ], 400);
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function circleResults(Request $request)
    {
        $user = $request->user();
        $periodData = CircleSet::where('id', 1)->first();
        $period = $periodData->period;
        $limit = 16;
        $betRecData = CircleRecords::orderBy('id', 'DESC')->limit($limit)->get();
        $betRecData = $betRecData->sortBy('period')->values()->toArray();
        $gamesold = CircleBetting::where('username', $user->username)->where('period', $periodData->period - 1)->count();
        if ($gamesold > 0) {
            $isbet = true;
            $success = CircleBetting::where('username', $user->username)->where('period', $periodData->period - 1)->where('res', 'success')->count();
            if ($success > 0) {
                $issuccess = true;
                $amount = CircleBetting::where('period', $periodData->period - 1)->where('username', $user->username)->where('res', 'success')
                    ->selectRaw('SUM(
                    CASE
                        WHEN ans = "violet" THEN 97.5 / 100 * amount * 5
                        WHEN ans = "gold" THEN 97.5 / 100 * amount * 2
                        WHEN ans = "red" THEN 97.5 / 100 * amount * 3
                        WHEN ans = "green" THEN 97.5 / 100 * amount * 50
                    END
                ) as total_amount')
                    ->value('total_amount');
                $ans = CircleBetting::where('period', $periodData->period - 1)->where('username', $user->username) //->where('res', 'success')
                    ->get();
            } else {
                $issuccess = false;
                $ans = null;
                $amount = CircleBetting::where('period', $periodData->period - 1)
                    ->where('username', $user->username)
                    ->where('res', 'fail')
                    ->selectRaw('SUM(98 / 100 * amount) as total_amount')
                    ->value('total_amount');
            }
        } else {
            $isbet = false;
            $issuccess = false;
            $amount = 0;
            $ans = null;
        }
        $last = CircleRecords::where('period', $periodData->period - 1)->first();

        $userbet = [
            'isbet' => $isbet,
            'issuccess' => $issuccess,
            'amount' => $amount,
            'ans' => $ans,
            'last' => $last
        ];
        if ($periodData) {
            return response()->json([
                'msg' => 'Success',
                'data' => $betRecData,
                'next' => $period,
                'userbet' => $userbet

            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined Error',
            ], 400);
        }
    }

    public function circleUser(Request $request)
    {
        $user = $request->user();
        $betRecData = CircleBetting::where('username', $user->username)->orderBy('id', 'DESC')->limit(10)->get();
        if ($betRecData) {
            return response()->json([
                'msg' => 'Success',
                'data' => $betRecData
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined Error',
            ], 400);
        }
    }
    public function circleUserBet(Request $request)
    {
        $request->validate([
            'period' => 'required',
            'amount' => 'required',
            'ans' => 'required',
        ]);
        $user = $request->user();
        if ($user) {
            if($user->is_bet == 0){
                $user->is_bet = 1;
                $user->save();
            }
            $b1 = (40 / 100) * ((2.5 / 100) * $request->amount);
            $b2 = (20 / 100) * ((2.5 / 100) *  $request->amount);
            $b3 = (10 / 100) * ((2.5 / 100) * $request->amount);
            $r = $user->refcode;
            $r1 = $user->refcode1;
            $r2 = $user->refcode2;
            if ($r) {
                User::where('usercode', $r)
                    ->increment('bonus', $b1);
                Bonus::insert([
                    'giver' => $user->username,
                    'usercode' => $r,
                    'amount' => $b1,
                    'level' => '1'
                ]);
                if ($r1) {
                    User::where('usercode', $r1)
                        ->increment('bonus', $b2);

                    Bonus::insert([
                        'giver' => $user->username,
                        'usercode' => $r1,
                        'amount' => $b2,
                        'level' => '2'
                    ]);
                    if ($r2) {
                        User::where('usercode', $r2)
                            ->increment('bonus', $b3);
                        Bonus::insert([
                            'giver' => $user->username,
                            'usercode' => $r2,
                            'amount' => $b3,
                            'level' => '3'
                        ]);
                    }
                }
            }

            $trans = new Transaction();
            $trans->username = $user->username;
            $trans->reason = "Circle Betting";
            $trans->amount = $request->amount;
            $trans->status = 1;
            $res1 = $trans->save();

            $betting = new CircleBetting();
            $betting->username = $user->username;
            $betting->period = $request->period;
            $betting->ans = $request->ans;
            $betting->amount = $request->amount;
            $res2 = $betting->save();
            if ($res1 && $res2) {
                $user->balance = $user->balance - $request->amount;
                if ($user->update()) {
                    return response()->json([
                        'msg' => $request->amount . ' Bet placed.',
                    ]);
                } else {
                    return response()->json([
                        'msg' => 'Error ! Somthing went wrong',
                    ], 400);
                }
            } else {
                return response()->json([
                    'msg' => 'Error For Placing new Betting',
                ], 400);
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }

    public function fastParityBets(Request $request){
        $user = $request->user();
        if($user){
            // $periodData = FastParitySet::where('id', 1)->first();
            // $period = $periodData->period;
            $bets = FastParityBetting::where('period',$request->period)->get();
            return response()->json([
                'data' => $bets
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function parityBets(Request $request){
        $user = $request->user();
        if($user){
            // $periodData = ParitySet::where('id', 1)->first();
            // $period = $periodData->period;
            $bets = ParityBetting::where('period',$request->period)->get();
            return response()->json([
                'data' => $bets
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function circleBets(Request $request){
        $user = $request->user();
        if($user){
            // $periodData = CircleSet::where('id', 1)->first();
            // $period = $periodData->period;
            $bets = CircleBetting::where('period',$request->period)->get();
            return response()->json([
                'data' => $bets
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }

    public function allBetsOrederUser(Request $request){
        $user = $request->user();
        if($user){
            $periodparity = ParitySet::where('id', 1)->select('period')->pluck('period');
            $periodfastparity = FastParitySet::where('id', 1)->select('period')->pluck('period');
            $periodcircle = CircleSet::where('id', 1)->select('period')->pluck('period');
            $fastparity = FastParityBetting::where('username',$user->username)->orderby('id','DESC')->limit(30)->get();
            $parity = ParityBetting::where('username',$user->username)->orderby('id','DESC')->limit(30)->get();
            $circle = CircleBetting::where('username',$user->username)->orderby('id','DESC')->limit(30)->get();
            $jet = JetBetting::where('username',$user->username)->orderby('id','DESC')->limit(30)->get();
            return response()->json([
                'fastparity'=>$fastparity,
                'parity'=>$parity,
                'circle'=>$circle,
                'jet'=>$jet
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function gameHistory(Request $request){
        $user = $request->user();
        if($user){
            if($request->game == 'fast-parity'){
                $periodfastparity = FastParitySet::where('id', 1)->select('period')->pluck('period');
                $fastparity = FastParityRecords::where('period','!=',$periodfastparity)->orderby('period','DESC')->limit(30)->get();
                return response()->json([
                    'status'=>true,
                    'record'=>$fastparity
                ]);
            }else if($request->game == 'parity'){
                $periodparity = ParitySet::where('id', 1)->select('period')->pluck('period');
                $parity = ParityRecords::where('period','!=',$periodparity)->orderby('period','DESC')->limit(30)->get();
                return response()->json([
                    'status'=>true,
                    'record'=>$parity
                ]);
            }else if($request->game == 'circle'){
                $periodcircle = CircleSet::where('id', 1)->select('period')->pluck('period');
                $circle = CircleRecords::where('period','!=',$periodcircle)->orderby('period','DESC')->limit(30)->get();
                return response()->json([
                    'status'=>true,
                    'record'=>$circle
                ]);
            }else{
                return response()->json([
                    'status'=>false
                ]);
            }
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function jetHistroy(Request $request){
        $user = $request->user();
        if($user){
           $data =  JetRecords::orderby('id','desc')->get()->take(10);
            return response()->json([
                'data' =>  $data,
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function jetBetUser(Request $request){
        $user = $request->user();
        if($user){
            $period = JetSet::first()->pluck('period');
           $data =  JetBetting::where('username',$user->username)->orderby('id','desc')->get();
            return response()->json([
                'data' =>  $data,
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function jetBetUserdetails(Request $request){
        $user = $request->user();
        if($user){
            $period = JetSet::first()->pluck('period');
            $data =  JetBetting::where('username',$user->username)->where('status','pending')->where('period',$period)->orderby('id','desc')->get();
            // $dataNext =JetBetting::where('username',$user->username)->where('period',$period+1)->orderby('id','desc')->get();
            if($data->count() > 0){
                $bet = true;
                $betamount = $data->sum('amount');
            }else{
                $bet = false;
                $betamount = 0;
            }
            return response()->json([
                'is_bet' =>  $bet,
                'amount'=>$betamount
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }

    public function jetBetallbets(Request $request){
        $user = $request->user();
        if($user){
            $period = JetSet::first()->pluck('period');
            $data =  JetBetting::where('period',$period)->orderby('id','desc')->get();
            return response()->json([
                'data' =>  $data,
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
}
