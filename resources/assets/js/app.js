$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

$(document).ready(function(){
	$('.updateButton').on('click', function(event){
		event.preventDefault();
		let formUpdate = $(this).parent();
		let urlAction = formUpdate.attr('action');
		var dataString = formUpdate.serialize();
		let order_id = $(this).attr("data-id");
		$.ajax({
			type: "PATCH",
			url: urlAction,
			data: dataString,
			dataType: "json",
			success: function(data){
				$('#order_title_'+order_id).html(data.title);
				$('#order_desc_'+order_id).html(data.description);
			},
			error: function(){
				alert("Update fields can't be blank and must have at least 6 characters!!. Please check the fields");
			}
		});
		$('.edit_button_'+order_id).css("display","block");
		$('.form_number_'+order_id).css("display", "none");	
		$('.single_order_'+order_id).css("display", "block");	
	
	});


	$('.toggle_edit_form').on('click', function(){
		$(this).css("display","none");
		let order_id = $(this).attr("data-id");
		$('.form_number_'+order_id).css("display", "block");	
		$('.single_order_'+order_id).css("display", "none");
	});
});