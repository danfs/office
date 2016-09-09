import { Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Router,RouteParams,OnDeactivate,ComponentInstruction} from 'angular2/router';
import * as Rx from 'rxjs/Rx';
declare var location: any;
@Component({
  selector: 'map_picker',
  templateUrl: 'dev/home/map_picker.component.html',
 // template: `<div class="page">Another page</div>`,
 directives: [ROUTER_DIRECTIVES],
 host: {'class' : 'ng-animate map_pickerContainer'}
   
})
export class MapPickerComponent implements OnInit {
constructor(private _router: Router,private _routeParams: RouteParams) {}
private deskremain;
backtomap() {
var th=this;
$('#disblock').hide("slide", { direction: "down" }, 700,function() {
			th._router.navigate(['Map']);
			});
			}
			
  ngOnInit() {
  var locationId=this._routeParams.get('id');
  var ths=this._router;
  //$('#disblock').show("slide", { direction: "down" }, 700);
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