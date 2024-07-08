<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Http\Request;

class OnlinePayment extends Controller
{
    public function processPayment($user, $amount, $type)
    {
        return redirect()->back();
    }
    public function downloadApk(Request $request)
    {
        if ($request->user_id) {
            $user =   User::where('usercode', $request->user_id)->first();
            if ($user) {
                if ($user->is_download_apk == 0) {
                    $trans = new Transaction();
                    $trans->username = $user->username;
                    $trans->reason = 'Apk Download';
                    $trans->amount = 10;
                    $trans->status = 2;
                    $trans->save();
                    $user->balance += 10;
                    $user->is_download_apk = 1;
                    $user->save();
                }
                return response()->download(public_path('apk/app-release.apk'));
            }else{
                return response()->download(public_path('apk/app-release.apk'));
            }
        }
        return response()->download(public_path('apk/app-release.apk'));
    }
}
