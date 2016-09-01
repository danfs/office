import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

@Component({
  selector: 'home',
  templateUrl: 'dev/home/home.component.html',
   directives: [ROUTER_DIRECTIVES],
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string='sas';
  
   Map(event) {
    event.preventDefault();
    this.router.navigate(['Map']);
  }
  HowItWork(event) {
    event.preventDefault();
    this.router.navigate(['HowItWork']);
  } 

}
