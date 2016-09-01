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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtvQkFDRSxVQUFLLEdBQVcsV0FBVyxDQUFDO29CQUM1QixTQUFJLEdBQVksNkJBQTZCLENBQUM7b0JBQzlDLFlBQU8sR0FBUyxLQUFLLENBQUM7Z0JBV3hCLENBQUM7Z0JBVEUsMkJBQUcsR0FBSCxVQUFJLEtBQUs7b0JBQ1IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsaUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBakJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRSw4QkFBOEI7d0JBQzFDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNqQyxDQUFDOztpQ0FBQTtnQkFlRixvQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQseUNBY0MsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckxpbmssIFJvdXRlck91dGxldCB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmcgPSAnSG9tZSBQYWdlJztcbiAgYm9keTogIHN0cmluZyA9ICdUaGlzIGlzIHRoZSBhYm91dCBob21lIGJvZHknO1xuICBtZXNzYWdlOiBzdHJpbmc9J3Nhcyc7XG4gIFxuICAgTWFwKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ01hcCddKTtcbiAgfVxuICBIb3dJdFdvcmsoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG93SXRXb3JrJ10pO1xuICB9IFxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
