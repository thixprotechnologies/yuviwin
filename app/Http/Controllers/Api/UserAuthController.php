<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Bonus;
use GuzzleHttp\Client;
use App\Models\OtpCode;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class UserAuthController extends Controller
{
    public function login(Request $request)
    {
        if (isset($request->quick) && $request->quick == true) {
            $user = User::Where('username', '=', $request->username)->first();
            if ($user) {
                $response = $this->otpCheck($request->username, 'login');
                return response()->json($response);
            } else {
                return response()->json([
                    'msg' => 'Invalid User details',
                ], 400);
            }
        } else {
            $this->validate($request, [
                "username" => "required|regex:/^\d{10}$/",
                "password" => "required|min:6",
            ]);
            $user = User::Where('username', '=', $request->username)->first();
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    if ($user->is_verified) {
                        $user->tokens()->delete();
                        $token = $user->createToken($request->username)->plainTextToken;
                        return response()->json([
                            'msg' => 'You are logged in',
                            'user' => $user->username,
                            'token' => $token,
                        ]);
                    } else {
                        $otp = $this->generateNewOtp($user->username, 'account-verify');
                        $data = ['username' => $user->username, 'type' => 'account-verify'];
                        return response()->json([
                            'msg' => 'Otp Sent On Your number.Please Verify Your Account.',
                            'user' => $user->username,
                            'data' => $data
                        ]);
                    }
                } else {
                    return response()->json([
                        'msg' => 'Incorrect login details',
                    ], 400);
                }
            } else {
                return response()->json([
                    'msg' => 'Incorrect login details',
                ], 400);
            }
        }
    }
    public function register(Request $request)
    {
        $request->validate([
            "username" => "required|regex:/^\d{10}$/|unique:users,username",
            'password' => 'required',
            'confirmpassword' => 'required|same:password',
            'privacy' => 'required',
        ]);
        $user = new User();
        $user->username = $request->username;
        $user->mobile = $request->username;
        $user->password = Hash::make($request->password);
        if (isset($request->inviteCode)) {
            $user->refcode = $request->inviteCode;
            $refocde1 = User::where('usercode', $request->inviteCode)->first();
            if ($refocde1) {
                $user->refcode1 = $refocde1->refcode;
                $refocde2 = User::where('usercode', $refocde1)->first();
                if ($refocde2) {
                    $user->refocde2 = $refocde2->refcode;
                }
            }
        }
        if ($user->save()) {
            $otp = $this->generateNewOtp($user->username, 'account-verify');
            $data = ['username' => $user->username, 'type' => 'account-verify'];
            return [
                'msg' => 'Otp Sent to your number. Verify your account.',
                'data' => $data
            ];
        } else {
            return response()->json([
                'msg' => 'Some Technical issue.',
            ], 400);
        }
    }
    public function getDetails(Request $request)
    {
        $user = $request->user();
        if ($user) {
            return response()->json([
                'msg' => 'Success',
                "data" => $user
            ]);
        } else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
    }
    public function getOtp(Request $request)
    {
        $user = User::Where('username', '=', $request->username)->first();
        if ($user) {
            $oldOtp = OtpCode::where('username', '=', $request->username)->orderBy('id', 'desc')->first();
            return response()->json([
                'msg' => 'Otp sent on your mobile',
            ]);
        } else {
            return response()->json([
                'msg' => 'Incorrect login details',
            ], 400);
        }
    }
    public function updateDetails(Request $request)
    {
        $request->validate([
            // "username" => "required|regex:/^\d{10}$/",
            "nickname" => "required",
            "name" => "required",
        ]);
        if ($request->password) {
            $request->validate([
                "password" => "required|min:6",
                "confirmpassword" => "required|same:password",
            ]);
        }
        $user = $request->user();
        $user->name = $request->name;
        $user->nickname = $request->nickname;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }
        if ($user->save()) {
            return response()->json([
                'msg' => 'Your Details Updated',
            ]);
        } else {
            return response()->json([
                'msg' => 'Unable to update Details',
            ], 400);
        }
    }
    public function otp(Request $request)
    {
        $request->validate([
            "username" => "required|regex:/^\d{10}$/",
            'type' => 'required',
        ]);
        if ($request->type == 'forgot-Password') {
            $user = User::Where('username', '=', $request->username)->first();
            if ($user) {
                $response = $this->otpCheck($request->username, $request->type);
                return response()->json($response);
            } else {
                return response()->json([
                    'msg' => 'Invalid User details',
                ], 400);
            }
        } else {
            return response()->json([
                'msg' => 'Invalid Request',
            ], 400);
        }
    }
    private function otpCheck($user, $type)
    {
        $oldotp = OtpCode::where('username', $user)->orderBy('time', 'DESC')->first();
        if ($oldotp) {
            $timeFromDB = Carbon::parse($oldotp->time)->timezone('Asia/Kolkata');
            $current = Carbon::now()->timezone('Asia/Kolkata');
            $threeMinutesAgo = $current->copy()->subMinutes(3);
            if ($timeFromDB->gte($threeMinutesAgo) && $timeFromDB->lte($current)) {
                $data = ['username' => $user, 'type' => $type];
                return [
                    'msg' => 'Otp already sent',
                    'data' => $data
                ];
            } else {
                $date = Carbon::now()->timezone('Asia/Kolkata');
                if (OtpCode::where('username', $user)->whereDate('time', $date)->count() >= 3) {
                    $data = ['username' => $user, 'type' => $type];
                    return [
                        'msg' => 'Daily Otp limit reached. Try again later.',
                        'data' => $data
                    ];
                } else {
                    $response = $this->generateNewOtp($user, $type);
                    return $response;
                }
            }
        } else {
            $otp = $this->generateNewOtp($user, $type);
        }
    }
    private function generateNewOtp($user, $type)
    {
        $otp = rand(100000, 999999);
        // $otp = 111111;
        $this->sendOtpOnMobile($user, $otp);
        $otpModel = new OtpCode();
        $otpModel->username = $user;
        $otpModel->otp = $otp;
        $otpModel->save();
        $data = ['username' => $user, 'type' => $type];
        return [
            'msg' => 'Otp sent Successful',
            'data' => $data
        ];
    }
    public function resendOtp(Request $request)
    {
        $request->validate([
            "username" => "required|regex:/^\d{10}$/",
            'type' => 'required',
        ]);
        // if ($request->type == 'forgot-Password') {
        $user = User::Where('username', '=', $request->username)->first();
        if ($user) {
            $response = $this->otpCheck($request->username, $request->type);
            return response()->json($response);
        } else {
            return response()->json([
                'msg' => 'Invalid User details',
            ], 400);
        }
        // } else {
        //     return response()->json([
        //         'msg' => 'Invalid Request',
        //     ], 400);
        // }
    }
    public function verifyOtp(Request $request)
    {
        $request->validate([
            "username" => "required|regex:/^\d{10}$/",
            'type' => 'required',
            'otp' => 'required'
        ]);
        $oldotp = OtpCode::where('username', $request->username)->orderBy('id', 'DESC')->first();
        $timeFromDB = Carbon::parse($oldotp->time)->timezone('Asia/Kolkata'); // Parse timestamp from the database
        $current = Carbon::now()->timezone('Asia/Kolkata');
        $threeMinutesAgo = $current->copy()->subMinutes(3);
        if ($timeFromDB >= $threeMinutesAgo) {
            if ($oldotp->otp == $request->otp) {
                if ($request->type == 'account-verify') {
                    $user = User::where('username', $request->username)->first();
                    $user->is_verified = 1;
                    $refUser = User::where('usercode', $user->refcode)->first();
                    if ($refUser) {
                        $refUser->bonus = $refUser->bonus + 1;
                        $refUser->save();
                        Bonus::insert([
                            'giver' => $user->username,
                            'usercode' => $user->refcode,
                            'amount' => 1,
                            'level' => '1'
                        ]);
                        $trans = new Transaction();
                        $trans->username = $user->username;
                        $trans->reason = "Referal Amount";
                        $trans->amount = 1;
                        $trans->status = 1;
                        $res1 = $trans->save();
                    }
                    $user->save();
                }
                if ($request->type == 'login') {
                    $user = User::where('username', $request->username)->first();
                    $user->is_verified = 1;
                    $user->save();
                    $token = $user->createToken($request->username)->plainTextToken;
                    return response()->json([
                        'msg' => 'You are logged in',
                        'user' => $user->username,
                        'token' => $token,
                        'status' => true,
                        'type' => $request->type
                    ]);
                } else {
                    return response()->json([
                        'msg' => 'Otp Matched',
                        'status' => true,
                        'user' => $request->username,
                        'type' => $request->type
                    ]);
                }
            } else {
                return response()->json([
                    'msg' => 'Otp Mismatch',
                    'status' => false
                ]);
            }
        } else {
            return response()->json([
                'msg' => 'Otp Expired',
                'status' => false
            ]);
        }
    }

    public function sendOtpOnMobile($mobile, $otp)
    {
        $client = new Client();

        $fields = [
            "variables_values" => $otp,
            "route" => "otp",
            "numbers" =>  $mobile,
        ];
        try {
            $response = $client->request('POST', 'https://www.fast2sms.com/dev/bulkV2', [
                'headers' => [
                    'authorization' => 'T0tVxZjJJP3dUNGKc8MJEWgaQ546tGhP0hhQI05hQqsciGkFvkdepUkD891v',
                    'accept' => '*/*',
                    'cache-control' => 'no-cache',
                    'content-type' => 'application/json',
                ],
                'json' => $fields,
            ]);

            $statusCode = $response->getStatusCode();
            $responseData = json_decode($response->getBody(), true);

            if ($statusCode == 200 && $responseData["return"]) {
                return response()->json([
                    'msg' => 'Your otp limit complete come next day.',
                    'status' => false
                ], 400);
            } else {
                return response()->json([
                    'msg' => 'Your otp limit complete come next day.',
                    'status' => false
                ], 400);
            }
        } catch (\Exception $e) {
            return response()->json([
                'msg' => 'Your otp limit complete come next day.',
                'status' => false
            ], 400);
        }
    }
    public function changePasswrod(Request $request)
    {
        $request->validate([
            "username" => "required|regex:/^\d{10}$/",
            "password" => "required|min:6",
        ]);
        $user = User::where('username', $request->username)->first();
        if ($user) {
            $hashedPassword = Hash::make($request->password); // Hash the new password
            $user->password = $hashedPassword;
            if ($user->save()) {
                return response()->json([
                    'msg' => 'Password Changed',
                    'status' => true
                ]);
            } else {
                return response()->json([
                    'msg' => 'Unable to change password',
                    'status' => false
                ], 400);
            }
        } else {
            return response()->json([
                'msg' => 'Invalid User',
            ], 400);
        }
    }
}
