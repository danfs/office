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
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtvQkFDRSxVQUFLLEdBQVcsV0FBVyxDQUFDO29CQUM1QixTQUFJLEdBQVksNkJBQTZCLENBQUM7b0JBQzlDLFlBQU8sR0FBUyxLQUFLLENBQUM7Z0JBYXhCLENBQUM7Z0JBWEUsMkJBQUcsR0FBSCxVQUFJLEtBQUs7b0JBQ1IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsaUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0EsZ0NBQVEsR0FBUjtvQkFDSCwyQ0FBMkM7Z0JBQzNDLENBQUM7Z0JBcEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRSw4QkFBOEI7d0JBQzFDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNqQyxDQUFDOztpQ0FBQTtnQkFpQkYsb0JBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHlDQWdCQyxDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyTGluaywgUm91dGVyT3V0bGV0IH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZyA9ICdIb21lIFBhZ2UnO1xuICBib2R5OiAgc3RyaW5nID0gJ1RoaXMgaXMgdGhlIGFib3V0IGhvbWUgYm9keSc7XG4gIG1lc3NhZ2U6IHN0cmluZz0nc2FzJztcbiAgXG4gICBNYXAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnTWFwJ10pO1xuICB9XG4gIEhvd0l0V29yayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb3dJdFdvcmsnXSk7XG4gIH0gXG4gICBuZ09uSW5pdCgpIHtcbi8vYWxlcnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLm5hbWVcIikpO1xufVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
