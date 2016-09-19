import {Component, OnInit} from 'angular2/core';
import {trigger, transition, animate, style, state } from '@angular/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { RouteConfig, RouterLink, RouterOutlet,OnDeactivate,ComponentInstruction} from 'angular2/router';
import * as Rx from 'rxjs/Rx';
@Component({
  selector: 'how_it_work',
  templateUrl: 'dev/home/how_it_work.component.html',
  directives: [ROUTER_DIRECTIVES],
  
  animations: [
  trigger('routeAnimation', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
]

})
export class HowItWorkComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string='sas';
  

Home(event) {
    event.preventDefault();
    this.router.navigate(['Home']);
  }
 
HowItWork1(event) {
    event.preventDefault();
    this.router.navigate(['HowItWork1']);
  }
Map(event) {
    event.preventDefault();
    this.router.navigate(['Map']);
  }
}
