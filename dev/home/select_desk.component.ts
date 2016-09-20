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
remain = [];
constructor(private _router: Router,private _routeParams: RouteParams) {
for (var i = 0; i < this._routeParams.get('remain'); i++) {
      this.remain[i]=i+1;
    }
	}
private deskremain;

Home(event) {
			event.preventDefault();
			this.router.navigate(['Home']);
			}
			
  ngOnInit() {
  var num='';
  var remains_rout=parseInt(this._routeParams.get('remain'));
  var last_num=this._routeParams.get('remain');
  var second_last=last_num-1;
  for (var i = 0; i <= this._routeParams.get('remain'); i++) {
  var n; i == 0 ? n = second_last : (i == 1 ? n = last_num : n = i-2);
  if(n=='0'){
  num=num+'<span id="span_'+0+'" class="selectnum ht_desk selected_desk">Hot Desk *</span>';
  }else{
      num=num+'<span id="span_'+n+'" class="selectnum">'+n+'</span>';
	  }
    }
  $('#rotator').html(num);

	$(document).on('click','.back_botom', function ()
		{
		parent.history.back();
		return false;
	});
var last_num=this._routeParams.get('remain'),			
var gate = $(window);
var cog = $('#rotator');
var digit = cog.find('span');
var slot = digit.eq(0).height();
var base = 1.5*slot;
var output = $('#result');
var up='';

cog.fadeTo(0,0);


	setTimeout(interAction, 50);


function interAction() {

	output.text(0.5);

	cog.scrollTop(base).fadeTo(0,1).mousewheel(function(turn, delta) {
		if (isBusy()) return false;

		delta < 0 ? up = true : up = false;

		newNumber();

		return false;
	});

	digit.on('touchstart', function(e) {

		var touch = e.originalEvent.touches,
		begin = touch[0].pageY, swipe;
		alert();

		digit.on('touchmove', function(e) {

			var contact = e.originalEvent.touches,
			end = contact[0].pageY,
			distance = end-begin;

			if (isBusy()) return;

			if (Math.abs(distance) > 30) {
			swipe = true;
			distance > 30 ? up = true : up = false;
			}
		})
		.add(gate).one('touchend', function() {

			if (swipe) {
			swipe = false;
			newNumber();
			}

			digit.off('touchmove').add(gate).off('touchend');
		});
	})
	.on('mousedown touchstart', function(e) {

		if (e.which && e.which != 1) return;

		var item = $(this).index();
		if (item == 1 || item == 3) {

		digit.one('mouseup touchend', function() {

			var same = item == $(this).index();

			if (isBusy() || !same) return cancelIt();

			item == 1 ? up = true : up = false;

			newNumber();

			return cancelIt();
		});
		}

		return false;
	});
}

function isBusy() {

	return cog.is(':animated');
}

function cancelIt() {

	digit.off('mouseup touchend');

	return false;
}

function newNumber() {
	var aim = base;

	up ? aim -= slot : aim += slot;

	cog.animate({scrollTop: aim}, 500, function() {

		up ? digit.eq(parseInt(last_num)).prependTo(cog) : digit.eq(0).appendTo(cog);
		cog.scrollTop(base);

		digit = cog.find('span');
		
		if(parseInt(last_num)>2){
		var num=parseInt(digit.eq(2).text());
		if(!$.isNumeric(num)){num='0'}
		$('.selectnum').removeClass('selected_desk');
		$('#span_'+num).addClass('selected_desk');
		if(num=='0'){$('.spinner_bottom').fadeIn();}
		else{$('.spinner_bottom').fadeOut();}
		if(num=='0'){output.text('0.5');}else{output.text(num);}
		
		}else if(parseInt(last_num)>1){
		var num=parseInt(digit.eq(1).text());
		if(!$.isNumeric(num)){num='0'}
		if(num=='0'){$('.spinner_bottom').fadeIn();}
		else{$('.spinner_bottom').fadeOut();}
		$('.selectnum').removeClass('selected_desk');
		$('#span_'+num).addClass('selected_desk');
		if(num=='0'){output.text('0.5');}else{output.text(num);}
		}else if(parseInt(last_num)==1){
		var num=parseInt(digit.eq(0).text());
		if(!$.isNumeric(num)){num='0'}
		if(num=='0'){$('.spinner_bottom').fadeIn();}
		else{$('.spinner_bottom').fadeOut();}
		$('.selectnum').removeClass('selected_desk');
		$('#span_'+num).addClass('selected_desk');
		if(num=='0'){output.text('0.5');}else{output.text(num);}
		}else{
		output.text('0');
		}
		
	});
}
			
  }
	signupbtn() {
	var rout=this._router;
			var desk=Number($('#result').text());
			
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