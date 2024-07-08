<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BousPlan extends Model
{
    use HasFactory;
    protected $table = "bonusplans";
    protected $fillable = [
        'bonus_plan_id',
        'type',
        'amount',
        'game_count',
        'rechare_value',
    ];
    public function claimedone($username, $planid)
    {
        $data = $this->hasOne(BonusPlansHistroy::class)->where(['username' => $username, 'bonus_plan_id' => $this->bonus_plan_id, 'is_claimed', 1]);
        if ($data->count() > 0) {
            return true;
        } else {
            return false;
        }
    }
    // public function claimed()
    // {
    //     $data = BonusPlansHistroy::where('bonus_plan_id',$this->bonus_plan_id)->where('username',auth()->user()->username)->where('is_claimed',1)->first();
    //     if($data){
    //         return true;
    //     }else{
    //         return false;
    //     }
    //     // return $this->hasOne(BonusPlansHistroy::class, 'bonus_plan_id', 'bonus_plan_id');
    // }
    public function claimed()
    {
        return $this->hasOne(BonusPlansHistroy::class, 'bonus_plan_id', 'bonus_plan_id')
            ->where('username', auth()->user()->username)
            ->where('is_claimed', 1)
            ->exists();
    }
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($user) {
            $lastUser = static::latest('id')->first();
            if ($lastUser) {
                $lastNumber = (int)substr($lastUser->bonus_plan_id, strlen('BONPLAN_'));
                $userCode = $lastNumber + 1;
            } else {
                $userCode = 001;
            }
            $userId = 'BONPLAN_' . str_pad($userCode, 3, '0', STR_PAD_LEFT);
            $user->bonus_plan_id = $userId;
        });
    }
}
