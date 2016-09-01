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
  registerUser(user) {} 
  ngOnInit() {
  this.id=decodeURIComponent(this._routeParams.get('id'));
	this.name=decodeURIComponent(this._routeParams.get('name'));
	this.industry=decodeURIComponent(this._routeParams.get('industry'));
	var imgs=decodeURIComponent(this._routeParams.get('image'));
	if(imgs!==''){
	this.image = imgs;
	}else{this.image = 'small_no-image.png';}
	var routin= this._router;
	$(document).on('click','#view_lastinsert', function ()
		{
			var user=$('#view_lastinsert').attr('rel');
			routin.navigate(['MapShare',{ id:user}]);
	});
	$(document).on('click','.back_botom', function ()
		{
		parent.history.back();
		return false;
	});
	}

}
