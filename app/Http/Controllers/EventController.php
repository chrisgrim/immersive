<?php

namespace App\Http\Controllers;

use App\Event;
use App\CityList;
use App\Category;
use App\Organizer;
use App\StaffPick;
use Session;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Requests\TitleUpdateRequest;
use Illuminate\Support\LazyCollection;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified'])->except('index','show', 'fetch');
        $this->middleware('can:update,event')
        ->except(['index','create','show','editEvents','store','fetchEditEvents','fetch']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Event $event)
    {
        $events = Event::where('closingDate', '>=', Carbon::yesterday()->endOfDay())
            ->where('status', 'p')
            ->orderBy('published_at', 'desc')
            ->limit(4)
            ->with('organizer')
            ->get();
        $categories = Category::where('remote', 1)
            // ->orderBy('rank', 'desc')
            ->get();
        return view('events.index',compact('events', 'categories'));
    }

     /**
     * Fetch the events
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Request $request) {
        return $events = Event::where('closingDate', '>=', Carbon::yesterday()->endOfDay())
            ->where('status', 'p')
            ->orderBy('published_at', 'desc')
            ->with('organizer')
            ->paginate(4);
    }   

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (auth()->user()->hasCreatedOrganizers) {
            return view('events.edit');
        }
        return view('create.initial');
    }

    /**
     * Loads the users created events
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function editEvents()
    {
        return view('events.edit');
    }

    /**
     * Loads the users created events
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function fetchEditEvents()
    {
        return Organizer::getOrganizerEvents();
    }

    /**
     * Store a newly created resource in storage. When I first create event I create a location and expectation at the same time. Depending on if the store came from axios or a form I send the data back as a object or a redirect.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $event = Event::newEvent($request);
        return $event;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        if($event->status !== 'p') { return redirect('/');}
        $event->load('category', 'organizer', 'location', 'contentAdvisories', 'contactLevels', 'mobilityAdvisories', 'eventreviews', 'staffpick', 'advisories', 'showOnGoing','interactive_level', 'remotelocations');
        return view('events.show', compact('event'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        $event->load('organizer');
        return view('create.organizer',compact('event'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $event->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->deleteEvent($event);
        return auth()->user()->events;
    }

    /**
     * Returns Review Page in Creation Process
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function review(Event $event)
    {
        $this->authorize('finalize', $event);
        $event->load('category', 'organizer', 'location', 'contentAdvisories', 'contactLevels', 'mobilityAdvisories', 'advisories', 'showOnGoing', 'remotelocations');
        return view('create.review', compact('event'));
    }

    public function submitEvent(Event $event) 
    {
        $this->authorize('finalize', $event);
        $event->finalizeEvent($event);
    }

    public function thanks(Event $event)
    {
        return redirect('create-event/edit')->with('submitted', 'submitted');
    }
}
