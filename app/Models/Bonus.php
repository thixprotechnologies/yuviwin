<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bonus extends Model
{
    use HasFactory;
    protected $table = "bonus";
    public $timestamps = false;

    protected static function booted()
    {
        static::retrieved(function ($user) {
            $ref = User::where('username',$user->giver)->first();
            $user->giver = ($ref)? $ref->usercode : 'NA';
            $user->created_at = Carbon::parse($user->created_at)->timezone('Asia/Kolkata')->format('M d Y H:s');
        });
    }
}
