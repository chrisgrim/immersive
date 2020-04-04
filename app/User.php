<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\View\View;
use Laravel\Cashier\Billable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, Billable, Searchable;

    protected $indexConfigurator = UserIndexConfigurator::class;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','largeImagePath','thumbImagePath', 'has_unread','provider','provider_id', 'gravatar', 'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['hasCreatedOrganizers', 'needsApproval','hasMessages', 'hexColor'];

    /**
     * User can have many events
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function events() 
    {
        return $this->hasMany(Event::class);
    }

    /**
     * The User has many organizations
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function organizers() 
    {
        return $this->hasMany(Organizer::class)
                    ->orderBy('created_at', 'DESC');
    }

    /**
     * The User can send many messages
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    /**
     * The User can recieve many messages
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function conversations()
    {
        return $this->belongsToMany(Conversation::class)->orderBy('updated_at', 'DESC');
    }

    /**
     * The User has many Staff Picks
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function staffpicks() 
    {
        return $this->hasMany(StaffPick::class);
    }

    /**
     * User can have many favorites
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function favorites() 
    {
        return $this->hasMany(Favorite::class);
    }

    public function favouritedEvents()
    {
        return $this->morphedByMany(Event::class, 'favorited', 'favorites');
    }

    /**
     * Each User has One Location
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function location() 
    {
        return $this->hasOne(UserLocation::class);
    }

    /**
    * Determine if the current user is Admin
    *
    * @return bool
    */
    public function isAdmin() {
        return $this->where('type', 'a')->exists();
    }

    /**
    * Determine if the current user is Moderator
    *
    * @return bool
    */
    public function isModerator() {
        return $this->where('type', 'm')->exists();
    }

    /**
    * Determine if the current user has created events
    *
    * @return bool
    */
    public function getHasCreatedOrganizersAttribute()
    {
        return $this->organizers()->count() ? true : false;    
    }

    /**
    * Assign the current user a color
    *
    * @return string
    */
    public function gethexColorAttribute()
    {
        $myarray = ['#2F405F','#DA5E8E','#20B7A6','#749EEB','#1EAA9A']; 
        return $myarray[$this->id % count($myarray)];
    }

    /**
    * Determine if the current user has messages 
    *
    * @return bool
    */
    public function getHasMessagesAttribute()
    {
        return $this->conversations()->count() ? true : false;    
    }

    /**
    * Creates a new event
    *
    * @return count of events needing approval
    */
    public function getNeedsApprovalAttribute()
    {
        return $this->isAdmin() ? Event::where('status', 'r')->count() : null;
    }

    public function getGravatar()
    {
        $hash = md5(strtolower(trim($this->email)));
        $url = "https://www.gravatar.com/avatar/$hash?d=404";
        if (!strstr(get_headers($url, 1)[0], '404 Not Found')) {
            $this->update([ 'gravatar' => "https://www.gravatar.com/avatar/$hash?s=180"]);
        }
    }

    /**
    * Saves the image that is passed from the controller
    *
    * @return string
    */
    public static function saveFile($request, $user, $width, $height)
    {

        ini_set('memory_limit','512M');
        if ($user->largeImagePath) {
            Storage::deleteDirectory('public/user-images/' . pathinfo($user->largeImagePath, PATHINFO_FILENAME));
        };
        $extension = $request->file('image')->getClientOriginalExtension();
        $rand = rand(1,50000);
        $inputFile= str_slug($user->name . '_' . $rand . '.' . $extension);
        $filename= str_slug($user->name . '_' . $rand);

        $request->file('image')->storeAs('/public/user-images/' . $filename, $inputFile);
        Image::make(storage_path()."/app/public/user-images/$filename/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/user-images/$filename/$filename.webp"))
        ->save(storage_path("/app/public/user-images/$filename/$filename.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/user-images/$filename/$filename-thumb.webp"))
        ->save(storage_path("/app/public/user-images/$filename/$filename-thumb.jpg"));

        $user->update([ 
            'largeImagePath' => 'user-images/' . $filename . '/' . $filename. '.webp',
            'thumbImagePath' => 'user-images/' . $filename. '/' . $filename. '-thumb.webp',
        ]);

        // $old = $user->image_path;
        
        // $extension = $request->file('image')->getClientOriginalExtension();
        // $filename = $user->name .'-'. rand(5,9999) . '.' .$extension;
        // $imagePath = "avatars/$filename";
        // $request->file('image')->storeAs('/public/avatars', $filename);
        // Image::make(storage_path()."/app/public/avatars/$filename")->fit(640, 640)->save(storage_path("/app/public/$imagePath"));
        
        // $old ? Storage::delete('public/' . $old) : '';

        // $user->update([ 'image_path' => $imagePath ]);
    }

    protected $searchRules = [
        //
    ];

    protected $mapping = [
        'properties' => [
            'id' => [
                'type' => 'integer',
                'index' => false
            ],
            'name' => [
                'type' => 'search_as_you_type',
            ],
            'email' => [
                'type' => 'search_as_you_type',
            ],
            'email_verified_at' => [
                'type' => 'text',
                'index' => false
            ],
            'password' => [
                'type' => 'text',
                'index' => false
            ],
            'avatar_path' => [
                'type' => 'text',
                'index' => false
            ],
            'has_unread' => [
                'type' => 'text',
                'index' => false
            ],
            'image_path' => [
                'type' => 'text',
                'index' => false
            ],
            'provider' => [
                'type' => 'text',
                'index' => false
            ],
            'type' => [
                'type' => 'text',
                'index' => false
            ],
            'remember_token' => [
                'type' => 'text',
                'index' => false
            ],
            'created_at' => [
                'type' => 'text',
                'index' => false
            ],
            'updated_at' => [
                'type' => 'text',
                'index' => false
            ],
            'stripe_id' => [
                'type' => 'text',
                'index' => false
            ],
            'card_brand' => [
                'type' => 'text',
                'index' => false
            ],
            'card_last_four' => [
                'type' => 'text',
                'index' => false
            ],
            'trail_ends_at' => [
                'type' => 'text',
                'index' => false
            ],
        ]
    ];
}
