import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Injectable } from 'angular2/core';
import {Router,RouteParams,OnDeactivate,ComponentInstruction} from 'angular2/router';
import * as Rx from 'rxjs/Rx';
declare var google: any;

@Component({
  selector: 'map',
  templateUrl: 'dev/home/map.component.html',
  directives: [ROUTER_DIRECTIVES],
  host: {'class' : 'ng-animate mapContainer'}
})
export class MapComponent implements OnInit {
constructor(private _router: Router) {}

  ngOnInit() {
  //var angu_this=this;
  var markers = [];
  $.ajax({
					url:"api/users/tabmarker",
					type: "POST",
					beforeSend:function()
					{},
					success: function(response)
					{
						var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
						var decoded = $("<div/>").html(obj.html).text();
						$('#aftertabmarker').html(decoded);
						}
						else if(obj.status=="fail")
						{
						
						}
					}
	
				})
  
  
  setTimeout(function(){$('.map_cover_for_loading').fadeOut();
  
  
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    zoom: 13,
                    center: new google.maps.LatLng(26.8531, 75.7981), // New York
					disableDefaultUI: true, // a way to quickly hide all controls
					//mapTypeControl: true,
					//scaleControl: true,
					zoomControl: false ,
					zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.TOP_RIGHT, 
					},
					mapTypeId: google.maps.MapTypeId.ROADMAP
					styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"color":"#a1f7ff"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#a1f7ff"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#a1f7ff"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#a1f7ff"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#a1f7ff"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"invert_lightness":true}]},{"featureType":"poi.attraction","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#a1f7ff"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"invert_lightness":true}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#a1f7ff"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#a1f7ff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"lightness":"0"},{"saturation":"0"},{"invert_lightness":true},{"visibility":"simplified"},{"hue":"#00e9ff"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#a1f7ff"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.text","stylers":[{"color":"#a1f7ff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"invert_lightness":true}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"},{"invert_lightness":true}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map_load');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
				
				var zoomControlDiv = document.createElement('div');
  				var zoomControl = new ZoomControl(zoomControlDiv, map);

  				zoomControlDiv.index = 1;
  				map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);

                // Let's also add a marker while we're at it
               // var marker = new google.maps.Marker({
                  //  position: new google.maps.LatLng(40.6700, -73.9400),
                   // map: map,
                    //title: 'Snazzy!'
               // });
				var marker ='';
				$.ajax({
					url:"api/users/getmarker",
					type: "POST",
					beforeSend:function()
					{},
					success: function(response)
					{
						var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
							$(obj.vals).each(function (index) {
							var title     = $(this)['0'].name;
							var id     = $(this)['0'].id;
							 var point     = new google.maps.LatLng(parseFloat($(this)['0'].lat),parseFloat($(this)['0'].long));
                  			//create_marker(point, false, false, false, false, false, "http://PATH-TO-YOUR-WEBSITE-ICON/icons/pin_blue.png");
							create_marker(point, title, false, false, false, false,false,id);
							 });
						}
						else if(obj.status=="fail")
						{
						
						}
					}
	
				});
				
				
				function ZoomControl(controlDiv, map) {
  
  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '0px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.backgroundColor = 'white';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderColor = 'gray';
  controlWrapper.style.borderWidth = '0px';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '40px'; 
  controlWrapper.style.height = '80px';
  controlDiv.appendChild(controlWrapper);
  
  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '40px'; 
  zoomInButton.style.height = '40px';
  /* Change this to be the .png image you want to use */
  zoomInButton.style.background = 'url("src/img/p_map.png") no-repeat center / auto 100%';
  controlWrapper.appendChild(zoomInButton);
    
  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '40px'; 
  zoomOutButton.style.height = '40px';
  /* Change this to be the .png image you want to use */
  zoomOutButton.style.background = 'url("src/img/m_map.png") no-repeat center / auto 100%';
  controlWrapper.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });
    
  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
    
}
				
						//############### Create Marker Function ##############
function create_marker(MapPos, MapTitle, MapDesc,  InfoOpenDefault, DragAble, Removable, iconPath,markerId)
{               
    //new marker
    var marker = new google.maps.Marker({
        position: MapPos,
        map: map,
        draggable:DragAble,
        //animation: google.maps.Animation.DROP,
        title:MapTitle,
        icon: 'src/img/whhite-marker.png',
		id: markerId
    });
	
	
    
    //add click listner to save marker button        
    google.maps.event.addListener(marker, 'click', function() {
	//alert(marker.id);
	$('#tabmarker').hide();
	$('#aftertabmarker').show();
	$('#aftertabmarker').attr('rel',marker.id);
	$('.hidden_marler_value').hide();
	$('#marker_'+marker.id).show();
	$('.selected_marker').attr('id',marker.id);
	//
	for (var i=0; i<markers.length; i++) {
      markers[i].setIcon('src/img/whhite-marker.png');
     }
	marker.setIcon("src/img/marker.png");
           // infowindow.open(map,marker); // click on marker opens info window 
    });
	
	 markers.push(marker);
      
    

				
            }
				
		},500);	
			
	
			
		
		
			
$(document).on('click','#aftertabmarker', function ()
		{
		$('.selected_marker').trigger('click');
		});	
		
		
		$(document).on('click','.thumbox5a_in ul li', function ()
		{
		$('.thumbox5').addClass('thumbox5aaa');
		$('#myCarousel1').slideDown();
		
		});	
		
$(document).on('click','#myCarousel,.amnities,.location11', function ()
		{
		$('#myCarousel1').slideUp();
		$('.thumbox5').removeClass('thumbox5aaa');
		});
		
		$(document).on('click','#selects_desk', function ()
		{
			//var remain=$('#select_desk').attr('rel');
//			var locationID=$('.selected_marker').attr('id');
//			alert(remain);alert(locationID); return false;
//			angu_this._router.navigate(['SelectDesk',{ locationid:locationID,remain:remain}]);
			//alert('sfdsfd');
			//$('#select_desk_hidden').trigger('click');
			});	
			
				
}

select_location(event) {
			event.preventDefault();
			//alert(event.currentTarget.id);
			//this._router.navigate(['MapPicker', { id: event.currentTarget.id}]);
			var locationId=event.currentTarget.id;
			$.ajax({
					url:"api/users/getmarkerpicker",
					type: "POST",
					data: ({locationid:locationId}),
					beforeSend:function()
					{},
					success: function(response)
					{
						var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
						var decoded = $("<div/>").html(obj.html).text();
						$('#ajax_responce').html(decoded);
						//
						if(parseInt(obj.remain)>0){
						$('#select_desk').attr('rel',parseInt(obj.remain));
						$('#select_desk').attr('rel2',parseInt(obj.book_btn));
						$('.selected_marker').attr('rel',obj.location_name);
						var deskremain=parseInt(obj.remain);
						}
						
						if(obj.book_btn){
						$('#select_desk').prop('disabled', false);
						}else{
						//$('#select_desk').prop('disabled', true);
						}
						}
						else if(obj.status=="fail")
						{
						//$('#select_desk').prop('disabled', true);
						}
					}
	
				});
				
				$('.ajax_responce11').addClass('show11');
				$('.top_right123').show();
			}
			
			
selectdesk() {
			var remain=$('#select_desk').attr('rel');
			var locationID=$('.selected_marker').attr('id');
			var location_name=$('.selected_marker').attr('rel');
			if($('#select_desk').attr('rel2')){
			this._router.navigate(['SelectDesk',{ locationid:locationID,remain:remain,location_name:location_name}]);
			}else{
			if(typeof(remain) === "undefined" || remain < 1){
			alert('fully booked');
			}else{alert('Booking date over');}
			}
			}
backtomap(){
				$('.ajax_responce11').removeClass('show11');
				$('.top_right123').hide();

}
}