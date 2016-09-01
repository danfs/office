import {Component} from 'angular2/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './home/header.component';
import {HowItWorkComponent} from './home/how_it_work.component';
import {HowItWorkComponent1} from './home/how_it_work1.component';
import {HowItWorkComponent2} from './home/how_it_work2.component';
import {HowItWorkComponent3} from './home/how_it_work3.component';
import {MapComponent} from './home/map.component';  
import {LoginComponent} from './home/login.component';
import {SignupComponent} from './home/signup.component';
import {SignupNextStepComponent} from './home/signup_next_step.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {enableProdMode} from 'angular2/core';
enableProdMode();


@Component({
    selector: 'my-app',
    template: `
	<div class="overlay" (click)="menu_close($event)"></div>
<div class="mob_icon" id="menu_click" (click)="menu_click($event)">
    <div class="icon__bar"></div>
    <div class="icon__bar"></div>
    <div class="icon__bar"></div>
</div>
<div class="mob_menu" (click)="menu_close($event)">
    <div class="thumbox2">
        <div class="top">
            <div class="top_left"><a href="index.html">THE WORK PLACE</a>
            </div>
            <div class="top_right"><a href="javascript:;" class="pull-right close11" (click)="menu_close($event)"><i class="fa fa-times" aria-hidden="true"></i></a>
            </div>
            <div class="clearfix">&nbsp;</div>
        </div>
        <div class="middle">
            <ul class="mobile_menu">
                <li><a [routerLink]="['HowItWork']" routerLinkActive="active">How it works</a></li>
                <li><a href="map.html" routerLinkActive="active">Locations</a></li>
                <li><a href="office_design.html" routerLinkActive="active">Office Design</a></li>
                <li><a href="faq.html" routerLinkActive="active">FAQ</a></li>
                <li><a href="about_us.html" routerLinkActive="active">About Us</a></li>
                <li><a href="contact_us.html" routerLinkActive="active">Contact Us</a></li>
            </ul>
            <div class="media_icons">
                <a href="#"><span class="fa fa-facebook"></span></a>
                <a href="#"><span class="fa fa-twitter"></span></a>
                <a href="#"><span class="fa fa-instagram"></span></a>
                <a href="#"><span class="fa fa-linkedin"></span></a>
                <a href="#"><span class="fa fa-envelope"></span></a>
                <a href="#"><span class="fa fa-whatsapp"></span></a>
            </div>

        </div>



    </div>
</div>
	<router-outlet></router-outlet>
	`,
	directives: [HomeComponent,HeaderComponent,HowItWorkComponent,HowItWorkComponent1,HowItWorkComponent2,HowItWorkComponent3,MapComponent,ROUTER_DIRECTIVES,LoginComponent,SignupComponent,SignupNextStepComponent],
})


@RouteConfig([{ path: '/',name:'Home', component:  HomeComponent },
   { path: '/how_it_work', name:'HowItWork',  component: HowItWorkComponent },
   { path: '/how_it_work1',name:'HowItWork1',  component: HowItWorkComponent1 },
   { path: '/how_it_work2',name:'HowItWork2',  component: HowItWorkComponent2 },
   { path: '/how_it_work3',name:'HowItWork3',  component: HowItWorkComponent3 },
   { path: '/map',name:'Map',  component: MapComponent },
   { path: '/login',name:'Login',  component: LoginComponent },
   { path: '/signup',name:'Signup',  component: SignupComponent },
   { path: '/signup_next_step',name:'SignupNextStep',  component: SignupNextStepComponent },
   
   
   
   
  ])
export class AppComponent {


  menu_click(event) {
    
	  $('.mob_menu').animate({
		right:'0'
	  }, 500, function() {
		  $('.overlay').css("display", "block");
		  $( "body" ).addClass( "modal-open1" );
		// Animation complete.
	  });

  }
  menu_close(event) {
		$('.mob_menu').animate({
		right:'-100%'
	  }, 200, function() {
		  $('.overlay').css("display", "none");
		   $( "body" ).removeClass( "modal-open1" );
		// Animation complete.
	  });	  
	}
}
