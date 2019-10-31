<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactLevel extends Model
{
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }
}
