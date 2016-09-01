import {Component, OnInit} from 'angular2/core';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
  selector: 'map',
  templateUrl: 'dev/home/map.component.html',
  //directives: [GOOGLE_MAPS_DIRECTIVES],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class MapComponent implements OnInit {
//constructor(private googlemapprovider: GOOGLE_MAPS_PROVIDERS) {}
 title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
//bootstrap(MapComponent, [GOOGLE_MAPS_PROVIDERS]);
