<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AgentLevelPlans;
use App\Models\BankDetails;
use App\Models\Bonus;
use App\Models\CircleBetting;
use App\Models\Complain;
use App\Models\FastParityBetting;
use App\Models\JetBetting;
use App\Models\ParityBetting;
use App\Models\Ranks;
use App\Models\Recharge;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function transection(Request $request)
    {
        $user = $request->user();
        $query = Transaction::query();
        $perPage = 20;
        $page = $request->input('page', 1);
        $total = $query->count();
        if ($user) {
            $results = $query->where('username', $user->username)->orderBy('time', 'desc')->offset(($page - 1) * $perPage)->limit($perPage)->get();
            if (count($results) > 0) {
                return response()->json([
                    'msg' => 'success',
                    'data' => $results,
                    'total' => $total,
                    'page' => $page,
                    'last_page' => ceil($total / $perPage)
                ]);
            } else {
                return response()->json([
                    'msg' => 'Not data found',
                ], 400);
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function bankDetails(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $bank = BankDetails::where('id', $request->id)->where('username', $user->username)->first();
            if ($bank) {
                return response()->json([
                    'bank' => $bank,
                    'back' => false,
                ]);
            } else {
                return response()->json([
                    'msg' => 'Invalid Bank',
                    'back' => true,
                ], 400);
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function gameCount(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $today = Carbon::now()->setTimezone('Asia/Kolkata')->toDateString(); // Get today's date
            $gameCount = JetBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCount1 = FastParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCount2 = ParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCount3 = CircleBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCount = $gameCount + $gameCount1 + $gameCount2 + $gameCount3;
            return response()->json([
                'msg' => 'success',
                'gamecount' => $gameCount,
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function checkInDetialsold(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $wcount = DB::table('signin')
                ->where('username', $user->username)
                ->where(DB::raw('CONVERT_TZ(created, \'+00:00\', \'+05:30\')'), '>=', DB::raw('DATE_SUB(NOW(), INTERVAL 24 HOUR)'))
                ->count();
            $scount = DB::table('signin')
                ->where('username', $user->username)
                ->count();
            if ($scount < 9) {
                $status = $wcount === 0 ? true : false;
            } else {
                $status = 'false';
            }
            $checkInData = [
                [
                    'day' => 1,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 2,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 3,
                    'status' => false,
                    'amount' => 2,
                ],
                [
                    'day' => 4,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 5,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 6,
                    'status' => false,
                    'amount' => 3,
                ],
                [
                    'day' => 7,
                    'status' => false,
                    'amount' => 'Auto',
                ],
            ];
            foreach ($checkInData as $index => $dayData) {
                if (isset($dayData['day'])) {
                    if ($dayData['day'] >= $scount + 1) {
                        $checkInData[$index]['status'] = true;
                    }
                }
            }
            $data = [
                'status' => $status,
                'days' => $scount,
                'checkInData' => $checkInData,
            ];
            return response()->json($data);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function checkInDetails(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $currentTime = Carbon::now()->setTimezone('Asia/Kolkata');
            $scount = DB::table('signin')
                ->where('username', $user->username)
                ->where('created', '>=', $currentTime->subHours(24))
                ->count();

            $status = $scount < 1;
            $checkins = DB::table('signin')
                ->select('created')
                ->where('username', $user->username)
                ->where('created', '>=', $currentTime->copy()->subDays(7)) // Check-ins for the last 5 days
                ->orderByDesc('created')
                ->get();

            $wcount = 0;
            $checkinsWithin24Hours = collect();

            // Process check-ins
            foreach ($checkins as $checkin) {
                $checkinTime = Carbon::parse($checkin->created);
                if ($status) {
                    if ($checkinTime->gte($currentTime->copy())) {
                        $currentTime = Carbon::parse($checkin->created);
                        $checkinsWithin24Hours->push($checkinTime);
                    }
                } else {
                    if ($checkinTime->gte($currentTime->copy()->subDays(1))) {
                        $currentTime = Carbon::parse($checkin->created);
                        $checkinsWithin24Hours->push($checkinTime);
                    }
                }
            }
            $wcount = $checkinsWithin24Hours->count();
            $checkInData = [
                [
                    'day' => 1,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 2,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 3,
                    'status' => false,
                    'amount' => 2,
                ],
                [
                    'day' => 4,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 5,
                    'status' => false,
                    'amount' => 1,
                ],
                [
                    'day' => 6,
                    'status' => false,
                    'amount' => 3,
                ],
                [
                    'day' => 7,
                    'status' => false,
                    'amount' => 'Auto',
                ],
            ];
            if ($wcount < 7) {
                foreach ($checkInData as $index => $dayData) {
                    if ($status) {
                        if ($wcount  > $dayData['day']) {
                            $checkInData[$index]['status'] = false;
                        } else {
                            $checkInData[$index]['status'] = true;
                        }
                    } else {
                        if ($wcount  >= $dayData['day']) {
                            $checkInData[$index]['status'] = false;
                        } else {
                            $checkInData[$index]['status'] = true;
                        }
                    }
                }
            } else {
                foreach ($checkInData as $index => $dayData) {
                    $checkInData[$index]['status'] = true;
                }
            }

            $data = [
                'status' => $status,
                'days' => $scount,
                'checkInData' => $checkInData,
            ];
            return response()->json($data);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }

    public function timeBounsSum(Request $request)
    {
        $user = $request->user();
        $bon = Bonus::where('usercode', $user->usercode)->where('marked', 0)->get();
        if ($bon->count() > 0) {
            $isbon = true;
        } else {
            $isbon = false;
        }
        $bon = $bon->sum('amount');
        return response()->json([
            'bonus' => $bon,
            'isbonus' => $isbon,
        ]);
    }
    public function markbon(Request $request)
    {
        $user = $request->user();
        $affectedRows = Bonus::where('usercode', $user->usercode)
            ->where('marked', 0)
            ->update(['marked' => 1]);
        $bon = Bonus::where('usercode', $user->usercode)->where('marked', 0)->get();
        if ($bon->count() > 0) {
            $isbon = true;
        } else {
            $isbon = false;
        }
        $bon = $bon->sum('amount');
        return response()->json([
            'bonus' => $bon,
            'isbonus' => $isbon,
        ]);
    }
    public function checkIn(Request $request)
    {
        $data = [];
        $user = $request->user()->username;
        $currentTime = Carbon::now()->setTimezone('Asia/Kolkata');
        $scount = DB::table('signin')
            ->where('username', $user)
            ->where('created', '>=', $currentTime->subHours(24))
            ->count();

        $status = $scount < 1;
        $checkins = DB::table('signin')
            ->select('created')
            ->where('username', $user)
            ->where('created', '>=', $currentTime->copy()->subDays(7)) // Check-ins for the last 5 days
            ->orderByDesc('created')
            ->get();

        $wcount = 0;
        $checkinsWithin24Hours = collect();
        // Process check-ins
        foreach ($checkins as $checkin) {
            $checkinTime = Carbon::parse($checkin->created);
            if ($status) {
                if ($checkinTime->gte($currentTime->copy())) {
                    $currentTime = Carbon::parse($checkin->created);
                    $checkinsWithin24Hours->push($checkinTime);
                }
            } else {
                if ($checkinTime->gte($currentTime->copy()->subDays(1))) {
                    $currentTime = Carbon::parse($checkin->created);
                    $checkinsWithin24Hours->push($checkinTime);
                }
            }
        }
        $bon = 0;
        if ($status) {
            $wcount = $checkinsWithin24Hours->count()+1;
            $wcount = $wcount%7;
            if (in_array($wcount, [1, 2, 4, 5])) {
                $bon = 1;
            } elseif ($wcount == 3) {
                $bon = 2;
            } elseif ($wcount == 6) {
                $bon = 3;
            } elseif ($wcount == 0) {
                $bon = rand(7, 50);
            }
            DB::insert('INSERT INTO signin (username, amount) VALUES (?, ?)', [
                $user, $bon
            ]);
            $userUpdate = User::where('username', $user)->first();
            $userUpdate->balance += $bon;
            $userUpdate->save();
            $trans = new Transaction();
            $trans->username = $user;
            $trans->reason = 'CheckIn Bonus';
            $trans->amount = $bon;
            $trans->status = 2; // Assuming 'status' is predefined or an enum value
            $trans->save();
            $status = true;
            $message = "Success!Checkin";
        } else {
            $status = false;
            $message = "Already Checked In";
        }

        return response()->json(['status' => $status, 'message' => $message]);
    }
    public function inviteDetials(Request $request)
    {
        $user = $request->user();
        if ($user) {
            // $totalBonus = Bonus::where('usercode', 'JM254M37')
            $totalBonus = Bonus::where('usercode', $user->usercode)
                ->whereIn('level', [1, 2, 3])
                ->sum('amount');
            $currentDate = Carbon::now()->toDateString();
            $todayBonus = Bonus::where('usercode', $user->usercode)
                ->whereDate('created_at', $currentDate)
                ->whereIn('level', [1, 2, 3])
                ->sum('amount');
            $totalref = User::where('refcode', $user->usercode)
                ->orWhere('refcode1', $user->usercode)
                ->orWhere('refcode2', $user->usercode)
                ->count();
            $todayref = User::whereDate('created_at', $currentDate)
                ->where(function ($query)  use ($user) {
                    $query->where('refcode', $user->usercode)
                        ->orWhere('refcode1', $user->usercode)
                        ->orWhere('refcode2', $user->usercode);
                })
                ->count();
            $records = Bonus::where('usercode', $user->usercode)->whereIn('level', [1, 2, 3])->orderby('id', 'desc')->take(10)
                ->get();
            return response()->json([
                'today' => $todayBonus,
                'total' => $totalBonus,
                'reftoday' => $todayref,
                'reftotal' => $totalref,
                'records' => $records
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function levelsDetails(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $levelSums = AgentLevelPlans::select(DB::raw('SUM(amount) as total_amount'))
                ->groupBy('level')
                ->get()
                ->pluck('total_amount');
            $levelsDwnload = AgentLevelPlans::select(DB::raw('SUM(download_count) as dwn'))
                ->groupBy('level')
                ->get()
                ->pluck('dwn');

            $level = AgentLevelPlans::where('level', $user->level)->where('sub_level', $user->sub_level)->first();
            if($user->level == 1){
                $dwnCount = User::where('refcode', $user->usercode)
                ->count();
            }else{

                if ($level->recharge == 1 && $level->bets == 1) {
                    $dwnCount = User::where('refcode', $user->usercode)
                        ->where('is_recharge', 1)
                        ->where('is_bet', 1)
                        ->count();
                } else if ($level->recharge == 1) {
                    $dwnCount = User::where('refcode', $user->usercode)
                        ->where('is_recharge', 1)
                        ->count();
                } else if ($level->bets == 1) {
                    $dwnCount = User::where('refcode', $user->usercode)
                        ->where('is_bet', 1)
                        ->count();
                } else {
                    $dwnCount = User::where('refcode', $user->usercode)
                    ->count();
                }
            }

                $levelrequiredDownload = AgentLevelPlans::select(DB::raw('SUM(download_count) as dwn'))
                    ->where('level', '<=', $user->level)
                    ->where('sub_level', '<=', $user->sub_level)
                    ->groupBy('level')
                    ->get()
                    ->pluck('dwn')
                    ->sum();
                $levels = AgentLevelPlans::all();
            return response()->json([
                'dwncount'=>$dwnCount,
                'requireddwn'=>$levelrequiredDownload,
                'levels' => $levels,
                'levelsamt' => $levelSums,
                'download_count' => $levelsDwnload,
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function levelsRewardClaim(Request $request)
    {
        $user = $request->user();
        if ($user) {
            if ($user->is_claimed != 1 && $user->level == $request->level) {
                $level = AgentLevelPlans::where('level', $request->level)->where('sub_level', $request->sub_level)->first();
                if ($level->recharge == 1 && $level->bets == 1) {
                    $dwnCount = User::where('refcode', $user->usercode)
                        ->where('is_recharge', 1)
                        ->where('is_bet', 1)
                        ->count();
                } else if ($level->recharge == 1) {
                    $dwnCount = User::where('refcode', $user->usercode)
                        ->where('is_recharge', 1)
                        ->count();
                } else if ($level->bets == 1) {
                    $dwnCount = User::where('refcode', $user->usercode)
                        ->where('is_bet', 1)
                        ->count();
                } else {
                    $dwnCount = User::where('refcode', $user->usercode)
                        ->count();
                }
                $levelrequiredDownload = AgentLevelPlans::select(DB::raw('SUM(download_count) as dwn'))
                    ->where('level', '<=', $user->level)
                    ->where('sub_level', '<=', $user->sub_level)
                    ->groupBy('level')
                    ->get()
                    ->pluck('dwn')
                    ->sum();
                if ($dwnCount >= $levelrequiredDownload) {
                    $levelamt = AgentLevelPlans::where('level', $user->level)->where('sub_level', $user->sub_level)->first()->amount;
                    $new = new Bonus();
                    $new->giver = $user->usercode;
                    $new->usercode = $user->usercode;
                    $new->amount = $levelamt;
                    $new->level = 6;
                    $new->save();
                    if ($user->level <= 5) {
                        $user->level = $user->level + 1;
                    } else {
                        if ($user->sub_level == 4) {
                            $user->level = $user->level + 1;
                        } else {
                            $user->sub_level =  $user->sub_level + 1;
                        }
                    }
                    $user->bonus = $user->bonus + $levelamt;
                    $user->save();
                    return response()->json([
                        'status' => true,
                        'msg' => 'your reward added to your account.',
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'msg' => 'you have to complete task to recive reward.',
                    ]);
                }
            } else if ($user->level > $request->level) {
                return response()->json([
                    'status' => false,
                    'msg' => 'you have recived reward already',
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'msg' => 'you have to complete task to recive reward.',
                ]);
            }

            // $levelSums = AgentLevelPlans::select(DB::raw('SUM(amount) as total_amount'))
            // ->groupBy('level')
            // ->get()
            // ->pluck('total_amount');

            // $levels = AgentLevelPlans::all();
            return response()->json([
                // 'levels' => $levels,
                // 'levelsamt'=>$levelSums,
                // 'download_count'=>$levelsDwnload,
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function ranksList(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $ranks = Ranks::orderBy('ranks', 'asc')->take(10)->get();
            foreach ($ranks as $key => $value) {
                $value->username = User::where('username',$value->username)->first()->usercode;
            }
            return response()->json([
                'data'=>$ranks
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function banksOptions(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $banks = BankDetails::where('username', $user->username)->get();
            return response()->json([
                'data' => $banks,
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function complaneData(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $request->validate([
                'id' => ['required'],
                'type' => ['required', 'in:Recharge,Withdraw'],
            ]);
            if ($request->type == 'Recharge') {
                $record = Recharge::where('username', $user->username)->where('id', $request->id)->first();
                if ($record) {
                    $complain = Complain::where(['type'=>$request->type,'utr'=>$record->utr,'username'=>$user->username])->first();
                    if($complain){
                        return response()->json([
                            'status' => false,
                            'msg' => 'Complain already raised for this transection.',
                        ]);
                    }
                    return response()->json([
                        'status' => true,
                        'data' => $record
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'msg' => 'Record Not found.',
                    ]);
                }
            } else if ($request->type == 'Withdraw') {

                $record = Withdrawal::where('username', $user->username)->where('id', $request->id)->first();
                if ($record) {
                    $complain = Complain::where(['type'=>$request->type,'tnx_id'=>$record->rand,'username'=>$user->username])->first();
                    if($complain){
                        return response()->json([
                            'status' => false,
                            'msg' => 'Complain already raised for this transection.',
                        ]);
                    }
                    return response()->json([
                        'status' => true,
                        'data' => $record
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'msg' => 'Record Not found.',
                    ]);
                }
            } else {
                return response()->json([
                    'status' => false,
                    'msg' => 'Undefined Type For Complains',
                ]);
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function complaneAdd(Request $request)
    {
        $user = $request->user();
        if ($user) {

            $request->validate([
                'id' => ['required'],
                'type' => ['required', 'in:Recharge,Withdraw'],
                'reason' => ['required', 'string'],
                'tnx_id' => ['required', 'string'],
                'amount' => ['required'],
            ]);
            $today = Carbon::now()->setTimezone('Asia/Kolkata')->toDateString();
            $complainCount = Complain::where('username', $user->username)->whereDate('created_at', $today)->count();
            if($complainCount >= 2){
                return response()->json([
                    'status' => false,
                    'msg' => 'Your daily complain raise limit reached. Come back again tomarrow.',
                ]);
            }
            if($request->type == 'Recharge'){
                $request->validate([
                    'image' => ['required', 'image'],
                    'UPID' => ['nullable', 'string'],
                    'paymentMethod' => ['required', 'string'],
                    'utr' => ['required', 'string'],
                ]);

                $complain = new Complain();
                if ($request->hasFile('image')) {
                    $directory = 'uploads/complain';
                    $filename = uniqid('Complain_') . '.' . $request->image->getClientOriginalExtension();
                    // $request->image->storeAs($directory, $filename, 'public');
                    $request->image->move($directory, $filename);

                    $complain->image = $filename;
                }
                $complain->username = $user->username;
                $complain->reason = $request->reason;
                $complain->type = $request->type;
                $complain->payment_method = $request->paymentMethod;
                if ($request->UPID && $request->UPID != null) {
                    $complain->UPID = $request->UPID;
                }
                $complain->utr = $request->utr;
                $complain->tnx_id = $request->tnx_id;
                $complain->amount = $request->amount;
                if ($complain->save()) {
                    return response()->json([
                        'status' => true,
                        'msg' => 'Your Complain Added.',
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'msg' => 'Your Complain Not  Added. Please Try Again after some time.',
                    ]);
                }
            }else if($request->type =='Withdraw'){
                $request->validate([
                    'message' => ['nullable', 'string'],
                ]);
                $complain = new Complain();
                $complain->username = $user->username;
                $complain->reason = $request->reason;
                $complain->type = $request->type;
                $complain->tnx_id = $request->tnx_id;
                $complain->amount = $request->amount;
                $complain->message = $request->message;
                if ($complain->save()) {
                    return response()->json([
                        'status' => true,
                        'msg' => 'Your Complain Added.',
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'msg' => 'Your Complain Not  Added. Please Try Again after some time.',
                    ]);
                }
            }else{
                return response()->json([
                    'msg' => 'Undefined Complain type',
                ], 400);
            }

        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function complanes(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $records = Complain::where('username', $user->username)->orderby('created_at','desc')->get()->take(10);
            return response()->json([
                'data' => $records,
            ]);
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function bankAdd(Request $request)
    {
        $user = $request->user();
        $request->validate([
            'bankname' => 'required|regex:/^[a-zA-Z\s]+$/',
            'ifscCode' => 'required|', //regex:/^[A-Z]{4}[0-9]{7}$/',
            'accountNumber' => 'required|numeric',
            'name' => 'required',
            'id' => 'nullable'
        ]);
        $defbank = BankDetails::where('username', $user->username)->where('is_default', 1)->count();
        if (isset($request->id)) {
            $bank = BankDetails::where('id', $request->id)->first();
            $msg = 'Bank Updated Successfully.';
        } else {
            $bank = new BankDetails();
            $msg = 'Bank Added Successfully.';
        }
        $bank->username = $user->username;
        $bank->bank_name = $request->bankname;
        $bank->acc_number = $request->accountNumber;
        $bank->ifsc_code = $request->ifscCode;
        $bank->name = $request->name;
        $bank->type = 2;
        $bank->is_default = ($defbank > 0) ? 0 : 1;
        $bank->save();
        return response()->json([
            'msg' => $msg,
        ]);
    }
    public function upiAdd(Request $request)
    {
        $user = $request->user();
        if (isset($request->id)) {
            $bank = BankDetails::where('id', $request->id)->first();
            $msg = 'upi Updated Successfully.';
        } else {
            $bank = new BankDetails();
            $msg = 'Upi Added Successfully.';
        }
        $defUpi = BankDetails::where('username', $user->username)->where('is_default', 1)->count();
        $bank->username = $user->username;
        $bank->upi_id = $request->upi;
        $bank->name = $request->name;
        $bank->type = 1;
        $bank->is_default = ($defUpi > 0) ? 0 : 1;
        $bank->save();
        return response()->json([
            'msg' => $msg,
        ]);
    }
    public function upiDelete(Request $request){
        $user = $request->user();
        $bank = BankDetails::where(['id'=>$request->id,'username'=>$user->username])->first();
        if($bank){
            $bank->delete();
            return response()->json([
                'msg' => 'Upi details Deleted successfully.',
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined Details',
            ], 400);
        }
    }
    public function bankDelete(Request $request){
        $user = $request->user();
        $bank = BankDetails::where(['id'=>$request->id,'username'=>$user->username])->first();
        if($bank){
            $bank->delete();
            return response()->json([
                'msg' => 'Bank details Deleted successfully.',
            ]);
        }else{
            return response()->json([
                'msg' => 'Undefined Details',
            ], 400);
        }
    }
}
