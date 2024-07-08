<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BankDetails;
use App\Models\Recharge;
use App\Models\Setting;
use App\Models\User;
use App\Models\Withdrawal;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PaymentController extends Controller
{
    public function withdraw(Request $request){
        $request->validate([
            'username' => 'required|regex:/^\d{10}$/',
            "amount"=>"required|numeric",
            'bank'=>'required|numeric'
        ]);
        $user = User::where('username', $request->username)->first();
        $current = Carbon::today();
        $withdrawCount = Withdrawal::where('username', $request->username)->whereDate('created_at',$current)->count();
        if ($user) {
            if($withdrawCount >= 2){
                return response()->json([
                    'msg' => 'Today Withdraw Limit Complete.',
                ], 400);
            }else{
                if($user->balance < $request->amount){
                    return response()->json([
                        'msg' => 'Insufficent balannce.',
                    ], 400);
                }
                $recharge = Recharge::where('username', $request->username)->where('status', 2)->first();
                if ($recharge == '' || $recharge == null) {
                    return response()->json([
                        'msg' => 'You have no any recharge!',
                    ], 400);
                }
                $withdraw = new Withdrawal();
                if($request->amount < 1500){
                    $amount = $request->amount-30;
                }else{
                    $amount = ($request->amount*98)/100;
                }
                $bank = BankDetails::where('id',$request->bank)->where('username',$user->username)->first();

                $withdraw->username = $request->username;
                $withdraw->withdraw = $amount;
                $withdraw->type = "Withdrawal";
                $withdraw->status = "pending";
                $withdraw->upi = ($bank->type == 2)? $bank->acc_number : $bank->upi_id;
                $withdraw->rand = Str::random(8).time();
                $withdraw->bankdetails =$request->bank;
                $user->balance = $user->balance-$request->amount;
                if ($withdraw->save()) {
                    $user->save();
                    return response()->json([
                        'msg' => 'Your request has been sent. The amount will be credited to your account within 24 hours.',
                    ]);
                } else {
                    return response()->json([
                        'msg' => 'Unable to request for Withdrawal',
                    ], 400);
                }
            }
        } else {
            return response()->json([
                'msg' => 'Undefined User',
            ], 400);
        }
    }
    public function agentWithdraw(Request $request){
        $user = $request->user();
        $request->validate([
            'username' => 'required|regex:/^\d{10}$/',
            "amount"=>"required|numeric",
            'bank'=>'required|numeric'
        ]);
        $current = Carbon::today();
        $withdrawCount = Withdrawal::where('username', $request->username)->whereDate('created_at',$current)->count();
        if ($user) {
            if($withdrawCount >= 2){
                return response()->json([
                    'msg' => 'Today Withdraw Limit Complete.',
                ], 400);
            }else{
                if($user->bonus < $request->amount){
                    return response()->json([
                        'msg' => 'Insufficent balannce.',
                    ], 400);
                }
                $recharge = Recharge::where('username', $request->username)->where('status', 2)->first();
                if ($recharge == '' || $recharge == null) {
                    return response()->json([
                        'msg' => 'You have no any recharge!',
                    ], 400);
                }
                $bank = BankDetails::where('id',$request->bank)->where('username',$user->username)->first();
                $withdraw = new Withdrawal();
                $withdraw->username = $user->username;
                $withdraw->withdraw = $request->amount;
                $withdraw->type = "Agent Withdrawal";
                $withdraw->status = "pending";
                $withdraw->upi = ($bank->type == 2)? $bank->acc_number : $bank->upi_id;
                $withdraw->rand = Str::random(8).time();
                $withdraw->bankdetails =$request->bank;
                $user->bonus = $user->bonus-$request->amount;
                if ($withdraw->save()) {
                    $user->save();
                    return response()->json([
                        'msg' => 'Your request has been sent. The amount will be credited to your account within 24 hours.',
                    ]);
                } else {
                    return response()->json([
                        'msg' => 'Unable to request for Withdrawal',
                    ], 400);
                }
            }
        } else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
    }
    public function getUpi(Request $request){
        $user = $request->user();
        if ($user) {
            $Setting = Setting::first();
            if($request->type == 'Phonepe'){
                $upi = $Setting->upi;
            }else if($request->type == 'Paytm'){
                $upi = $Setting->upi1;
            }elseif($request->type == 'Gpay'){
                $upi = $Setting->upi1;
            }else{
                $upi = $Setting->upi;
            }
            return response()->json([
                'upi' => $upi,
            ]);
        } else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
    }
    public function payment(Request $request){
        $user = $request->user();
        if ($user) {

            $rechargepending=Recharge::where('username',$user->username)->where('status',0)->first();;
            if($rechargepending!=null)
            {
                return response()->json([
                    'msg' => 'Recharge already pending',
                ], 400);
            }
            else{
            $recharge =new  Recharge();
            $recharge->username = $user->username;
            $recharge->recharge = $request->amount;
            $recharge->upi = $request->upi;
            $recharge->utr = $request->utr;
            $recharge->rand = uniqid('tnx_');
            $recharge->img = '';
            // $image = $request->file('image');
            // $directory = 'uploads/payment';
            // $filename = uniqid('payment_') . '.' . $request->image->getClientOriginalExtension();
            // $request->image->move($directory, $filename);
            // $imageUrl = url('storage'.$directory.'/'.$filename);
            // $recharge->img = $filename;
            if($recharge->save()){
                // dd('hii');
                return response()->json([
                    'message' => $request->amount.' deposit request Sent.',
                    'status'=>true,
                    'payId'=>$recharge->id
                ]);
            }else{
                return response()->json([
                    'message' => 'Depost Request faild',
                    'status'=>false
                ], 400);
            }
            }
        } else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
    }
    public function paymentStatus(Request $request){
        $user = $request->user();
        if ($user) {
            $recharge = Recharge::where('id',$request->paymentid)->first();
            if($recharge->status == 3){
                $status = 3;
                $type = 'You transaction cancled.';
            }elseif($recharge->status == 2){
                $status = 2;
                $type = 'your Amount added to your wallet.';
            }elseif($recharge->status == 1){
                $status = 1;
                $type = 'pending';
            }else{
                $type = 'pending';
                $status = 0;
            }
            return response()->json([
                'status'=>$status,
                'msg'=>$type,
            ]);
        } else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
    }
    public function paymentRecords(Request $request){
        $user = $request->user();
        if ($user) {
            $recharge = Recharge::where('username',$user->username)->limit(20)->get();
            return response()->json([
                'recharge'=>$recharge,
            ]);
        }else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
    }
    public function withdrawRecords(Request $request){
        $user = $request->user();
        if ($user) {
            $recharge = Withdrawal::where('username',$user->username)->orderby('created_at','DESC')->limit(20)->get();
            return response()->json([
                'withdraw'=>$recharge,
            ]);
        }else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
    }
}
