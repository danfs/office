System.register(['angular2/core', '@angular/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, core_2, router_1;
    var HowItWorkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
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
                HowItWorkComponent.prototype.Map = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Map']);
                };
                HowItWorkComponent = __decorate([
                    core_1.Component({
                        selector: 'how_it_work',
                        templateUrl: 'dev/home/how_it_work.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        animations: [
                            core_2.trigger('routeAnimation', [
                                core_2.state('in', core_2.style({ transform: 'translateX(0)' })),
                                core_2.transition('void => *', [
                                    core_2.style({ transform: 'translateX(-100%)' }),
                                    core_2.animate(100)
                                ]),
                                core_2.transition('* => void', [
                                    core_2.animate(100, core_2.style({ transform: 'translateX(100%)' }))
                                ])
                            ])
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HowItWorkComponent);
                return HowItWorkComponent;
            }());
            exports_1("HowItWorkComponent", HowItWorkComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG93X2l0X3dvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUFBO29CQUNFLFVBQUssR0FBVyxXQUFXLENBQUM7b0JBQzVCLFNBQUksR0FBWSw2QkFBNkIsQ0FBQztvQkFDOUMsWUFBTyxHQUFTLEtBQUssQ0FBQztnQkFnQnhCLENBQUM7Z0JBYkQsaUNBQUksR0FBSixVQUFLLEtBQUs7b0JBQ04sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUgsdUNBQVUsR0FBVixVQUFXLEtBQUs7b0JBQ1osS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQ0gsZ0NBQUcsR0FBSCxVQUFJLEtBQUs7b0JBQ0wsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBckNIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUUvQixVQUFVLEVBQUU7NEJBQ1osY0FBTyxDQUFDLGdCQUFnQixFQUFFO2dDQUN4QixZQUFLLENBQUMsSUFBSSxFQUFFLFlBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQyxDQUFDO2dDQUNoRCxpQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDdEIsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFDLENBQUM7b0NBQ3ZDLGNBQU8sQ0FBQyxHQUFHLENBQUM7aUNBQ2IsQ0FBQztnQ0FDRixpQkFBVSxDQUFDLFdBQVcsRUFBRTtvQ0FDdEIsY0FBTyxDQUFDLEdBQUcsRUFBRSxZQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO2lDQUNyRCxDQUFDOzZCQUNILENBQUM7eUJBQ0g7cUJBRUEsQ0FBQzs7c0NBQUE7Z0JBb0JGLHlCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCxtREFtQkMsQ0FBQSIsImZpbGUiOiJob21lL2hvd19pdF93b3JrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHt0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyTGluaywgUm91dGVyT3V0bGV0LE9uRGVhY3RpdmF0ZSxDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCAqIGFzIFJ4IGZyb20gJ3J4anMvUngnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG93X2l0X3dvcmsnLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL2hvd19pdF93b3JrLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgXG4gIGFuaW1hdGlvbnM6IFtcbiAgdHJpZ2dlcigncm91dGVBbmltYXRpb24nLCBbXG4gICAgc3RhdGUoJ2luJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSkpLFxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKSd9KSxcbiAgICAgIGFuaW1hdGUoMTAwKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIGFuaW1hdGUoMTAwLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKSd9KSlcbiAgICBdKVxuICBdKVxuXVxuXG59KVxuZXhwb3J0IGNsYXNzIEhvd0l0V29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmcgPSAnSG9tZSBQYWdlJztcbiAgYm9keTogIHN0cmluZyA9ICdUaGlzIGlzIHRoZSBhYm91dCBob21lIGJvZHknO1xuICBtZXNzYWdlOiBzdHJpbmc9J3Nhcyc7XG4gIFxuXG5Ib21lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG4gIH1cbiBcbkhvd0l0V29yazEoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG93SXRXb3JrMSddKTtcbiAgfVxuTWFwKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ01hcCddKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
