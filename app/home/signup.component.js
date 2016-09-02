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
    var SignupComponent;
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
            SignupComponent = (function () {
                function SignupComponent(http, _router, _routeParams) {
                    this.http = http;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                SignupComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                SignupComponent.prototype.registerUser = function (user) {
                    var ths = this;
                    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
                    var error = '1';
                    $("#registrationForm input:text").each(function () {
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
                        $("#registrationForm_sub").attr("disabled", "disabled");
                        $.ajax({
                            url: './api/users/signup',
                            type: "POST",
                            data: $("#registrationForm").serialize(),
                            beforeSend: function () {
                                //$(".login_page .loading").fadeIn();
                            },
                            success: function (response) {
                                $("#registrationForm_sub").removeAttr("disabled");
                                var obj = $.parseJSON(response);
                                if (obj.status == "success") {
                                    localStorage.setItem("user.id", obj.user.id);
                                    localStorage.setItem("user.name", obj.user.name);
                                    localStorage.setItem("user.industry", obj.user.industry);
                                    localStorage.setItem("user.image", obj.user.image);
                                    localStorage.setItem("nextloc", obj.nextloc);
                                    ths._router.navigate(['/SignupNextStep']);
                                }
                                else if (obj.status == "error") {
                                    return false;
                                }
                            }
                        });
                    }
                    else {
                        return false;
                    }
                };
                SignupComponent.prototype.ngOnInit = function () {
                    $('#location').val(this._routeParams.get('locationid'));
                    $('#desk').val(this._routeParams.get('desk'));
                    this.locationid = this._routeParams.get('locationid');
                    this.desk = this._routeParams.get('desk');
                    $("#registrationForm input").focus(function () {
                        $(this).removeClass('error');
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: 'dev/home/signup.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_2.Router, router_2.RouteParams])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyx5QkFBb0IsSUFBUyxFQUFVLE9BQWUsRUFBUyxZQUF5QjtvQkFBcEUsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRTdGLDhCQUFJLEdBQUosVUFBSyxLQUFLO29CQUNQLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNGLHNDQUFZLEdBQVosVUFBYSxJQUFJO29CQUNqQixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxPQUFPLEdBQUcsOENBQThDLENBQUM7b0JBQzdELElBQUksS0FBSyxHQUFDLEdBQUcsQ0FBQztvQkFDYixDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBRXZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQ2pCLENBQUM7NEJBQ0EsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDMUIsS0FBSyxFQUFFLENBQUM7d0JBQ1QsQ0FBQzt3QkFBQSxJQUFJLENBQUEsQ0FBQzs0QkFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM3QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3pCLENBQUM7b0JBQ0YsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFB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QztvQkFDcEQsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQztvQkFFSCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUU7d0JBRXJDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0YsQ0FBQztnQkExRkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLGdDQUFnQzt3QkFDN0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O21DQUFBO2dCQXdGRixzQkFBQztZQUFELENBdkZBLEFBdUZDLElBQUE7WUF2RkQsNkNBdUZDLENBQUEiLCJmaWxlIjoiaG9tZS9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gcHJpdmF0ZSBkYXRhO1xuIFxuIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG5cbkhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9XG4gIHJlZ2lzdGVyVXNlcih1c2VyKSB7XG4gIHZhciB0aHM9dGhpcztcbiAgdmFyIHBhdHRlcm4gPSAvXlxcYltBLVowLTkuXyUtXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9XFxiJC9pO1xuICB2YXIgZXJyb3I9JzEnO1xuICAgJChcIiNyZWdpc3RyYXRpb25Gb3JtIGlucHV0OnRleHRcIikuZWFjaChmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRpZih0aGlzLnZhbHVlPT0nJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdFx0XHRlcnJvcisrO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0JCgnLmVycm9yX3RleHQnKS5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aWYoJCgnI3Bhc3N3b3JkJykudmFsKCk9PScnKXtcblx0XHRcdCQoJyNwYXNzd29yZCcpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHQgZXJyb3IrKztcblx0XHRcdH1cbiAgaWYoIXBhdHRlcm4udGVzdCgkKCcjZW1haWwnKS52YWwoKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAkKCcjZW1haWwnKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdCAgZXJyb3IrKztcblx0XHQgIFxuICAgICAgICB9ZWxzZXtcblx0XHQkKCcjZW1haWwnKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuXHRcdH1cblx0ICBcblx0ICBpZihlcnJvcj09JzEnKXtcblx0ICAkKFwiI3JlZ2lzdHJhdGlvbkZvcm1fc3ViXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHQgICQuYWpheCh7XG4gICAgICAgICAgdXJsOicuL2FwaS91c2Vycy9zaWdudXAnLFxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6ICQoXCIjcmVnaXN0cmF0aW9uRm9ybVwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBiZWZvcmVTZW5kOmZ1bmN0aW9uKClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyQoXCIubG9naW5fcGFnZSAubG9hZGluZ1wiKS5mYWRlSW4oKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICAgIHtcblx0XHQgICAkKFwiI3JlZ2lzdHJhdGlvbkZvcm1fc3ViXCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHQgIHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pZFwiLCBvYmoudXNlci5pZCk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIubmFtZVwiLCBvYmoudXNlci5uYW1lKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbmR1c3RyeVwiLCBvYmoudXNlci5pbmR1c3RyeSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW1hZ2VcIiwgb2JqLnVzZXIuaW1hZ2UpXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5leHRsb2NcIiwgb2JqLm5leHRsb2MpO1xuXHRcdFx0XHRcdFx0dGhzLl9yb3V0ZXIubmF2aWdhdGUoWycvU2lnbnVwTmV4dFN0ZXAnXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0fWVsc2V7cmV0dXJuIGZhbHNlO31cbiAgfSBcbiAgbmdPbkluaXQoKSB7XG4gICQoJyNsb2NhdGlvbicpLnZhbCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSk7XG4gICQoJyNkZXNrJykudmFsKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZGVzaycpKTtcbiAgdGhpcy5sb2NhdGlvbmlkPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpO1xuICB0aGlzLmRlc2s9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdkZXNrJyk7XG4gICQoXCIjcmVnaXN0cmF0aW9uRm9ybSBpbnB1dFwiKS5mb2N1cyhmdW5jdGlvbigpe1xuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuXHR9KTtcblx0XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
