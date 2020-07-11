<?php

namespace App\Policies;

use App\Event;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the event.
     *
     * @param  \App\User  $user
     * @param  \App\Event  $event
     * @return mixed
     */
    public function update(User $user, Event $event)
    {
        return $event->user_id == $user->id && $event->status !== 'r' || $user->type == 'a' || $user->type == 'm';
    }


    /**
     * Determine whether the user can view the event.
     *
     * @param  \App\User  $user
     * @param  \App\Event  $event
     * @return mixed
     */
    public function finalize(User $user, Event $event)
    {
        return ( $event->status !== 'p' || $event->status !== 'r' ) && $event->user_id == $user->id && $event->status >= 8 || $user->type == 'a';
    }
}
