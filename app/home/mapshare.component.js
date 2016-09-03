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
    var MapshareComponent;
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
            MapshareComponent = (function () {
                function MapshareComponent(_router, _routeParams, zone) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.zone = zone;
                }
                MapshareComponent.prototype.ngOnInit = function () {
                    var ths = this._router;
                    var userId = this._routeParams.get('id');
                    $.ajax({
                        url: "api/users/getuser",
                        type: "POST",
                        data: ({ user: userId }),
                        beforeSend: function () { },
                        success: function (response) {
                            var obj = $.parseJSON(response);
                            if (obj.status == "success") {
                                var decoded = $("<div/>").html(obj.html).text();
                                $('#ajax_responce').html(decoded);
                                //
                                if (parseInt(obj.remain) > 0) {
                                    $('#select_desk').attr('rel', parseInt(obj.remain));
                                    var deskremain = parseInt(obj.remain);
                                }
                            }
                            else if (obj.status == "fail") {
                            }
                        }
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                    function dfdf() { }
                };
                MapshareComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                MapshareComponent = __decorate([
                    core_1.Component({
                        selector: 'mapshare',
                        templateUrl: 'dev/home/mapshare.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, router_2.RouteParams, core_1.NgZone])
                ], MapshareComponent);
                return MapshareComponent;
            }());
            exports_1("MapshareComponent", MapshareComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbWFwc2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNBLDJCQUFvQixPQUFlLEVBQVMsWUFBeUIsRUFBUyxJQUFXO29CQUFyRSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFTLFNBQUksR0FBSixJQUFJLENBQU87Z0JBQUcsQ0FBQztnQkFDM0Ysb0NBQVEsR0FBUjtvQkFDQSxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO29CQUNwQixJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDSixHQUFHLEVBQUMsbUJBQW1CO3dCQUN2QixJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsQ0FBQzt3QkFDckIsVUFBVSxFQUFDLGNBQ1YsQ0FBQzt3QkFDRixPQUFPLEVBQUUsVUFBUyxRQUFROzRCQUV6QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNoQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFFLFNBQVMsQ0FBQyxDQUN6QixDQUFDO2dDQUNELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dDQUNoRCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0NBQ2xDLEVBQUU7Z0NBQ0YsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO29DQUMzQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0NBQ25ELElBQUksVUFBVSxHQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQ3BDLENBQUM7NEJBQ0QsQ0FBQzs0QkFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBRSxNQUFNLENBQUMsQ0FDM0IsQ0FBQzs0QkFFRCxDQUFDO3dCQUNGLENBQUM7cUJBRUQsQ0FBQyxDQUFBO29CQUlOLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLGFBQWEsRUFBRTt3QkFFcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FBQztvQkFDSCxrQkFBZ0IsQ0FBQztnQkFDaEIsQ0FBQztnQkFFSCxnQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFsREo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O3FDQUFBO2dCQStDRix3QkFBQztZQUFELENBOUNBLEFBOENDLElBQUE7WUE5Q0QsaURBOENDLENBQUEiLCJmaWxlIjoiaG9tZS9tYXBzaGFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxOZ1pvbmUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXBzaGFyZScsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvbWFwc2hhcmUuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBzaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMscHJpdmF0ZSB6b25lOk5nWm9uZSkge31cdFxuICBuZ09uSW5pdCgpIHtcbiAgdmFyIHRocz10aGlzLl9yb3V0ZXJcbiAgdmFyIHVzZXJJZD10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG4gICQuYWpheCh7XG5cdFx0XHRcdFx0dXJsOlwiYXBpL3VzZXJzL2dldHVzZXJcIixcblx0XHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdFx0XHRkYXRhOiAoe3VzZXI6dXNlcklkfSksXG5cdFx0XHRcdFx0YmVmb3JlU2VuZDpmdW5jdGlvbigpXG5cdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFyIGRlY29kZWQgPSAkKFwiPGRpdi8+XCIpLmh0bWwob2JqLmh0bWwpLnRleHQoKTtcblx0XHRcdFx0XHRcdCQoJyNhamF4X3Jlc3BvbmNlJykuaHRtbChkZWNvZGVkKTtcblx0XHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0XHRpZihwYXJzZUludChvYmoucmVtYWluKT4wKXtcblx0XHRcdFx0XHRcdCQoJyNzZWxlY3RfZGVzaycpLmF0dHIoJ3JlbCcscGFyc2VJbnQob2JqLnJlbWFpbikpO1xuXHRcdFx0XHRcdFx0dmFyIGRlc2tyZW1haW49cGFyc2VJbnQob2JqLnJlbWFpbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZmFpbFwiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXHRmdW5jdGlvbiBkZmRmKCl7fVx0XG4gIH1cblx0XHRcdFxuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
