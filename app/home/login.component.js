System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, router_2;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http, _router, _routeParams) {
                    this.http = http;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                LoginComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                LoginComponent.prototype.signup = function () {
                    var locatIds = this._routeParams.get('locationid');
                    var desk = this._routeParams.get('desk');
                    if (locatIds != null) {
                        this._router.navigate(['Signup', { locationid: this._routeParams.get('locationid'), desk: this._routeParams.get('desk') }]);
                    }
                    else {
                        this._router.navigate(['Signup']);
                    }
                };
                LoginComponent.prototype.loginUser = function () {
                    var ths = this;
                    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
                    var error = '1';
                    $("#loginForm input:text").each(function () {
                        if (this.value == '') {
                            $(this).addClass("error");
                            error++;
                        }
                        else {
                            $(this).removeClass("error");
                            $('.error_text').hide();
                        }
                    });
                    if ($('#password').val() == '') {
                        $('#password').addClass("error");
                        error++;
                    }
                    if (!pattern.test($('#email').val())) {
                        $('#email').addClass("error");
                        error++;
                    }
                    else {
                        $('#email').removeClass("error");
                    }
                    if (error == '1') {
                        //$("#login_submit").attr("disabled", "disabled");
                        var locatIds = this._routeParams.get('locationid');
                        var desk = this._routeParams.get('desk');
                        if (locatIds != null) {
                            var url = './api/users/login_location/locatIds/desk';
                        }
                        else {
                            var url = './api/users/login';
                        }
                        $.ajax({
                            url: url,
                            type: "POST",
                            data: $("#loginForm").serialize(),
                            beforeSend: function () {
                                $(".thumbox3").css('opacity', '0.5').append('<img src="src/img/loading.gif" border="0" class="loadi" style= "left: 48%;position: absolute;top: 25%;" alt="" title="" />');
                            },
                            success: function (response) {
                                $("#login_submit").removeAttr("disabled");
                                var obj = $.parseJSON(response);
                                if (obj.status == "success") {
                                    localStorage.setItem("user.id", obj.user.id);
                                    localStorage.setItem("user.name", obj.user.name);
                                    localStorage.setItem("user.industry", obj.user.industry);
                                    localStorage.setItem("user.image", obj.user.image);
                                    $("#auth_li").html('<a routerlinkactive="active" id="logout">Logout</a>');
                                    if (obj.act == "index") {
                                        ths._router.navigate(['/Home']);
                                    }
                                    else {
                                        ths._router.navigate(['/SignUpCongrats', { id: obj.user.id, name: obj.user.name, industry: obj.user.industry, image: obj.user.image }]);
                                    }
                                }
                                else if (obj.status == "error") {
                                    $('.error_text').html(obj.mssg).show();
                                }
                                $(".thumbox3").css('opacity', '1');
                                $('.loadi').remove();
                                return false;
                            }
                        });
                    }
                };
                LoginComponent.prototype.ngOnInit = function () {
                    $('#hidehref').hide();
                    if (this._routeParams.get('locationid') == null) {
                        this.locationid_div = '0';
                        localStorage.removeItem("select_location");
                    }
                    else {
                        this.locationid_div = '1';
                    }
                    this.locationid = this._routeParams.get('locationid');
                    this.desk = this._routeParams.get('desk');
                    $('#loginForm input').focus(function () {
                        $(this).removeClass("error");
                        $('.error_text').hide();
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'dev/home/login.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_2.Router, router_2.RouteParams])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7d0JBQzVDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOztrQ0FBQTtnQkFxSEYscUJBQUM7WUFBRCxDQXBIQSxBQW9IQyxJQUFBO1lBcEhELDJDQW9IQyxDQUFBIiwiZmlsZSI6ImhvbWUvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5wcml2YXRlIGRhdGE7XG5cblxuIFxuIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG4gXG4gIEhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9IFxuXHRcbnNpZ251cCgpIHtcbnZhciBsb2NhdElkcz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKTtcblx0ICB2YXIgZGVzaz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2Rlc2snKTtcbiAgXHRcdGlmKGxvY2F0SWRzIT1udWxsKXtcbnRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCcseyBsb2NhdGlvbmlkOnRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpLGRlc2s6dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdkZXNrJyl9XSk7XG59ZWxzZXtcbnRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCcpO1xuXG59XG59XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Vc2VyKCkge1xuICB2YXIgdGhzPXRoaXM7XG4gIFxuICB2YXIgcGF0dGVybiA9IC9eXFxiW0EtWjAtOS5fJS1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH1cXGIkL2k7XG4gIHZhciBlcnJvcj0nMSc7XG4gICAkKFwiI2xvZ2luRm9ybSBpbnB1dDp0ZXh0XCIpLmVhY2goZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0aWYodGhpcy52YWx1ZT09JycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0ZXJyb3IrKztcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGlmKCQoJyNwYXNzd29yZCcpLnZhbCgpPT0nJyl7XG5cdFx0XHQkKCcjcGFzc3dvcmQnKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0IGVycm9yKys7XG5cdFx0XHR9XG4gIGlmKCFwYXR0ZXJuLnRlc3QoJCgnI2VtYWlsJykudmFsKCkpKVxuICAgICAgICB7XG4gICAgICAgICAgJCgnI2VtYWlsJykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHQgIGVycm9yKys7XG5cdFx0ICBcbiAgICAgICAgfWVsc2V7XG5cdFx0JCgnI2VtYWlsJykucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcblx0XHR9XG5cdCAgXG5cdCAgaWYoZXJyb3I9PScxJyl7XG5cdCAgLy8kKFwiI2xvZ2luX3N1Ym1pdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblx0ICB2YXIgbG9jYXRJZHM9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJyk7XG5cdCAgdmFyIGRlc2s9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdkZXNrJyk7XG4gIFx0XHRpZihsb2NhdElkcyE9bnVsbCl7XG5cdFx0dmFyIHVybD0nLi9hcGkvdXNlcnMvbG9naW5fbG9jYXRpb24vbG9jYXRJZHMvZGVzayc7XG5cdFx0fWVsc2V7XG5cdFx0dmFyIHVybD0nLi9hcGkvdXNlcnMvbG9naW4nO1xuXHRcdH1cblx0ICBcblx0ICAkLmFqYXgoe1xuICAgICAgICAgIHVybDp1cmwsXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YTogJChcIiNsb2dpbkZvcm1cIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgYmVmb3JlU2VuZDpmdW5jdGlvbigpXG4gICAgICAgICAge1xuICAgICAgICAgICAgJChcIi50aHVtYm94M1wiKS5jc3MoJ29wYWNpdHknLCcwLjUnKS5hcHBlbmQoJzxpbWcgc3JjPVwic3JjL2ltZy9sb2FkaW5nLmdpZlwiIGJvcmRlcj1cIjBcIiBjbGFzcz1cImxvYWRpXCIgc3R5bGU9IFwibGVmdDogNDglO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDI1JTtcIiBhbHQ9XCJcIiB0aXRsZT1cIlwiIC8+JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICAgIHtcblx0XHQgICAkKFwiI2xvZ2luX3N1Ym1pdFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG5cdFx0ICB2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaWRcIiwgb2JqLnVzZXIuaWQpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLm5hbWVcIiwgb2JqLnVzZXIubmFtZSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW5kdXN0cnlcIiwgb2JqLnVzZXIuaW5kdXN0cnkpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmltYWdlXCIsIG9iai51c2VyLmltYWdlKTtcblx0XHRcdFx0XHRcdCQoXCIjYXV0aF9saVwiKS5odG1sKCc8YSByb3V0ZXJsaW5rYWN0aXZlPVwiYWN0aXZlXCIgaWQ9XCJsb2dvdXRcIj5Mb2dvdXQ8L2E+Jyk7XG5cdFx0XHRcdFx0XHRpZihvYmouYWN0PT1cImluZGV4XCIpe1xuXHRcdFx0XHRcdFx0dGhzLl9yb3V0ZXIubmF2aWdhdGUoWycvSG9tZSddKTtcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhzLl9yb3V0ZXIubmF2aWdhdGUoWycvU2lnblVwQ29uZ3JhdHMnLCB7IGlkOiBvYmoudXNlci5pZCwgbmFtZTogb2JqLnVzZXIubmFtZSxpbmR1c3RyeTpvYmoudXNlci5pbmR1c3RyeSxpbWFnZTpvYmoudXNlci5pbWFnZSB9XSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaHRtbChvYmoubXNzZykuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMScpO1xuXHRcdFx0XHRcdFx0ICQoJy5sb2FkaScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0fVxuICB9IFxuICBuZ09uSW5pdCgpIHtcbiAgJCgnI2hpZGVocmVmJykuaGlkZSgpO1xuICBpZih0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKT09bnVsbCl7dGhpcy5sb2NhdGlvbmlkX2Rpdj0nMCc7IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2VsZWN0X2xvY2F0aW9uXCIpO31cbiAgZWxzZXt0aGlzLmxvY2F0aW9uaWRfZGl2PScxJzt9XG4gIHRoaXMubG9jYXRpb25pZD10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKTtcbiAgdGhpcy5kZXNrPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZGVzaycpO1xuICBcbiAgJCgnI2xvZ2luRm9ybSBpbnB1dCcpLmZvY3VzKGZ1bmN0aW9uKCl7XG4gICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTskKCcuZXJyb3JfdGV4dCcpLmhpZGUoKTtcbiAgfSk7XG4gIFxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuICB9XG5cdFx0XHRcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
