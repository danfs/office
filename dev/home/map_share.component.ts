import { Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Router,RouteParams,OnDeactivate,ComponentInstruction} from 'angular2/router';
import * as Rx from 'rxjs/Rx';
declare var location: any;
@Component({
  selector: 'map_share',
  templateUrl: 'dev/home/map_share.component.html',
 directives: [ROUTER_DIRECTIVES],
 host: {'class' : 'ng-animate map_pickerContainer'}
   
})
export class MapShareComponent implements OnInit {
constructor(private _router: Router,private _routeParams: RouteParams) {}
private deskremain;
backtomap() {
$('#disblock').hide("slide", { direction: "down" }, 700,function() {
			th._router.navigate(['Map']);
			});
			}
			
  ngOnInit() {
  var userId=this._routeParams.get('user');
  var location=this._routeParams.get('location');
  var ths=this._router;
  //$('#disblock').show("slide", { direction: "down" }, 700);
  $.ajax({
					url:"api/users/getsharepage",
					type: "POST",
					data: ({user:userId,location_name:location}),
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
						$('#select_desk').attr('rel2',parseInt(obj.book_btn));
						$('.selected_marker').attr('rel',obj.location_name);
						var deskremain=parseInt(obj.remain);
						$('#select_desk').removeClass('office_end');
						}else{
						$('#select_desk').addClass('office_end');
						}
						if(obj.book_btn){
						$('#select_desk').prop('disabled', false);
						}else{
						//$('#select_desk').prop('disabled', true);
						}
						}
						else if(obj.status=="fail")
						{
						//$('#select_desk').prop('disabled', true);
						}
					}
	
				})
				
	

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
		
  
  
  $(document).on('click','#map_slide_down', function (){
  
		$('#disblock').hide("slide", { direction: "down" }, 700,function() {
   		 $('#map_back').trigger('click');
		 $('#disblock').fadeIn('slow');
  		});
		});	
	$(document).on('click','#map_back', function (){	
		alert('sss');
		});
  }
	selectdesk() {
			var remain=$('#select_desk').attr('rel');
			this._router.navigate(['SelectDesk',{ locationid:this._routeParams.get('id'),remain:remain}]);
			
			}		
	
}