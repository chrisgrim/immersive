<?php

namespace App\Http\Controllers;

use App\AdminArea;
use App\Event;
use App\Category;
use App\User;
use App\MakeImage;
use App\Message;
use App\ModeratorComment;
use App\Conversation;
use Carbon\Carbon;
use App\Mail\ModeratorComments;
use App\Mail\EventChanges;
use App\Mail\EventApproved;
use App\Mail\EventRejected;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class AdminAreaController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware('moderator');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usercount = User::count();
        $eventcount = Event::where('status', 'p')->count();
        return view('adminArea.stats', compact('usercount', 'eventcount'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function show(AdminArea $adminArea)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminArea $adminArea)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminArea $adminArea)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function destroy(AdminArea $adminArea)
    {
        //
    }

    /**
     * Approval Page
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function approval()
    {
        $events = Event::where('status', 'r')->with('organizer')->get();
        return view('adminArea.approval',compact('events'));
    }

    /**
     * Individual events on approval pages
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function showApproval(Event $event)
    {
        $event->load('category', 'organizer', 'location', 'contentAdvisories', 'contactLevels', 'mobilityAdvisories', 'eventreviews', 'staffpick', 'advisories', 'showOnGoing','interactive_level', 'remotelocations', 'timezone');
        $tickets = $event->shows()->first()->tickets()->orderBy('ticket_price')->get();
        return view('adminArea.showapproval',compact('event','tickets'));
    }

     /**
     * Approve Event
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function success(Event $event)
    {
        
        $event = $event->load('user', 'timezone');
        
        $slug = Event::finalSlug($event);
        
        MakeImage::renameImage($event, $slug, 'event', null);

        if ($event->embargo_date && $event->embargo_date > Carbon::now()) {
            $event->update([
                'status' => 'e',
                'slug' => $slug,
                'published_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
            if(auth()->id() != $event->user->id ) {
                Message::eventnotification($event, 'Thanks, your event has been approved and will be displayed on your chosen date.', $slug);
            }
            
        } else {
            $event->update([
                'status' => 'p',
                'slug' => $slug,
                'published_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
            if(auth()->id() != $event->user->id ) {
                Message::eventnotification($event, 'Thanks, your event has been approved!', $slug);
            }
        }

        if(auth()->id() != $event->user->id ) {
            Mail::to($event->user)->send(new EventApproved($event));
        }

        AdminArea::storeAirtable($event);

    }

    /**
     * Fail Event Creates a new moderator comment in the table, then emails the user that comment. Finally it assigns a value of hasIssues to the event database table.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function fail(Request $request, Event $event)
    {
        if(auth()->id() != $event->user->id ) {
            $Message = Message::eventnotification($event, 'denied', $request);
            Mail::to($event->user)->send(new EventChanges($Message, $event));
        }
        $event->update([
            'status' => '9',
        ]);
    }

    /**
     * Fail Event Creates a new moderator comment in the table, then emails the user that comment. Finally it assigns a value of hasIssues to the event database table.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function reject(Request $request, Event $event)
    {
        if(auth()->id() != $event->user->id ) {
            Message::eventnotification($event, 'denied', $request)->load('event');
            Mail::to($event->user)->send(new EventRejected($event));
        }

        $event->delete();
    }
}
