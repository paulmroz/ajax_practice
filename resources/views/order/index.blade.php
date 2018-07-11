<!DOCTYPE html>
<html>
<head>
	<title>Orders</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- 33 KB -->
    <link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> <!-- 3 KB -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> <!-- 16 KB -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="/js/app.js"></script>
	<link rel="stylesheet" type="text/css" href="/css/app.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</head>
<body>
	<h2>Search for order:</h2>
	<form method="GET" role="search" action="orders">
    	<div class="search-control">
        	<input type="search" id="site-search" name="q"
               placeholder="Search the site..."
               aria-label="Search through site content">
        	<button>Search</button>
    	</div>
	</form>
	@if($orders->count())
	@foreach($orders as $order)

		<div class="single_order_{{$order->id}}">
			<h3>Title:</h3>
			<p id="order_title_{{$order->id}}">{{$order->title}}</p>
			<h4>Description:</h4>
			<p  id="order_desc_{{$order->id}}">{{$order->description}}</p>
		</div>

		<form method="POST" action="orders/{{$order->id}}" class="form_number_{{$order->id}} updateForm">
			{{ csrf_field() }}
			<h3>Title:</h3>
			<input type="text" name="title" value="{{$order->title}}">
			<h4>Description:</h4>
			<input type="text" name="description" value="{{$order->description}}">
			<input type="hidden" name="id" value="{{$order->id}}">	
			<button type="submit" class="updateButton" data-id="{{$order->id}}">SAVE</button>
		</form>	
		<button class="edit_button_{{$order->id}} toggle_edit_form" data-id="{{$order->id}}">EDIT</button>
		{{-- DELETE BUTTON --}}
		<form method="POST" action="orders/{{$order->id}}"">
			{{ csrf_field() }}
			{{method_field('DELETE')}}
			<input type="hidden" name="id" value="{{$order->id}}">
			<button type="submit" class="deleteButton" data-id="{{$order->id}}">DELETE</button>
		</form>
		<hr>
	@endforeach
	@else
		<p>No orders returned.</p>
	@endif

	{{ $orders->links() }}
	<h2>Add Order:</h2>
	<form method="POST" action="orders">
		{{ csrf_field() }}
		<label for="title">Title</label>
		<input type="text" name="title" id="title">
		<label for="description">Description</label>
		<input type="text" name="description" id="description">
		<button type="submit">Add Task</button>
	</form>
</body>
</html>