import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'header',
  templateUrl: 'dev/home/header.component.html',
})

export class HeaderComponent {
  links: string = '<ul class="mobile_menu"><li><a href="how_it_works.html">How it works</a></li><li><a href="map.html">Locations</a></li><li><a href="office_design.html">Office Design</a></li><li><a href="faq.html">FAQ</a></li><li><a href="about_us.html">About Us</a></li><li><a href="contact_us.html">Contact Us</a></li></ul>';
}
