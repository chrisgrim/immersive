@extends('layouts.master')

@section('content')

<div>
	<div id="bodyArea">
		<user-profile :fav="{{$fav}}" :loaduser="{{ auth()->user() }}" v-cloak></user-profile>	
	</div>
</div>

@endsection