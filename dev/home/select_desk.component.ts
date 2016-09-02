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
	var rout=this._router;
			var desk=$('#spinner').val();
			if(desk>0){
			
			var userId=localStorage.getItem("user.id");
  		if(userId!=null){
			var url='./api/users/direct_location/'+localStorage.getItem("user.id")+'/'+this._routeParams.get('locationid')+'/'+desk;
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
						
						rout.navigate(['/SignUpCongrats', { id: obj.user.id, name: obj.user.name,industry:obj.user.industry,image:obj.user.image }]);
						
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
			}else{
			this._router.navigate(['Signup',{ locationid:this._routeParams.get('locationid'),desk:desk}]);
			}
			}
			else{
			alert('please select desk');
			}
			}		

}