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
    var HowItWorkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HowItWorkComponent = (function () {
                function HowItWorkComponent() {
                    this.title = 'Home Page';
                    this.body = 'This is the about home body';
                    this.message = 'sas';
                }
                HowItWorkComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                HowItWorkComponent.prototype.HowItWork1 = function (event) {
                    event.preventDefault();
                    this.router.navigate(['HowItWork1']);
                };
                HowItWorkComponent = __decorate([
                    core_1.Component({
                        selector: 'how_it_work',
                        templateUrl: 'dev/home/how_it_work.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HowItWorkComponent);
                return HowItWorkComponent;
            }());
            exports_1("HowItWorkComponent", HowItWorkComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG93X2l0X3dvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztvQkFDNUIsU0FBSSxHQUFZLDZCQUE2QixDQUFDO29CQUM5QyxZQUFPLEdBQVMsS0FBSyxDQUFDO2dCQVl4QixDQUFDO2dCQVRELGlDQUFJLEdBQUosVUFBSyxLQUFLO29CQUNOLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVILHVDQUFVLEdBQVYsVUFBVyxLQUFLO29CQUNaLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQW5CSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7c0NBQUE7Z0JBZ0JGLHlCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxtREFlQyxDQUFBIiwiZmlsZSI6ImhvbWUvaG93X2l0X3dvcmsuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckxpbmssIFJvdXRlck91dGxldCB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvd19pdF93b3JrJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9ob3dfaXRfd29yay5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIEhvd0l0V29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmcgPSAnSG9tZSBQYWdlJztcbiAgYm9keTogIHN0cmluZyA9ICdUaGlzIGlzIHRoZSBhYm91dCBob21lIGJvZHknO1xuICBtZXNzYWdlOiBzdHJpbmc9J3Nhcyc7XG4gIFxuXG5Ib21lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG4gIH1cbiBcbkhvd0l0V29yazEoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG93SXRXb3JrMSddKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
