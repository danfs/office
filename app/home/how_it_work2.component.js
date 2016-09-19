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
    var HowItWorkComponent2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HowItWorkComponent2 = (function () {
                function HowItWorkComponent2() {
                    this.title = 'Home Page';
                    this.body = 'This is the about home body';
                    this.message = 'sas';
                }
                HowItWorkComponent2.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                HowItWorkComponent2.prototype.Map = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Map']);
                };
                HowItWorkComponent2 = __decorate([
                    core_1.Component({
                        selector: 'how_it_work2',
                        templateUrl: 'dev/home/how_it_work2.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HowItWorkComponent2);
                return HowItWorkComponent2;
            }());
            exports_1("HowItWorkComponent2", HowItWorkComponent2);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG93X2l0X3dvcmsyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUFBO29CQUNFLFVBQUssR0FBVyxXQUFXLENBQUM7b0JBQzVCLFNBQUksR0FBWSw2QkFBNkIsQ0FBQztvQkFDOUMsWUFBTyxHQUFTLEtBQUssQ0FBQztnQkFZeEIsQ0FBQztnQkFWQSxrQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFSCxpQ0FBRyxHQUFILFVBQUksS0FBSztvQkFDTCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFsQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHNDQUFzQzt3QkFDbkQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O3VDQUFBO2dCQWdCRiwwQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQscURBZUMsQ0FBQSIsImZpbGUiOiJob21lL2hvd19pdF93b3JrMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyTGluaywgUm91dGVyT3V0bGV0IH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG93X2l0X3dvcmsyJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9ob3dfaXRfd29yazIuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBIb3dJdFdvcmtDb21wb25lbnQyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZyA9ICdIb21lIFBhZ2UnO1xuICBib2R5OiAgc3RyaW5nID0gJ1RoaXMgaXMgdGhlIGFib3V0IGhvbWUgYm9keSc7XG4gIG1lc3NhZ2U6IHN0cmluZz0nc2FzJztcbiAgXG4gSG9tZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuICB9XG4gXG5NYXAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnTWFwJ10pO1xuICB9IFxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
