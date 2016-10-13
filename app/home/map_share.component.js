System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2;
    var MapShareComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            MapShareComponent = (function () {
                function MapShareComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                MapShareComponent.prototype.backtomap = function () {
                    $('#disblock').hide("slide", { direction: "down" }, 700, function () {
                        th._router.navigate(['Map']);
                    });
                };
                MapShareComponent.prototype.ngOnInit = function () {
                    var userId = this._routeParams.get('user');
                    var location = this._routeParams.get('location');
                    var ths = this._router;
                    //$('#disblock').show("slide", { direction: "down" }, 700);
                    $.ajax({
                        url: "api/users/getsharepage",
                        type: "POST",
                        data: ({ user: userId, location_name: location }),
                        beforeSend: function () { },
                        success: function (response) {
                            var obj = $.parseJSON(response);
                            if (obj.status == "success") {
                                var decoded = $("<div/>").html(obj.html).text();
                                $('#ajax_responce').html(decoded);
                                //
                                if (parseInt(obj.remain) > 0) {
                                    $('#select_desk').attr('rel', parseInt(obj.remain));
                                    $('#select_desk').attr('rel2', parseInt(obj.book_btn));
                                    $('.selected_marker').attr('rel', obj.location_name);
                                    var deskremain = parseInt(obj.remain);
                                    $('#select_desk').removeClass('office_end');
                                }
                                else {
                                    $('#select_desk').addClass('office_end');
                                }
                                if (obj.book_btn) {
                                    $('#select_desk').prop('disabled', false);
                                }
                                else {
                                }
                            }
                            else if (obj.status == "fail") {
                            }
                        }
                    });
                    $(document).on('click', '.thumbox5a_in ul li', function () {
                        $('.thumbox5').addClass('thumbox5aaa');
                        $('#myCarousel1').slideDown();
                    });
                    $(document).on('click', '#myCarousel,.amnities,.location11', function () {
                        $('#myCarousel1').slideUp();
                        $('.thumbox5').removeClass('thumbox5aaa');
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                    $(document).on('click', '#map_slide_down', function () {
                        $('#disblock').hide("slide", { direction: "down" }, 700, function () {
                            $('#map_back').trigger('click');
                            $('#disblock').fadeIn('slow');
                        });
                    });
                    $(document).on('click', '#map_back', function () {
                        alert('sss');
                    });
                };
                MapShareComponent.prototype.selectdesk = function () {
                    var remain = $('#select_desk').attr('rel');
                    this._router.navigate(['SelectDesk', { locationid: this._routeParams.get('id'), remain: remain }]);
                };
                MapShareComponent = __decorate([
                    core_1.Component({
                        selector: 'map_share',
                        templateUrl: 'dev/home/map_share.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        host: { 'class': 'ng-animate map_pickerContainer' }
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, router_2.RouteParams])
                ], MapShareComponent);
                return MapShareComponent;
            }());
            exports_1("MapShareComponent", MapShareComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbWFwX3NoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDQSwyQkFBb0IsT0FBZSxFQUFTLFlBQXlCO29CQUFqRCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXpFLHFDQUFTLEdBQVQ7b0JBQ0EsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFDO3dCQUNyRCxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUM7Z0JBRUYsb0NBQVEsR0FBUjtvQkFDQSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsSUFBSSxRQUFRLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQy9DLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3JCLDJEQUEyRDtvQkFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDSixHQUFHLEVBQUMsd0JBQXdCO3dCQUM1QixJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxDQUFDO3dCQUM1QyxVQUFVLEVBQUMsY0FDVixDQUFDO3dCQUNGLE9BQU8sRUFBRSxVQUFTLFFBQVE7NEJBR3pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ2hDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFN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QUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDN0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ0osQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsV0FBVyxFQUFFO3dCQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRixzQ0FBVSxHQUFWO29CQUNFLElBQUksTUFBTSxHQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFDLEVBQUUsVUFBVSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTlGLENBQUM7Z0JBaEdKO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSxtQ0FBbUM7d0JBQ2pELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUcsZ0NBQWdDLEVBQUM7cUJBRWxELENBQUM7O3FDQUFBO2dCQTRGRix3QkFBQztZQUFELENBM0ZBLEFBMkZDLElBQUE7WUEzRkQsaURBMkZDLENBQUEiLCJmaWxlIjoiaG9tZS9tYXBfc2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXMsT25EZWFjdGl2YXRlLENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0ICogYXMgUnggZnJvbSAncnhqcy9SeCc7XG5kZWNsYXJlIHZhciBsb2NhdGlvbjogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwX3NoYXJlJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9tYXBfc2hhcmUuY29tcG9uZW50Lmh0bWwnLFxuIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gaG9zdDogeydjbGFzcycgOiAnbmctYW5pbWF0ZSBtYXBfcGlja2VyQ29udGFpbmVyJ31cbiAgIFxufSlcbmV4cG9ydCBjbGFzcyBNYXBTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG5wcml2YXRlIGRlc2tyZW1haW47XG5iYWNrdG9tYXAoKSB7XG4kKCcjZGlzYmxvY2snKS5oaWRlKFwic2xpZGVcIiwgeyBkaXJlY3Rpb246IFwiZG93blwiIH0sIDcwMCxmdW5jdGlvbigpIHtcblx0XHRcdHRoLl9yb3V0ZXIubmF2aWdhdGUoWydNYXAnXSk7XG5cdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdFxuICBuZ09uSW5pdCgpIHtcbiAgdmFyIHVzZXJJZD10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3VzZXInKTtcbiAgdmFyIGxvY2F0aW9uPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb24nKTtcbiAgdmFyIHRocz10aGlzLl9yb3V0ZXI7XG4gIC8vJCgnI2Rpc2Jsb2NrJykuc2hvdyhcInNsaWRlXCIsIHsgZGlyZWN0aW9uOiBcImRvd25cIiB9LCA3MDApO1xuICAkLmFqYXgoe1xuXHRcdFx0XHRcdHVybDpcImFwaS91c2Vycy9nZXRzaGFyZXBhZ2VcIixcblx0XHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdFx0XHRkYXRhOiAoe3VzZXI6dXNlcklkLGxvY2F0aW9uX25hbWU6bG9jYXRpb259KSxcblx0XHRcdFx0XHRiZWZvcmVTZW5kOmZ1bmN0aW9uKClcblx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YXIgZGVjb2RlZCA9ICQoXCI8ZGl2Lz5cIikuaHRtbChvYmouaHRtbCkudGV4dCgpO1xuXHRcdFx0XHRcdFx0JCgnI2FqYXhfcmVzcG9uY2UnKS5odG1sKGRlY29kZWQpO1xuXHRcdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHRcdGlmKHBhcnNlSW50KG9iai5yZW1haW4pPjApe1xuXHRcdFx0XHRcdFx0JCgnI3NlbGVjdF9kZXNrJykuYXR0cigncmVsJyxwYXJzZUludChvYmoucmVtYWluKSk7XG5cdFx0XHRcdFx0XHQkKCcjc2VsZWN0X2Rlc2snKS5hdHRyKCdyZWwyJyxwYXJzZUludChvYmouYm9va19idG4pKTtcblx0XHRcdFx0XHRcdCQoJy5zZWxlY3RlZF9tYXJrZXInKS5hdHRyKCdyZWwnLG9iai5sb2NhdGlvbl9uYW1lKTtcblx0XHRcdFx0XHRcdHZhciBkZXNrcmVtYWluPXBhcnNlSW50KG9iai5yZW1haW4pO1xuXHRcdFx0XHRcdFx0JCgnI3NlbGVjdF9kZXNrJykucmVtb3ZlQ2xhc3MoJ29mZmljZV9lbmQnKTtcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0JCgnI3NlbGVjdF9kZXNrJykuYWRkQ2xhc3MoJ29mZmljZV9lbmQnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKG9iai5ib29rX2J0bil7XG5cdFx0XHRcdFx0XHQkKCcjc2VsZWN0X2Rlc2snKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0Ly8kKCcjc2VsZWN0X2Rlc2snKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImZhaWxcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vJCgnI3NlbGVjdF9kZXNrJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcblx0XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy50aHVtYm94NWFfaW4gdWwgbGknLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHQkKCcudGh1bWJveDUnKS5hZGRDbGFzcygndGh1bWJveDVhYWEnKTtcblx0XHQkKCcjbXlDYXJvdXNlbDEnKS5zbGlkZURvd24oKTtcblx0XHRcblx0XHR9KTtcdFxuXHRcdFxuJChkb2N1bWVudCkub24oJ2NsaWNrJywnI215Q2Fyb3VzZWwsLmFtbml0aWVzLC5sb2NhdGlvbjExJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0JCgnI215Q2Fyb3VzZWwxJykuc2xpZGVVcCgpO1xuXHRcdCQoJy50aHVtYm94NScpLnJlbW92ZUNsYXNzKCd0aHVtYm94NWFhYScpO1xuXHRcdH0pO1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1x0XG5cdFx0XG4gIFxuICBcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnI21hcF9zbGlkZV9kb3duJywgZnVuY3Rpb24gKCl7XG4gIFxuXHRcdCQoJyNkaXNibG9jaycpLmhpZGUoXCJzbGlkZVwiLCB7IGRpcmVjdGlvbjogXCJkb3duXCIgfSwgNzAwLGZ1bmN0aW9uKCkge1xuICAgXHRcdCAkKCcjbWFwX2JhY2snKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdCAkKCcjZGlzYmxvY2snKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgXHRcdH0pO1xuXHRcdH0pO1x0XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJyNtYXBfYmFjaycsIGZ1bmN0aW9uICgpe1x0XG5cdFx0YWxlcnQoJ3NzcycpO1xuXHRcdH0pO1xuICB9XG5cdHNlbGVjdGRlc2soKSB7XG5cdFx0XHR2YXIgcmVtYWluPSQoJyNzZWxlY3RfZGVzaycpLmF0dHIoJ3JlbCcpO1xuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnU2VsZWN0RGVzaycseyBsb2NhdGlvbmlkOnRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKSxyZW1haW46cmVtYWlufV0pO1xuXHRcdFx0XG5cdFx0XHR9XHRcdFxuXHRcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
