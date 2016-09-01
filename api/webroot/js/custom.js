
$( document ).ready(function() {
$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});


//********************for_mobile_menu_page***************//
	$('header #menu_click').click(function() {
	  $('.mob_menu').animate({
		right:'0'
	  }, 500, function() {
		  $('.overlay').css("display", "block");
		  $( "body" ).addClass( "modal-open1" );
		// Animation complete.
	  });
});
	$('.mob_menu .close_icon,.overlay').click(function() {
		$('.mob_menu').animate({
		right:'-500'
	  }, 200, function() {
		  $('.overlay').css("display", "none");
		   $( "body" ).removeClass( "modal-open1" );
		// Animation complete.
	  });	  
	});


	
$( "#starting_place" ).bind( "keydown", function( event ) {
				$('#frm').val('0');$('#frm').attr('rel','');
				if ( event.keyCode === $.ui.keyCode.TAB &&
						$( this ).data( "autocomplete" ).menu.active ) {
					event.preventDefault();
				}
			})
			.autocomplete({
				
				minLength: 1,
					source: function( request, response ) {
					//autocompleteCompleteSearch	
					if($('#desti').val()=='1' && $('#desti').attr('rel')=='postcode'){
						$.getJSON( ajax_url+"users/autocomplete_airport_search", {
						term: extractLast( request.term ),
						srch: '1'
						
					}, response );
						}
					else{
					$.getJSON( ajax_url+"users/autocomplete_complete_search", {
						term: extractLast( request.term ),
						srch: '1'
						
					}, response );
					}
				},
				search: function() {
					// custom minLength
					var term = extractLast( this.value );
					
				},
				focus: function() {
					// prevent value inserted on focus
					return false;
				},
				select: function( event, ui ) {
					$(this).val(ui.item.value);
					$('#frm').val('1');
					$('#frm').attr('rel',ui.item.type);
					$('#starting_place').parent().find('.error_text').hide();
					return false;
				}
			});
$( "#destination_place" ).bind( "keydown", function( event ) {
				$('#desti').val('0');$('#desti').attr('rel','');
				if ( event.keyCode === $.ui.keyCode.TAB &&
						$( this ).data( "autocomplete" ).menu.active ) {
					event.preventDefault();
				}
			})
			.autocomplete({
				
				minLength: 1,
					source: function( request, response ) {
					if($('#frm').val()=='1' && $('#frm').attr('rel')=='postcode'){
						$.getJSON( ajax_url+"users/autocomplete_airport_search", {
						term: extractLast( request.term ),
						srch: '1'
						
					}, response );
						}
					else{
					$.getJSON( ajax_url+"users/autocomplete_complete_search", {
						term: extractLast( request.term ),
						srch: '1'
						
					}, response );
					}
				},
				search: function() {
					// custom minLength
					var term = extractLast( this.value );
					
				},
				focus: function() {
					// prevent value inserted on focus
					return false;
				},
				select: function( event, ui ) {
					//if($('#destination_place').val()!=$('#starting_place').val()){
					$(this).val(ui.item.value);
					$('#desti').val('1');
					$('#desti').attr('rel',ui.item.type);
					$('#destination_place').parent().find('.error_text').hide();
					//}else{$(this).val('');}
					return false;
				}
			});
	$('#trip_date').datepicker({
		minDate: 0,
		});	
		
	$('#calculate_frm').submit(function(){
		var error = 0;
			$("#calculate_frm .validation").each(function()
			{
				if(this.value=='')
				{
					$(this).addClass("error");
					$(this).parent().find('.error_text').text('This field is required.').show();
					error++;
				}else{
					$(this).removeClass("error");
					$(this).parent().find('.error_text').hide();
					}
			});
			if($('#frm').val()=='0' && $('#starting_place').val()!=''){
				$('#starting_place').parent().find('.error_text').text('Please fill valid Value.').show();
				error++;
				}
			if($('#desti').val()=='0' && $('#destination_place').val()!=''){
				$('#destination_place').parent().find('.error_text').text('Please fill valid Value.').show();
				error++;
				}
			
			if(($('#desti').val()=='1' && $('#desti').attr('rel')!='Airport') && ($('#frm').val()=='1' &&  $('#frm').attr('rel')!='Airport')){
				$('#starting_place').parent().find('.error_text').text('Please fill atleast One Airport.').show();
				error++;
			}
			if($('#starting_place').val()==$('#destination_place').val()){
				$('#destination_place').parent().find('.error_text').text('Please select Diffrent value both place are same.').show();
				error++;
				}
			if(error=='0'){
				var FormData= $("#calculate_frm").serialize();
				var url=$("#calculate_frm").attr('action');
				$.ajax({
					url:url,
					type: "POST",
					data: FormData,
					beforeSend:function()
					{
						$('.home_ser').css('opacity','0.5').append('<img src="'+ajax_url+'img/loader.gif" border="0" class="loadi" style= "left: 45%;position: absolute;top: 30%;" alt="" title="" />');
					},
					success: function(response)
					{
						$('.home_ser').css('opacity','1');
						$('.loadi').remove();
						var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
							window.location.href = ajax_url+"users/price_list/?"+obj.redirect_url;
						}
						else
						{
							$('#destination_place').parent().find('.error_text').text(obj.error).show();
							}
					}
	
				})
			
				
				}
		return false;
		});
	
	
	$('#payment_process').click(function(){
		var error = 0;
		var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
			$("#journeydetail input").each(function()
			{
				if(this.value=='')
				{
					$(this).addClass("error");
					error++;
				}else{
					$(this).removeClass("error");
					}
			});
			if($('#email').val()!='' && !pattern.test($("#email").val())){
				$('#email').addClass("error");
				error++;
				}
			if($('#phone').val() !='' && !valid_phone($('#phone').val())){
				$('#phone').addClass("error");
				error++;
				}
			if($("#accept_term:checked").length=='0'){
				alert('please accept Terms and Conditions')
    			error++;
				}
			if(error=='0'){
				$('#journeydetail').submit();
				}
		});
		
		$('#main_check_sale').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbk').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbk').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    	});
		$(document).on('click', '.cat_select', function(){
			$('#table_val').val($(this).attr('tble'));
			$('#prz_val').val($(this).attr('prz'));
			$('#select_car_form').submit();
			});
			
			//
			$('input').focus(function(){
				$(this).removeClass('error');
				})
			$('input').blur(function(){
			$(this).removeClass('error');
			})
			$(document).on('click', '#payment_proceed', function(){
			//$('#pre_payment_form').submit(function(){
		var error = 0;
			$("#pre_payment_form .vld").each(function()
			{
				if(this.value=='')
				{
					$(this).addClass("error");
					$(this).parent().find('.error_text').text('This field is required.').show();
					error++;
				}else{
					$(this).removeClass("error");
					$(this).parent().find('.error_text').hide();
					}
			});
			if($('#frm').val()=='0' && $('#starting_place').val()!=''){
				$('#starting_place').parent().find('.error_text').text('Please fill valid Value.').show();
				error++;
				}
			if($('#desti').val()=='0' && $('#destination_place').val()!=''){
				$('#destination_place').parent().find('.error_text').text('Please fill valid Value.').show();
				error++;
				}
			if(error=='0'){
				
			$('#pre_payment_form').submit();
				
				}
		return false;
		});
			
});
function split( val ) {
			return val.split( /,\s*/ );
		}
		function extractLast( term ) {
			return split( term ).pop();
		}
function valid_phone(candidate) 
	{
		var pattern  = /^[a-zA-Z0-9\-_]{10,11}$/;
		if (pattern.test(candidate))
		{
			return true;
		}
		else
		{
			return false;
		}
	}