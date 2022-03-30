<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'products';
    protected $primaryKey = 'ID';
    public $incrementing = true;
    protected $guarded = [];
    public function scopeAvailable($query)
    {
        return $query->where('STATUS', '=', 'available');
    }
}
