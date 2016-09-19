import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';

@Component({
  selector: 'signup_next_step',
  templateUrl: 'dev/home/signup_next_step.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class SignupNextStepComponent implements OnInit {
Home(event) {
			event.preventDefault();
			this.router.navigate(['Home']);
			}
 	private data;
    constructor(private http:Http, private _router: Router,private _routeParams: RouteParams){}
 	registerUser2(user) {
	
  var ths=this;
  
  var phonepattern  = /^[a-zA-Z0-9\-_]{10,11}$/;
		
  var error='1';
  $("#registrationForm2 input:text").each(function()
			{
				if(this.value=='')
				{
					$(this).addClass("error");
					error++;
				}
				
				else if($(this).hasClass("phone_number") && !phonepattern.test(this.value))
				{
					$(this).addClass("error");
					error++;
				}
				else
				{
					$(this).removeClass("error");
					$('.error_text').hide();
				}
			});
	  if(error=='1'){
	  $("#save_contact").attr("disabled", "disabled");
	  $.ajax({
          url:'./api/users/save_contact',
          type: "POST",
          data: $("#registrationForm2").serialize(),
          beforeSend:function()
          {
            //$(".login_page .loading").fadeIn();
          },
          success: function(response)
          {
		   $("#save_contact").removeAttr("disabled");
		  var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
							ths._router.navigate(['/SignUpCongrats', { id: obj.id, name: obj.name,industry:obj.industry,image:obj.image }]);
						}
						else if(obj.status=="error")
						{
						return false;
						}
            
            }
  
        });
		}
		else{
		$('.error_text').show();
		}
  }
 	ngOnInit(){
	
	this.id=localStorage.getItem('user.id');
	this.username=decodeURIComponent(localStorage.getItem('user.name'));
	this.industry=decodeURIComponent(localStorage.getItem('user.industry'));
	var imgs=decodeURIComponent(localStorage.getItem('user.image');
	if(imgs != "undefined"){
	this.image = imgs;
	}else{this.image = 'small_no-image.png';}
	
	$("#registrationForm2 input").focus(function(){
	$(this).removeClass('error');
	$('.error_text').hide();
	});
	
	$(document).on('click','.back_botom', function ()
		{
		parent.history.back();
		return false;
	});
	
	$.ajax({
					url:"api/users/getuserdetail",
					type: "POST",
					data: ({user:localStorage.getItem('user.id')}),
					beforeSend:function()
					{},
					success: function(response)
					{
						var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
						$('#address1').val(obj.address1);
						$('#address2').val(obj.address2);
						$('#city').val(obj.city);
						$('#county').val(obj.county);
						$('#post_code').val(obj.post_code);
						$('#country').val(obj.country);
						$('#phone_number').val(obj.phone_number);
						}
						}
						
	
				})
	}
	

}
