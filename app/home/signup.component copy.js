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
                                    ths._router.navigate(['/SignupNextStep', { id: obj.id, name: $('#name').val(), industry: $('#industry').val(), image: '' }]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbnVwLmNvbXBvbmVudCBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUlDLHlCQUFvQixJQUFTLEVBQVUsT0FBZSxFQUFTLFlBQXlCO29CQUFwRSxTQUFJLEdBQUosSUFBSSxDQUFLO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFN0YsOEJBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1AsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0Ysc0NBQVksR0FBWixVQUFhLElBQUk7b0JBQ2pCLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQztvQkFDYixJQUFJLE9BQU8sR0FBRyw4Q0FBOEMsQ0FBQztvQkFDN0QsSUFBSSxLQUFLLEdBQUMsR0FBRyxDQUFDO29CQUNiLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFFdkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxFQUFFLENBQUMsQ0FDakIsQ0FBQzs0QkFDQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUMxQixLQUFLLEVBQUUsQ0FBQzt3QkFDVCxDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzdCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDekIsQ0FBQztvQkFDRixDQUFDLENBQUMsQ0FBQztvQkFDSCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FB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QyxDQUFDLENBQUM7Z0JBQ0YsQ0FBQztnQkEvRUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLGdDQUFnQzt3QkFDN0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O21DQUFBO2dCQTZFRixzQkFBQztZQUFELENBNUVBLEFBNEVDLElBQUE7WUE1RUQsNkNBNEVDLENBQUEiLCJmaWxlIjoiaG9tZS9zaWdudXAuY29tcG9uZW50IGNvcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBBdXRoMExvY2s7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuIHByaXZhdGUgZGF0YTtcbiBcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7fVxuXG5Ib21lKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0fVxuICByZWdpc3RlclVzZXIodXNlcikge1xuICB2YXIgdGhzPXRoaXM7XG4gIHZhciBwYXR0ZXJuID0gL15cXGJbQS1aMC05Ll8lLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fVxcYiQvaTtcbiAgdmFyIGVycm9yPScxJztcbiAgICQoXCIjcmVnaXN0cmF0aW9uRm9ybSBpbnB1dDp0ZXh0XCIpLmVhY2goZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0aWYodGhpcy52YWx1ZT09JycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0ZXJyb3IrKztcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGlmKCQoJyNwYXNzd29yZCcpLnZhbCgpPT0nJyl7XG5cdFx0XHQkKCcjcGFzc3dvcmQnKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0IGVycm9yKys7XG5cdFx0XHR9XG4gIGlmKCFwYXR0ZXJuLnRlc3QoJCgnI2VtYWlsJykudmFsKCkpKVxuICAgICAgICB7XG4gICAgICAgICAgJCgnI2VtYWlsJykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHQgIGVycm9yKys7XG5cdFx0ICBcbiAgICAgICAgfWVsc2V7XG5cdFx0JCgnI2VtYWlsJykucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcblx0XHR9XG5cdCAgXG5cdCAgaWYoZXJyb3I9PScxJyl7XG5cdCAgJChcIiNyZWdpc3RyYXRpb25Gb3JtX3N1YlwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblx0ICAkLmFqYXgoe1xuICAgICAgICAgIHVybDonLi9hcGkvdXNlcnMvc2lnbnVwJyxcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiAkKFwiI3JlZ2lzdHJhdGlvbkZvcm1cIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgYmVmb3JlU2VuZDpmdW5jdGlvbigpXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8kKFwiLmxvZ2luX3BhZ2UgLmxvYWRpbmdcIikuZmFkZUluKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICB7XG5cdFx0ICAgJChcIiNyZWdpc3RyYXRpb25Gb3JtX3N1YlwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG5cdFx0ICB2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRocy5fcm91dGVyLm5hdmlnYXRlKFsnL1NpZ251cE5leHRTdGVwJywgeyBpZDogb2JqLmlkLCBuYW1lOiAkKCcjbmFtZScpLnZhbCgpLGluZHVzdHJ5OiQoJyNpbmR1c3RyeScpLnZhbCgpLGltYWdlOicnIH1dKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYob2JqLnN0YXR1cz09XCJlcnJvclwiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9KTtcblx0XHR9ZWxzZXtyZXR1cm4gZmFsc2U7fVxuICB9IFxuICBuZ09uSW5pdCgpIHtcbiAgJCgnI2xvY2F0aW9uJykudmFsKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpKTtcbiAgJCgnI2Rlc2snKS52YWwodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdkZXNrJykpO1xuICB0aGlzLmxvY2F0aW9uaWQ9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJyk7XG4gIHRoaXMuZGVzaz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2Rlc2snKTtcbiAgJChcIiNyZWdpc3RyYXRpb25Gb3JtIGlucHV0XCIpLmZvY3VzKGZ1bmN0aW9uKCl7XG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG5cdH0pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
