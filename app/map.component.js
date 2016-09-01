System.register(['angular2/core', 'angular2/platform/browser', 'angular2-google-maps/core'], function(exports_1, context_1) {
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
    var core_1, browser_1, core_2, core_3;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
            }],
        execute: function() {
            //map
            MapComponent = (function () {
                function MapComponent() {
                    // google maps zoom level
                    this.zoom = 8;
                    // initial center position for the map
                    this.lat = 51.673858;
                    this.lng = 7.815982;
                    this.markers = [
                        {
                            lat: 51.673858,
                            lng: 7.815982,
                            label: 'A',
                            draggable: true
                        },
                        {
                            lat: 51.373858,
                            lng: 7.215982,
                            label: 'B',
                            draggable: false
                        },
                        {
                            lat: 51.723858,
                            lng: 7.895982,
                            label: 'C',
                            draggable: true
                        }
                    ];
                }
                MapComponent.prototype.clickedMarker = function (label, index) {
                    console.log("clicked the marker: " + (label || index));
                };
                MapComponent.prototype.mapClicked = function ($event) {
                    this.markers.push({
                        lat: $event.coords.lat,
                        lng: $event.coords.lng
                    });
                };
                MapComponent.prototype.markerDragEnd = function (m, $event) {
                    console.log('dragEnd', m, $event);
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map',
                        directives: [core_3.GOOGLE_MAPS_DIRECTIVES],
                        styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
                        template: "\n    <sebm-google-map \n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [zoom]=\"zoom\"\n      [disableDefaultUI]=\"false\"\n      [zoomControl]=\"false\"\n      (mapClick)=\"mapClicked($event)\">\n    \n      <sebm-google-map-marker \n          *ngFor=\"let m of markers; let i = index\"\n          (markerClick)=\"clickedMarker(m.label, i)\"\n          [latitude]=\"m.lat\"\n          [longitude]=\"m.lng\"\n          [label]=\"m.label\"\n          [markerDraggable]=\"m.draggable\"\n          (dragEnd)=\"markerDragEnd(m, $event)\">\n          \n        <sebm-google-map-info-window>\n          <strong>InfoWindow content</strong>\n        </sebm-google-map-info-window>\n        \n      </sebm-google-map-marker>\n      \n      <sebm-google-map-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \n          [radius]=\"5000\"\n          [fillColor]=\"'red'\"\n          [circleDraggable]=\"true\"\n          [editable]=\"true\">\n      </sebm-google-map-circle>\n\n    </sebm-google-map>\n" }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
            browser_1.bootstrap(MapComponent, [core_2.GOOGLE_MAPS_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0EsS0FBSztZQTBDTDtnQkFBQTtvQkFDRSx5QkFBeUI7b0JBQ3pCLFNBQUksR0FBVyxDQUFDLENBQUM7b0JBRWpCLHNDQUFzQztvQkFDdEMsUUFBRyxHQUFXLFNBQVMsQ0FBQztvQkFDeEIsUUFBRyxHQUFXLFFBQVEsQ0FBQztvQkFpQnZCLFlBQU8sR0FBYTt3QkFDbkI7NEJBQ0MsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsR0FBRyxFQUFFLFFBQVE7NEJBQ2IsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsU0FBUyxFQUFFLElBQUk7eUJBQ2Y7d0JBQ0Q7NEJBQ0MsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsR0FBRyxFQUFFLFFBQVE7NEJBQ2IsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsU0FBUyxFQUFFLEtBQUs7eUJBQ2hCO3dCQUNEOzRCQUNDLEdBQUcsRUFBRSxTQUFTOzRCQUNkLEdBQUcsRUFBRSxRQUFROzRCQUNiLEtBQUssRUFBRSxHQUFHOzRCQUNWLFNBQVMsRUFBRSxJQUFJO3lCQUNmO3FCQUNELENBQUE7Z0JBQ0gsQ0FBQztnQkFuQ0Msb0NBQWEsR0FBYixVQUFjLEtBQWEsRUFBRSxLQUFhO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF1QixLQUFLLElBQUksS0FBSyxDQUFFLENBQUMsQ0FBQTtnQkFDdEQsQ0FBQztnQkFFRCxpQ0FBVSxHQUFWLFVBQVcsTUFBa0I7b0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHO3dCQUN0QixHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHO3FCQUN2QixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxvQ0FBYSxHQUFiLFVBQWMsQ0FBUyxFQUFFLE1BQWtCO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBOURIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsVUFBVSxFQUFFLENBQUMsNkJBQXNCLENBQUM7d0JBQ3BDLE1BQU0sRUFBRSxDQUFDLHVFQUlSLENBQUM7d0JBQ0YsUUFBUSxFQUFFLGcvQkFnQ1gsRUFBQyxDQUFDOztnQ0FBQTtnQkE0Q0gsbUJBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELHVDQTJDQyxDQUFBO1lBRUQsbUJBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyw0QkFBcUIsQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtHT09HTEVfTUFQU19QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWFwc0FQSUxvYWRlcixcbiAgTm9PcE1hcHNBUElMb2FkZXIsXG4gIE1vdXNlRXZlbnQsXG4gIEdPT0dMRV9NQVBTX1BST1ZJREVSUyxcbiAgR09PR0xFX01BUFNfRElSRUNUSVZFU1xufSBmcm9tICdhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlJztcblxuLy9tYXBcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcCcsXG4gIGRpcmVjdGl2ZXM6IFtHT09HTEVfTUFQU19ESVJFQ1RJVkVTXSxcbiAgc3R5bGVzOiBbYFxuICAgIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWJtLWdvb2dsZS1tYXAgXG4gICAgICBbbGF0aXR1ZGVdPVwibGF0XCJcbiAgICAgIFtsb25naXR1ZGVdPVwibG5nXCJcbiAgICAgIFt6b29tXT1cInpvb21cIlxuICAgICAgW2Rpc2FibGVEZWZhdWx0VUldPVwiZmFsc2VcIlxuICAgICAgW3pvb21Db250cm9sXT1cImZhbHNlXCJcbiAgICAgIChtYXBDbGljayk9XCJtYXBDbGlja2VkKCRldmVudClcIj5cbiAgICBcbiAgICAgIDxzZWJtLWdvb2dsZS1tYXAtbWFya2VyIFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBtIG9mIG1hcmtlcnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIChtYXJrZXJDbGljayk9XCJjbGlja2VkTWFya2VyKG0ubGFiZWwsIGkpXCJcbiAgICAgICAgICBbbGF0aXR1ZGVdPVwibS5sYXRcIlxuICAgICAgICAgIFtsb25naXR1ZGVdPVwibS5sbmdcIlxuICAgICAgICAgIFtsYWJlbF09XCJtLmxhYmVsXCJcbiAgICAgICAgICBbbWFya2VyRHJhZ2dhYmxlXT1cIm0uZHJhZ2dhYmxlXCJcbiAgICAgICAgICAoZHJhZ0VuZCk9XCJtYXJrZXJEcmFnRW5kKG0sICRldmVudClcIj5cbiAgICAgICAgICBcbiAgICAgICAgPHNlYm0tZ29vZ2xlLW1hcC1pbmZvLXdpbmRvdz5cbiAgICAgICAgICA8c3Ryb25nPkluZm9XaW5kb3cgY29udGVudDwvc3Ryb25nPlxuICAgICAgICA8L3NlYm0tZ29vZ2xlLW1hcC1pbmZvLXdpbmRvdz5cbiAgICAgICAgXG4gICAgICA8L3NlYm0tZ29vZ2xlLW1hcC1tYXJrZXI+XG4gICAgICBcbiAgICAgIDxzZWJtLWdvb2dsZS1tYXAtY2lyY2xlIFtsYXRpdHVkZV09XCJsYXQgKyAwLjNcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFxuICAgICAgICAgIFtyYWRpdXNdPVwiNTAwMFwiXG4gICAgICAgICAgW2ZpbGxDb2xvcl09XCIncmVkJ1wiXG4gICAgICAgICAgW2NpcmNsZURyYWdnYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICBbZWRpdGFibGVdPVwidHJ1ZVwiPlxuICAgICAgPC9zZWJtLWdvb2dsZS1tYXAtY2lyY2xlPlxuXG4gICAgPC9zZWJtLWdvb2dsZS1tYXA+XG5gfSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnR7XG4gIC8vIGdvb2dsZSBtYXBzIHpvb20gbGV2ZWxcbiAgem9vbTogbnVtYmVyID0gODtcbiAgXG4gIC8vIGluaXRpYWwgY2VudGVyIHBvc2l0aW9uIGZvciB0aGUgbWFwXG4gIGxhdDogbnVtYmVyID0gNTEuNjczODU4O1xuICBsbmc6IG51bWJlciA9IDcuODE1OTgyO1xuICBcbiAgY2xpY2tlZE1hcmtlcihsYWJlbDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgdGhlIG1hcmtlcjogJHtsYWJlbCB8fCBpbmRleH1gKVxuICB9XG4gIFxuICBtYXBDbGlja2VkKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMubWFya2Vycy5wdXNoKHtcbiAgICAgIGxhdDogJGV2ZW50LmNvb3Jkcy5sYXQsXG4gICAgICBsbmc6ICRldmVudC5jb29yZHMubG5nXG4gICAgfSk7XG4gIH1cbiAgXG4gIG1hcmtlckRyYWdFbmQobTogbWFya2VyLCAkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZHJhZ0VuZCcsIG0sICRldmVudCk7XG4gIH1cbiAgXG4gIG1hcmtlcnM6IG1hcmtlcltdID0gW1xuXHQgIHtcblx0XHQgIGxhdDogNTEuNjczODU4LFxuXHRcdCAgbG5nOiA3LjgxNTk4Mixcblx0XHQgIGxhYmVsOiAnQScsXG5cdFx0ICBkcmFnZ2FibGU6IHRydWVcblx0ICB9LFxuXHQgIHtcblx0XHQgIGxhdDogNTEuMzczODU4LFxuXHRcdCAgbG5nOiA3LjIxNTk4Mixcblx0XHQgIGxhYmVsOiAnQicsXG5cdFx0ICBkcmFnZ2FibGU6IGZhbHNlXG5cdCAgfSxcblx0ICB7XG5cdFx0ICBsYXQ6IDUxLjcyMzg1OCxcblx0XHQgIGxuZzogNy44OTU5ODIsXG5cdFx0ICBsYWJlbDogJ0MnLFxuXHRcdCAgZHJhZ2dhYmxlOiB0cnVlXG5cdCAgfVxuICBdXG59XG5cbmJvb3RzdHJhcChNYXBDb21wb25lbnQsIFtHT09HTEVfTUFQU19QUk9WSURFUlNdKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
