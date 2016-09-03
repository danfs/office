System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, router_2;
    var SignUpCongratsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SignUpCongratsComponent = (function () {
                function SignUpCongratsComponent(http, _router, _routeParams) {
                    this.http = http;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                SignUpCongratsComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                SignUpCongratsComponent.prototype.view_lastinsert = function (event) {
                    this._router.navigate(['Mapshare', { id: event.currentTarget.id }]);
                };
                SignUpCongratsComponent.prototype.ngOnInit = function () {
                    this.id = decodeURIComponent(this._routeParams.get('id'));
                    this.name = decodeURIComponent(this._routeParams.get('name'));
                    this.industry = decodeURIComponent(this._routeParams.get('industry'));
                    var imgs = decodeURIComponent(this._routeParams.get('image'));
                    if (imgs !== '') {
                        this.image = imgs;
                    }
                    else {
                        this.image = 'small_no-image.png';
                    }
                    var routin = this._router;
                    $(document).on('click', '#view_lastinsert', function () {
                        var user = $('#view_lastinsert').attr('rel');
                        routin.navigate(['Mapshare', { id: user }]);
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                };
                SignUpCongratsComponent = __decorate([
                    core_1.Component({
                        selector: 'sign_up_congrats',
                        templateUrl: 'dev/home/sign_up_congrats.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_2.Router, router_2.RouteParams])
                ], SignUpCongratsComponent);
                return SignUpCongratsComponent;
            }());
            exports_1("SignUpCongratsComponent", SignUpCongratsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbl91cF9jb25ncmF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUMsaUNBQW9CLElBQVMsRUFBVSxPQUFlLEVBQVMsWUFBeUI7b0JBQXBFLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUU3RixzQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRixpREFBZSxHQUFmLFVBQWdCLEtBQUs7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLEVBQUUsRUFBRSxFQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDO2dCQUNELDBDQUFRLEdBQVI7b0JBQ0EsSUFBSSxDQUFDLEVBQUUsR0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxRQUFRLEdBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxJQUFJLEdBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsRUFBRSxDQUFBLENBQUMsSUFBSSxLQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQUEsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztvQkFBQSxDQUFDO29CQUN6QyxJQUFJLE1BQU0sR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN6QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxrQkFBa0IsRUFBRTt3QkFFekMsSUFBSSxJQUFJLEdBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsYUFBYSxFQUFFO3dCQUVyQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNkLENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUM7Z0JBckNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLDBDQUEwQzt3QkFDdkQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7OzJDQUFBO2dCQW1DRiw4QkFBQztZQUFELENBbENBLEFBa0NDLElBQUE7WUFsQ0QsNkRBa0NDLENBQUEiLCJmaWxlIjoiaG9tZS9zaWduX3VwX2NvbmdyYXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIEF1dGgwTG9jaztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lnbl91cF9jb25ncmF0cycsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvc2lnbl91cF9jb25ncmF0cy5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbmdyYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuIHByaXZhdGUgZGF0YTtcbiBcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7fVxuXG5Ib21lKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0fVxuICB2aWV3X2xhc3RpbnNlcnQoZXZlbnQpIHtcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydNYXBzaGFyZScseyBpZDpldmVudC5jdXJyZW50VGFyZ2V0LmlkfV0pO1xuICB9IFxuICBuZ09uSW5pdCgpIHtcbiAgdGhpcy5pZD1kZWNvZGVVUklDb21wb25lbnQodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpKTtcblx0dGhpcy5uYW1lPWRlY29kZVVSSUNvbXBvbmVudCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ25hbWUnKSk7XG5cdHRoaXMuaW5kdXN0cnk9ZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaW5kdXN0cnknKSk7XG5cdHZhciBpbWdzPWRlY29kZVVSSUNvbXBvbmVudCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2ltYWdlJykpO1xuXHRpZihpbWdzIT09Jycpe1xuXHR0aGlzLmltYWdlID0gaW1ncztcblx0fWVsc2V7dGhpcy5pbWFnZSA9ICdzbWFsbF9uby1pbWFnZS5wbmcnO31cblx0dmFyIHJvdXRpbj0gdGhpcy5fcm91dGVyO1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcjdmlld19sYXN0aW5zZXJ0JywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0XHR2YXIgdXNlcj0kKCcjdmlld19sYXN0aW5zZXJ0JykuYXR0cigncmVsJyk7XG5cdFx0XHRyb3V0aW4ubmF2aWdhdGUoWydNYXBzaGFyZScseyBpZDp1c2VyfV0pO1xuXHR9KTtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywnLmJhY2tfYm90b20nLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRwYXJlbnQuaGlzdG9yeS5iYWNrKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
