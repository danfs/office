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
                    if (this._routeParams.get('locationid') == null) {
                        this.locationid_div = '0';
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

//# sourceMappingURL=data:application/json;base64,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QUFDO3FCQUNoQyxDQUFDOztrQ0FBQTtnQkFnSEYscUJBQUM7WUFBRCxDQS9HQSxBQStHQyxJQUFBO1lBL0dELDJDQStHQyxDQUFBIiwiZmlsZSI6ImhvbWUvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5wcml2YXRlIGRhdGE7XG4gXG4gY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge31cbiAgSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH0gXG5cdFxuc2lnbnVwKCkge1xudmFyIGxvY2F0SWRzPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpO1xuXHQgIHZhciBkZXNrPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZGVzaycpO1xuICBcdFx0aWYobG9jYXRJZHMhPW51bGwpe1xudGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnU2lnbnVwJyx7IGxvY2F0aW9uaWQ6dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJyksZGVzazp0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2Rlc2snKX1dKTtcbn1lbHNle1xudGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnU2lnbnVwJyk7XG5cbn1cbn1cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblVzZXIoKSB7XG4gIHZhciB0aHM9dGhpcztcbiAgdmFyIHBhdHRlcm4gPSAvXlxcYltBLVowLTkuXyUtXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9XFxiJC9pO1xuICB2YXIgZXJyb3I9JzEnO1xuICAgJChcIiNsb2dpbkZvcm0gaW5wdXQ6dGV4dFwiKS5lYWNoKGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdGlmKHRoaXMudmFsdWU9PScnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdGVycm9yKys7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZigkKCcjcGFzc3dvcmQnKS52YWwoKT09Jycpe1xuXHRcdFx0JCgnI3Bhc3N3b3JkJykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdCBlcnJvcisrO1xuXHRcdFx0fVxuICBpZighcGF0dGVybi50ZXN0KCQoJyNlbWFpbCcpLnZhbCgpKSlcbiAgICAgICAge1xuICAgICAgICAgICQoJyNlbWFpbCcpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0ICBlcnJvcisrO1xuXHRcdCAgXG4gICAgICAgIH1lbHNle1xuXHRcdCQoJyNlbWFpbCcpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG5cdFx0fVxuXHQgIFxuXHQgIGlmKGVycm9yPT0nMScpe1xuXHQgIC8vJChcIiNsb2dpbl9zdWJtaXRcIikuYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG5cdCAgdmFyIGxvY2F0SWRzPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpO1xuXHQgIHZhciBkZXNrPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZGVzaycpO1xuICBcdFx0aWYobG9jYXRJZHMhPW51bGwpe1xuXHRcdHZhciB1cmw9Jy4vYXBpL3VzZXJzL2xvZ2luX2xvY2F0aW9uL2xvY2F0SWRzL2Rlc2snO1xuXHRcdH1lbHNle1xuXHRcdHZhciB1cmw9Jy4vYXBpL3VzZXJzL2xvZ2luJztcblx0XHR9XG5cdCAgXG5cdCAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6dXJsLFxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6ICQoXCIjbG9naW5Gb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMC41JykuYXBwZW5kKCc8aW1nIHNyYz1cInNyYy9pbWcvbG9hZGluZy5naWZcIiBib3JkZXI9XCIwXCIgY2xhc3M9XCJsb2FkaVwiIHN0eWxlPSBcImxlZnQ6IDQ4JTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAyNSU7XCIgYWx0PVwiXCIgdGl0bGU9XCJcIiAvPicpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICB7XG5cdFx0ICAgJChcIiNsb2dpbl9zdWJtaXRcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuXHRcdCAgdmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmlkXCIsIG9iai51c2VyLmlkKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5uYW1lXCIsIG9iai51c2VyLm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmluZHVzdHJ5XCIsIG9iai51c2VyLmluZHVzdHJ5KTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbWFnZVwiLCBvYmoudXNlci5pbWFnZSk7XG5cdFx0XHRcdFx0XHQkKFwiI2F1dGhfbGlcIikuaHRtbCgnPGEgcm91dGVybGlua2FjdGl2ZT1cImFjdGl2ZVwiIGlkPVwibG9nb3V0XCI+TG9nb3V0PC9hPicpO1xuXHRcdFx0XHRcdFx0aWYob2JqLmFjdD09XCJpbmRleFwiKXtcblx0XHRcdFx0XHRcdHRocy5fcm91dGVyLm5hdmlnYXRlKFsnL0hvbWUnXSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRocy5fcm91dGVyLm5hdmlnYXRlKFsnL1NpZ25VcENvbmdyYXRzJywgeyBpZDogb2JqLnVzZXIuaWQsIG5hbWU6IG9iai51c2VyLm5hbWUsaW5kdXN0cnk6b2JqLnVzZXIuaW5kdXN0cnksaW1hZ2U6b2JqLnVzZXIuaW1hZ2UgfV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImVycm9yXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmh0bWwob2JqLm1zc2cpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzEnKTtcblx0XHRcdFx0XHRcdCAkKCcubG9hZGknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0pO1xuXHRcdH1cbiAgfSBcbiAgbmdPbkluaXQoKSB7XG4gIGlmKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpPT1udWxsKXt0aGlzLmxvY2F0aW9uaWRfZGl2PScwJzt9XG4gIGVsc2V7dGhpcy5sb2NhdGlvbmlkX2Rpdj0nMSc7fVxuICB0aGlzLmxvY2F0aW9uaWQ9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJyk7XG4gIHRoaXMuZGVzaz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2Rlc2snKTtcbiAgXG4gICQoJyNsb2dpbkZvcm0gaW5wdXQnKS5mb2N1cyhmdW5jdGlvbigpe1xuICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7JCgnLmVycm9yX3RleHQnKS5oaWRlKCk7XG4gIH0pO1xuICBcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLmJhY2tfYm90b20nLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRwYXJlbnQuaGlzdG9yeS5iYWNrKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbiAgfVxuXHRcdFx0XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
