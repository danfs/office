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
    var HowItWorkComponent3;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HowItWorkComponent3 = (function () {
                function HowItWorkComponent3() {
                    this.title = 'Home Page';
                    this.body = 'This is the about home body';
                    this.message = 'sas';
                }
                HowItWorkComponent3.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                HowItWorkComponent3.prototype.HowItWork2 = function (event) {
                    event.preventDefault();
                    this.router.navigate(['HowItWork2']);
                };
                HowItWorkComponent3.prototype.Map = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Map']);
                };
                HowItWorkComponent3 = __decorate([
                    core_1.Component({
                        selector: 'how_it_work3',
                        templateUrl: 'dev/home/how_it_work3.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HowItWorkComponent3);
                return HowItWorkComponent3;
            }());
            exports_1("HowItWorkComponent3", HowItWorkComponent3);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG93X2l0X3dvcmszLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUFBO29CQUNFLFVBQUssR0FBVyxXQUFXLENBQUM7b0JBQzVCLFNBQUksR0FBWSw2QkFBNkIsQ0FBQztvQkFDOUMsWUFBTyxHQUFTLEtBQUssQ0FBQztnQkFnQnhCLENBQUM7Z0JBZEEsa0NBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1AsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUgsd0NBQVUsR0FBVixVQUFXLEtBQUs7b0JBQ1osS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQ0YsaUNBQUcsR0FBSCxVQUFJLEtBQUs7b0JBQ04sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBdEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkFvQkYsMEJBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELHFEQW1CQyxDQUFBIiwiZmlsZSI6ImhvbWUvaG93X2l0X3dvcmszLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBSb3V0ZXJMaW5rLCBSb3V0ZXJPdXRsZXQgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob3dfaXRfd29yazMnLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL2hvd19pdF93b3JrMy5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIEhvd0l0V29ya0NvbXBvbmVudDMgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZTogc3RyaW5nID0gJ0hvbWUgUGFnZSc7XG4gIGJvZHk6ICBzdHJpbmcgPSAnVGhpcyBpcyB0aGUgYWJvdXQgaG9tZSBib2R5JztcbiAgbWVzc2FnZTogc3RyaW5nPSdzYXMnO1xuICBcbiBIb21lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG4gIH1cbiBcbkhvd0l0V29yazIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG93SXRXb3JrMiddKTtcbiAgfVxuIE1hcChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydNYXAnXSk7XG4gIH0gXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
