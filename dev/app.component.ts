import {Component, OnInit} from 'angular2/core';


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
import {MapPickerComponent} from './home/map_picker.component';
import {SelectDeskComponent} from './home/select_desk.component';
import {SignUpCongratsComponent} from './home/sign_up_congrats.component';
import {MapshareComponent} from './home/mapshare.component';
import {LinkedComponent} from './home/linked.component';

import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {enableProdMode} from 'angular2/core';
import {Location} from 'angular2/router';
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
<div class="mob_menu">
    <div class="thumbox2">
        <div class="top">
            <div class="top_left"><a (click)="go_home($event)">THE WORK PLACE</a>
            </div>
            <div class="top_right"><a href="javascript:;" class="pull-right close11" (click)="menu_close($event)"><i class="fa fa-times" aria-hidden="true"></i></a>
            </div>
			
            <div class="clearfix">&nbsp;</div>
			<a (click)="header_back($contact_us)" id="headerback" style="display:none;"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
        </div>
        <div class="middle cls"  id="main_head">
            <ul class="mobile_menu">
                <li><a (click)="how_to_work($event)"  routerLinkActive="active">How it works</a></li>
                <li><a (click)="map_page($event)"  routerLinkActive="active">Locations</a></li>
                <li><a  (click)="officeopen($event)" routerLinkActive="active">Office Design</a></li>
                <li><a (click)="faqopen($event)" routerLinkActive="active">FAQ</a></li>
                <li><a  (click)="about_us($event)" routerLinkActive="active">About Us</a></li>
                <li><a  (click)="contact_us($event)" routerLinkActive="active">Contact Us</a></li>
				<li *ngIf="loginId==null" id='auth_li'><a href="javascript:;" id="login_action">Login</a></li>
				<li *ngIf="loginId!=null" id='auth_li'><a href="javascript:;" id="logout">Logout</a></li>
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


<div class="middle1 cls" style="display:none;" id="office_design_page">
<h2>Office Design</h2>
<p>Our office design has a contemporary style with a light and open feel to help foster a collaborative environment, but enough privacy to allow you to get on with the all important.</p>

<img src="src/img/office_building.png" class="img-responsive"/>
</div>



<div class="middle cls" id="faq_page" style="display:none;"><h2>FAQ:</h2><p class="fa_que"><strong>How does it work?</strong><br>See: how does it work</p><p class="fa_que"><strong>What do you get in a Work Place office?</strong><br>You get the essentials, Internet, desks, chairs, desklamps and lockable filing cabnets. Obviously your allowed to bring your own furniture too.</p><p class="fa_que"><strong>Are bills includes?</strong><br>Yes, with in reason!</p><p class="fa_que"><strong>How much is it to reserve an office?</strong><br>To show your interested we ask for a small deposit of resivation fee of £10 per desk. This is subtracted from you first months membership to the space once it becomes avalible.</p> <p class="fa_que"><strong>Can I see the office space first?</strong><br>We'll post images of the proposed office space online, but your work space is built to spec.</p><p class="fa_que"><strong>Am I obliged to take the space once I sign up? </strong><br>No, but we'd be sorry to see you leave.You can cancel it at anytime. If you no longer require the space please send us a message to let us know.</p><p class="fa_que"><strong>What's the time scale in getting a space?</strong><br>We estimate it will be 2 months before the space becomes avalible once the location has sucessfully reached the occupancy target. Will of course keep you informed on progress the whole time. The inital office location is proposed for 30 days, if your chosen location successfully reaches its target we will email you confirmation. We then go about nogotiate a lease with the landloard on your behalf; we allow a further 30 days. Once we have an agreement the fun of creating your office space begins.</p> <p class="fa_que"><strong>What happens if you can't get the lease for the space?</strong><br>We try to match your requirements as best we can in another space. If this dosn't meet your requirments we will refund your resivation payment. </p><p class="fa_que"><strong>What happens if I want in a space that is full?</strong><br>We over subscribe the office spaces allowing for drop outs, so if the space is at 100% occupancy you will added to a waiting list and contacted in due course. If there is enough demand for the location we will try to find more suitable space.</p><p class="fa_que"><strong>How do you calcaulate the price per desk?</strong><br>We take all the cost associated with renting out the whole space and devide it by how many desk we can fit in.. simple :)</p></div>


<div class="middle1 cls" id="contact_us_page" style="display:none;">
<form #contactForm="ngForm" (ngSubmit)="contactUser()" id="contactForm">
<label>Contact Us:</label>
<input type="text" id="cotact_email" placeholder="your@email.com" class="inn1">
<label>Your message:</label>
<textarea class="text_a1" id="cotact_mssg"></textarea>
<button type="submit" class="sub1" value="Login">Send</button>
</form>


</div>


<div class="middle cls" style="display:none;" id="aboutus_page"><h2>About us:</h2><div class="about_item"><div class="image"><img src="src/img/4A812D54-71CF-4583-99F6-691756C963F8@3x.png"></div><div class="clearfix"></div><h3>DAN FOSTER-SMITH</h3><p>Originally a graphic designer, Dan has background in tech and has worked with starups, early stage companies and buissness incubators. He make sure the website is a smooth experiance.</p><div class="clearfix"></div></div><div class="clearfix"></div><div class="about_item"><div class="image"><img src="src/img/A833FC18-0E6F-4744-9DC2-6B325E841287@3x.png"/></div><div class="clearfix"></div><h3>CARL TURNER</h3><p>A furniture designer by trade, Carl has designed and managed the fit out of high end offices in London. He makes sure you get the most out of your space and it has a great finish.</p><div class="clearfix"></div></div><div class="clearfix"></div><div class="about_item"><div class="image"><img src="src/img/442138F2-7961-4C80-868E-A857450FE559@3x.png" /></div><div class="clearfix"></div><h3>CHARLOTTE PENNINGTON</h3><p>With a background in finance and compliance and as a financial crime analyist. Charlotte keeps us inline and heads up buisness development.</p><div class="clearfix"></div></div><div class="clearfix"></div><div class="about_item"><div class="image"><img src="src/img/69658EE8-BA02-4430-9D5A-C05337D11FA3@3x.png" /></div><div class="clearfix"></div><h3>WILLSON</h3><p>...</p><div class="clearfix"></div></div><div class="clearfix"></div></div>

   </div>
</div>
	<router-outlet ></router-outlet>
	`,
	directives: [HomeComponent,HeaderComponent,HowItWorkComponent,HowItWorkComponent1,HowItWorkComponent2,HowItWorkComponent3,MapComponent,ROUTER_DIRECTIVES,LoginComponent,SignupComponent,SignupNextStepComponent,MapPickerComponent,SelectDeskComponent,SignUpCongratsComponent,MapshareComponent,LinkedComponent],
})


@RouteConfig([
{ path: '/',name:'Home', component:  HomeComponent },
   { path: '/how_it_work', name:'HowItWork',  component: HowItWorkComponent },
   { path: '/how_it_work1',name:'HowItWork1',  component: HowItWorkComponent1 },
   { path: '/how_it_work2',name:'HowItWork2',  component: HowItWorkComponent2 },
   { path: '/how_it_work3',name:'HowItWork3',  component: HowItWorkComponent3 },
   { path: '/map',name:'Map',  component: MapComponent },
   { path: '/login',name:'Login',  component: LoginComponent },
   { path: '/signup',name:'Signup',  component: SignupComponent },
   { path: '/signup_next_step',name:'SignupNextStep',  component: SignupNextStepComponent },
   { path: '/map_picker',name:'MapPicker',  component: MapPickerComponent },
   { path: '/select_desk',name:'SelectDesk',  component: SelectDeskComponent },
   { path: '/sign_up_congrats',name:'SignUpCongrats',  component: SignUpCongratsComponent },
   { path: '/mapshare',name:'Mapshare',  component: MapshareComponent },
   { path: '/linked',name:'Linked',  component: LinkedComponent },
   
   
  ])
  
  
export class AppComponent implements OnInit {

constructor(private _router: Router,private _location: Location){}
loginId: string = localStorage.getItem("user.id");



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
	  }, 500, function() {
			
			$( "body" ).removeClass( "modal-open1" );
			$("#headerback").hide();
			$(".cls").hide("slide", { direction: "left" }, 1000);
			$("#main_head").show();
			$('.overlay').css("display", "none");
	  });	  
	}
	
	officeopen(event){
	event.preventDefault();
	$("#headerback").show();
	$(".cls").hide();
	//$("#office_design_page").show("slide", { direction: "right" }, 1000);
	$("#office_design_page").show();
	}
	
	faqopen(event){
	event.preventDefault();
	$("#headerback").show();
	$(".cls").hide();
	//$("#faq_page").show("slide", { direction: "right" }, 1000);
	$("#faq_page").show();
	}
	
	about_us(event){
	event.preventDefault();
	$("#headerback").show();
	$(".cls").hide();
	//$("#aboutus_page").show("slide", { direction: "right" }, 1000);
	$("#aboutus_page").show();
	}
	
	contact_us(event){
	event.preventDefault();
	$("#headerback").show();
	$(".cls").hide();
	//$("#contact_us_page").show("slide", { direction: "right" }, 1000);
	$("#contact_us_page").show();
	}
	
	header_back(event){
	$("#headerback").hide();
	$(".cls").hide();
	$("#main_head").show("slide", { direction: "right" }, 500);
	}
	how_to_work(){
	var ths=this._router;
	$('.mob_menu').animate({
		right:'-100%'
	  }, 200, function() {
			$('.overlay').css("display", "none");
			$( "body" ).removeClass( "modal-open1" );
			$("#headerback").hide();
			$(".cls").hide("slide", { direction: "left" }, 1000);
			$("#main_head").show();
			ths.navigate(['/HowItWork']);
			
	  });	  
	} 
	map_page(){
	var ths=this._router;
	$('.mob_menu').animate({
		right:'-100%'
	  }, 200, function() {
			$('.overlay').css("display", "none");
			$( "body" ).removeClass( "modal-open1" );
			$("#headerback").hide();
			$(".cls").hide("slide", { direction: "left" }, 1000);
			$("#main_head").show();
			ths.navigate(['/Map']);
			
	  });	  
	}
	go_home(){
	var ths=this._router;
	$('.mob_menu').animate({
		right:'-100%'
	  }, 200, function() {
			$('.overlay').css("display", "none");
			$( "body" ).removeClass( "modal-open1" );
			$("#headerback").hide();
			$(".cls").hide("slide", { direction: "left" }, 1000);
			$("#main_head").show();
			ths.navigate(['/Home']);
			
	  });	  
	}
	
	contactUser() {
	
	// cotact_email cotact_mssg
  var ths=this;
  var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  var error='1';
 
 			if($('#cotact_email').val()==''){
			$('#cotact_email').addClass("error");
			 error++;
			}
			if($('#cotact_mssg').val()==''){
			$('#cotact_mssg').addClass("error");
			 error++;
			}
  			if($('#cotact_email').val()!='' && !pattern.test($('#cotact_email').val()))
        	{
          	$('#cotact_email').addClass("error");
		  	error++;
		  
        	}else{
			$('#cotact_email').removeClass("error");
		}
	  
	  if(error=='1'){
	  $('#cotact_email').val('');
	  $('#cotact_mssg').val('');
	  alert('message sucessfully send please wait for reply');
	  }
  }
  
   backClicked() {
        this._location.back();
    }¢
	//==========//
	
	ngOnInit() {
	var ruot=this._router
	
	$('#cotact_email').focus(function(){$('#cotact_email').removeClass("error");});
	$('#cotact_mssg').focus(function(){$('#cotact_mssg').removeClass("error");});
	
	$(document).on('click','#login_action', function (){
		$('.mob_menu').animate({
		right:'-100%'
	  }, 200, function() {
			$('.overlay').css("display", "none");
			$( "body" ).removeClass( "modal-open1" );
			$("#headerback").hide();
			$(".cls").hide("slide", { direction: "left" }, 1000);
			$("#main_head").show();
			ruot.navigate(['/Login']);
			
	  });
	});
	
	
	
	$(document).on('click','#logout', function (){
    localStorage.removeItem("user.id");
	localStorage.removeItem("user.name");
	localStorage.removeItem("user.industry");
	localStorage.removeItem("user.image");
	$('.mob_menu').animate({
		right:'-100%'
	  }, 200, function() {
			$('.overlay').css("display", "none");
			$( "body" ).removeClass( "modal-open1" );
			$("#headerback").hide();
			$(".cls").hide("slide", { direction: "left" }, 1000);
			$("#main_head").show();
			$("#auth_li").html('<a routerlinkactive="active" id="login_action">Login</a>');
			ruot.navigate(['/Login']);
			
	  });
	 	
	}
	} 
}