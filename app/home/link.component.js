System.register(['angular2/core', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1;
    var LinkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LinkComponent = (function () {
                function LinkComponent(zone) {
                    var _this = this;
                    this.zone = zone;
                    this.OnLinkedInFrameworkLoad = function () {
                        IN.Event.on(IN, "auth", _this.OnLinkedInAuth);
                    };
                    this.OnLinkedInAuth = function () {
                        IN.API.Profile("me").result(function (result) { return _this.ShowProfileData; });
                    };
                    this.zone.run(function () {
                        $.proxy(_this.OnLinkedInFrameworkLoad, _this);
                    });
                }
                LinkComponent.prototype.ngOnInit = function () {
                    var linkedIn = document.createElement("script");
                    linkedIn.type = "text/javascript";
                    linkedIn.src = "http://platform.linkedin.com/in.js";
                    linkedIn.innerHTML = "\n" +
                        "api_key: **********\n" +
                        "authorize: true\n" +
                        "onLoad:" + this.OnLinkedInFrameworkLoad;
                    document.head.appendChild(linkedIn);
                    var script = document.createElement("script");
                    script.type = "in/Login";
                    document.body.appendChild(script);
                };
                LinkComponent.prototype.ShowProfileData = function (profiles) {
                    console.log(profiles);
                    var member = profiles.values[0];
                    var id = member.id;
                    var firstName = member.firstName;
                    var lastName = member.lastName;
                    var photo = member.pictureUrl;
                    var headline = member.headline;
                    //use information captured above
                };
                LinkComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'link',
                        providers: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'dev/home/link.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], LinkComponent);
                return LinkComponent;
            }());
            exports_1("LinkComponent", LinkComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFFQyx1QkFBb0IsSUFBYTtvQkFGbEMsaUJBMkNDO29CQXpDb0IsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFxQmxDLDRCQUF1QixHQUFHO3dCQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDakQsQ0FBQyxDQUFBO29CQUVELG1CQUFjLEdBQUc7d0JBQ2IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO29CQUNoRSxDQUFDLENBQUE7b0JBMUJHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNWLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLHVCQUF1QixFQUFFLEtBQUksQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEQsUUFBUSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztvQkFDbEMsUUFBUSxDQUFDLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztvQkFDcEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBRTtvQkFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBRXBDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO29CQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFVRCx1Q0FBZSxHQUFmLFVBQWdCLFFBQVE7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLElBQUksRUFBRSxHQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2pCLElBQUksU0FBUyxHQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQy9CLElBQUksUUFBUSxHQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBQzdCLElBQUksS0FBSyxHQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQzVCLElBQUksUUFBUSxHQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBRTdCLGdDQUFnQztnQkFDakMsQ0FBQztnQkFoREo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxVQUFVLEVBQUcsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDaEMsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFNBQVMsRUFBRyxDQUFDLHFCQUFjLENBQUM7d0JBQzVCLFdBQVcsRUFBRyw4QkFBOEI7cUJBQzdDLENBQUM7O2lDQUFBO2dCQTZDRixvQkFBQztZQUFELENBM0NBLEFBMkNDLElBQUE7WUEzQ0QseUNBMkNDLENBQUEiLCJmaWxlIjoiaG9tZS9saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50ICwgT25Jbml0ICwgTmdab25lfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyAsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuZGVjbGFyZSB2YXIgSU4gOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBkaXJlY3RpdmVzIDogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgc2VsZWN0b3IgOiAnbGluaycsXG4gIHByb3ZpZGVycyA6IFtIVFRQX1BST1ZJREVSU10sXG4gIHRlbXBsYXRlVXJsIDogJ2Rldi9ob21lL2xpbmsuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZSA6IE5nWm9uZSl7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICQucHJveHkodGhpcy5PbkxpbmtlZEluRnJhbWV3b3JrTG9hZCwgdGhpcyk7XG4gICAgfSk7XG59XG5cbm5nT25Jbml0KCl7XG4gICAgdmFyIGxpbmtlZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBsaW5rZWRJbi50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICBsaW5rZWRJbi5zcmMgPSBcImh0dHA6Ly9wbGF0Zm9ybS5saW5rZWRpbi5jb20vaW4uanNcIjtcbiAgICBsaW5rZWRJbi5pbm5lckhUTUwgPSBcIlxcblwiK1xuICAgICAgICBcImFwaV9rZXk6ICoqKioqKioqKipcXG5cIiArXG4gICAgICAgIFwiYXV0aG9yaXplOiB0cnVlXFxuXCIgK1xuICAgICAgICBcIm9uTG9hZDpcIiArIHRoaXMuT25MaW5rZWRJbkZyYW1ld29ya0xvYWQgO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua2VkSW4pO1xuXG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnR5cGUgPSBcImluL0xvZ2luXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5PbkxpbmtlZEluRnJhbWV3b3JrTG9hZCA9ICgpID0+IHtcbiAgICBJTi5FdmVudC5vbihJTiwgXCJhdXRoXCIsIHRoaXMuT25MaW5rZWRJbkF1dGgpO1xufVxuXG5PbkxpbmtlZEluQXV0aCA9ICgpID0+IHtcbiAgICBJTi5BUEkuUHJvZmlsZShcIm1lXCIpLnJlc3VsdChyZXN1bHQgPT4gdGhpcy5TaG93UHJvZmlsZURhdGEpO1xufVxuXG5TaG93UHJvZmlsZURhdGEocHJvZmlsZXMpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlcyk7XG4gICAgdmFyIG1lbWJlciA9IHByb2ZpbGVzLnZhbHVlc1swXTtcbiAgICB2YXIgaWQ9bWVtYmVyLmlkO1xuICAgIHZhciBmaXJzdE5hbWU9bWVtYmVyLmZpcnN0TmFtZTtcbiAgICB2YXIgbGFzdE5hbWU9bWVtYmVyLmxhc3ROYW1lO1xuICAgIHZhciBwaG90bz1tZW1iZXIucGljdHVyZVVybDtcbiAgICB2YXIgaGVhZGxpbmU9bWVtYmVyLmhlYWRsaW5lO1xuXG4gICAgLy91c2UgaW5mb3JtYXRpb24gY2FwdHVyZWQgYWJvdmVcbiAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
