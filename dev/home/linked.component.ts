import {Component , OnInit , NgZone} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES , Router} from 'angular2/router';

declare var IN : any;

@Component({
  directives : [ROUTER_DIRECTIVES],
  selector : 'linked',
  providers : [HTTP_PROVIDERS],
  templateUrl : 'dev/home/linked.component.html'
})

export class LinkedComponent implements OnInit{

 constructor(private zone : NgZone){
    this.zone.run(() => {
        $.proxy(this.OnLinkedInFrameworkLoad, this);
    });
}

ngOnInit(){
    var linkedIn = document.createElement("script");
    linkedIn.type = "text/javascript";
    linkedIn.src = "http://platform.linkedin.com/in.js";
    linkedIn.innerHTML = "\n"+
        "api_key: 81m7r4v9j6aev7\n" +
        "authorize: true\n" +
        "onLoad:"+this.OnLinkedInFrameworkLoad;
		alert(linkedIn.innerHTML);
    document.head.appendChild(linkedIn);

    var script = document.createElement("script");
    script.type = "in/Login";
    document.body.appendChild(script);
}

OnLinkedInFrameworkLoad = () => {
    IN.Event.on(IN, "auth", this.OnLinkedInAuth);
}

OnLinkedInAuth = () => {
    IN.API.Profile("me").result(result => this.ShowProfileData);
}

ShowProfileData(profiles) {
    console.log(profiles);
    var member = profiles.values[0];
    var id=member.id;
    var firstName=member.firstName;
    var lastName=member.lastName;
    var photo=member.pictureUrl;
    var headline=member.headline;

    //use information captured above
   }

}