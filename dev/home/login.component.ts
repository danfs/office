import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'login',
  //templete:`ddddd`,
  templateUrl: 'dev/home/login.component.html',
})
export class LoginComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string='sas';
  
  

}
