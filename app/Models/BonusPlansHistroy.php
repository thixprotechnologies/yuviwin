<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BonusPlansHistroy extends Model
{
    use HasFactory;
    protected $table = "bonusplanshistroy";
    protected $fillable = [
        'bonus_plan_id',
        'type',
        'amount',
        'game_count',
        'rechare_value',
        'username',
        'is_claimed',
    ];

}
