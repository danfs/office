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
                HowItWorkComponent2.prototype.HowItWork2 = function (event) {
                    event.preventDefault();
                    this.router.navigate(['HowItWork2']);
                };
                HowItWorkComponent2 = __decorate([
                    core_1.Component({
                        selector: 'how_it_work1',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG93X2l0X3dvcmsyLmNvbXBvbmVudCBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztvQkFDNUIsU0FBSSxHQUFZLDZCQUE2QixDQUFDO29CQUM5QyxZQUFPLEdBQVMsS0FBSyxDQUFDO2dCQVl4QixDQUFDO2dCQVZBLGtDQUFJLEdBQUosVUFBSyxLQUFLO29CQUNQLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVILHdDQUFVLEdBQVYsVUFBVyxLQUFLO29CQUNaLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQWxCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7dUNBQUE7Z0JBZ0JGLDBCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxxREFlQyxDQUFBIiwiZmlsZSI6ImhvbWUvaG93X2l0X3dvcmsyLmNvbXBvbmVudCBjb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckxpbmssIFJvdXRlck91dGxldCB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvd19pdF93b3JrMScsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvaG93X2l0X3dvcmsyLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgSG93SXRXb3JrQ29tcG9uZW50MiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmcgPSAnSG9tZSBQYWdlJztcbiAgYm9keTogIHN0cmluZyA9ICdUaGlzIGlzIHRoZSBhYm91dCBob21lIGJvZHknO1xuICBtZXNzYWdlOiBzdHJpbmc9J3Nhcyc7XG4gIFxuIEhvbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcbiAgfVxuIFxuSG93SXRXb3JrMihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb3dJdFdvcmsyJ10pO1xuICB9IFxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
