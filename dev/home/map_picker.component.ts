import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http, Response} from 'angular2/http';
import {Injectable, Component } from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
declare var location: any;
@Component({
  selector: 'map_picker',
  templateUrl: 'dev/home/map_picker.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class MapPickerComponent implements OnInit {
constructor(private _router: Router,private _routeParams: RouteParams) {}
private deskremain;
Home(event) {
			event.preventDefault();
			this.router.navigate(['Home']);
			}
			
  ngOnInit() {
  var locationId=this._routeParams.get('id')
  $.ajax({
					url:"api/users/getmarkerpicker",
					type: "POST",
					data: ({locationid:locationId}),
					beforeSend:function()
					{},
					success: function(response)
					{
						var obj = $.parseJSON(response);
						if(obj.status=="success")
						{
						var decoded = $("<div/>").html(obj.html).text();
						$('#ajax_responce').html(decoded);
						//
						if(parseInt(obj.remain)>0){
						$('#select_desk').attr('rel',parseInt(obj.remain));
						var deskremain=parseInt(obj.remain);
						}
						}
						else if(obj.status=="fail")
						{
						
						}
					}
	
				})
				
$(document).on('click','#aftertabmarker', function ()
		{
		//alert($(this).attr('rel'));
		var Ids=$(this).attr('rel');
		ths.navigate(['/MapPicker', { id: Ids}]);
		});		

$(document).on('click','.thumbox5a_in ul li', function ()
		{
		$('.thumbox5').addClass('thumbox5aaa');
		$('#myCarousel1').slideDown();
		
		});	
		
$(document).on('click','#myCarousel,.amnities,.location11', function ()
		{
		$('#myCarousel1').slideUp();
		$('.thumbox5').removeClass('thumbox5aaa');
		});
	$(document).on('click','.back_botom', function ()
		{
		parent.history.back();
		return false;
	});	
		
  }
	selectdesk() {
			var remain=$('#select_desk').attr('rel');
			this._router.navigate(['SelectDesk',{ locationid:this._routeParams.get('id'),remain:remain}]);
			
			}		

}