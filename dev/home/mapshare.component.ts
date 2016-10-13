import { Component, OnInit,NgZone } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';


@Component({
  selector: 'mapshare',
  templateUrl: 'dev/home/mapshare.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class MapshareComponent implements OnInit {
constructor(private _router: Router,private _routeParams: RouteParams,private zone:NgZone) {}	
  ngOnInit() {
  var ths=this._router
  var userId=this._routeParams.get('user');
  var location=this._routeParams.get('location');
  $.ajax({
					url:"api/users/getuser",
					type: "POST",
					data: ({user:userId,location_name:location}),
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
						var deskremain=parseInt(obj.remain);
						}
						}
						else if(obj.status=="fail")
						{
						
						}
					}
	
				})
				
	

$(document).on('click','.back_botom', function ()
		{
		parent.history.back();
		return false;
	});
	function dfdf(){}	
  }
			
Home(event) {
			event.preventDefault();
			this.router.navigate(['Home']);
			}
}