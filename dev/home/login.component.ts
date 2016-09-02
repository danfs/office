import {Component, OnInit} from 'angular2/core';
import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';

@Component({
  selector: 'login',
  templateUrl: 'dev/home/login.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class LoginComponent implements OnInit {
private data;
 
 constructor(private http:Http, private _router: Router,private _routeParams: RouteParams) {}
  Home(event) {
			event.preventDefault();
			this.router.navigate(['Home']);
			}                                                                                                                        loginUser() {
  var ths=this;
  var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  var error='1';
   $("#loginForm input:text").each(function()
			{
			if(this.value=='')
				{
					$(this).addClass("error");
					error++;
				}else{
					$(this).removeClass("error");
					$('.error_text').hide();
				}
			});
			if($('#password').val()==''){
			$('#password').addClass("error");
			 error++;
			}
  if(!pattern.test($('#email').val()))
        {
          $('#email').addClass("error");
		  error++;
		  
        }else{
		$('#email').removeClass("error");
		}
	  
	  if(error=='1'){
	  //$("#login_submit").attr("disabled", "disabled");
	  var locatIds=this._routeParams.get('locationid');
	  var desk=this._routeParams.get('locationid');
  		if(locatIds!=null){
		var url='./api/users/login_location/locatIds/desk';
		}else{
		var url='./api/users/login';
		}
	  
	  $.ajax({
          url:url,
          type: "POST",
          data: $("#loginForm").serialize(),
          beforeSend:function()
          {
            $(".thumbox3").css('opacity','0.5').append('<img src="src/img/loading.gif" border="0" class="loadi" style= "left: 48%;position: absolute;top: 25%;" alt="" title="" />')
          },
          success: function(response)
          {
		   $("#login_submit").removeAttr("disabled");
		  var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
						localStorage.setItem("user.id", obj.user.id);
						localStorage.setItem("user.name", obj.user.name);
						localStorage.setItem("user.industry", obj.user.industry);
						localStorage.setItem("user.image", obj.user.image);
						if(obj.act=="index"){
						ths._router.navigate(['/Home']);
						}else{
						ths._router.navigate(['/SignUpCongrats', { id: obj.user.id, name: obj.user.name,industry:obj.user.industry,image:obj.user.image }]);
						}
						}
						else if(obj.status=="error")
						{
						$('.error_text').html(obj.mssg).show();
						}
						 $(".thumbox3").css('opacity','1');
						 $('.loadi').remove();
            return false;
            }
  
        });
		}
  } 
  ngOnInit() {
  
  $('#loginForm input').focus(function(){
  $(this).removeClass("error");$('.error_text').hide();
  });
  }
			

}
