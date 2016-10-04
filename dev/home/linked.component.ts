import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';

@Component({
  selector : 'linked',
  template : `hi test`,
  directives: [ROUTER_DIRECTIVES],
})

export class LinkedComponent implements OnInit{

constructor(private http:Http, private _router: Router,private _routeParams: RouteParams){}

ngOnInit(){
						localStorage.setItem("user.id", this._routeParams.get('id'));
						localStorage.setItem("user.name", this._routeParams.get('name'));
						localStorage.setItem("user.industry", this._routeParams.get('industry'));
						localStorage.setItem("user.image", this._routeParams.get('image'))
						//localStorage.setItem("nextloc", obj.nextloc);
						$("#auth_li").html('<a routerlinkactive="active" id="logout">Logout</a>');
						this._router.navigate(['/SignupNextStep']);

}

}