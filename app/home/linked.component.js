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
    var LinkedComponent;
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
            LinkedComponent = (function () {
                function LinkedComponent(zone) {
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
                LinkedComponent.prototype.ngOnInit = function () {
                    var linkedIn = document.createElement("script");
                    linkedIn.type = "text/javascript";
                    linkedIn.src = "http://platform.linkedin.com/in.js";
                    linkedIn.innerHTML = "\n" +
                        "api_key: 81m7r4v9j6aev7\n" +
                        "authorize: true\n" +
                        "onLoad:" + this.OnLinkedInFrameworkLoad;
                    alert(linkedIn.innerHTML);
                    document.head.appendChild(linkedIn);
                    var script = document.createElement("script");
                    script.type = "in/Login";
                    document.body.appendChild(script);
                };
                LinkedComponent.prototype.ShowProfileData = function (profiles) {
                    console.log(profiles);
                    var member = profiles.values[0];
                    var id = member.id;
                    var firstName = member.firstName;
                    var lastName = member.lastName;
                    var photo = member.pictureUrl;
                    var headline = member.headline;
                    //use information captured above
                };
                LinkedComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'linked',
                        providers: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'dev/home/linked.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], LinkedComponent);
                return LinkedComponent;
            }());
            exports_1("LinkedComponent", LinkedComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbGlua2VkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUVDLHlCQUFvQixJQUFhO29CQUZsQyxpQkE0Q0M7b0JBMUNvQixTQUFJLEdBQUosSUFBSSxDQUFTO29CQXNCbEMsNEJBQXVCLEdBQUc7d0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNqRCxDQUFDLENBQUE7b0JBRUQsbUJBQWMsR0FBRzt3QkFDYixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxFQUFwQixDQUFvQixDQUFDLENBQUM7b0JBQ2hFLENBQUMsQ0FBQTtvQkEzQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ1YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsdUJBQXVCLEVBQUUsS0FBSSxDQUFDLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxRQUFRLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO29CQUNsQyxRQUFRLENBQUMsR0FBRyxHQUFHLG9DQUFvQyxDQUFDO29CQUNwRCxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUk7d0JBQ3JCLDJCQUEyQjt3QkFDM0IsbUJBQW1CO3dCQUNuQixTQUFTLEdBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO29CQUM3QyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFcEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDOUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7b0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQVVELHlDQUFlLEdBQWYsVUFBZ0IsUUFBUTtvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxFQUFFLEdBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxTQUFTLEdBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDL0IsSUFBSSxRQUFRLEdBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDN0IsSUFBSSxLQUFLLEdBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDNUIsSUFBSSxRQUFRLEdBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFFN0IsZ0NBQWdDO2dCQUNqQyxDQUFDO2dCQWpESjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFVBQVUsRUFBRyxDQUFDLDBCQUFpQixDQUFDO3dCQUNoQyxRQUFRLEVBQUcsUUFBUTt3QkFDbkIsU0FBUyxFQUFHLENBQUMscUJBQWMsQ0FBQzt3QkFDNUIsV0FBVyxFQUFHLGdDQUFnQztxQkFDL0MsQ0FBQzs7bUNBQUE7Z0JBOENGLHNCQUFDO1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCw2Q0E0Q0MsQ0FBQSIsImZpbGUiOiJob21lL2xpbmtlZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCAsIE9uSW5pdCAsIE5nWm9uZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMgLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIElOIDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgZGlyZWN0aXZlcyA6IFtST1VURVJfRElSRUNUSVZFU10sXG4gIHNlbGVjdG9yIDogJ2xpbmtlZCcsXG4gIHByb3ZpZGVycyA6IFtIVFRQX1BST1ZJREVSU10sXG4gIHRlbXBsYXRlVXJsIDogJ2Rldi9ob21lL2xpbmtlZC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaW5rZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmUgOiBOZ1pvbmUpe1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAkLnByb3h5KHRoaXMuT25MaW5rZWRJbkZyYW1ld29ya0xvYWQsIHRoaXMpO1xuICAgIH0pO1xufVxuXG5uZ09uSW5pdCgpe1xuICAgIHZhciBsaW5rZWRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgbGlua2VkSW4udHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgbGlua2VkSW4uc3JjID0gXCJodHRwOi8vcGxhdGZvcm0ubGlua2VkaW4uY29tL2luLmpzXCI7XG4gICAgbGlua2VkSW4uaW5uZXJIVE1MID0gXCJcXG5cIitcbiAgICAgICAgXCJhcGlfa2V5OiA4MW03cjR2OWo2YWV2N1xcblwiICtcbiAgICAgICAgXCJhdXRob3JpemU6IHRydWVcXG5cIiArXG4gICAgICAgIFwib25Mb2FkOlwiK3RoaXMuT25MaW5rZWRJbkZyYW1ld29ya0xvYWQ7XG5cdFx0YWxlcnQobGlua2VkSW4uaW5uZXJIVE1MKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtlZEluKTtcblxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC50eXBlID0gXCJpbi9Mb2dpblwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuT25MaW5rZWRJbkZyYW1ld29ya0xvYWQgPSAoKSA9PiB7XG4gICAgSU4uRXZlbnQub24oSU4sIFwiYXV0aFwiLCB0aGlzLk9uTGlua2VkSW5BdXRoKTtcbn1cblxuT25MaW5rZWRJbkF1dGggPSAoKSA9PiB7XG4gICAgSU4uQVBJLlByb2ZpbGUoXCJtZVwiKS5yZXN1bHQocmVzdWx0ID0+IHRoaXMuU2hvd1Byb2ZpbGVEYXRhKTtcbn1cblxuU2hvd1Byb2ZpbGVEYXRhKHByb2ZpbGVzKSB7XG4gICAgY29uc29sZS5sb2cocHJvZmlsZXMpO1xuICAgIHZhciBtZW1iZXIgPSBwcm9maWxlcy52YWx1ZXNbMF07XG4gICAgdmFyIGlkPW1lbWJlci5pZDtcbiAgICB2YXIgZmlyc3ROYW1lPW1lbWJlci5maXJzdE5hbWU7XG4gICAgdmFyIGxhc3ROYW1lPW1lbWJlci5sYXN0TmFtZTtcbiAgICB2YXIgcGhvdG89bWVtYmVyLnBpY3R1cmVVcmw7XG4gICAgdmFyIGhlYWRsaW5lPW1lbWJlci5oZWFkbGluZTtcblxuICAgIC8vdXNlIGluZm9ybWF0aW9uIGNhcHR1cmVkIGFib3ZlXG4gICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
