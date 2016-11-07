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
                    if ($.trim(imgs) != "undefined" || imgs != null)
                        !!imgs != '';
                    {
                        this.image = imgs;
                    }
                    {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbnVwX25leHRfc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBTUksaUNBQW9CLElBQVMsRUFBVSxPQUFlLEVBQVMsWUFBeUI7b0JBQXBFLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUwvRixzQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFHRiwrQ0FBYSxHQUFiLFVBQWMsSUFBSTtvQkFFbEIsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDO29CQUViLElBQUksWUFBWSxHQUFJLHlCQUF5QixDQUFDO29CQUU5QyxJQUFJLEtBQUssR0FBQyxHQUFHLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUV0QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFFLEVBQUUsQ0FBQyxDQUNsQixDQUFDOzRCQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzFCLEtBQUssRUFBRSxDQUFDO3dCQUNULENBQUM7d0JBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMzRSxDQUFDOzRCQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7NEJB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LENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dDQUMvQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDekMsQ0FBQzt3QkFDRCxDQUFDO3FCQUdGLENBQUMsQ0FBQTtnQkFDTCxDQUFDO2dCQWxIRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOzsyQ0FBQTtnQkFpSEYsOEJBQUM7WUFBRCxDQWhIQSxBQWdIQyxJQUFBO1lBaEhELDZEQWdIQyxDQUFBIiwiZmlsZSI6ImhvbWUvc2lnbnVwX25leHRfc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lnbnVwX25leHRfc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvc2lnbnVwX25leHRfc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cE5leHRTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbkhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9XG4gXHRwcml2YXRlIGRhdGE7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyl7fVxuIFx0cmVnaXN0ZXJVc2VyMih1c2VyKSB7XG5cdFxuICB2YXIgdGhzPXRoaXM7XG4gIFxuICB2YXIgcGhvbmVwYXR0ZXJuICA9IC9eW2EtekEtWjAtOVxcLV9dezEwLDExfSQvO1xuXHRcdFxuICB2YXIgZXJyb3I9JzEnO1xuICAkKFwiI3JlZ2lzdHJhdGlvbkZvcm0yIGlucHV0OnRleHRcIikuZWFjaChmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKHRoaXMudmFsdWU9PScnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdGVycm9yKys7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcyhcInBob25lX251bWJlclwiKSAmJiAhcGhvbmVwYXR0ZXJuLnRlc3QodGhpcy52YWx1ZSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0ZXJyb3IrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0JCgnLmVycm9yX3RleHQnKS5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHQgIGlmKGVycm9yPT0nMScpe1xuXHQgICQoXCIjc2F2ZV9jb250YWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHQgICQuYWpheCh7XG4gICAgICAgICAgdXJsOicuL2FwaS91c2Vycy9zYXZlX2NvbnRhY3QnLFxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6ICQoXCIjcmVnaXN0cmF0aW9uRm9ybTJcIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgYmVmb3JlU2VuZDpmdW5jdGlvbigpXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8kKFwiLmxvZ2luX3BhZ2UgLmxvYWRpbmdcIikuZmFkZUluKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICB7XG5cdFx0ICAgJChcIiNzYXZlX2NvbnRhY3RcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuXHRcdCAgdmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aHMuX3JvdXRlci5uYXZpZ2F0ZShbJy9TaWduVXBDb25ncmF0cycsIHsgaWQ6IG9iai5pZCwgbmFtZTogb2JqLm5hbWUsaW5kdXN0cnk6b2JqLmluZHVzdHJ5LGltYWdlOm9iai5pbWFnZSB9XSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0JCgnLmVycm9yX3RleHQnKS5zaG93KCk7XG5cdFx0fVxuICB9XG4gXHRuZ09uSW5pdCgpe1xuXHRcblx0dGhpcy5pZD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci5pZCcpO1xuXHR0aGlzLnVzZXJuYW1lPWRlY29kZVVSSUNvbXBvbmVudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci5uYW1lJykpO1xuXHR0aGlzLmluZHVzdHJ5PWRlY29kZVVSSUNvbXBvbmVudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci5pbmR1c3RyeScpKS5yZXBsYWNlKCdcIlwiJywgJy0nKTtcblx0XG5cdHZhciBpbWdzPWRlY29kZVVSSUNvbXBvbmVudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci5pbWFnZScpKTtcblx0XG5cdGlmKCQudHJpbShpbWdzKSAhPVwidW5kZWZpbmVkXCIgfHwgaW1ncyAhPSBudWxsICEhIGltZ3MgIT0gJycpe1xuXHR0aGlzLmltYWdlID0gaW1ncztcblx0fWVsc2V7dGhpcy5pbWFnZSA9ICdzbWFsbF9uby1pbWFnZS5wbmcnO31cblx0XG5cdCQoXCIjcmVnaXN0cmF0aW9uRm9ybTIgaW5wdXRcIikuZm9jdXMoZnVuY3Rpb24oKXtcblx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcblx0JCgnLmVycm9yX3RleHQnKS5oaWRlKCk7XG5cdH0pO1xuXHRcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywnLmJhY2tfYm90b20nLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRwYXJlbnQuaGlzdG9yeS5iYWNrKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblx0JC5hamF4KHtcblx0XHRcdFx0XHR1cmw6XCJhcGkvdXNlcnMvZ2V0dXNlcmRldGFpbFwiLFxuXHRcdFx0XHRcdHR5cGU6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGRhdGE6ICh7dXNlcjpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci5pZCcpfSksXG5cdFx0XHRcdFx0YmVmb3JlU2VuZDpmdW5jdGlvbigpXG5cdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0JCgnI2FkZHJlc3MxJykudmFsKG9iai5hZGRyZXNzMSk7XG5cdFx0XHRcdFx0XHQkKCcjYWRkcmVzczInKS52YWwob2JqLmFkZHJlc3MyKTtcblx0XHRcdFx0XHRcdCQoJyNjaXR5JykudmFsKG9iai5jaXR5KTtcblx0XHRcdFx0XHRcdCQoJyNjb3VudHknKS52YWwob2JqLmNvdW50eSk7XG5cdFx0XHRcdFx0XHQkKCcjcG9zdF9jb2RlJykudmFsKG9iai5wb3N0X2NvZGUpO1xuXHRcdFx0XHRcdFx0JCgnI2NvdW50cnknKS52YWwob2JqLmNvdW50cnkpO1xuXHRcdFx0XHRcdFx0JCgnI3Bob25lX251bWJlcicpLnZhbChvYmoucGhvbmVfbnVtYmVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcblx0XHRcdFx0fSlcblx0fVxuXHRcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
