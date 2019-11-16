<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ticket extends Model
{
	use SoftDeletes;
	
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = ['name','ticket_price','show_id'];
    
	/**
     * Ticket Belongs to the Show Model
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function event() 
    {
        return $this->belongsTo(Show::class);
    }
}
