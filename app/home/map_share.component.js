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
                MapShareComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                MapShareComponent.prototype.ngOnInit = function () {
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
                    $(document).on('click', '#aftertabmarker', function () {
                        //alert($(this).attr('rel'));
                        var Ids = $(this).attr('rel');
                        ths.navigate(['/MapPicker', { id: Ids }]);
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
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
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, router_2.RouteParams])
                ], MapShareComponent);
                return MapShareComponent;
            }());
            exports_1("MapShareComponent", MapShareComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbWFwX3NoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFDQSwyQkFBb0IsT0FBZSxFQUFTLFlBQXlCO29CQUFqRCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXpFLGdDQUFJLEdBQUosVUFBSyxLQUFLO29CQUNQLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVGLG9DQUFRLEdBQVI7b0JBQ0EsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ0osR0FBRyxFQUFDLG1CQUFtQjt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7d0JBQ3JCLFVBQVUsRUFBQyxjQUNWLENBQUM7d0JBQ0YsT0FBTyxFQUFFLFVBQVMsUUFBUTs0QkFFekIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDaEMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBRSxTQUFTLENBQUMsQ0FDekIsQ0FBQztnQ0FDRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQ0FDaEQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dDQUNsQyxFQUFFO2dDQUNGLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQ0FDM0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29DQUNuRCxJQUFJLFVBQVUsR0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUNwQyxDQUFDOzRCQUNELENBQUM7NEJBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUUsTUFBTSxDQUFDLENBQzNCLENBQUM7NEJBRUQsQ0FBQzt3QkFDRixDQUFDO3FCQUVELENBQUMsQ0FBQTtvQkFFTixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRTt3QkFFeEMsNkJBQTZCO3dCQUM3QixJQUFJLEdBQUcsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM1QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLENBQUM7b0JBRUwsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsYUFBYSxFQUFFO3dCQUVwQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNkLENBQUMsQ0FBQyxDQUFDO2dCQUdGLENBQUM7Z0JBQ0Ysc0NBQVUsR0FBVjtvQkFDRSxJQUFJLE1BQU0sR0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBQyxFQUFFLFVBQVUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU5RixDQUFDO2dCQTdESjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsbUNBQW1DO3dCQUNoRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7cUNBQUE7Z0JBMkRGLHdCQUFDO1lBQUQsQ0ExREEsQUEwREMsSUFBQTtZQTFERCxpREEwREMsQ0FBQSIsImZpbGUiOiJob21lL21hcF9zaGFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5kZWNsYXJlIHZhciBsb2NhdGlvbjogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwX3NoYXJlJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9tYXBfc2hhcmUuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG5wcml2YXRlIGRlc2tyZW1haW47XG5Ib21lKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0fVxuXHRcdFx0XG4gIG5nT25Jbml0KCkge1xuICB2YXIgdXNlcklkPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKVxuICAkLmFqYXgoe1xuXHRcdFx0XHRcdHVybDpcImFwaS91c2Vycy9nZXR1c2VyXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJQT1NUXCIsXG5cdFx0XHRcdFx0ZGF0YTogKHt1c2VyOnVzZXJJZH0pLFxuXHRcdFx0XHRcdGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhciBkZWNvZGVkID0gJChcIjxkaXYvPlwiKS5odG1sKG9iai5odG1sKS50ZXh0KCk7XG5cdFx0XHRcdFx0XHQkKCcjYWpheF9yZXNwb25jZScpLmh0bWwoZGVjb2RlZCk7XG5cdFx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdFx0aWYocGFyc2VJbnQob2JqLnJlbWFpbik+MCl7XG5cdFx0XHRcdFx0XHQkKCcjc2VsZWN0X2Rlc2snKS5hdHRyKCdyZWwnLHBhcnNlSW50KG9iai5yZW1haW4pKTtcblx0XHRcdFx0XHRcdHZhciBkZXNrcmVtYWluPXBhcnNlSW50KG9iai5yZW1haW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImZhaWxcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdH0pXG5cdFx0XHRcdFxuJChkb2N1bWVudCkub24oJ2NsaWNrJywnI2FmdGVydGFibWFya2VyJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0Ly9hbGVydCgkKHRoaXMpLmF0dHIoJ3JlbCcpKTtcblx0XHR2YXIgSWRzPSQodGhpcykuYXR0cigncmVsJyk7XG5cdFx0dGhzLm5hdmlnYXRlKFsnL01hcFBpY2tlcicsIHsgaWQ6IElkc31dKTtcblx0XHR9KTtcdFx0XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdFx0XG5cdFx0XG4gIH1cblx0c2VsZWN0ZGVzaygpIHtcblx0XHRcdHZhciByZW1haW49JCgnI3NlbGVjdF9kZXNrJykuYXR0cigncmVsJyk7XG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydTZWxlY3REZXNrJyx7IGxvY2F0aW9uaWQ6dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpLHJlbWFpbjpyZW1haW59XSk7XG5cdFx0XHRcblx0XHRcdH1cdFx0XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
