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
    var core_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    //constructor(private _location: Location) {}
                    this.title = 'Home Page';
                    this.body = 'This is the about home body';
                    this.message = 'sas';
                }
                HomeComponent.prototype.Map = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Map']);
                };
                HomeComponent.prototype.HowItWork = function (event) {
                    event.preventDefault();
                    this.router.navigate(['HowItWork']);
                };
                HomeComponent.prototype.routerOnActivate = function (next, prev) {
                    console.log('hello on activate');
                    if (prev === null) {
                        this.style_animation = '0';
                        $('.homeContainer').removeClass('ng-enter');
                    }
                    //alert("Finished navigating from "${prev ? prev.urlPath : 'null'}" to "${next.urlPath}");
                };
                HomeComponent.prototype.ngOnInit = function () {
                    //alert(localStorage.getItem("user.name"));
                    //alert(this._location);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'dev/home/home.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        host: { 'class': 'ng-animate homeContainer' }
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0EsNkNBQTZDO29CQUUzQyxVQUFLLEdBQVcsV0FBVyxDQUFDO29CQUM1QixTQUFJLEdBQVksNkJBQTZCLENBQUM7b0JBQzlDLFlBQU8sR0FBUyxLQUFLLENBQUM7Z0JBc0J4QixDQUFDO2dCQXBCRSwyQkFBRyxHQUFILFVBQUksS0FBSztvQkFDUixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxpQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFDQSx3Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBMEIsRUFBRSxJQUEwQjtvQkFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7d0JBQ3pCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDNUMsQ0FBQztvQkFDSywwRkFBMEY7Z0JBQzlGLENBQUM7Z0JBQ0YsZ0NBQVEsR0FBUjtvQkFDSCwyQ0FBMkM7b0JBQzNDLHdCQUF3QjtnQkFDeEIsQ0FBQztnQkFoQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDMUMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRywwQkFBMEIsRUFBQztxQkFDOUMsQ0FBQzs7aUNBQUE7Z0JBNEJGLG9CQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCx5Q0EyQkMsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsXG5DYW5BY3RpdmF0ZSxcbiAgQ29tcG9uZW50SW5zdHJ1Y3Rpb24sXG4gIE9uQWN0aXZhdGUsXG4gIENhbkRlYWN0aXZhdGUsXG4gIE9uRGVhY3RpdmF0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJMaW5rLCBSb3V0ZXJPdXRsZXQgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICBob3N0OiB7J2NsYXNzJyA6ICduZy1hbmltYXRlIGhvbWVDb250YWluZXInfVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkFjdGl2YXRlLHJvdXRlck9uQWN0aXZhdGUsIE9uRGVhY3RpdmF0ZXtcbi8vY29uc3RydWN0b3IocHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uKSB7fVxuXG4gIHRpdGxlOiBzdHJpbmcgPSAnSG9tZSBQYWdlJztcbiAgYm9keTogIHN0cmluZyA9ICdUaGlzIGlzIHRoZSBhYm91dCBob21lIGJvZHknO1xuICBtZXNzYWdlOiBzdHJpbmc9J3Nhcyc7XG4gIFxuICAgTWFwKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ01hcCddKTtcbiAgfVxuICBIb3dJdFdvcmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG93SXRXb3JrJ10pO1xuICB9IFxuICAgcm91dGVyT25BY3RpdmF0ZShuZXh0OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIG9uIGFjdGl2YXRlJyk7XG5cdFx0aWYocHJldj09PW51bGwpe1xuXHRcdHRoaXMuc3R5bGVfYW5pbWF0aW9uPScwJztcblx0XHQkKCcuaG9tZUNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCduZy1lbnRlcicpO1xuXHRcdH1cbiAgICAgICAgLy9hbGVydChcIkZpbmlzaGVkIG5hdmlnYXRpbmcgZnJvbSBcIiR7cHJldiA/IHByZXYudXJsUGF0aCA6ICdudWxsJ31cIiB0byBcIiR7bmV4dC51cmxQYXRofVwiKTtcbiAgICB9XG4gICBuZ09uSW5pdCgpIHtcbi8vYWxlcnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLm5hbWVcIikpO1xuLy9hbGVydCh0aGlzLl9sb2NhdGlvbik7XG59XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
