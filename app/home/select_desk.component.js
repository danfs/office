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
                    this.remain = [];
                    for (var i = 0; i < this._routeParams.get('remain'); i++) {
                        this.remain[i] = i + 1;
                    }
                }
                SelectDeskComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                SelectDeskComponent.prototype.ngOnInit = function () {
                    var num = '';
                    var remains_rout = parseInt(this._routeParams.get('remain'));
                    var last_num = this._routeParams.get('remain');
                    var second_last = last_num - 1;
                    for (var i = 0; i <= this._routeParams.get('remain'); i++) {
                        var n;
                        i == 0 ? n = second_last : (i == 1 ? n = last_num : n = i - 2);
                        if (n == '0') {
                            num = num + '<span id="span_' + 0 + '" class="selectnum ht_desk selected_desk">Hot Desk *</span>';
                        }
                        else {
                            num = num + '<span id="span_' + n + '" class="selectnum">' + n + '</span>';
                        }
                    }
                    $('#rotator').html(num);
                    $(document).on('click', '.back_botom', function () {
                        parent.history.back();
                        return false;
                    });
                    var last_num = this._routeParams.get('remain');
                    var gate = $(window);
                    var cog = $('#rotator');
                    var digit = cog.find('span');
                    var slot = digit.eq(0).height();
                    var base = 1.5 * slot;
                    var output = $('#result');
                    var up = '';
                    cog.fadeTo(0, 0);
                    setTimeout(interAction, 50);
                    function interAction() {
                        output.text(0);
                        cog.scrollTop(base).fadeTo(0, 1).mousewheel(function (turn, delta) {
                            if (isBusy())
                                return false;
                            delta < 0 ? up = true : up = false;
                            newNumber();
                            return false;
                        });
                        digit.on('touchstart', function (e) {
                            var touch = e.originalEvent.touches, begin = touch[0].pageY, swipe;
                            alert();
                            digit.on('touchmove', function (e) {
                                var contact = e.originalEvent.touches, end = contact[0].pageY, distance = end - begin;
                                if (isBusy())
                                    return;
                                if (Math.abs(distance) > 30) {
                                    swipe = true;
                                    distance > 30 ? up = true : up = false;
                                }
                            })
                                .add(gate).one('touchend', function () {
                                if (swipe) {
                                    swipe = false;
                                    newNumber();
                                }
                                digit.off('touchmove').add(gate).off('touchend');
                            });
                        })
                            .on('mousedown touchstart', function (e) {
                            if (e.which && e.which != 1)
                                return;
                            var item = $(this).index();
                            if (item == 1 || item == 3) {
                                digit.one('mouseup touchend', function () {
                                    var same = item == $(this).index();
                                    if (isBusy() || !same)
                                        return cancelIt();
                                    item == 1 ? up = true : up = false;
                                    newNumber();
                                    return cancelIt();
                                });
                            }
                            return false;
                        });
                    }
                    function isBusy() {
                        return cog.is(':animated');
                    }
                    function cancelIt() {
                        digit.off('mouseup touchend');
                        return false;
                    }
                    function newNumber() {
                        var aim = base;
                        up ? aim -= slot : aim += slot;
                        cog.animate({ scrollTop: aim }, 500, function () {
                            up ? digit.eq(parseInt(last_num)).prependTo(cog) : digit.eq(0).appendTo(cog);
                            cog.scrollTop(base);
                            digit = cog.find('span');
                            if (parseInt(last_num) > 2) {
                                var num = parseInt(digit.eq(2).text());
                                if (!$.isNumeric(num)) {
                                    num = '0';
                                }
                                $('.selectnum').removeClass('selected_desk');
                                $('#span_' + num).addClass('selected_desk');
                                if (num == '0') {
                                    $('.spinner_bottom').fadeIn();
                                }
                                else {
                                    $('.spinner_bottom').fadeOut();
                                }
                                output.text(num);
                            }
                            else if (parseInt(last_num) > 1) {
                                var num = parseInt(digit.eq(1).text());
                                if (!$.isNumeric(num)) {
                                    num = '0';
                                }
                                if (num == '0') {
                                    $('.spinner_bottom').fadeIn();
                                }
                                else {
                                    $('.spinner_bottom').fadeOut();
                                }
                                $('.selectnum').removeClass('selected_desk');
                                $('#span_' + num).addClass('selected_desk');
                                output.text(num);
                            }
                            else if (parseInt(last_num) == 1) {
                                var num = parseInt(digit.eq(0).text());
                                if (!$.isNumeric(num)) {
                                    num = '0';
                                }
                                if (num == '0') {
                                    $('.spinner_bottom').fadeIn();
                                }
                                else {
                                    $('.spinner_bottom').fadeOut();
                                }
                                $('.selectnum').removeClass('selected_desk');
                                $('#span_' + num).addClass('selected_desk');
                                output.text(num);
                            }
                            else {
                                output.text('0');
                            }
                        });
                    }
                };
                SelectDeskComponent.prototype.signupbtn = function () {
                    var rout = this._router;
                    var desk = parseInt($('#result').html());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBRVosR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0osQ0FBQztnQkFHRixrQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRixzQ0FBUSxHQUFSO29CQUNBLElBQUksR0FBRyxHQUFDLEVBQUUsQ0FBQztvQkFDWCxJQUFJLFlBQVksR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxRQUFRLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdDLElBQUksV0FBVyxHQUFDLFFBQVEsR0FBQyxDQUFDLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FB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RSxDQUFBLENBQUMsR0FBRyxJQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0NBQUEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0NBQUEsQ0FBQztnQ0FDNUMsSUFBSSxDQUFBLENBQUM7b0NBQUEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0NBQUEsQ0FBQztnQ0FDckMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQ0FDN0MsQ0FBQyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7Z0NBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2pCLENBQUM7NEJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dDQUNoQyxJQUFJLEdBQUcsR0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dDQUNyQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO29DQUFBLEdBQUcsR0FBQyxHQUFHLENBQUE7Z0NBQUEsQ0FBQztnQ0FDOUIsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0NBQUEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0NBQUEsQ0FBQztnQ0FDNUMsSUFBSSxDQUFBLENBQUM7b0NBQUEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0NBQUEsQ0FBQztnQ0FDckMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQ0FDN0MsQ0FBQyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7Z0NBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2pCLENBQUM7NEJBQUEsSUFBSSxDQUFBLENBQUM7Z0NBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDakIsQ0FBQzt3QkFFRixDQUFDLENBQUMsQ0FBQztvQkFDSixDQUFDO2dCQUVDLENBQUM7Z0JBQ0YsdUNBQVMsR0FBVDtvQkFDQSxJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNwQixJQUFJLElBQUksR0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUVYLElBQUksTUFBTSxHQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzFDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDOzRCQUNsQixJQUFJLEdBQUcsR0FBQyw4QkFBOEIsR0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDOzRCQUN4SCxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUNBLEdBQUcsRUFBQyxHQUFHO2dDQUNQLElBQUksRUFBRSxNQUFNO2dDQUNaLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFO2dDQUNqQyxVQUFVLEVBQUM7b0NBRVQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLDRIQUE0SCxDQUFDLENBQUE7Z0NBQzFLLENBQUM7Z0NBQ0QsT0FBTyxFQUFFLFVBQVMsUUFBUTtvQ0FFL0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQ0FDM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQ0FDOUIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBRSxTQUFTLENBQUMsQ0FDekIsQ0FBQzt3Q0FDRCxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUM3QyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNqRCxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dDQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dDQUVuRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBRTdILENBQUM7b0NBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUUsT0FBTyxDQUFDLENBQzVCLENBQUM7d0NBQ0QsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0NBQ3ZDLENBQUM7b0NBQ0EsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUM7b0NBQ2xDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQ0FDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztnQ0FDYixDQUFDOzZCQUVKLENBQUMsQ0FBQzt3QkFDUixDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsVUFBVSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlGLENBQUM7b0JBQ0QsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDTCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFFRCxDQUFDO2dCQWxPSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7dUNBQUE7Z0JBZ09GLDBCQUFDO1lBQUQsQ0EvTkEsQUErTkMsSUFBQTtZQS9ORCxxREErTkMsQ0FBQSIsImZpbGUiOiJob21lL3NlbGVjdF9kZXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmRlY2xhcmUgdmFyIGxvY2F0aW9uOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3RfZGVzaycsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REZXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbnJlbWFpbiA9IFtdO1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XG5mb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyk7IGkrKykge1xuICAgICAgdGhpcy5yZW1haW5baV09aSsxO1xuICAgIH1cblx0fVxucHJpdmF0ZSBkZXNrcmVtYWluO1xuXG5Ib21lKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0fVxuXHRcdFx0XG4gIG5nT25Jbml0KCkge1xuICB2YXIgbnVtPScnO1xuICB2YXIgcmVtYWluc19yb3V0PXBhcnNlSW50KHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJykpO1xuICB2YXIgbGFzdF9udW09dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKTtcbiAgdmFyIHNlY29uZF9sYXN0PWxhc3RfbnVtLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyk7IGkrKykge1xuICB2YXIgbjsgaSA9PSAwID8gbiA9IHNlY29uZF9sYXN0IDogKGkgPT0gMSA/IG4gPSBsYXN0X251bSA6IG4gPSBpLTIpO1xuICBpZihuPT0nMCcpe1xuICBudW09bnVtKyc8c3BhbiBpZD1cInNwYW5fJyswKydcIiBjbGFzcz1cInNlbGVjdG51bSBodF9kZXNrIHNlbGVjdGVkX2Rlc2tcIj5Ib3QgRGVzayAqPC9zcGFuPic7XG4gIH1lbHNle1xuICAgICAgbnVtPW51bSsnPHNwYW4gaWQ9XCJzcGFuXycrbisnXCIgY2xhc3M9XCJzZWxlY3RudW1cIj4nK24rJzwvc3Bhbj4nO1xuXHQgIH1cbiAgICB9XG4gICQoJyNyb3RhdG9yJykuaHRtbChudW0pO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG52YXIgbGFzdF9udW09dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSxcdFx0XHRcbnZhciBnYXRlID0gJCh3aW5kb3cpO1xudmFyIGNvZyA9ICQoJyNyb3RhdG9yJyk7XG52YXIgZGlnaXQgPSBjb2cuZmluZCgnc3BhbicpO1xudmFyIHNsb3QgPSBkaWdpdC5lcSgwKS5oZWlnaHQoKTtcbnZhciBiYXNlID0gMS41KnNsb3Q7XG52YXIgb3V0cHV0ID0gJCgnI3Jlc3VsdCcpO1xudmFyIHVwPScnO1xuXG5jb2cuZmFkZVRvKDAsMCk7XG5cblxuXHRzZXRUaW1lb3V0KGludGVyQWN0aW9uLCA1MCk7XG5cblxuZnVuY3Rpb24gaW50ZXJBY3Rpb24oKSB7XG5cblx0b3V0cHV0LnRleHQoMCk7XG5cblx0Y29nLnNjcm9sbFRvcChiYXNlKS5mYWRlVG8oMCwxKS5tb3VzZXdoZWVsKGZ1bmN0aW9uKHR1cm4sIGRlbHRhKSB7XG5cdFx0aWYgKGlzQnVzeSgpKSByZXR1cm4gZmFsc2U7XG5cblx0XHRkZWx0YSA8IDAgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXG5cdFx0bmV3TnVtYmVyKCk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdGRpZ2l0Lm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuXG5cdFx0dmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsXG5cdFx0YmVnaW4gPSB0b3VjaFswXS5wYWdlWSwgc3dpcGU7XG5cdFx0YWxlcnQoKTtcblxuXHRcdGRpZ2l0Lm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG5cblx0XHRcdHZhciBjb250YWN0ID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsXG5cdFx0XHRlbmQgPSBjb250YWN0WzBdLnBhZ2VZLFxuXHRcdFx0ZGlzdGFuY2UgPSBlbmQtYmVnaW47XG5cblx0XHRcdGlmIChpc0J1c3koKSkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gMzApIHtcblx0XHRcdHN3aXBlID0gdHJ1ZTtcblx0XHRcdGRpc3RhbmNlID4gMzAgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmFkZChnYXRlKS5vbmUoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdGlmIChzd2lwZSkge1xuXHRcdFx0c3dpcGUgPSBmYWxzZTtcblx0XHRcdG5ld051bWJlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaWdpdC5vZmYoJ3RvdWNobW92ZScpLmFkZChnYXRlKS5vZmYoJ3RvdWNoZW5kJyk7XG5cdFx0fSk7XG5cdH0pXG5cdC5vbignbW91c2Vkb3duIHRvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG5cblx0XHRpZiAoZS53aGljaCAmJiBlLndoaWNoICE9IDEpIHJldHVybjtcblxuXHRcdHZhciBpdGVtID0gJCh0aGlzKS5pbmRleCgpO1xuXHRcdGlmIChpdGVtID09IDEgfHwgaXRlbSA9PSAzKSB7XG5cblx0XHRkaWdpdC5vbmUoJ21vdXNldXAgdG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHNhbWUgPSBpdGVtID09ICQodGhpcykuaW5kZXgoKTtcblxuXHRcdFx0aWYgKGlzQnVzeSgpIHx8ICFzYW1lKSByZXR1cm4gY2FuY2VsSXQoKTtcblxuXHRcdFx0aXRlbSA9PSAxID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblxuXHRcdFx0bmV3TnVtYmVyKCk7XG5cblx0XHRcdHJldHVybiBjYW5jZWxJdCgpO1xuXHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGlzQnVzeSgpIHtcblxuXHRyZXR1cm4gY29nLmlzKCc6YW5pbWF0ZWQnKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsSXQoKSB7XG5cblx0ZGlnaXQub2ZmKCdtb3VzZXVwIHRvdWNoZW5kJyk7XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBuZXdOdW1iZXIoKSB7XG5cdHZhciBhaW0gPSBiYXNlO1xuXG5cdHVwID8gYWltIC09IHNsb3QgOiBhaW0gKz0gc2xvdDtcblxuXHRjb2cuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBhaW19LCA1MDAsIGZ1bmN0aW9uKCkge1xuXG5cdFx0dXAgPyBkaWdpdC5lcShwYXJzZUludChsYXN0X251bSkpLnByZXBlbmRUbyhjb2cpIDogZGlnaXQuZXEoMCkuYXBwZW5kVG8oY29nKTtcblx0XHRjb2cuc2Nyb2xsVG9wKGJhc2UpO1xuXG5cdFx0ZGlnaXQgPSBjb2cuZmluZCgnc3BhbicpO1xuXHRcdFxuXHRcdGlmKHBhcnNlSW50KGxhc3RfbnVtKT4yKXtcblx0XHR2YXIgbnVtPXBhcnNlSW50KGRpZ2l0LmVxKDIpLnRleHQoKSk7XG5cdFx0aWYoISQuaXNOdW1lcmljKG51bSkpe251bT0nMCd9XG5cdFx0JCgnLnNlbGVjdG51bScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0JCgnI3NwYW5fJytudW0pLmFkZENsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0aWYobnVtPT0nMCcpeyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVJbigpO31cblx0XHRlbHNleyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVPdXQoKTt9XG5cdFx0b3V0cHV0LnRleHQobnVtKTtcblx0XHR9ZWxzZSBpZihwYXJzZUludChsYXN0X251bSk+MSl7XG5cdFx0dmFyIG51bT1wYXJzZUludChkaWdpdC5lcSgxKS50ZXh0KCkpO1xuXHRcdGlmKCEkLmlzTnVtZXJpYyhudW0pKXtudW09JzAnfVxuXHRcdGlmKG51bT09JzAnKXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlSW4oKTt9XG5cdFx0ZWxzZXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlT3V0KCk7fVxuXHRcdCQoJy5zZWxlY3RudW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdCQoJyNzcGFuXycrbnVtKS5hZGRDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdG91dHB1dC50ZXh0KG51bSk7XG5cdFx0fWVsc2UgaWYocGFyc2VJbnQobGFzdF9udW0pPT0xKXtcblx0XHR2YXIgbnVtPXBhcnNlSW50KGRpZ2l0LmVxKDApLnRleHQoKSk7XG5cdFx0aWYoISQuaXNOdW1lcmljKG51bSkpe251bT0nMCd9XG5cdFx0aWYobnVtPT0nMCcpeyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVJbigpO31cblx0XHRlbHNleyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVPdXQoKTt9XG5cdFx0JCgnLnNlbGVjdG51bScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0JCgnI3NwYW5fJytudW0pLmFkZENsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0b3V0cHV0LnRleHQobnVtKTtcblx0XHR9ZWxzZXtcblx0XHRvdXRwdXQudGV4dCgnMCcpO1xuXHRcdH1cblx0XHRcblx0fSk7XG59XG5cdFx0XHRcbiAgfVxuXHRzaWdudXBidG4oKSB7XG5cdHZhciByb3V0PXRoaXMuX3JvdXRlcjtcblx0XHRcdHZhciBkZXNrPXBhcnNlSW50KCQoJyNyZXN1bHQnKS5odG1sKCkpO1xuXHRcdFx0aWYoZGVzaz4wKXtcblx0XHRcdFxuXHRcdFx0dmFyIHVzZXJJZD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXIuaWRcIik7XG4gIFx0XHRpZih1c2VySWQhPW51bGwpe1xuXHRcdFx0dmFyIHVybD0nLi9hcGkvdXNlcnMvZGlyZWN0X2xvY2F0aW9uLycrbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpKycvJyt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSsnLycrZGVzaztcblx0XHRcdCQuYWpheCh7XG4gICAgICAgICAgdXJsOnVybCxcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiAkKFwiI2xvZ2luRm9ybVwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBiZWZvcmVTZW5kOmZ1bmN0aW9uKClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzAuNScpLmFwcGVuZCgnPGltZyBzcmM9XCJzcmMvaW1nL2xvYWRpbmcuZ2lmXCIgYm9yZGVyPVwiMFwiIGNsYXNzPVwibG9hZGlcIiBzdHlsZT0gXCJsZWZ0OiA0OCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMjUlO1wiIGFsdD1cIlwiIHRpdGxlPVwiXCIgLz4nKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAge1xuXHRcdCAgICQoXCIjbG9naW5fc3VibWl0XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHQgIHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pZFwiLCBvYmoudXNlci5pZCk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIubmFtZVwiLCBvYmoudXNlci5uYW1lKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbmR1c3RyeVwiLCBvYmoudXNlci5pbmR1c3RyeSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW1hZ2VcIiwgb2JqLnVzZXIuaW1hZ2UpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyb3V0Lm5hdmlnYXRlKFsnL1NpZ25VcENvbmdyYXRzJywgeyBpZDogb2JqLnVzZXIuaWQsIG5hbWU6IG9iai51c2VyLm5hbWUsaW5kdXN0cnk6b2JqLnVzZXIuaW5kdXN0cnksaW1hZ2U6b2JqLnVzZXIuaW1hZ2UgfV0pO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaHRtbChvYmoubXNzZykuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMScpO1xuXHRcdFx0XHRcdFx0ICQoJy5sb2FkaScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCcseyBsb2NhdGlvbmlkOnRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpLGRlc2s6ZGVza31dKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRhbGVydCgncGxlYXNlIHNlbGVjdCBkZXNrJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdH1cdFx0XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
