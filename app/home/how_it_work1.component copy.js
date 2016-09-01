System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HowItWorkComponent1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HowItWorkComponent1 = (function () {
                function HowItWorkComponent1() {
                    this.title = 'Home Page';
                    this.body = 'This is the about home body';
                    this.message = 'sas';
                }
                HowItWorkComponent1.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                HowItWorkComponent1.prototype.HowItWork2 = function (event) {
                    event.preventDefault();
                    this.router.navigate(['HowItWork2']);
                };
                HowItWorkComponent1 = __decorate([
                    core_1.Component({
                        selector: 'how_it_work1',
                        templateUrl: 'dev/home/how_it_work1.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], HowItWorkComponent1);
                return HowItWorkComponent1;
            }());
            exports_1("HowItWorkComponent1", HowItWorkComponent1);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG93X2l0X3dvcmsxLmNvbXBvbmVudCBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztvQkFDNUIsU0FBSSxHQUFZLDZCQUE2QixDQUFDO29CQUM5QyxZQUFPLEdBQVMsS0FBSyxDQUFDO2dCQVl4QixDQUFDO2dCQVZBLGtDQUFJLEdBQUosVUFBSyxLQUFLO29CQUNQLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVILHdDQUFVLEdBQVYsVUFBVyxLQUFLO29CQUNaLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQWpCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsc0NBQXNDO3FCQUNwRCxDQUFDOzt1Q0FBQTtnQkFnQkYsMEJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHFEQWVDLENBQUEiLCJmaWxlIjoiaG9tZS9ob3dfaXRfd29yazEuY29tcG9uZW50IGNvcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG93X2l0X3dvcmsxJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9ob3dfaXRfd29yazEuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIb3dJdFdvcmtDb21wb25lbnQxIGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZyA9ICdIb21lIFBhZ2UnO1xuICBib2R5OiAgc3RyaW5nID0gJ1RoaXMgaXMgdGhlIGFib3V0IGhvbWUgYm9keSc7XG4gIG1lc3NhZ2U6IHN0cmluZz0nc2FzJztcbiAgXG4gSG9tZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuICB9XG4gXG5Ib3dJdFdvcmsyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvd0l0V29yazInXSk7XG4gIH0gXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
