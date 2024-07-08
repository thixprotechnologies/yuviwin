<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ParityRecords extends Model
{
    use HasFactory;
    protected $table = "emredbetrec";
    public $timestamps = false;
    protected $fillable = [
        'period',
        'ans',
        'num',
        'clo',
        'res1'
    ];
    protected static function booted()
    {
        static::retrieved(function ($user) {
            $user->time = Carbon::parse($user->time)->timezone('Asia/Kolkata')->format('H:s; d M, y');        });
    }
}
