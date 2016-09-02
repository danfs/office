function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
 //if its not mobile then start script otherwise turn it off (just place the script    under this comment
 $( document ).ready(function() {
	new WOW().init();
})
}
$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});


//********************for_mobile_menu_page***************//
	/*$('#menu_click').click(function() {
	  $('.mob_menu').animate({
		right:'0'
	  }, 500, function() {
		  $('.overlay').css("display", "block");
		  $( "body" ).addClass( "modal-open1" );
		// Animation complete.
	  });
});
	$('.mob_menu .close11,.overlay').click(function() {
		$('.mob_menu').animate({
		right:'-100%'
	  }, 200, function() {
		  $('.overlay').css("display", "none");
		   $( "body" ).removeClass( "modal-open1" );
		// Animation complete.
	  });	  
	});	
$('#linkedin_login').click(function() {
	alert('ssdsd');
});
*/