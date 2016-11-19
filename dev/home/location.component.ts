import { Component, OnInit,NgZone } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';

@Component({
  selector: 'location',
  templateUrl: 'dev/home/location.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class LocationComponent implements OnInit {
constructor(private _router: Router,private _routeParams: RouteParams,private zone:NgZone) {}

  ngOnInit() {
  
  var locationname=this._routeParams.get('locationname');
  var locationid=this._routeParams.get('locationid');
  $.ajax({
					url:"api/users/getmarkerpicker",
					type: "POST",
					data: ({locationid:locationid}),
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
						$('#select_desk').removeClass('office_end');
						$('#select_desk').html('I want an office here!');
						}else{
						$('#select_desk').addClass('office_end');
						$('#select_desk').html('Sorry this office is full');
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
this._router.navigate(['Map']);
}
}