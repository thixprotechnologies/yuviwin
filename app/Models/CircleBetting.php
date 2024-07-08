<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CircleBetting extends Model
{
    use HasFactory;
    protected $table = "vipbetting";
    public $timestamps = false;
    protected static function booted()
    {
        static::retrieved(function ($user) {
            $user->time = Carbon::parse($user->time)->timezone('Asia/Kolkata')->format('H:s; d M, y');        });
    }
}
