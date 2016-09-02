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
                        var desk = this._routeParams.get('locationid');
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
                    $('#loginForm input').focus(function () {
                        $(this).removeClass("error");
                        $('.error_text').hide();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdDLHdCQUFvQixJQUFTLEVBQVUsT0FBZSxFQUFTLFlBQXlCO29CQUFwRSxTQUFJLEdBQUosSUFBSSxDQUFLO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFDM0YsNkJBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQXdILGtDQUFTLEdBQVQ7b0JBQzFILElBQUksR0FBRyxHQUFDLElBQUksQ0FBQztvQkFDYixJQUFJLE9BQU8sR0FBRyw4Q0FBOEMsQ0FBQztvQkFDN0QsSUFBSSxLQUFLLEdBQUMsR0FBRyxDQUFDO29CQUNiLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFFaEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxFQUFFLENBQUMsQ0FDakIsQ0FBQzs0QkFDQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUMxQixLQUFLLEVBQUUsQ0FBQzt3QkFDVCxDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzdCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDekIsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQztvQkFDSCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUUsRUFB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Q0FBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29DQUNwSSxDQUFDO2dDQUNELENBQUM7Z0NBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUUsT0FBTyxDQUFDLENBQzVCLENBQUM7b0NBQ0QsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0NBQ3ZDLENBQUM7Z0NBQ0EsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2xDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQ0FDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQzs0QkFDYixDQUFDO3lCQUVKLENBQUMsQ0FBQztvQkFDVCxDQUFDO2dCQUNELENBQUM7Z0JBQ0QsaUNBQVEsR0FBUjtvQkFFQSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDO2dCQTNGSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxPQUFPO3dCQUNqQixXQUFXLEVBQUUsK0JBQStCO3dCQUM1QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7a0NBQUE7Z0JBMEZGLHFCQUFDO1lBQUQsQ0F6RkEsQUF5RkMsSUFBQTtZQXpGRCwyQ0F5RkMsQ0FBQSIsImZpbGUiOiJob21lL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xucHJpdmF0ZSBkYXRhO1xuIFxuIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG4gIEhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Vc2VyKCkge1xuICB2YXIgdGhzPXRoaXM7XG4gIHZhciBwYXR0ZXJuID0gL15cXGJbQS1aMC05Ll8lLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fVxcYiQvaTtcbiAgdmFyIGVycm9yPScxJztcbiAgICQoXCIjbG9naW5Gb3JtIGlucHV0OnRleHRcIikuZWFjaChmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRpZih0aGlzLnZhbHVlPT0nJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdFx0XHRlcnJvcisrO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0JCgnLmVycm9yX3RleHQnKS5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aWYoJCgnI3Bhc3N3b3JkJykudmFsKCk9PScnKXtcblx0XHRcdCQoJyNwYXNzd29yZCcpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHQgZXJyb3IrKztcblx0XHRcdH1cbiAgaWYoIXBhdHRlcm4udGVzdCgkKCcjZW1haWwnKS52YWwoKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAkKCcjZW1haWwnKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdCAgZXJyb3IrKztcblx0XHQgIFxuICAgICAgICB9ZWxzZXtcblx0XHQkKCcjZW1haWwnKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuXHRcdH1cblx0ICBcblx0ICBpZihlcnJvcj09JzEnKXtcblx0ICAvLyQoXCIjbG9naW5fc3VibWl0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHQgIHZhciBsb2NhdElkcz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKTtcblx0ICB2YXIgZGVzaz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKTtcbiAgXHRcdGlmKGxvY2F0SWRzIT1udWxsKXtcblx0XHR2YXIgdXJsPScuL2FwaS91c2Vycy9sb2dpbl9sb2NhdGlvbi9sb2NhdElkcy9kZXNrJztcblx0XHR9ZWxzZXtcblx0XHR2YXIgdXJsPScuL2FwaS91c2Vycy9sb2dpbic7XG5cdFx0fVxuXHQgIFxuXHQgICQuYWpheCh7XG4gICAgICAgICAgdXJsOnVybCxcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiAkKFwiI2xvZ2luRm9ybVwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBiZWZvcmVTZW5kOmZ1bmN0aW9uKClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzAuNScpLmFwcGVuZCgnPGltZyBzcmM9XCJzcmMvaW1nL2xvYWRpbmcuZ2lmXCIgYm9yZGVyPVwiMFwiIGNsYXNzPVwibG9hZGlcIiBzdHlsZT0gXCJsZWZ0OiA0OCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMjUlO1wiIGFsdD1cIlwiIHRpdGxlPVwiXCIgLz4nKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAge1xuXHRcdCAgICQoXCIjbG9naW5fc3VibWl0XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHQgIHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pZFwiLCBvYmoudXNlci5pZCk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIubmFtZVwiLCBvYmoudXNlci5uYW1lKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbmR1c3RyeVwiLCBvYmoudXNlci5pbmR1c3RyeSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW1hZ2VcIiwgb2JqLnVzZXIuaW1hZ2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLmFjdD09XCJpbmRleFwiKXtcblx0XHRcdFx0XHRcdHRocy5fcm91dGVyLm5hdmlnYXRlKFsnL0hvbWUnXSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRocy5fcm91dGVyLm5hdmlnYXRlKFsnL1NpZ25VcENvbmdyYXRzJywgeyBpZDogb2JqLnVzZXIuaWQsIG5hbWU6IG9iai51c2VyLm5hbWUsaW5kdXN0cnk6b2JqLnVzZXIuaW5kdXN0cnksaW1hZ2U6b2JqLnVzZXIuaW1hZ2UgfV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImVycm9yXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmh0bWwob2JqLm1zc2cpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzEnKTtcblx0XHRcdFx0XHRcdCAkKCcubG9hZGknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0pO1xuXHRcdH1cbiAgfSBcbiAgbmdPbkluaXQoKSB7XG4gIFxuICAkKCcjbG9naW5Gb3JtIGlucHV0JykuZm9jdXMoZnVuY3Rpb24oKXtcbiAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpOyQoJy5lcnJvcl90ZXh0JykuaGlkZSgpO1xuICB9KTtcbiAgfVxuXHRcdFx0XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
