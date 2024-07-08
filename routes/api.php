<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With, auth-token');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: *");
Route::group(['prefix' => 'user/v1'], function () {
    Route::post('login', 'Api\UserAuthController@login');
    Route::post('register', 'Api\UserAuthController@register');
    Route::post('otp', 'Api\UserAuthController@otp');
    Route::post('otp/verify', 'Api\UserAuthController@verifyOtp');
    Route::post('otp/resend', 'Api\UserAuthController@resendOtp');
    Route::post('changePasswrod', 'Api\UserAuthController@changePasswrod');
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('getDetails', 'Api\UserAuthController@getDetails');
        Route::post('task-reward','Api\TaskRewardsController@index');
        Route::post('task-claim','Api\TaskRewardsController@claim');
        Route::post('claim_giftcode','Api\TaskRewardsController@claimgiftcode');
        Route::post('updateDetails', 'Api\UserAuthController@updateDetails');
        Route::post('checkInDetials', 'Api\UserController@checkInDetials');
        Route::post('checkIn', 'Api\UserController@checkIn');
        Route::post('getDetails', 'Api\UserAuthController@getDetails');
        Route::post('updateDetails', 'Api\UserAuthController@updateDetails');
        Route::post('checkInDetials', 'Api\UserController@checkInDetails');
        Route::post('checkIn', 'Api\UserController@checkIn');
        Route::post('ranks', 'Api\UserController@ranksList');
        Route::post('invite-details', 'Api\UserController@inviteDetials');
        Route::post('levels-details', 'Api\UserController@levelsDetails');
        Route::post('levels/rewards-claim', 'Api\UserController@levelsRewardClaim');
        Route::post('tbonus', 'Api\UserController@timeBounsSum');
        Route::post('markbon', 'Api\UserController@markbon');
        Route::post('complaneData', 'Api\UserController@complaneData');
        Route::post('complaneAdd', 'Api\UserController@complaneAdd');
        Route::post('complanes', 'Api\UserController@complanes');

        Route::post('transection', 'Api\UserController@transection');
        Route::post('banksoptions', 'Api\UserController@banksOptions');
        Route::post('bank-update', 'Api\UserController@bankUpdate');
        Route::post('bankDetails', 'Api\UserController@bankDetails');
        Route::post('bank-add', 'Api\UserController@bankAdd');
        Route::post('bank-delete', 'Api\UserController@bankDelete');
        Route::post('upi-add', 'Api\UserController@upiAdd');
        Route::post('upi-delete', 'Api\UserController@upiDelete');

        Route::post('gameCount', 'Api\UserController@gameCount');

        Route::post('withdraw', 'Api\PaymentController@withdraw');
        Route::post('agent-withdraw', 'Api\PaymentController@agentWithdraw');
        Route::post('getupi', 'Api\PaymentController@getUpi');
        Route::post('payment', 'Api\PaymentController@payment');
        Route::post('payment/status', 'Api\PaymentController@paymentStatus');
        Route::post('payment/records', 'Api\PaymentController@paymentRecords');
        Route::post('withdraw/records', 'Api\PaymentController@withdrawRecords');

        Route::post('fast-parity/results', 'Api\GameController@fastParityResults');
        Route::post('fast-parity/bets', 'Api\GameController@fastParityBets');
        Route::post('user/fast-parity', 'Api\GameController@fastParityUser');

        Route::post('user/bet/fast-parity', 'Api\GameController@fastParityUserBet');

        Route::post('parity/results', 'Api\GameController@parityResults');
        Route::post('parity/bets', 'Api\GameController@parityBets');
        Route::post('user/parity', 'Api\GameController@parityUser');
        Route::post('user/bet/parity', 'Api\GameController@parityUserBet');

        Route::post('circle/results', 'Api\GameController@circleResults');
        // Route::post('circle/rotate', 'Api\GameController@circleRotate');
        Route::post('circle/bets', 'Api\GameController@circleBets');
        Route::post('user/circle', 'Api\GameController@circleUser');
        Route::post('user/bet/circle', 'Api\GameController@circleUserBet');

        Route::post('jet/histroy','Api\GameController@jetHistroy');
        Route::post('jet/bets','Api\GameController@jetBetUser');
        Route::post('jet/bet','Api\GameController@jetBetUserdetails');
        Route::post('jet/allbets','Api\GameController@jetBetallbets');

        Route::post('all-bet-order', 'Api\GameController@allBetsOrederUser');
        Route::post('game-History', 'Api\GameController@gameHistory');
    });
});
// Route::group(['prefix' => 'app/v1'], function () {
//     Route::get('templates', [AppController::class,'templates']);
//     Route::post('checkTemplate', [AppController::class,'checkTemplate']);
//     // Route::get('', [MatchesController::class, 'getRanks']);
// });

// api/user/v1/user/fast-parity
