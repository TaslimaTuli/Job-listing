<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class listings extends Model
{
    use HasFactory;

    public function scopeFilter($query, array $filters){
        // if ($filters['skill'] ?? false) {
        //     $query->where('skills', 'like', '%' . request('skill') . '%' ) ;
        // }

    }
}
