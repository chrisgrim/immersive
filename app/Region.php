<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }
}
