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
                HomeComponent.prototype.ngOnInit = function () {
                    //alert(localStorage.getItem("user.name"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBRUUsVUFBSyxHQUFXLFdBQVcsQ0FBQztvQkFDNUIsU0FBSSxHQUFZLDZCQUE2QixDQUFDO29CQUM5QyxZQUFPLEdBQVMsS0FBSyxDQUFDO2dCQWF4QixDQUFDO2dCQVhFLDJCQUFHLEdBQUgsVUFBSSxLQUFLO29CQUNSLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUNELGlDQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUNBLGdDQUFRLEdBQVI7b0JBQ0gsMkNBQTJDO2dCQUMzQyxDQUFDO2dCQXRCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxNQUFNO3dCQUNoQixXQUFXLEVBQUUsOEJBQThCO3dCQUMxQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFHLDBCQUEwQixFQUFDO3FCQUM5QyxDQUFDOztpQ0FBQTtnQkFrQkYsb0JBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHlDQWlCQyxDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsXG5DYW5BY3RpdmF0ZSxcbiAgQ29tcG9uZW50SW5zdHJ1Y3Rpb24sXG4gIE9uQWN0aXZhdGUsXG4gIENhbkRlYWN0aXZhdGUsXG4gIE9uRGVhY3RpdmF0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJMaW5rLCBSb3V0ZXJPdXRsZXQgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICBob3N0OiB7J2NsYXNzJyA6ICduZy1hbmltYXRlIGhvbWVDb250YWluZXInfVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkFjdGl2YXRlLCBPbkRlYWN0aXZhdGV7XG5cbiAgdGl0bGU6IHN0cmluZyA9ICdIb21lIFBhZ2UnO1xuICBib2R5OiAgc3RyaW5nID0gJ1RoaXMgaXMgdGhlIGFib3V0IGhvbWUgYm9keSc7XG4gIG1lc3NhZ2U6IHN0cmluZz0nc2FzJztcbiAgXG4gICBNYXAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnTWFwJ10pO1xuICB9XG4gIEhvd0l0V29yayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb3dJdFdvcmsnXSk7XG4gIH0gXG4gICBuZ09uSW5pdCgpIHtcbi8vYWxlcnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLm5hbWVcIikpO1xufVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
