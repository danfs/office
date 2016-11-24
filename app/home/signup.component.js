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
                                    if (typeof obj.user.image !== "undefined") {
                                        localStorage.setItem("user.image", obj.user.image);
                                    }
                                    else {
                                        localStorage.setItem("user.image", '');
                                    }
                                    localStorage.setItem("nextloc", obj.nextloc);
                                    $("#auth_li").html('<a routerlinkactive="active" id="logout">Logout</a>');
                                    ths._router.navigate(['/SignupNextStep']);
                                }
                                else if (obj.status == "error") {
                                    return false;
                                }
                                else if (obj.status == "avail") {
                                    alert('Email id already exist');
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
                    if (this._routeParams.get('locationid') == null) {
                        this.locationid_div = '0';
                        localStorage.removeItem("select_location");
                    }
                    else {
                        this.locationid_div = '1';
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyx5QkFBb0IsSUFBUyxFQUFVLE9BQWUsRUFBUyxZQUF5QjtvQkFBcEUsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRTdGLDhCQUFJLEdBQUosVUFBSyxLQUFLO29CQUNQLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNGLHNDQUFZLEdBQVosVUFBYSxJQUFJO29CQUNqQixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxPQUFPLEdBQUcsOENBQThDLENBQUM7b0JBQzdELElBQUksS0FBSyxHQUFDLEdBQUcsQ0FBQztvQkFDYixDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBRXZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQ2pCLENBQUM7NEJBQ0EsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDMUIsS0FBSyxFQUFFLENBQUM7d0JBQ1QsQ0FBQzt3QkFBQSxJQUFJLENBQUEsQ0FBQzs0QkFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM3QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3pCLENBQUM7b0JBQ0YsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFB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Q0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FBQztnQkFDRixDQUFDO2dCQXZHSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7bUNBQUE7Z0JBcUdGLHNCQUFDO1lBQUQsQ0FwR0EsQUFvR0MsSUFBQTtZQXBHRCw2Q0FvR0MsQ0FBQSIsImZpbGUiOiJob21lL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL3NpZ251cC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiBwcml2YXRlIGRhdGE7XG4gXG4gY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge31cblxuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cbiAgcmVnaXN0ZXJVc2VyKHVzZXIpIHtcbiAgdmFyIHRocz10aGlzO1xuICB2YXIgcGF0dGVybiA9IC9eXFxiW0EtWjAtOS5fJS1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH1cXGIkL2k7XG4gIHZhciBlcnJvcj0nMSc7XG4gICAkKFwiI3JlZ2lzdHJhdGlvbkZvcm0gaW5wdXQ6dGV4dFwiKS5lYWNoKGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdGlmKHRoaXMudmFsdWU9PScnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0XHRcdGVycm9yKys7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZigkKCcjcGFzc3dvcmQnKS52YWwoKT09Jycpe1xuXHRcdFx0JCgnI3Bhc3N3b3JkJykuYWRkQ2xhc3MoXCJlcnJvclwiKTtcblx0XHRcdCBlcnJvcisrO1xuXHRcdFx0fVxuICBpZighcGF0dGVybi50ZXN0KCQoJyNlbWFpbCcpLnZhbCgpKSlcbiAgICAgICAge1xuICAgICAgICAgICQoJyNlbWFpbCcpLmFkZENsYXNzKFwiZXJyb3JcIik7XG5cdFx0ICBlcnJvcisrO1xuXHRcdCAgXG4gICAgICAgIH1lbHNle1xuXHRcdCQoJyNlbWFpbCcpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG5cdFx0fVxuXHQgIFxuXHQgIGlmKGVycm9yPT0nMScpe1xuXHQgICQoXCIjcmVnaXN0cmF0aW9uRm9ybV9zdWJcIikuYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG5cdCAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6Jy4vYXBpL3VzZXJzL3NpZ251cCcsXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YTogJChcIiNyZWdpc3RyYXRpb25Gb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vJChcIi5sb2dpbl9wYWdlIC5sb2FkaW5nXCIpLmZhZGVJbigpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAge1xuXHRcdCAgICQoXCIjcmVnaXN0cmF0aW9uRm9ybV9zdWJcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuXHRcdCAgdmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmlkXCIsIG9iai51c2VyLmlkKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5uYW1lXCIsIG9iai51c2VyLm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmluZHVzdHJ5XCIsIG9iai51c2VyLmluZHVzdHJ5KTtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2JqLnVzZXIuaW1hZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbWFnZVwiLCBvYmoudXNlci5pbWFnZSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbWFnZVwiLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5leHRsb2NcIiwgb2JqLm5leHRsb2MpO1xuXHRcdFx0XHRcdFx0JChcIiNhdXRoX2xpXCIpLmh0bWwoJzxhIHJvdXRlcmxpbmthY3RpdmU9XCJhY3RpdmVcIiBpZD1cImxvZ291dFwiPkxvZ291dDwvYT4nKTtcblx0XHRcdFx0XHRcdHRocy5fcm91dGVyLm5hdmlnYXRlKFsnL1NpZ251cE5leHRTdGVwJ10pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImVycm9yXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiYXZhaWxcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGFsZXJ0KCdFbWFpbCBpZCBhbHJlYWR5IGV4aXN0Jyk7cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9KTtcblx0XHR9ZWxzZXtyZXR1cm4gZmFsc2U7fVxuICB9IFxuICBuZ09uSW5pdCgpIHtcbiAgXG4gICQoJyNsb2NhdGlvbicpLnZhbCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSk7XG4gICQoJyNkZXNrJykudmFsKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZGVzaycpKTtcbiAgdGhpcy5sb2NhdGlvbmlkPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpO1xuICB0aGlzLmRlc2s9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdkZXNrJyk7XG4gIGlmKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpPT1udWxsKXt0aGlzLmxvY2F0aW9uaWRfZGl2PScwJzsgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzZWxlY3RfbG9jYXRpb25cIik7fVxuICBlbHNle3RoaXMubG9jYXRpb25pZF9kaXY9JzEnO31cbiAgXG4gICQoXCIjcmVnaXN0cmF0aW9uRm9ybSBpbnB1dFwiKS5mb2N1cyhmdW5jdGlvbigpe1xuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuXHR9KTtcblx0XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
