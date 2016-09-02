System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2;
    var SelectDeskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            SelectDeskComponent = (function () {
                function SelectDeskComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                SelectDeskComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                SelectDeskComponent.prototype.ngOnInit = function () {
                    var remain = this._routeParams.get('remain');
                    $("#spinner").spinner({
                        min: 1,
                        max: remain,
                        step: 1,
                        start: 1,
                        numberFormat: "C"
                    });
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                };
                SelectDeskComponent.prototype.signupbtn = function () {
                    var rout = this._router;
                    var desk = $('#spinner').val();
                    if (desk > 0) {
                        var userId = localStorage.getItem("user.id");
                        if (userId != null) {
                            var url = './api/users/direct_location/' + localStorage.getItem("user.id") + '/' + this._routeParams.get('locationid') + '/' + desk;
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
                                        rout.navigate(['/SignUpCongrats', { id: obj.user.id, name: obj.user.name, industry: obj.user.industry, image: obj.user.image }]);
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
                        else {
                            this._router.navigate(['Signup', { locationid: this._routeParams.get('locationid'), desk: desk }]);
                        }
                    }
                    else {
                        alert('please select desk');
                    }
                };
                SelectDeskComponent = __decorate([
                    core_1.Component({
                        selector: 'select_desk',
                        templateUrl: 'dev/home/select_desk.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, router_2.RouteParams])
                ], SelectDeskComponent);
                return SelectDeskComponent;
            }());
            exports_1("SelectDeskComponent", SelectDeskComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFekUsa0NBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1AsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUYsc0NBQVEsR0FBUjtvQkFHQSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFFLFVBQVUsQ0FBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDcEIsR0FBRyxFQUFFLENBQUM7d0JBQ04sR0FBRyxFQUFFLE1BQU07d0JBQ1gsSUFBSSxFQUFFLENBQUM7d0JBQ1AsS0FBSyxFQUFFLENBQUM7d0JBQ1IsWUFBWSxFQUFFLEdBQUc7cUJBQ2xCLENBQUMsQ0FBQztvQkFDTixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUU7d0JBRXJDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBRUYsQ0FBQztnQkFDRix1Q0FBUyxHQUFUO29CQUNBLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3BCLElBQUksSUFBSSxHQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxHQUFDLENB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QUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUNELENBQUM7Z0JBOUVKO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkE0RUYsMEJBQUM7WUFBRCxDQTNFQSxBQTJFQyxJQUFBO1lBM0VELHFEQTJFQyxDQUFBIiwiZmlsZSI6ImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuZGVjbGFyZSB2YXIgbG9jYXRpb246IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdF9kZXNrJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9zZWxlY3RfZGVzay5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERlc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7fVxucHJpdmF0ZSBkZXNrcmVtYWluO1xuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cblx0XHRcdFxuICBuZ09uSW5pdCgpIHtcbiAgXG4gIFxuICB2YXIgcmVtYWluPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyk7XG5cdFx0JCggXCIjc3Bpbm5lclwiICkuc3Bpbm5lcih7XG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IHJlbWFpbixcbiAgICAgIHN0ZXA6IDEsXG4gICAgICBzdGFydDogMSxcbiAgICAgIG51bWJlckZvcm1hdDogXCJDXCJcbiAgICB9KTtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywnLmJhY2tfYm90b20nLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRwYXJlbnQuaGlzdG9yeS5iYWNrKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcdFxuXHRcdFxuICB9XG5cdHNpZ251cGJ0bigpIHtcblx0dmFyIHJvdXQ9dGhpcy5fcm91dGVyO1xuXHRcdFx0dmFyIGRlc2s9JCgnI3NwaW5uZXInKS52YWwoKTtcblx0XHRcdGlmKGRlc2s+MCl7XG5cdFx0XHRcblx0XHRcdHZhciB1c2VySWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpO1xuICBcdFx0aWYodXNlcklkIT1udWxsKXtcblx0XHRcdHZhciB1cmw9Jy4vYXBpL3VzZXJzL2RpcmVjdF9sb2NhdGlvbi8nK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci5pZFwiKSsnLycrdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJykrJy8nK2Rlc2s7XG5cdFx0XHQkLmFqYXgoe1xuICAgICAgICAgIHVybDp1cmwsXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YTogJChcIiNsb2dpbkZvcm1cIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgYmVmb3JlU2VuZDpmdW5jdGlvbigpXG4gICAgICAgICAge1xuICAgICAgICAgICAgJChcIi50aHVtYm94M1wiKS5jc3MoJ29wYWNpdHknLCcwLjUnKS5hcHBlbmQoJzxpbWcgc3JjPVwic3JjL2ltZy9sb2FkaW5nLmdpZlwiIGJvcmRlcj1cIjBcIiBjbGFzcz1cImxvYWRpXCIgc3R5bGU9IFwibGVmdDogNDglO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDI1JTtcIiBhbHQ9XCJcIiB0aXRsZT1cIlwiIC8+JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICAgIHtcblx0XHQgICAkKFwiI2xvZ2luX3N1Ym1pdFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG5cdFx0ICB2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaWRcIiwgb2JqLnVzZXIuaWQpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLm5hbWVcIiwgb2JqLnVzZXIubmFtZSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW5kdXN0cnlcIiwgb2JqLnVzZXIuaW5kdXN0cnkpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmltYWdlXCIsIG9iai51c2VyLmltYWdlKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cm91dC5uYXZpZ2F0ZShbJy9TaWduVXBDb25ncmF0cycsIHsgaWQ6IG9iai51c2VyLmlkLCBuYW1lOiBvYmoudXNlci5uYW1lLGluZHVzdHJ5Om9iai51c2VyLmluZHVzdHJ5LGltYWdlOm9iai51c2VyLmltYWdlIH1dKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImVycm9yXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmh0bWwob2JqLm1zc2cpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzEnKTtcblx0XHRcdFx0XHRcdCAkKCcubG9hZGknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydTaWdudXAnLHsgbG9jYXRpb25pZDp0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSxkZXNrOmRlc2t9XSk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0YWxlcnQoJ3BsZWFzZSBzZWxlY3QgZGVzaycpO1xuXHRcdFx0fVxuXHRcdFx0fVx0XHRcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
