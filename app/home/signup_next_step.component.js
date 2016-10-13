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
                    this.industry = decodeURIComponent(localStorage.getItem('user.industry')).replace('""', '-');
                    var imgs = decodeURIComponent(localStorage.getItem('user.image'));
                    if (imgs != "undefined" || imgs != null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbnVwX25leHRfc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBTUksaUNBQW9CLElBQVMsRUFBVSxPQUFlLEVBQVMsWUFBeUI7b0JBQXBFLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUwvRixzQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFHRiwrQ0FBYSxHQUFiLFVBQWMsSUFBSTtvQkFFbEIsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDO29CQUViLElBQUksWUFBWSxHQUFJLHlCQUF5QixDQUFDO29CQUU5QyxJQUFJLEtBQUssR0FBQyxHQUFHLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUV0QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFFLEVBQUUsQ0FBQyxDQUNsQixDQUFDOzRCQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzFCLEtBQUssRUFBRSxDQUFDO3dCQUNULENBQUM7d0JBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMzRSxDQUFDOzRCQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7NEJB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LENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUN6QyxDQUFDO3dCQUNELENBQUM7cUJBR0YsQ0FBQyxDQUFBO2dCQUNMLENBQUM7Z0JBaEhGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLDBDQUEwQzt3QkFDdkQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7OzJDQUFBO2dCQStHRiw4QkFBQztZQUFELENBOUdBLEFBOEdDLElBQUE7WUE5R0QsNkRBOEdDLENBQUEiLCJmaWxlIjoiaG9tZS9zaWdudXBfbmV4dF9zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWdudXBfbmV4dF9zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9zaWdudXBfbmV4dF9zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwTmV4dFN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cbiBcdHByaXZhdGUgZGF0YTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKXt9XG4gXHRyZWdpc3RlclVzZXIyKHVzZXIpIHtcblx0XG4gIHZhciB0aHM9dGhpcztcbiAgXG4gIHZhciBwaG9uZXBhdHRlcm4gID0gL15bYS16QS1aMC05XFwtX117MTAsMTF9JC87XG5cdFx0XG4gIHZhciBlcnJvcj0nMSc7XG4gICQoXCIjcmVnaXN0cmF0aW9uRm9ybTIgaW5wdXQ6dGV4dFwiKS5lYWNoKGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdFx0aWYodGhpcy52YWx1ZT09JycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0ZXJyb3IrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0ZWxzZSBpZigkKHRoaXMpLmhhc0NsYXNzKFwicGhvbmVfbnVtYmVyXCIpICYmICFwaG9uZXBhdHRlcm4udGVzdCh0aGlzLnZhbHVlKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdFx0XHRlcnJvcisrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdCAgaWYoZXJyb3I9PScxJyl7XG5cdCAgJChcIiNzYXZlX2NvbnRhY3RcIikuYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG5cdCAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6Jy4vYXBpL3VzZXJzL3NhdmVfY29udGFjdCcsXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YTogJChcIiNyZWdpc3RyYXRpb25Gb3JtMlwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBiZWZvcmVTZW5kOmZ1bmN0aW9uKClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyQoXCIubG9naW5fcGFnZSAubG9hZGluZ1wiKS5mYWRlSW4oKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICAgIHtcblx0XHQgICAkKFwiI3NhdmVfY29udGFjdFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG5cdFx0ICB2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRocy5fcm91dGVyLm5hdmlnYXRlKFsnL1NpZ25VcENvbmdyYXRzJywgeyBpZDogb2JqLmlkLCBuYW1lOiBvYmoubmFtZSxpbmR1c3RyeTpvYmouaW5kdXN0cnksaW1hZ2U6b2JqLmltYWdlIH1dKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYob2JqLnN0YXR1cz09XCJlcnJvclwiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9KTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHQkKCcuZXJyb3JfdGV4dCcpLnNob3coKTtcblx0XHR9XG4gIH1cbiBcdG5nT25Jbml0KCl7XG5cdFxuXHR0aGlzLmlkPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLmlkJyk7XG5cdHRoaXMudXNlcm5hbWU9ZGVjb2RlVVJJQ29tcG9uZW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLm5hbWUnKSk7XG5cdHRoaXMuaW5kdXN0cnk9ZGVjb2RlVVJJQ29tcG9uZW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLmluZHVzdHJ5JykpLnJlcGxhY2UoJ1wiXCInLCAnLScpO1xuXHR2YXIgaW1ncz1kZWNvZGVVUklDb21wb25lbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIuaW1hZ2UnKTtcblx0aWYoaW1ncyAhPSBcInVuZGVmaW5lZFwiIHx8IGltZ3MgIT0gbnVsbCl7XG5cdHRoaXMuaW1hZ2UgPSBpbWdzO1xuXHR9ZWxzZXt0aGlzLmltYWdlID0gJ3NtYWxsX25vLWltYWdlLnBuZyc7fVxuXHRcblx0JChcIiNyZWdpc3RyYXRpb25Gb3JtMiBpbnB1dFwiKS5mb2N1cyhmdW5jdGlvbigpe1xuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuXHQkKCcuZXJyb3JfdGV4dCcpLmhpZGUoKTtcblx0fSk7XG5cdFxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXHQkLmFqYXgoe1xuXHRcdFx0XHRcdHVybDpcImFwaS91c2Vycy9nZXR1c2VyZGV0YWlsXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJQT1NUXCIsXG5cdFx0XHRcdFx0ZGF0YTogKHt1c2VyOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLmlkJyl9KSxcblx0XHRcdFx0XHRiZWZvcmVTZW5kOmZ1bmN0aW9uKClcblx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKCcjYWRkcmVzczEnKS52YWwob2JqLmFkZHJlc3MxKTtcblx0XHRcdFx0XHRcdCQoJyNhZGRyZXNzMicpLnZhbChvYmouYWRkcmVzczIpO1xuXHRcdFx0XHRcdFx0JCgnI2NpdHknKS52YWwob2JqLmNpdHkpO1xuXHRcdFx0XHRcdFx0JCgnI2NvdW50eScpLnZhbChvYmouY291bnR5KTtcblx0XHRcdFx0XHRcdCQoJyNwb3N0X2NvZGUnKS52YWwob2JqLnBvc3RfY29kZSk7XG5cdFx0XHRcdFx0XHQkKCcjY291bnRyeScpLnZhbChvYmouY291bnRyeSk7XG5cdFx0XHRcdFx0XHQkKCcjcGhvbmVfbnVtYmVyJykudmFsKG9iai5waG9uZV9udW1iZXIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFxuXHRcdFx0XHR9KVxuXHR9XG5cdFxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
