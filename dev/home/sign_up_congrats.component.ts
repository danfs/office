import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';

declare var Auth0Lock;

@Component({
  selector: 'sign_up_congrats',
  templateUrl: 'dev/home/sign_up_congrats.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class SignUpCongratsComponent implements OnInit {

 private data;
 
 constructor(private http:Http, private _router: Router,private _routeParams: RouteParams) {}

Home(event) {
			event.preventDefault();
			this.router.navigate(['Home']);
			}
  view_lastinsert(event) {
		this._router.navigate(['Mapshare',{ id:event.currentTarget.id}]);
  } 
  ngOnInit() {
  
  this.id=decodeURIComponent(this._routeParams.get('id'));
	this.name=decodeURIComponent(this._routeParams.get('name'));
	this.industry=decodeURIComponent(this._routeParams.get('industry'));
	var imgs=decodeURIComponent(this._routeParams.get('image'));
	this.select_location=localStorage.getItem('select_location');
	
	this.loctionID=localStorage.getItem("loctionID");
	if(imgs!==''){
	this.image = imgs;
	}else{this.image = 'small_no-image.png';}
	var routin= this._router;
	$(document).on('click','#view_lastinsert', function ()
		{
			var user=$('#view_lastinsert').attr('rel');
			routin.navigate(['Mapshare',{ id:user}]);
	});
	$(document).on('click','.back_botom', function ()
		{
		parent.history.back();
		return false;
	});
	$.ajax({
					url:"api/users/getremainingdetails",
					type: "POST",
					data: ({location:localStorage.getItem('select_location')}),
					beforeSend:function()
					{},
					success: function(response)
					{
						var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
						var decoded = $("<div/>").html(obj.html).text();
						$('#status_report').html(decoded);
						
						}
						else if(obj.status=="fail")
						{
						var decoded = $("<div/>").html(obj.html).text();
						$('#status_report').html(decoded);
						}
					}
	
				});
	}

}
