import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
declare var location: any;
@Component({
  selector: 'select_desk',
  templateUrl: 'dev/home/select_desk.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class SelectDeskComponent implements OnInit {
constructor(private _router: Router,private _routeParams: RouteParams) {}
private deskremain;
Home(event) {
			event.preventDefault();
			this.router.navigate(['Home']);
			}
			
  ngOnInit() {
  
  
  var remain=this._routeParams.get('remain');
		$( "#spinner" ).spinner({
      min: 1,
      max: remain,
      step: 1,
      start: 1,
      numberFormat: "C"
    });
	$(document).on('click','.back_botom', function ()
		{
		parent.history.back();
		return false;
	});	
		
  }
	signupbtn() {
			var desk=$('#spinner').val();
			if(desk>0){
			this._router.navigate(['Signup',{ locationid:this._routeParams.get('locationid'),desk:desk}]);
			}
			else{
			alert('please select desk');
			}
			}		

}