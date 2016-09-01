System.register(['angular2/core', 'angular2-google-maps/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                    //constructor(private googlemapprovider: GOOGLE_MAPS_PROVIDERS) {}
                    this.title = 'My first angular2-google-maps project';
                    this.lat = 51.678418;
                    this.lng = 7.809007;
                }
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map',
                        templateUrl: 'dev/home/map.component.html',
                        //directives: [GOOGLE_MAPS_DIRECTIVES],
                        providers: [core_2.ANGULAR2_GOOGLE_MAPS_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//bootstrap(MapComponent, [GOOGLE_MAPS_PROVIDERS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbWFwLmNvbXBvbmVudCBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7b0JBQ0Esa0VBQWtFO29CQUNqRSxVQUFLLEdBQVcsdUNBQXVDLENBQUM7b0JBQ3ZELFFBQUcsR0FBVyxTQUFTLENBQUM7b0JBQ3hCLFFBQUcsR0FBVyxRQUFRLENBQUM7Z0JBQ3pCLENBQUM7Z0JBWEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsS0FBSzt3QkFDZixXQUFXLEVBQUUsNkJBQTZCO3dCQUMxQyx1Q0FBdUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHFDQUE4QixDQUFDO3FCQUM1QyxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsdUNBS0MsQ0FBQTs7OztBQUNELG1EQUFtRCIsImZpbGUiOiJob21lL21hcC5jb21wb25lbnQgY29weS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBTkdVTEFSMl9HT09HTEVfTUFQU19QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUnO1xuaW1wb3J0IHtHT09HTEVfTUFQU19ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9tYXAuY29tcG9uZW50Lmh0bWwnLFxuICAvL2RpcmVjdGl2ZXM6IFtHT09HTEVfTUFQU19ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbQU5HVUxBUjJfR09PR0xFX01BUFNfUFJPVklERVJTXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZW1hcHByb3ZpZGVyOiBHT09HTEVfTUFQU19QUk9WSURFUlMpIHt9XG4gdGl0bGU6IHN0cmluZyA9ICdNeSBmaXJzdCBhbmd1bGFyMi1nb29nbGUtbWFwcyBwcm9qZWN0JztcbiAgbGF0OiBudW1iZXIgPSA1MS42Nzg0MTg7XG4gIGxuZzogbnVtYmVyID0gNy44MDkwMDc7XG59XG4vL2Jvb3RzdHJhcChNYXBDb21wb25lbnQsIFtHT09HTEVfTUFQU19QUk9WSURFUlNdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
