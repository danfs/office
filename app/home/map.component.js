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
    var core_1, router_1, router_2;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(_router) {
                    this._router = _router;
                }
                MapComponent.prototype.ngOnInit = function () {
                    var markers = [];
                    $.ajax({
                        url: "api/users/tabmarker",
                        type: "POST",
                        beforeSend: function () { },
                        success: function (response) {
                            var obj = $.parseJSON(response);
                            if (obj.status == "success") {
                                var decoded = $("<div/>").html(obj.html).text();
                                $('#aftertabmarker').html(decoded);
                            }
                            else if (obj.status == "fail") {
                            }
                        }
                    });
                    // Basic options for a simple Google Map
                    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                    var mapOptions = {
                        zoom: 13,
                        center: new google.maps.LatLng(26.8531, 75.7981),
                        disableDefaultUI: true,
                        //mapTypeControl: true,
                        //scaleControl: true,
                        zoomControl: true,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.TOP_RIGHT,
                        },
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        styles: [{ "featureType": "all", "elementType": "labels.text", "stylers": [{ "color": "#a1f7ff" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 13 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#a1f7ff" }] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#a1f7ff" }] }, { "featureType": "administrative.locality", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#a1f7ff" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#a1f7ff" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#08304b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }] }, { "featureType": "poi.attraction", "elementType": "labels", "stylers": [{ "invert_lightness": true }] }, { "featureType": "poi.attraction", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#a1f7ff" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "invert_lightness": true }] }, { "featureType": "poi.park", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#a1f7ff" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#a1f7ff" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "lightness": "0" }, { "saturation": "0" }, { "invert_lightness": true }, { "visibility": "simplified" }, { "hue": "#00e9ff" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#a1f7ff" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text", "stylers": [{ "color": "#a1f7ff" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "invert_lightness": true }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.local", "elementType": "labels", "stylers": [{ "visibility": "simplified" }, { "invert_lightness": true }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "color": "#146474" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#021019" }] }]
                    };
                    // Get the HTML DOM element that will contain your map 
                    // We are using a div with id="map" seen below in the <body>
                    var mapElement = document.getElementById('map');
                    // Create the Google Map using our element and options defined above
                    var map = new google.maps.Map(mapElement, mapOptions);
                    // Let's also add a marker while we're at it
                    // var marker = new google.maps.Marker({
                    //  position: new google.maps.LatLng(40.6700, -73.9400),
                    // map: map,
                    //title: 'Snazzy!'
                    // });
                    var marker = '';
                    $.ajax({
                        url: "api/users/getmarker",
                        type: "POST",
                        beforeSend: function () { },
                        success: function (response) {
                            var obj = $.parseJSON(response);
                            if (obj.status == "success") {
                                $(obj.vals).each(function (index) {
                                    var title = $(this)['0'].name;
                                    var id = $(this)['0'].id;
                                    var point = new google.maps.LatLng(parseFloat($(this)['0'].lat), parseFloat($(this)['0'].long));
                                    //create_marker(point, false, false, false, false, false, "http://PATH-TO-YOUR-WEBSITE-ICON/icons/pin_blue.png");
                                    create_marker(point, title, false, false, false, false, false, id);
                                });
                            }
                            else if (obj.status == "fail") {
                            }
                        }
                    });
                    //############### Create Marker Function ##############
                    function create_marker(MapPos, MapTitle, MapDesc, InfoOpenDefault, DragAble, Removable, iconPath, markerId) {
                        //new marker
                        var marker = new google.maps.Marker({
                            position: MapPos,
                            map: map,
                            draggable: DragAble,
                            //animation: google.maps.Animation.DROP,
                            title: MapTitle,
                            icon: 'src/img/whhite-marker.png',
                            id: markerId
                        });
                        //add click listner to save marker button        
                        google.maps.event.addListener(marker, 'click', function () {
                            //alert(marker.id);
                            $('#tabmarker').hide();
                            $('#aftertabmarker').show();
                            $('#aftertabmarker').attr('rel', marker.id);
                            $('.hidden_marler_value').hide();
                            $('#marker_' + marker.id).show();
                            $('.selected_marker').attr('id', marker.id);
                            //
                            for (var i = 0; i < markers.length; i++) {
                                markers[i].setIcon('src/img/whhite-marker.png');
                            }
                            marker.setIcon("src/img/marker.png");
                            // infowindow.open(map,marker); // click on marker opens info window 
                        });
                        markers.push(marker);
                    }
                    $(document).on('click', '#aftertabmarker', function () {
                        $('.selected_marker').trigger('click');
                    });
                };
                MapComponent.prototype.select_location = function (event) {
                    event.preventDefault();
                    //alert(event.currentTarget.id);
                    this._router.navigate(['MapPicker', { id: event.currentTarget.id }]);
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map',
                        templateUrl: 'dev/home/map.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_2.Router])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMseUJBQXlCLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMseUJBQXlCLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsNkJBQTZCLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxnQ0FBZ0MsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsRUFBQyxFQUFDLFdBQVcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxT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QUFDO2dCQUNwRSxDQUFDO2dCQWhKSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxLQUFLO3dCQUNmLFdBQVcsRUFBRSw2QkFBNkI7d0JBQzFDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOztnQ0FBQTtnQkE4SUYsbUJBQUM7WUFBRCxDQTdJQSxBQTZJQyxJQUFBO1lBN0lELHVDQTZJQyxDQUFBIiwiZmlsZSI6ImhvbWUvbWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gIHZhciBtYXJrZXJzID0gW107XG4gICQuYWpheCh7XG5cdFx0XHRcdFx0dXJsOlwiYXBpL3VzZXJzL3RhYm1hcmtlclwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhciBkZWNvZGVkID0gJChcIjxkaXYvPlwiKS5odG1sKG9iai5odG1sKS50ZXh0KCk7XG5cdFx0XHRcdFx0XHQkKCcjYWZ0ZXJ0YWJtYXJrZXInKS5odG1sKGRlY29kZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImZhaWxcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdH0pXG4gIFxuICBcbiAgICAgICAgICAgICAgICAvLyBCYXNpYyBvcHRpb25zIGZvciBhIHNpbXBsZSBHb29nbGUgTWFwXG4gICAgICAgICAgICAgICAgLy8gRm9yIG1vcmUgb3B0aW9ucyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBPcHRpb25zXG4gICAgICAgICAgICAgICAgdmFyIG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHpvb206IDEzLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMjYuODUzMSwgNzUuNzk4MSksIC8vIE5ldyBZb3JrXG5cdFx0XHRcdFx0ZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSwgLy8gYSB3YXkgdG8gcXVpY2tseSBoaWRlIGFsbCBjb250cm9sc1xuXHRcdFx0XHRcdC8vbWFwVHlwZUNvbnRyb2w6IHRydWUsXG5cdFx0XHRcdFx0Ly9zY2FsZUNvbnRyb2w6IHRydWUsXG5cdFx0XHRcdFx0em9vbUNvbnRyb2w6IHRydWUsXG5cdFx0XHRcdFx0em9vbUNvbnRyb2xPcHRpb25zOiB7XG5cdFx0XHRcdFx0c3R5bGU6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGUuTEFSR0UsXG5cdFx0XHRcdFx0cG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfUklHSFQsIFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuXHRcdFx0XHRcdHN0eWxlczogW3tcImZlYXR1cmVUeXBlXCI6XCJhbGxcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2ExZjdmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhbGxcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZmZmZmZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFsbFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LnN0cm9rZVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwifSx7XCJsaWdodG5lc3NcIjoxM31dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDAwMDAwXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnkuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMTQ0YjUzXCJ9LHtcImxpZ2h0bmVzc1wiOjE0fSx7XCJ3ZWlnaHRcIjoxLjR9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHRcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifSx7XCJjb2xvclwiOlwiI2ExZjdmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0XCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn0se1wiY29sb3JcIjpcIiNhMWY3ZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9LHtcImNvbG9yXCI6XCIjYTFmN2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlLm5laWdoYm9yaG9vZFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0XCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn0se1wiY29sb3JcIjpcIiNhMWY3ZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDgzMDRiXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMGM0MTUyXCJ9LHtcImxpZ2h0bmVzc1wiOjV9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaS5hdHRyYWN0aW9uXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzXCIsXCJzdHlsZXJzXCI6W3tcImludmVydF9saWdodG5lc3NcIjp0cnVlfV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2kuYXR0cmFjdGlvblwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0XCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn0se1wiY29sb3JcIjpcIiNhMWY3ZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pLnBhcmtcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHNcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn0se1wiaW52ZXJ0X2xpZ2h0bmVzc1wiOnRydWV9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaS5wYXJrXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHRcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifSx7XCJjb2xvclwiOlwiI2ExZjdmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHRcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNhMWY3ZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5oaWdod2F5XCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnkuZmlsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5zdHJva2VcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiMwYjQzNGZcIn0se1wibGlnaHRuZXNzXCI6MjV9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVsc1wiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjpcIjBcIn0se1wic2F0dXJhdGlvblwiOlwiMFwifSx7XCJpbnZlcnRfbGlnaHRuZXNzXCI6dHJ1ZX0se1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifSx7XCJodWVcIjpcIiMwMGU5ZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5oaWdod2F5XCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHRcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifSx7XCJjb2xvclwiOlwiI2ExZjdmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3NcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2ExZjdmZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnkuZmlsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnkuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMGIzZDUxXCJ9LHtcImxpZ2h0bmVzc1wiOjE2fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzXCIsXCJzdHlsZXJzXCI6W3tcImludmVydF9saWdodG5lc3NcIjp0cnVlfV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmxvY2FsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiMwMDAwMDBcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5sb2NhbFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVsc1wiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9LHtcImludmVydF9saWdodG5lc3NcIjp0cnVlfV19LHtcImZlYXR1cmVUeXBlXCI6XCJ0cmFuc2l0XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMTQ2NDc0XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDIxMDE5XCJ9XX1dXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgSFRNTCBET00gZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB5b3VyIG1hcCBcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgdXNpbmcgYSBkaXYgd2l0aCBpZD1cIm1hcFwiIHNlZW4gYmVsb3cgaW4gdGhlIDxib2R5PlxuICAgICAgICAgICAgICAgIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBHb29nbGUgTWFwIHVzaW5nIG91ciBlbGVtZW50IGFuZCBvcHRpb25zIGRlZmluZWQgYWJvdmVcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIC8vIExldCdzIGFsc28gYWRkIGEgbWFya2VyIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgICAgICAgICAgICAvLyB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAvLyAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDAuNjcwMCwgLTczLjk0MDApLFxuICAgICAgICAgICAgICAgICAgIC8vIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgICAgICAvL3RpdGxlOiAnU25henp5ISdcbiAgICAgICAgICAgICAgIC8vIH0pO1xuXHRcdFx0XHR2YXIgbWFya2VyID0nJztcblx0XHRcdFx0JC5hamF4KHtcblx0XHRcdFx0XHR1cmw6XCJhcGkvdXNlcnMvZ2V0bWFya2VyXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJQT1NUXCIsXG5cdFx0XHRcdFx0YmVmb3JlU2VuZDpmdW5jdGlvbigpXG5cdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQkKG9iai52YWxzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGl0bGUgICAgID0gJCh0aGlzKVsnMCddLm5hbWU7XG5cdFx0XHRcdFx0XHRcdHZhciBpZCAgICAgPSAkKHRoaXMpWycwJ10uaWQ7XG5cdFx0XHRcdFx0XHRcdCB2YXIgcG9pbnQgICAgID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwYXJzZUZsb2F0KCQodGhpcylbJzAnXS5sYXQpLHBhcnNlRmxvYXQoJCh0aGlzKVsnMCddLmxvbmcpKTtcbiAgICAgICAgICAgICAgICAgIFx0XHRcdC8vY3JlYXRlX21hcmtlcihwb2ludCwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBcImh0dHA6Ly9QQVRILVRPLVlPVVItV0VCU0lURS1JQ09OL2ljb25zL3Bpbl9ibHVlLnBuZ1wiKTtcblx0XHRcdFx0XHRcdFx0Y3JlYXRlX21hcmtlcihwb2ludCwgdGl0bGUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLGZhbHNlLGlkKTtcblx0XHRcdFx0XHRcdFx0IH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImZhaWxcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdH0pXG5cdFx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIyMjIyMjIyMjIyMjIyMjIENyZWF0ZSBNYXJrZXIgRnVuY3Rpb24gIyMjIyMjIyMjIyMjIyNcbmZ1bmN0aW9uIGNyZWF0ZV9tYXJrZXIoTWFwUG9zLCBNYXBUaXRsZSwgTWFwRGVzYywgIEluZm9PcGVuRGVmYXVsdCwgRHJhZ0FibGUsIFJlbW92YWJsZSwgaWNvblBhdGgsbWFya2VySWQpXG57ICAgICAgICAgICAgICAgXG4gICAgLy9uZXcgbWFya2VyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogTWFwUG9zLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZHJhZ2dhYmxlOkRyYWdBYmxlLFxuICAgICAgICAvL2FuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgIHRpdGxlOk1hcFRpdGxlLFxuICAgICAgICBpY29uOiAnc3JjL2ltZy93aGhpdGUtbWFya2VyLnBuZycsXG5cdFx0aWQ6IG1hcmtlcklkXG4gICAgfSk7XG5cdFxuXHRcbiAgICBcbiAgICAvL2FkZCBjbGljayBsaXN0bmVyIHRvIHNhdmUgbWFya2VyIGJ1dHRvbiAgICAgICAgXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0Ly9hbGVydChtYXJrZXIuaWQpO1xuXHQkKCcjdGFibWFya2VyJykuaGlkZSgpO1xuXHQkKCcjYWZ0ZXJ0YWJtYXJrZXInKS5zaG93KCk7XG5cdCQoJyNhZnRlcnRhYm1hcmtlcicpLmF0dHIoJ3JlbCcsbWFya2VyLmlkKTtcblx0JCgnLmhpZGRlbl9tYXJsZXJfdmFsdWUnKS5oaWRlKCk7XG5cdCQoJyNtYXJrZXJfJyttYXJrZXIuaWQpLnNob3coKTtcblx0JCgnLnNlbGVjdGVkX21hcmtlcicpLmF0dHIoJ2lkJyxtYXJrZXIuaWQpO1xuXHQvL1xuXHRmb3IgKHZhciBpPTA7IGk8bWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgbWFya2Vyc1tpXS5zZXRJY29uKCdzcmMvaW1nL3doaGl0ZS1tYXJrZXIucG5nJyk7XG4gICAgIH1cblx0bWFya2VyLnNldEljb24oXCJzcmMvaW1nL21hcmtlci5wbmdcIik7XG4gICAgICAgICAgIC8vIGluZm93aW5kb3cub3BlbihtYXAsbWFya2VyKTsgLy8gY2xpY2sgb24gbWFya2VyIG9wZW5zIGluZm8gd2luZG93IFxuICAgIH0pO1xuXHRcblx0IG1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgXG4gICAgXG5cblx0XHRcdFx0XG4gICAgICAgICAgICB9XG5cdFx0XHRcblx0XHRcblx0XHRcblx0XHRcdFxuJChkb2N1bWVudCkub24oJ2NsaWNrJywnI2FmdGVydGFibWFya2VyJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0JCgnLnNlbGVjdGVkX21hcmtlcicpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fSk7XHRcdFx0XG59XG5cbnNlbGVjdF9sb2NhdGlvbihldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdC8vYWxlcnQoZXZlbnQuY3VycmVudFRhcmdldC5pZCk7XG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydNYXBQaWNrZXInLCB7IGlkOiBldmVudC5jdXJyZW50VGFyZ2V0LmlkfV0pO1xuXHRcdFx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
