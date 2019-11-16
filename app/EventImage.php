<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Intervention\Image\ImageManagerStatic as Image;

class EventImage extends Model
{
    /**
    * Saves the image that is passed from the controller
    *
    * @return string
    */
    public static function saveFile($request, $event)
    {
        $extension = $request->file('image')->getClientOriginalExtension();
        $filename = $title.'.'. rand(5, 9999) .$extension;
        $imagePath = "event-large-images/$filename";
        $thumbnailPath = "event-thumb-images/thumb-$filename";
        $request->file('image')->storeAs('/public/event-large-images', $filename);
        Image::make(storage_path()."/app/public/event-large-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$imagePath"))->fit(600, 400)->save(storage_path("/app/public/$thumbnailPath"));

        $event->update([
            'largeImagePath' => $imagePath,
            'thumbImagePath' => $thumbnailPath,
        ]);
    }
}