System.register(['angular2/core', './home/home.component', './home/header.component', './home/how_it_work.component', './home/how_it_work1.component', './home/how_it_work2.component', './home/how_it_work3.component', './home/map.component', './home/login.component', './home/signup.component', './home/signup_next_step.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, home_component_1, header_component_1, how_it_work_component_1, how_it_work1_component_1, how_it_work2_component_1, how_it_work3_component_1, map_component_1, login_component_1, signup_component_1, signup_next_step_component_1, router_1, router_2, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (how_it_work_component_1_1) {
                how_it_work_component_1 = how_it_work_component_1_1;
            },
            function (how_it_work1_component_1_1) {
                how_it_work1_component_1 = how_it_work1_component_1_1;
            },
            function (how_it_work2_component_1_1) {
                how_it_work2_component_1 = how_it_work2_component_1_1;
            },
            function (how_it_work3_component_1_1) {
                how_it_work3_component_1 = how_it_work3_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (signup_next_step_component_1_1) {
                signup_next_step_component_1 = signup_next_step_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.menu_click = function (event) {
                    $('.mob_menu').animate({
                        right: '0'
                    }, 500, function () {
                        $('.overlay').css("display", "block");
                        $("body").addClass("modal-open1");
                        // Animation complete.
                    });
                };
                AppComponent.prototype.menu_close = function (event) {
                    $('.mob_menu').animate({
                        right: '-100%'
                    }, 200, function () {
                        $('.overlay').css("display", "none");
                        $("body").removeClass("modal-open1");
                        // Animation complete.
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<div class=\"overlay\" (click)=\"menu_close($event)\"></div>\n<div class=\"mob_icon\" id=\"menu_click\" (click)=\"menu_click($event)\">\n    <div class=\"icon__bar\"></div>\n    <div class=\"icon__bar\"></div>\n    <div class=\"icon__bar\"></div>\n</div>\n<div class=\"mob_menu\" (click)=\"menu_close($event)\">\n    <div class=\"thumbox2\">\n        <div class=\"top\">\n            <div class=\"top_left\"><a href=\"index.html\">THE WORK PLACE</a>\n            </div>\n            <div class=\"top_right\"><a href=\"javascript:;\" class=\"pull-right close11\" (click)=\"menu_close($event)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\n            </div>\n            <div class=\"clearfix\">&nbsp;</div>\n        </div>\n        <div class=\"middle\">\n            <ul class=\"mobile_menu\">\n                <li><a [routerLink]=\"['HowItWork']\" routerLinkActive=\"active\">How it works</a></li>\n                <li><a href=\"map.html\" routerLinkActive=\"active\">Locations</a></li>\n                <li><a href=\"office_design.html\" routerLinkActive=\"active\">Office Design</a></li>\n                <li><a href=\"faq.html\" routerLinkActive=\"active\">FAQ</a></li>\n                <li><a href=\"about_us.html\" routerLinkActive=\"active\">About Us</a></li>\n                <li><a href=\"contact_us.html\" routerLinkActive=\"active\">Contact Us</a></li>\n            </ul>\n            <div class=\"media_icons\">\n                <a href=\"#\"><span class=\"fa fa-facebook\"></span></a>\n                <a href=\"#\"><span class=\"fa fa-twitter\"></span></a>\n                <a href=\"#\"><span class=\"fa fa-instagram\"></span></a>\n                <a href=\"#\"><span class=\"fa fa-linkedin\"></span></a>\n                <a href=\"#\"><span class=\"fa fa-envelope\"></span></a>\n                <a href=\"#\"><span class=\"fa fa-whatsapp\"></span></a>\n            </div>\n\n        </div>\n\n\n\n    </div>\n</div>\n\t<router-outlet></router-outlet>\n\t",
                        directives: [home_component_1.HomeComponent, header_component_1.HeaderComponent, how_it_work_component_1.HowItWorkComponent, how_it_work1_component_1.HowItWorkComponent1, how_it_work2_component_1.HowItWorkComponent2, how_it_work3_component_1.HowItWorkComponent3, map_component_1.MapComponent, router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent, signup_component_1.SignupComponent, signup_next_step_component_1.SignupNextStepComponent],
                    }),
                    router_2.RouteConfig([{ path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/how_it_work', name: 'HowItWork', component: how_it_work_component_1.HowItWorkComponent },
                        { path: '/how_it_work1', name: 'HowItWork1', component: how_it_work1_component_1.HowItWorkComponent1 },
                        { path: '/how_it_work2', name: 'HowItWork2', component: how_it_work2_component_1.HowItWorkComponent2 },
                        { path: '/how_it_work3', name: 'HowItWork3', component: how_it_work3_component_1.HowItWorkComponent3 },
                        { path: '/map', name: 'Map', component: map_component_1.MapComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignupComponent },
                        { path: '/signup_next_step', name: 'SignupNextStep', component: signup_next_step_component_1.SignupNextStepComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2svYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0EscUJBQWMsRUFBRSxDQUFDO1lBaUVqQjtnQkFBQTtnQkF1QkEsQ0FBQztnQkFwQkMsaUNBQVUsR0FBVixVQUFXLEtBQUs7b0JBRWYsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFDeEIsS0FBSyxFQUFDLEdBQUc7cUJBQ1AsRUFBRSxHQUFHLEVBQUU7d0JBQ1AsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3RDLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQyxRQUFRLENBQUUsYUFBYSxDQUFFLENBQUM7d0JBQ3hDLHNCQUFzQjtvQkFDckIsQ0FBQyxDQUFDLENBQUM7Z0JBRUosQ0FBQztnQkFDRCxpQ0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDaEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFDdkIsS0FBSyxFQUFDLE9BQU87cUJBQ1gsRUFBRSxHQUFHLEVBQUU7d0JBQ1AsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ3BDLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQyxXQUFXLENBQUUsYUFBYSxDQUFFLENBQUM7d0JBQzVDLHNCQUFzQjtvQkFDckIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFwRkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLG84REF5Q1o7d0JBQ0QsVUFBVSxFQUFFLENBQUMsOEJBQWEsRUFBQyxrQ0FBZSxFQUFDLDBDQUFrQixFQUFDLDRDQUFtQixFQUFDLDRDQUFtQixFQUFDLDRDQUFtQixFQUFDLDRCQUFZLEVBQUMsMEJBQWlCLEVBQUMsZ0NBQWMsRUFBQyxrQ0FBZSxFQUFDLG9EQUF1QixDQUFDO3FCQUNoTixDQUFDO29CQUdELG9CQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUcsOEJBQWEsRUFBRTt3QkFDL0QsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUcsU0FBUyxFQUFFLDBDQUFrQixFQUFFO3dCQUMxRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBRyxTQUFTLEVBQUUsNENBQW1CLEVBQUU7d0JBQzVFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFHLFNBQVMsRUFBRSw0Q0FBbUIsRUFBRTt3QkFDNUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUcsU0FBUyxFQUFFLDRDQUFtQixFQUFFO3dCQUM1RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRyxTQUFTLEVBQUUsNEJBQVksRUFBRTt3QkFDckQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUcsU0FBUyxFQUFFLGdDQUFjLEVBQUU7d0JBQzNELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFHLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO3dCQUM5RCxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUcsU0FBUyxFQUFFLG9EQUF1QixFQUFFO3FCQUt4RixDQUFDOztnQ0FBQTtnQkF3QkosbUJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHVDQXVCQyxDQUFBIiwiZmlsZSI6ImJhY2svYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0hvd0l0V29ya0NvbXBvbmVudH0gZnJvbSAnLi9ob21lL2hvd19pdF93b3JrLmNvbXBvbmVudCc7XG5pbXBvcnQge0hvd0l0V29ya0NvbXBvbmVudDF9IGZyb20gJy4vaG9tZS9ob3dfaXRfd29yazEuY29tcG9uZW50JztcbmltcG9ydCB7SG93SXRXb3JrQ29tcG9uZW50Mn0gZnJvbSAnLi9ob21lL2hvd19pdF93b3JrMi5jb21wb25lbnQnO1xuaW1wb3J0IHtIb3dJdFdvcmtDb21wb25lbnQzfSBmcm9tICcuL2hvbWUvaG93X2l0X3dvcmszLmNvbXBvbmVudCc7XG5pbXBvcnQge01hcENvbXBvbmVudH0gZnJvbSAnLi9ob21lL21hcC5jb21wb25lbnQnOyAgXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ251cE5leHRTdGVwQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvc2lnbnVwX25leHRfc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmVuYWJsZVByb2RNb2RlKCk7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgKGNsaWNrKT1cIm1lbnVfY2xvc2UoJGV2ZW50KVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vYl9pY29uXCIgaWQ9XCJtZW51X2NsaWNrXCIgKGNsaWNrKT1cIm1lbnVfY2xpY2soJGV2ZW50KVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpY29uX19iYXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbl9fYmFyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImljb25fX2JhclwiPjwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9iX21lbnVcIiAoY2xpY2spPVwibWVudV9jbG9zZSgkZXZlbnQpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRodW1ib3gyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BfbGVmdFwiPjxhIGhyZWY9XCJpbmRleC5odG1sXCI+VEhFIFdPUksgUExBQ0U8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BfcmlnaHRcIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJwdWxsLXJpZ2h0IGNsb3NlMTFcIiAoY2xpY2spPVwibWVudV9jbG9zZSgkZXZlbnQpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPiZuYnNwOzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibW9iaWxlX21lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydIb3dJdFdvcmsnXVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5Ib3cgaXQgd29ya3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIm1hcC5odG1sXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkxvY2F0aW9uczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwib2ZmaWNlX2Rlc2lnbi5odG1sXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPk9mZmljZSBEZXNpZ248L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImZhcS5odG1sXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkZBUTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiYWJvdXRfdXMuaHRtbFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5BYm91dCBVczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiY29udGFjdF91cy5odG1sXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkNvbnRhY3QgVXM8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFfaWNvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtaW5zdGFncmFtXCI+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIj48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1lbnZlbG9wZVwiPjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImZhIGZhLXdoYXRzYXBwXCI+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG5cdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblx0YCxcblx0ZGlyZWN0aXZlczogW0hvbWVDb21wb25lbnQsSGVhZGVyQ29tcG9uZW50LEhvd0l0V29ya0NvbXBvbmVudCxIb3dJdFdvcmtDb21wb25lbnQxLEhvd0l0V29ya0NvbXBvbmVudDIsSG93SXRXb3JrQ29tcG9uZW50MyxNYXBDb21wb25lbnQsUk9VVEVSX0RJUkVDVElWRVMsTG9naW5Db21wb25lbnQsU2lnbnVwQ29tcG9uZW50LFNpZ251cE5leHRTdGVwQ29tcG9uZW50XSxcbn0pXG5cblxuQFJvdXRlQ29uZmlnKFt7IHBhdGg6ICcvJyxuYW1lOidIb21lJywgY29tcG9uZW50OiAgSG9tZUNvbXBvbmVudCB9LFxuICAgeyBwYXRoOiAnL2hvd19pdF93b3JrJywgbmFtZTonSG93SXRXb3JrJywgIGNvbXBvbmVudDogSG93SXRXb3JrQ29tcG9uZW50IH0sXG4gICB7IHBhdGg6ICcvaG93X2l0X3dvcmsxJyxuYW1lOidIb3dJdFdvcmsxJywgIGNvbXBvbmVudDogSG93SXRXb3JrQ29tcG9uZW50MSB9LFxuICAgeyBwYXRoOiAnL2hvd19pdF93b3JrMicsbmFtZTonSG93SXRXb3JrMicsICBjb21wb25lbnQ6IEhvd0l0V29ya0NvbXBvbmVudDIgfSxcbiAgIHsgcGF0aDogJy9ob3dfaXRfd29yazMnLG5hbWU6J0hvd0l0V29yazMnLCAgY29tcG9uZW50OiBIb3dJdFdvcmtDb21wb25lbnQzIH0sXG4gICB7IHBhdGg6ICcvbWFwJyxuYW1lOidNYXAnLCAgY29tcG9uZW50OiBNYXBDb21wb25lbnQgfSxcbiAgIHsgcGF0aDogJy9sb2dpbicsbmFtZTonTG9naW4nLCAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgeyBwYXRoOiAnL3NpZ251cCcsbmFtZTonU2lnbnVwJywgIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50IH0sXG4gICB7IHBhdGg6ICcvc2lnbnVwX25leHRfc3RlcCcsbmFtZTonU2lnbnVwTmV4dFN0ZXAnLCAgY29tcG9uZW50OiBTaWdudXBOZXh0U3RlcENvbXBvbmVudCB9LFxuICAgXG4gICBcbiAgIFxuICAgXG4gIF0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuXG4gIG1lbnVfY2xpY2soZXZlbnQpIHtcbiAgICBcblx0ICAkKCcubW9iX21lbnUnKS5hbmltYXRlKHtcblx0XHRyaWdodDonMCdcblx0ICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdCAgJCgnLm92ZXJsYXknKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdFx0ICAkKCBcImJvZHlcIiApLmFkZENsYXNzKCBcIm1vZGFsLW9wZW4xXCIgKTtcblx0XHQvLyBBbmltYXRpb24gY29tcGxldGUuXG5cdCAgfSk7XG5cbiAgfVxuICBtZW51X2Nsb3NlKGV2ZW50KSB7XG5cdFx0JCgnLm1vYl9tZW51JykuYW5pbWF0ZSh7XG5cdFx0cmlnaHQ6Jy0xMDAlJ1xuXHQgIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG5cdFx0ICAkKCcub3ZlcmxheScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdCAgICQoIFwiYm9keVwiICkucmVtb3ZlQ2xhc3MoIFwibW9kYWwtb3BlbjFcIiApO1xuXHRcdC8vIEFuaW1hdGlvbiBjb21wbGV0ZS5cblx0ICB9KTtcdCAgXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
