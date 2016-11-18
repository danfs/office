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
    var SignupNextStepComponent;
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
            SignupNextStepComponent = (function () {
                function SignupNextStepComponent(http, _router, _routeParams) {
                    this.http = http;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                SignupNextStepComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                SignupNextStepComponent.prototype.registerUser2 = function (user) {
                    var ths = this;
                    var phonepattern = /^[a-zA-Z0-9\-_]{10,11}$/;
                    var error = '1';
                    var lck_stion = localStorage.getItem('select_location');
                    $("#registrationForm2 input:text").each(function () {
                        if (this.value == '') {
                            $(this).addClass("error");
                            error++;
                        }
                        else if ($(this).hasClass("phone_number") && !phonepattern.test(this.value)) {
                            $(this).addClass("error");
                            error++;
                        }
                        else {
                            $(this).removeClass("error");
                            $('.error_text').hide();
                        }
                    });
                    if (error == '1') {
                        $("#save_contact").attr("disabled", "disabled");
                        $.ajax({
                            url: './api/users/save_contact',
                            type: "POST",
                            data: $("#registrationForm2").serialize(),
                            beforeSend: function () {
                                //$(".login_page .loading").fadeIn();
                            },
                            success: function (response) {
                                $("#save_contact").removeAttr("disabled");
                                var obj = $.parseJSON(response);
                                if (obj.status == "success") {
                                    if (lck_stion != null) {
                                        ths._router.navigate(['/SignUpCongrats', { id: obj.id, name: obj.name, industry: obj.industry, image: obj.image }]);
                                    }
                                    else {
                                        ths._router.navigate(['/Home']);
                                    }
                                }
                                else if (obj.status == "error") {
                                    return false;
                                }
                            }
                        });
                    }
                    else {
                        $('.error_text').show();
                    }
                };
                SignupNextStepComponent.prototype.ngOnInit = function () {
                    this.id = localStorage.getItem('user.id');
                    this.username = decodeURIComponent(localStorage.getItem('user.name'));
                    this.industry = decodeURIComponent(localStorage.getItem('user.industry')).replace('""', '-');
                    var imgs = decodeURIComponent(localStorage.getItem('user.image'));
                    if ($.trim(imgs) != "undefined" && imgs != null && imgs != '') {
                        this.image = imgs;
                    }
                    else {
                        this.image = 'small_no-image.png';
                    }
                    $("#registrationForm2 input").focus(function () {
                        $(this).removeClass('error');
                        $('.error_text').hide();
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                    $.ajax({
                        url: "api/users/getuserdetail",
                        type: "POST",
                        data: ({ user: localStorage.getItem('user.id') }),
                        beforeSend: function () { },
                        success: function (response) {
                            var obj = $.parseJSON(response);
                            if (obj.status == "success") {
                                $('#address1').val(obj.address1);
                                $('#address2').val(obj.address2);
                                $('#city').val(obj.city);
                                $('#county').val(obj.county);
                                $('#post_code').val(obj.post_code);
                                $('#country').val(obj.country);
                                $('#phone_number').val(obj.phone_number);
                            }
                        }
                    });
                };
                SignupNextStepComponent = __decorate([
                    core_1.Component({
                        selector: 'signup_next_step',
                        templateUrl: 'dev/home/signup_next_step.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_2.Router, router_2.RouteParams])
                ], SignupNextStepComponent);
                return SignupNextStepComponent;
            }());
            exports_1("SignupNextStepComponent", SignupNextStepComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbnVwX25leHRfc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBTUksaUNBQW9CLElBQVMsRUFBVSxPQUFlLEVBQVMsWUFBeUI7b0JBQXBFLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUwvRixzQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFHRiwrQ0FBYSxHQUFiLFVBQWMsSUFBSTtvQkFFbEIsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDO29CQUViLElBQUksWUFBWSxHQUFJLHlCQUF5QixDQUFDO29CQUU5QyxJQUFJLEtBQUssR0FBQyxHQUFHLENBQUM7b0JBQ2QsSUFBSSxTQUFTLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUN0RCxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBRXRDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQ2xCLENBQUM7NEJBQ0EsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDMUIsS0FBSyxFQUFFLENBQUM7d0JBQ1QsQ0FBQzt3QkFFRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNFLENBQUM7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QUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3pCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUM3QixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDbkMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0NBQy9CLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUN6QyxDQUFDO3dCQUNELENBQUM7cUJBR0YsQ0FBQyxDQUFBO2dCQUNMLENBQUM7Z0JBeEhGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLDBDQUEwQzt3QkFDdkQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7OzJDQUFBO2dCQXVIRiw4QkFBQztZQUFELENBdEhBLEFBc0hDLElBQUE7WUF0SEQsNkRBc0hDLENBQUEiLCJmaWxlIjoiaG9tZS9zaWdudXBfbmV4dF9zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWdudXBfbmV4dF9zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9zaWdudXBfbmV4dF9zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwTmV4dFN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cbiBcdHByaXZhdGUgZGF0YTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKXt9XG4gXHRyZWdpc3RlclVzZXIyKHVzZXIpIHtcblx0XG4gIHZhciB0aHM9dGhpcztcbiAgXG4gIHZhciBwaG9uZXBhdHRlcm4gID0gL15bYS16QS1aMC05XFwtX117MTAsMTF9JC87XG5cdFx0XG4gIHZhciBlcnJvcj0nMSc7XG4gIHZhciBsY2tfc3Rpb249bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdF9sb2NhdGlvbicpO1xuICAkKFwiI3JlZ2lzdHJhdGlvbkZvcm0yIGlucHV0OnRleHRcIikuZWFjaChmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKHRoaXMudmFsdWU9PScnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdGVycm9yKys7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcyhcInBob25lX251bWJlclwiKSAmJiAhcGhvbmVwYXR0ZXJuLnRlc3QodGhpcy52YWx1ZSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0ZXJyb3IrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0JCgnLmVycm9yX3RleHQnKS5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHQgIGlmKGVycm9yPT0nMScpe1xuXHQgICQoXCIjc2F2ZV9jb250YWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHQgICQuYWpheCh7XG4gICAgICAgICAgdXJsOicuL2FwaS91c2Vycy9zYXZlX2NvbnRhY3QnLFxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6ICQoXCIjcmVnaXN0cmF0aW9uRm9ybTJcIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgYmVmb3JlU2VuZDpmdW5jdGlvbigpXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8kKFwiLmxvZ2luX3BhZ2UgLmxvYWRpbmdcIikuZmFkZUluKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICB7XG5cdFx0ICAgJChcIiNzYXZlX2NvbnRhY3RcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuXHRcdCAgdmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZihsY2tfc3Rpb24hPW51bGwpe1xuXHRcdFx0XHRcdFx0XHR0aHMuX3JvdXRlci5uYXZpZ2F0ZShbJy9TaWduVXBDb25ncmF0cycsIHsgaWQ6IG9iai5pZCwgbmFtZTogb2JqLm5hbWUsaW5kdXN0cnk6b2JqLmluZHVzdHJ5LGltYWdlOm9iai5pbWFnZSB9XSk7XG5cdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHR0aHMuX3JvdXRlci5uYXZpZ2F0ZShbJy9Ib21lJ10pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0JCgnLmVycm9yX3RleHQnKS5zaG93KCk7XG5cdFx0fVxuICB9XG4gXHRuZ09uSW5pdCgpe1xuXHRcblx0XG5cdFxuXHR0aGlzLmlkPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLmlkJyk7XG5cdHRoaXMudXNlcm5hbWU9ZGVjb2RlVVJJQ29tcG9uZW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLm5hbWUnKSk7XG5cdHRoaXMuaW5kdXN0cnk9ZGVjb2RlVVJJQ29tcG9uZW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLmluZHVzdHJ5JykpLnJlcGxhY2UoJ1wiXCInLCAnLScpO1xuXHRcblx0dmFyIGltZ3M9ZGVjb2RlVVJJQ29tcG9uZW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLmltYWdlJykpO1xuXHRpZigkLnRyaW0oaW1ncykgIT1cInVuZGVmaW5lZFwiICYmIGltZ3MgIT0gbnVsbCAmJiBpbWdzICE9ICcnKXtcblx0dGhpcy5pbWFnZSA9IGltZ3M7XG5cdH1lbHNle3RoaXMuaW1hZ2UgPSAnc21hbGxfbm8taW1hZ2UucG5nJzt9XG5cdFxuXHQkKFwiI3JlZ2lzdHJhdGlvbkZvcm0yIGlucHV0XCIpLmZvY3VzKGZ1bmN0aW9uKCl7XG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG5cdCQoJy5lcnJvcl90ZXh0JykuaGlkZSgpO1xuXHR9KTtcblx0XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdCQuYWpheCh7XG5cdFx0XHRcdFx0dXJsOlwiYXBpL3VzZXJzL2dldHVzZXJkZXRhaWxcIixcblx0XHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdFx0XHRkYXRhOiAoe3VzZXI6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIuaWQnKX0pLFxuXHRcdFx0XHRcdGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQoJyNhZGRyZXNzMScpLnZhbChvYmouYWRkcmVzczEpO1xuXHRcdFx0XHRcdFx0JCgnI2FkZHJlc3MyJykudmFsKG9iai5hZGRyZXNzMik7XG5cdFx0XHRcdFx0XHQkKCcjY2l0eScpLnZhbChvYmouY2l0eSk7XG5cdFx0XHRcdFx0XHQkKCcjY291bnR5JykudmFsKG9iai5jb3VudHkpO1xuXHRcdFx0XHRcdFx0JCgnI3Bvc3RfY29kZScpLnZhbChvYmoucG9zdF9jb2RlKTtcblx0XHRcdFx0XHRcdCQoJyNjb3VudHJ5JykudmFsKG9iai5jb3VudHJ5KTtcblx0XHRcdFx0XHRcdCQoJyNwaG9uZV9udW1iZXInKS52YWwob2JqLnBob25lX251bWJlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XG5cdFx0XHRcdH0pXG5cdH1cblx0XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
