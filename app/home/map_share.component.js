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
                function MapshareComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
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
                    __metadata('design:paramtypes', [router_2.Router, router_2.RouteParams])
                ], MapshareComponent);
                return MapshareComponent;
            }());
            exports_1("MapshareComponent", MapshareComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbWFwX3NoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDQSwyQkFBb0IsT0FBZSxFQUFTLFlBQXlCO29CQUFqRCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXZFLG9DQUFRLEdBQVI7b0JBQ0EsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtvQkFDcEIsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ0osR0FBRyxFQUFDLG1CQUFtQjt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7d0JBQ3JCLFVBQVUsRUFBQyxjQUNWLENBQUM7d0JBQ0YsT0FBTyxFQUFFLFVBQVMsUUFBUTs0QkFFekIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDaEMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBRSxTQUFTLENBQUMsQ0FDekIsQ0FBQztnQ0FDRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQ0FDaEQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dDQUNsQyxFQUFFO2dDQUNGLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQ0FDM0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29DQUNuRCxJQUFJLFVBQVUsR0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUNwQyxDQUFDOzRCQUNELENBQUM7NEJBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUUsTUFBTSxDQUFDLENBQzNCLENBQUM7NEJBRUQsQ0FBQzt3QkFDRixDQUFDO3FCQUVELENBQUMsQ0FBQTtvQkFJTixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUU7d0JBRXBDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBRUYsQ0FBQztnQkFFSCxnQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFuREo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O3FDQUFBO2dCQWdERix3QkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QsaURBK0NDLENBQUEiLCJmaWxlIjoiaG9tZS9tYXBfc2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcHNoYXJlJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9tYXBzaGFyZS5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIE1hcHNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge31cblx0XHRcdFxuICBuZ09uSW5pdCgpIHtcbiAgdmFyIHRocz10aGlzLl9yb3V0ZXJcbiAgdmFyIHVzZXJJZD10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJylcbiAgJC5hamF4KHtcblx0XHRcdFx0XHR1cmw6XCJhcGkvdXNlcnMvZ2V0dXNlclwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGRhdGE6ICh7dXNlcjp1c2VySWR9KSxcblx0XHRcdFx0XHRiZWZvcmVTZW5kOmZ1bmN0aW9uKClcblx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YXIgZGVjb2RlZCA9ICQoXCI8ZGl2Lz5cIikuaHRtbChvYmouaHRtbCkudGV4dCgpO1xuXHRcdFx0XHRcdFx0JCgnI2FqYXhfcmVzcG9uY2UnKS5odG1sKGRlY29kZWQpO1xuXHRcdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHRcdGlmKHBhcnNlSW50KG9iai5yZW1haW4pPjApe1xuXHRcdFx0XHRcdFx0JCgnI3NlbGVjdF9kZXNrJykuYXR0cigncmVsJyxwYXJzZUludChvYmoucmVtYWluKSk7XG5cdFx0XHRcdFx0XHR2YXIgZGVza3JlbWFpbj1wYXJzZUludChvYmoucmVtYWluKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYob2JqLnN0YXR1cz09XCJmYWlsXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcblx0XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdFx0XG4gIH1cblx0XHRcdFxuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
