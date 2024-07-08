<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bonus;
use App\Models\GiftRec;
use App\Models\Gift;
use App\Models\BonusPlansHistroy;
use App\Models\BousPlan;
use App\Models\CircleBetting;
use App\Models\FastParityBetting;
use App\Models\JetBetting;
use App\Models\ParityBetting;
use App\Models\Recharge;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Validation\Rule;

class TaskRewardsController extends Controller
{
    // public function index(Request $request)
    // {
    //     $user = $request->user();
    //     if ($user) {
    //         // $tasks = BousPlan::with('claimed')->get();
    //         $tasks = BousPlan::get();
    //         foreach ($tasks as $task) {
    //             $task->is_claimed = ($task->claimed()) ? true : false;
    //         }
    //         $today = Carbon::now()->setTimezone('Asia/Kolkata')->toDateString(); // Get today's date
    //         $gameCount = JetBetting::where('username', $user->username)->whereDate('time', $today)->count();
    //         $gameCount1 = FastParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
    //         $gameCount2 = ParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
    //         $gameCount3 = CircleBetting::where('username', $user->username)->whereDate('time', $today)->count();
    //         $gameCount = $gameCount + $gameCount1 + $gameCount2 + $gameCount3;
    //         $rechargeCount = Recharge::where(['username' => $user->username, 'status' => 2])->whereDate('created_at', $today)->sum('recharge');
    //         return response()->json([
    //             'tasks' => $tasks,
    //             'game_count' => $gameCount,
    //             'recharge' => $rechargeCount
    //         ]);
    //     } else {
    //         return response()->json([
    //             'msg' => 'Undefined User',
    //         ], 400);
    //     }
    // }

    public function index(Request $request)
    {
        try {
            $user = $request->user();
            if (!$user) {
                return response()->json(['msg' => 'Undefined User'], 400);
            }

            // Get tasks and mark claimed status
            $tasks = BousPlan::all();
            foreach ($tasks as $task) {
                $task->is_claimed = $task->claimed() ? true : false;
                //   dd($task->is_claimed); 
            }

            $today = Carbon::now()->setTimezone('Asia/Kolkata')->toDateString();

            // Game counts
            $gameCount = JetBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCount1 = FastParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCount2 = ParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCount3 = CircleBetting::where('username', $user->username)->whereDate('time', $today)->count();
            $gameCountTotal = $gameCount + $gameCount1 + $gameCount2 + $gameCount3;

            // Recharge count
            $rechargeCount = Recharge::where(['username' => $user->username, 'status' => 2])
                ->whereDate('created_at', $today)
                ->sum('recharge');

            return response()->json([
                'tasks' => $tasks,
                'game_count' => $gameCountTotal,
                'recharge' => $rechargeCount
            ]);
        } catch (\Exception $e) {
            // Log the error for debugging
            Log::error('Error in index method of TaskRewardsController: ' . $e->getMessage());
            return response()->json(['msg' => 'Internal Server Error'], 500);
        }
    }

    public function claim(Request $request)
    {
        $request->validate([
            'task_id' => ['required', Rule::exists('bonusplans', 'bonus_plan_id')]
        ]);

        $task = BousPlan::where('bonus_plan_id', $request->task_id)->first();
        if ($task) {
            $user = $request->user();
            $today = Carbon::now()->setTimezone('Asia/Kolkata')->toDateString(); // Get today's date
            if ($task->type == 1) {
                $claimed = BonusPlansHistroy::where('bonus_plan_id', $task->bonus_plan_id)->where('username', auth()->user()->username)
                    ->where('is_claimed', 1)->first();
                if ($claimed) {
                    return response()->json([
                        'status' => false,
                        'message' => 'This Task already claimed for today.',
                    ]);
                } else {
                    $user->balance = $user->balance + $task->amount;
                    $user->save();
                    $trans = new Transaction();
                    $trans->username = $user->username;
                    $trans->reason = "Task New Account";
                    $trans->amount = $task->amount;
                    $trans->status = 2;
                    $res1 = $trans->save();
                    BonusPlansHistroy::updateOrCreate(['bonus_plan_id' => $task->bonus_plan_id, 'username' => auth()->user()->username], [
                        'bonus_plan_id' => $task->bonus_plan_id,
                        'username' => auth()->user()->username,
                        'is_claimed' => 1,
                        'type' => $task->type,
                        'amount' => $task->amount,
                    ]);
                    return response()->json([
                        'status' => true,
                        'message' => 'Task Reward claimed successfully.',
                    ]);
                }
            } elseif ($task->type == 2) {
                $gameCount = JetBetting::where('username', $user->username)->whereDate('time', $today)->count();
                $gameCount1 = FastParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
                $gameCount2 = ParityBetting::where('username', $user->username)->whereDate('time', $today)->count();
                $gameCount3 = CircleBetting::where('username', $user->username)->whereDate('time', $today)->count();
                $gameCount = $gameCount + $gameCount1 + $gameCount2 + $gameCount3;
                if ($task->game_count <= $gameCount) {
                    $claimed = BonusPlansHistroy::where('bonus_plan_id', $task->bonus_plan_id)->where('username', auth()->user()->username)
                        ->whereDate('created_at', $today)
                        ->where('is_claimed', 1)->first();
                    if ($claimed) {
                        return response()->json([
                            'status' => false,
                            'message' => 'This Task already claimed for today.',
                        ]);
                    } else {
                        $user->balance = $user->balance + $task->amount;
                        $user->save();
                        $trans = new Transaction();
                        $trans->username = $user->username;
                        $trans->reason = "Task Reward Game Play";
                        $trans->amount = $task->amount;
                        $trans->status = 2;
                        $res1 = $trans->save();
                        BonusPlansHistroy::updateOrCreate(['bonus_plan_id' => $task->bonus_plan_id, 'username' => auth()->user()->username], [
                            'bonus_plan_id' => $task->bonus_plan_id,
                            'username' => auth()->user()->username,
                            'is_claimed' => 1,
                            'game_count' => $task->game_count,
                            'type' => $task->type,
                            'amount' => $task->amount,
                        ]);
                        return response()->json([
                            'status' => true,
                            'message' => 'Task Reward claimed successfully.',
                        ]);
                    }
                } else {
                    return response()->json([
                        'status' => false,
                        'message' => 'Play More game for this claim Task.',
                    ]);
                }
            } elseif ($task->type == 3) {
                $rechargeCount = Recharge::where(['username' => $user->username, 'status' => 2])->where('created_at', $today)->sum('recharge');
                if ($task->rechare_value <= $rechargeCount) {
                    $claimed = BonusPlansHistroy::where('bonus_plan_id', $task->bonus_plan_id)->where('username', auth()->user()->username)
                        ->whereDate('created_at', $today)
                        ->where('is_claimed', 1)->first();
                    if ($claimed) {
                        return response()->json([
                            'status' => false,
                            'message' => 'This Task already claimed for today.',
                        ]);
                    } else {
                        $user->balance = $user->balance + $task->amount;
                        $user->save();
                        $trans = new Transaction();
                        $trans->username = $user->username;
                        $trans->reason = "Task Reward Recharege";
                        $trans->amount = $task->amount;
                        $trans->status = 2;
                        $res1 = $trans->save();
                        BonusPlansHistroy::updateOrCreate(['bonus_plan_id' => $task->bonus_plan_id, 'username' => auth()->user()->username], [
                            'bonus_plan_id' => $task->bonus_plan_id,
                            'username' => auth()->user()->username,
                            'is_claimed' => 1,
                            'rechare_value' => $task->rechare_value,
                            'type' => $task->type,
                            'amount' => $task->amount,
                        ]);
                        return response()->json([
                            'status' => true,
                            'message' => 'Task Reward claimed successfully.',
                        ]);
                    }
                } else {
                    return response()->json([
                        'status' => false,
                        'message' => 'Recharge More for this claim Task.',
                    ]);
                }
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Undefined Task.',
            ]);
        }
    }

    public function claimgiftcode(Request $request)
    {
        $gifts = Gift::where('code', $request->giftCode)->first();
        $giftrec = GiftRec::where('code', $request->giftCode)->where('username', $request->username)->first();
        if ($gifts != '' || $gifts != null) {
            if ($giftrec == '' || $giftrec == null) {
                $created24HoursAgo = Carbon::parse($gifts->created)->addHours(24);
                if ($gifts->used === $gifts->userlimit || $created24HoursAgo->diffInHours(Carbon::now()) >= 24) {
                    $gifts->status = 1;
                    $gifts->save();
                    return response()->json([
                        'status' => false,
                        'message' => 'Expire Giftcode!',
                    ], 400);
                } else {
                    $recharge = Recharge::where('username', $request->username)->where('status', 2)->first();
                    // if ($recharge != '' || $recharge != null) {
                        $Gift = new GiftRec();
                        $Gift->username = $request->username;
                        $Gift->code = $request->giftCode;
                        $Gift->amount = $gifts->amount;
                        if ($Gift->save()) {
                            $gifts->used = $gifts->used + 1;
                            $gifts->save();
                            $users = User::where('username', $request->username)->first();
                            if ($users) {
                                $users->balance += $gifts->amount;
                                $users->save();
                            }
                            return response()->json([
                                'status' => true,
                                'message' => $gifts->amount.'Rs. Added Successfull!',
                            ]);
                        }
                    // } else {
                    //     return response()->json([
                    //         'status' => false,
                    //         'message' => 'you are not eligible for this gift code!',
                    //     ], 400);
                    // }
                }
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'GiftCode Already Used!',
                ], 400);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Invalid GiftCode!',
            ], 400);
        }
    }
}
