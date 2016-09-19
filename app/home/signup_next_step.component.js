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
                                    ths._router.navigate(['/SignUpCongrats', { id: obj.id, name: obj.name, industry: obj.industry, image: obj.image }]);
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
                    this.industry = decodeURIComponent(localStorage.getItem('user.industry'));
                    var imgs = decodeURIComponent(localStorage.getItem('user.image'));
                    if (imgs != "undefined") {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbnVwX25leHRfc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBTUksaUNBQW9CLElBQVMsRUFBVSxPQUFlLEVBQVMsWUFBeUI7b0JBQXBFLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUwvRixzQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFHRiwrQ0FBYSxHQUFiLFVBQWMsSUFBSTtvQkFFbEIsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDO29CQUViLElBQUksWUFBWSxHQUFJLHlCQUF5QixDQUFDO29CQUU5QyxJQUFJLEtBQUssR0FBQyxHQUFHLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUV0QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFFLEVBQUUsQ0FBQyxDQUNsQixDQUFDOzRCQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzFCLEtBQUssRUFBRSxDQUFDO3dCQUNULENBQUM7d0JBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMzRSxDQUFDOzRCQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7NEJB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LENBQUM7NEJBQ3pDLENBQUM7d0JBQ0QsQ0FBQztxQkFHRixDQUFDLENBQUE7Z0JBQ0wsQ0FBQztnQkFqSEY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixXQUFXLEVBQUUsMENBQTBDO3dCQUN2RCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7MkNBQUE7Z0JBZ0hGLDhCQUFDO1lBQUQsQ0EvR0EsQUErR0MsSUFBQTtZQS9HRCw2REErR0MsQ0FBQSIsImZpbGUiOiJob21lL3NpZ251cF9uZXh0X3N0ZXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZ251cF9uZXh0X3N0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL3NpZ251cF9uZXh0X3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBOZXh0U3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5Ib21lKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0fVxuIFx0cHJpdmF0ZSBkYXRhO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpe31cbiBcdHJlZ2lzdGVyVXNlcjIodXNlcikge1xuXHRcbiAgdmFyIHRocz10aGlzO1xuICBcbiAgdmFyIHBob25lcGF0dGVybiAgPSAvXlthLXpBLVowLTlcXC1fXXsxMCwxMX0kLztcblx0XHRcbiAgdmFyIGVycm9yPScxJztcbiAgJChcIiNyZWdpc3RyYXRpb25Gb3JtMiBpbnB1dDp0ZXh0XCIpLmVhY2goZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHRpZih0aGlzLnZhbHVlPT0nJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdFx0XHRlcnJvcisrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRlbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoXCJwaG9uZV9udW1iZXJcIikgJiYgIXBob25lcGF0dGVybi50ZXN0KHRoaXMudmFsdWUpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdGVycm9yKys7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0ICBpZihlcnJvcj09JzEnKXtcblx0ICAkKFwiI3NhdmVfY29udGFjdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblx0ICAkLmFqYXgoe1xuICAgICAgICAgIHVybDonLi9hcGkvdXNlcnMvc2F2ZV9jb250YWN0JyxcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiAkKFwiI3JlZ2lzdHJhdGlvbkZvcm0yXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vJChcIi5sb2dpbl9wYWdlIC5sb2FkaW5nXCIpLmZhZGVJbigpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAge1xuXHRcdCAgICQoXCIjc2F2ZV9jb250YWN0XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHQgIHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhzLl9yb3V0ZXIubmF2aWdhdGUoWycvU2lnblVwQ29uZ3JhdHMnLCB7IGlkOiBvYmouaWQsIG5hbWU6IG9iai5uYW1lLGluZHVzdHJ5Om9iai5pbmR1c3RyeSxpbWFnZTpvYmouaW1hZ2UgfV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImVycm9yXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0pO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdCQoJy5lcnJvcl90ZXh0Jykuc2hvdygpO1xuXHRcdH1cbiAgfVxuIFx0bmdPbkluaXQoKXtcblx0XG5cdHRoaXMuaWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIuaWQnKTtcblx0dGhpcy51c2VybmFtZT1kZWNvZGVVUklDb21wb25lbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIubmFtZScpKTtcblx0dGhpcy5pbmR1c3RyeT1kZWNvZGVVUklDb21wb25lbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIuaW5kdXN0cnknKSk7XG5cdHZhciBpbWdzPWRlY29kZVVSSUNvbXBvbmVudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci5pbWFnZScpO1xuXHRpZihpbWdzICE9IFwidW5kZWZpbmVkXCIpe1xuXHR0aGlzLmltYWdlID0gaW1ncztcblx0fWVsc2V7dGhpcy5pbWFnZSA9ICdzbWFsbF9uby1pbWFnZS5wbmcnO31cblx0XG5cdCQoXCIjcmVnaXN0cmF0aW9uRm9ybTIgaW5wdXRcIikuZm9jdXMoZnVuY3Rpb24oKXtcblx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcblx0JCgnLmVycm9yX3RleHQnKS5oaWRlKCk7XG5cdH0pO1xuXHRcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywnLmJhY2tfYm90b20nLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRwYXJlbnQuaGlzdG9yeS5iYWNrKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblx0XG5cdCQuYWpheCh7XG5cdFx0XHRcdFx0dXJsOlwiYXBpL3VzZXJzL2dldHVzZXJkZXRhaWxcIixcblx0XHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdFx0XHRkYXRhOiAoe3VzZXI6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIuaWQnKX0pLFxuXHRcdFx0XHRcdGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQoJyNhZGRyZXNzMScpLnZhbChvYmouYWRkcmVzczEpO1xuXHRcdFx0XHRcdFx0JCgnI2FkZHJlc3MyJykudmFsKG9iai5hZGRyZXNzMik7XG5cdFx0XHRcdFx0XHQkKCcjY2l0eScpLnZhbChvYmouY2l0eSk7XG5cdFx0XHRcdFx0XHQkKCcjY291bnR5JykudmFsKG9iai5jb3VudHkpO1xuXHRcdFx0XHRcdFx0JCgnI3Bvc3RfY29kZScpLnZhbChvYmoucG9zdF9jb2RlKTtcblx0XHRcdFx0XHRcdCQoJyNjb3VudHJ5JykudmFsKG9iai5jb3VudHJ5KTtcblx0XHRcdFx0XHRcdCQoJyNwaG9uZV9udW1iZXInKS52YWwob2JqLnBob25lX251bWJlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XG5cdFx0XHRcdH0pXG5cdH1cblx0XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
