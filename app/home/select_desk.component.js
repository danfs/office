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
    var SelectDeskComponent;
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
            SelectDeskComponent = (function () {
                function SelectDeskComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                SelectDeskComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                SelectDeskComponent.prototype.ngOnInit = function () {
                    var remain = this._routeParams.get('remain');
                    $("#spinner").spinner({
                        min: 1,
                        max: remain,
                        step: 1,
                        start: 1,
                        numberFormat: "C"
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                };
                SelectDeskComponent.prototype.signupbtn = function () {
                    var desk = $('#spinner').val();
                    if (desk > 0) {
                        this._router.navigate(['Signup', { locationid: this._routeParams.get('locationid'), desk: desk }]);
                    }
                    else {
                        alert('please select desk');
                    }
                };
                SelectDeskComponent = __decorate([
                    core_1.Component({
                        selector: 'select_desk',
                        templateUrl: 'dev/home/select_desk.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, router_2.RouteParams])
                ], SelectDeskComponent);
                return SelectDeskComponent;
            }());
            exports_1("SelectDeskComponent", SelectDeskComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFekUsa0NBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1AsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUYsc0NBQVEsR0FBUjtvQkFHQSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFFLFVBQVUsQ0FBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDcEIsR0FBRyxFQUFFLENBQUM7d0JBQ04sR0FBRyxFQUFFLE1BQU07d0JBQ1gsSUFBSSxFQUFFLENBQUM7d0JBQ1AsS0FBSyxFQUFFLENBQUM7d0JBQ1IsWUFBWSxFQUFFLEdBQUc7cUJBQ2xCLENBQUMsQ0FBQztvQkFDTixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUU7d0JBRXJDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBRUYsQ0FBQztnQkFDRix1Q0FBUyxHQUFUO29CQUNFLElBQUksSUFBSSxHQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxVQUFVLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUYsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDTCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDRCxDQUFDO2dCQXZDSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7dUNBQUE7Z0JBcUNGLDBCQUFDO1lBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtZQXBDRCxxREFvQ0MsQ0FBQSIsImZpbGUiOiJob21lL3NlbGVjdF9kZXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmRlY2xhcmUgdmFyIGxvY2F0aW9uOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3RfZGVzaycsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REZXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge31cbnByaXZhdGUgZGVza3JlbWFpbjtcbkhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9XG5cdFx0XHRcbiAgbmdPbkluaXQoKSB7XG4gIFxuICBcbiAgdmFyIHJlbWFpbj10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpO1xuXHRcdCQoIFwiI3NwaW5uZXJcIiApLnNwaW5uZXIoe1xuICAgICAgbWluOiAxLFxuICAgICAgbWF4OiByZW1haW4sXG4gICAgICBzdGVwOiAxLFxuICAgICAgc3RhcnQ6IDEsXG4gICAgICBudW1iZXJGb3JtYXQ6IFwiQ1wiXG4gICAgfSk7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XHRcblx0XHRcbiAgfVxuXHRzaWdudXBidG4oKSB7XG5cdFx0XHR2YXIgZGVzaz0kKCcjc3Bpbm5lcicpLnZhbCgpO1xuXHRcdFx0aWYoZGVzaz4wKXtcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCcseyBsb2NhdGlvbmlkOnRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpLGRlc2s6ZGVza31dKTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRhbGVydCgncGxlYXNlIHNlbGVjdCBkZXNrJyk7XG5cdFx0XHR9XG5cdFx0XHR9XHRcdFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
