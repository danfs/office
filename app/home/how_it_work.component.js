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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG93X2l0X3dvcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUFBO29CQUNFLFVBQUssR0FBVyxXQUFXLENBQUM7b0JBQzVCLFNBQUksR0FBWSw2QkFBNkIsQ0FBQztvQkFDOUMsWUFBTyxHQUFTLEtBQUssQ0FBQztnQkFZeEIsQ0FBQztnQkFURCxpQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDTixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFSCx1Q0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDWixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFqQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBRS9CLFVBQVUsRUFBRTs0QkFDWixjQUFPLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQ3hCLFlBQUssQ0FBQyxJQUFJLEVBQUUsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUM7Z0NBQ2hELGlCQUFVLENBQUMsV0FBVyxFQUFFO29DQUN0QixZQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztvQ0FDdkMsY0FBTyxDQUFDLEdBQUcsQ0FBQztpQ0FDYixDQUFDO2dDQUNGLGlCQUFVLENBQUMsV0FBVyxFQUFFO29DQUN0QixjQUFPLENBQUMsR0FBRyxFQUFFLFlBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7aUNBQ3JELENBQUM7NkJBQ0gsQ0FBQzt5QkFDSDtxQkFFQSxDQUFDOztzQ0FBQTtnQkFnQkYseUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELG1EQWVDLENBQUEiLCJmaWxlIjoiaG9tZS9ob3dfaXRfd29yay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7dHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3R5bGUsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlckxpbmssIFJvdXRlck91dGxldCxPbkRlYWN0aXZhdGUsQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBSeCBmcm9tICdyeGpzL1J4JztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvd19pdF93b3JrJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9ob3dfaXRfd29yay5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gIFxuICBhbmltYXRpb25zOiBbXG4gIHRyaWdnZXIoJ3JvdXRlQW5pbWF0aW9uJywgW1xuICAgIHN0YXRlKCdpbicsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJ30pKSxcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknfSksXG4gICAgICBhbmltYXRlKDEwMClcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBhbmltYXRlKDEwMCwgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknfSkpXG4gICAgXSlcbiAgXSlcbl1cblxufSlcbmV4cG9ydCBjbGFzcyBIb3dJdFdvcmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZTogc3RyaW5nID0gJ0hvbWUgUGFnZSc7XG4gIGJvZHk6ICBzdHJpbmcgPSAnVGhpcyBpcyB0aGUgYWJvdXQgaG9tZSBib2R5JztcbiAgbWVzc2FnZTogc3RyaW5nPSdzYXMnO1xuICBcblxuSG9tZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuICB9XG4gXG5Ib3dJdFdvcmsxKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvd0l0V29yazEnXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
