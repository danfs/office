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
                    localStorage.setItem("select_location", this._routeParams.get('location_name'));
                    if (Number(this._routeParams.get('remain')) > '20') {
                        var maxdesk = '20';
                    }
                    else {
                        var maxdesk = Number(this._routeParams.get('remain'));
                    }
                    for (var i = 0; i < maxdesk; i++) {
                        this.remain[i] = i + 1;
                    }
                }
                SelectDeskComponent.prototype.Home = function (event) {
                    event.preventDefault();
                    this.router.navigate(['Home']);
                };
                SelectDeskComponent.prototype.ngOnInit = function () {
                    var num = '';
                    var remains_rout = Number(this._routeParams.get('remain'));
                    if (remains_rout > '20') {
                        var maxdesk = '20';
                    }
                    else {
                        var maxdesk = remains_rout;
                    }
                    var last_num = maxdesk;
                    var second_last = last_num - 1;
                    for (var i = 0; i <= maxdesk; i++) {
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
                    if (Number(this._routeParams.get('remain')) > '20') {
                        var maxdesk = '20';
                    }
                    else {
                        var maxdesk = Number(this._routeParams.get('remain'));
                    }
                    var last_num = maxdesk;
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
                        output.text(0.5);
                        cog.scrollTop(base).fadeTo(0, 1).mousewheel(function (turn, delta) {
                            if (isBusy())
                                return false;
                            delta < 0 ? up = true : up = false;
                            newNumber();
                            return false;
                        });
                        digit.on('touchstart', function (e) {
                            var touch = e.originalEvent.touches, begin = touch[0].pageY, swipe;
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
                            up ? digit.eq(Number(last_num)).prependTo(cog) : digit.eq(0).appendTo(cog);
                            cog.scrollTop(base);
                            digit = cog.find('span');
                            if (Number(last_num) > 2) {
                                var num = Number(digit.eq(2).text());
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
                                if (num == '0') {
                                    output.text('0.5');
                                }
                                else {
                                    output.text(num);
                                }
                            }
                            else if (Number(last_num) > 1) {
                                var num = Number(digit.eq(1).text());
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
                                if (num == '0') {
                                    output.text('0.5');
                                }
                                else {
                                    output.text(num);
                                }
                            }
                            else if (Number(last_num) == 1) {
                                var num = Number(digit.eq(0).text());
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
                                if (num == '0') {
                                    output.text('0.5');
                                }
                                else {
                                    output.text(num);
                                }
                            }
                            else {
                                output.text('0');
                            }
                        });
                    }
                };
                SelectDeskComponent.prototype.signupbtn = function () {
                    var rout = this._router;
                    var desk = Number($('#result').text());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBR1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO29CQUMvRSxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUNoRCxJQUFJLE9BQU8sR0FBQyxJQUFJLENBQUM7b0JBQ2pCLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQUEsSUFBSSxPQUFPLEdBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQUEsQ0FBQztvQkFFN0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO29CQUNyQixDQUFDO2dCQUNKLENBQUM7Z0JBR0Ysa0NBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1AsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUYsc0NBQVEsR0FBUjtvQkFDQSxJQUFJLEdB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QzVCLENBQUM7d0NBQ0QsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0NBQ3ZDLENBQUM7b0NBQ0EsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUM7b0NBQ2xDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQ0FDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztnQ0FDYixDQUFDOzZCQUVKLENBQUMsQ0FBQzt3QkFDUixDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsVUFBVSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlGLENBQUM7b0JBQ0QsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDTCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFFRCxDQUFDO2dCQWpQSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDaEMsQ0FBQzs7dUNBQUE7Z0JBK09GLDBCQUFDO1lBQUQsQ0E5T0EsQUE4T0MsSUFBQTtZQTlPRCxxREE4T0MsQ0FBQSIsImZpbGUiOiJob21lL3NlbGVjdF9kZXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmRlY2xhcmUgdmFyIGxvY2F0aW9uOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3RfZGVzaycsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2hvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REZXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbnJlbWFpbiA9IFtdO1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XG5cbmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VsZWN0X2xvY2F0aW9uXCIsIHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25fbmFtZScpKTtcbiBpZihOdW1iZXIodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSk+JzIwJyl7XG4gIHZhciBtYXhkZXNrPScyMCc7XG4gIH1lbHNle3ZhciBtYXhkZXNrPU51bWJlcih0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpKTt9XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgbWF4ZGVzazsgaSsrKSB7XG4gICAgICB0aGlzLnJlbWFpbltpXT1pKzE7XG4gICAgfVxuXHR9XG5wcml2YXRlIGRlc2tyZW1haW47XG5cbkhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9XG5cdFx0XHRcbiAgbmdPbkluaXQoKSB7XG4gIHZhciBudW09Jyc7XG4gIHZhciByZW1haW5zX3JvdXQ9TnVtYmVyKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJykpO1xuIFxuICBpZihyZW1haW5zX3JvdXQgPiAnMjAnKXtcbiAgdmFyIG1heGRlc2s9JzIwJztcbiAgfWVsc2V7dmFyIG1heGRlc2s9cmVtYWluc19yb3V0fVxuICB2YXIgbGFzdF9udW09bWF4ZGVzaztcbiAgdmFyIHNlY29uZF9sYXN0PWxhc3RfbnVtLTE7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBtYXhkZXNrOyBpKyspIHtcbiAgdmFyIG47IGkgPT0gMCA/IG4gPSBzZWNvbmRfbGFzdCA6IChpID09IDEgPyBuID0gbGFzdF9udW0gOiBuID0gaS0yKTtcbiAgaWYobj09JzAnKXtcbiAgbnVtPW51bSsnPHNwYW4gaWQ9XCJzcGFuXycrMCsnXCIgY2xhc3M9XCJzZWxlY3RudW0gaHRfZGVzayBzZWxlY3RlZF9kZXNrXCI+SG90IERlc2sgKjwvc3Bhbj4nO1xuICB9ZWxzZXtcbiAgICAgIG51bT1udW0rJzxzcGFuIGlkPVwic3Bhbl8nK24rJ1wiIGNsYXNzPVwic2VsZWN0bnVtXCI+JytuKyc8L3NwYW4+Jztcblx0ICB9XG4gICAgfVxuICAkKCcjcm90YXRvcicpLmh0bWwobnVtKTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXHQgaWYoTnVtYmVyKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJykpPicyMCcpe1xuICB2YXIgbWF4ZGVzaz0nMjAnO1xuICB9ZWxzZXt2YXIgbWF4ZGVzaz1OdW1iZXIodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSk7fVxudmFyIGxhc3RfbnVtPW1heGRlc2ssXHRcdFx0XG52YXIgZ2F0ZSA9ICQod2luZG93KTtcbnZhciBjb2cgPSAkKCcjcm90YXRvcicpO1xudmFyIGRpZ2l0ID0gY29nLmZpbmQoJ3NwYW4nKTtcbnZhciBzbG90ID0gZGlnaXQuZXEoMCkuaGVpZ2h0KCk7XG52YXIgYmFzZSA9IDEuNSpzbG90O1xudmFyIG91dHB1dCA9ICQoJyNyZXN1bHQnKTtcbnZhciB1cD0nJztcblxuY29nLmZhZGVUbygwLDApO1xuXG5cblx0c2V0VGltZW91dChpbnRlckFjdGlvbiwgNTApO1xuXG5cbmZ1bmN0aW9uIGludGVyQWN0aW9uKCkge1xuXG5cdG91dHB1dC50ZXh0KDAuNSk7XG5cblx0Y29nLnNjcm9sbFRvcChiYXNlKS5mYWRlVG8oMCwxKS5tb3VzZXdoZWVsKGZ1bmN0aW9uKHR1cm4sIGRlbHRhKSB7XG5cdFx0aWYgKGlzQnVzeSgpKSByZXR1cm4gZmFsc2U7XG5cblx0XHRkZWx0YSA8IDAgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXG5cdFx0bmV3TnVtYmVyKCk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdGRpZ2l0Lm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuXG5cdFx0dmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsXG5cdFx0YmVnaW4gPSB0b3VjaFswXS5wYWdlWSwgc3dpcGU7XG5cblx0XHRkaWdpdC5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuXG5cdFx0XHR2YXIgY29udGFjdCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzLFxuXHRcdFx0ZW5kID0gY29udGFjdFswXS5wYWdlWSxcblx0XHRcdGRpc3RhbmNlID0gZW5kLWJlZ2luO1xuXG5cdFx0XHRpZiAoaXNCdXN5KCkpIHJldHVybjtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRpc3RhbmNlKSA+IDMwKSB7XG5cdFx0XHRzd2lwZSA9IHRydWU7XG5cdFx0XHRkaXN0YW5jZSA+IDMwID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5hZGQoZ2F0ZSkub25lKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZiAoc3dpcGUpIHtcblx0XHRcdHN3aXBlID0gZmFsc2U7XG5cdFx0XHRuZXdOdW1iZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlnaXQub2ZmKCd0b3VjaG1vdmUnKS5hZGQoZ2F0ZSkub2ZmKCd0b3VjaGVuZCcpO1xuXHRcdH0pO1xuXHR9KVxuXHQub24oJ21vdXNlZG93biB0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuXG5cdFx0aWYgKGUud2hpY2ggJiYgZS53aGljaCAhPSAxKSByZXR1cm47XG5cblx0XHR2YXIgaXRlbSA9ICQodGhpcykuaW5kZXgoKTtcblx0XHRpZiAoaXRlbSA9PSAxIHx8IGl0ZW0gPT0gMykge1xuXG5cdFx0ZGlnaXQub25lKCdtb3VzZXVwIHRvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBzYW1lID0gaXRlbSA9PSAkKHRoaXMpLmluZGV4KCk7XG5cblx0XHRcdGlmIChpc0J1c3koKSB8fCAhc2FtZSkgcmV0dXJuIGNhbmNlbEl0KCk7XG5cblx0XHRcdGl0ZW0gPT0gMSA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cblx0XHRcdG5ld051bWJlcigpO1xuXG5cdFx0XHRyZXR1cm4gY2FuY2VsSXQoKTtcblx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpc0J1c3koKSB7XG5cblx0cmV0dXJuIGNvZy5pcygnOmFuaW1hdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEl0KCkge1xuXG5cdGRpZ2l0Lm9mZignbW91c2V1cCB0b3VjaGVuZCcpO1xuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbmV3TnVtYmVyKCkge1xuXHR2YXIgYWltID0gYmFzZTtcblxuXHR1cCA/IGFpbSAtPSBzbG90IDogYWltICs9IHNsb3Q7XG5cblx0Y29nLmFuaW1hdGUoe3Njcm9sbFRvcDogYWltfSwgNTAwLCBmdW5jdGlvbigpIHtcblxuXHRcdHVwID8gZGlnaXQuZXEoTnVtYmVyKGxhc3RfbnVtKSkucHJlcGVuZFRvKGNvZykgOiBkaWdpdC5lcSgwKS5hcHBlbmRUbyhjb2cpO1xuXHRcdGNvZy5zY3JvbGxUb3AoYmFzZSk7XG5cblx0XHRkaWdpdCA9IGNvZy5maW5kKCdzcGFuJyk7XG5cdFx0XG5cdFx0aWYoTnVtYmVyKGxhc3RfbnVtKT4yKXtcblx0XHR2YXIgbnVtPU51bWJlcihkaWdpdC5lcSgyKS50ZXh0KCkpO1xuXHRcdGlmKCEkLmlzTnVtZXJpYyhudW0pKXtudW09JzAnfVxuXHRcdCQoJy5zZWxlY3RudW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdCQoJyNzcGFuXycrbnVtKS5hZGRDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdGlmKG51bT09JzAnKXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlSW4oKTt9XG5cdFx0ZWxzZXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlT3V0KCk7fVxuXHRcdGlmKG51bT09JzAnKXtvdXRwdXQudGV4dCgnMC41Jyk7fWVsc2V7b3V0cHV0LnRleHQobnVtKTt9XG5cdFx0XG5cdFx0fWVsc2UgaWYoTnVtYmVyKGxhc3RfbnVtKT4xKXtcblx0XHR2YXIgbnVtPU51bWJlcihkaWdpdC5lcSgxKS50ZXh0KCkpO1xuXHRcdGlmKCEkLmlzTnVtZXJpYyhudW0pKXtudW09JzAnfVxuXHRcdGlmKG51bT09JzAnKXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlSW4oKTt9XG5cdFx0ZWxzZXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlT3V0KCk7fVxuXHRcdCQoJy5zZWxlY3RudW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdCQoJyNzcGFuXycrbnVtKS5hZGRDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdGlmKG51bT09JzAnKXtvdXRwdXQudGV4dCgnMC41Jyk7fWVsc2V7b3V0cHV0LnRleHQobnVtKTt9XG5cdFx0fWVsc2UgaWYoTnVtYmVyKGxhc3RfbnVtKT09MSl7XG5cdFx0dmFyIG51bT1OdW1iZXIoZGlnaXQuZXEoMCkudGV4dCgpKTtcblx0XHRpZighJC5pc051bWVyaWMobnVtKSl7bnVtPScwJ31cblx0XHRpZihudW09PScwJyl7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZUluKCk7fVxuXHRcdGVsc2V7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZU91dCgpO31cblx0XHQkKCcuc2VsZWN0bnVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHQkKCcjc3Bhbl8nK251bSkuYWRkQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHRpZihudW09PScwJyl7b3V0cHV0LnRleHQoJzAuNScpO31lbHNle291dHB1dC50ZXh0KG51bSk7fVxuXHRcdH1lbHNle1xuXHRcdG91dHB1dC50ZXh0KCcwJyk7XG5cdFx0fVxuXHRcdFxuXHR9KTtcbn1cblx0XHRcdFxuICB9XG5cdHNpZ251cGJ0bigpIHtcblx0dmFyIHJvdXQ9dGhpcy5fcm91dGVyO1xuXHRcdFx0dmFyIGRlc2s9TnVtYmVyKCQoJyNyZXN1bHQnKS50ZXh0KCkpO1xuXHRcdFx0XG5cdFx0XHRpZihkZXNrPjApe1xuXHRcdFx0XG5cdFx0XHR2YXIgdXNlcklkPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci5pZFwiKTtcbiAgXHRcdGlmKHVzZXJJZCE9bnVsbCl7XG5cdFx0XHR2YXIgdXJsPScuL2FwaS91c2Vycy9kaXJlY3RfbG9jYXRpb24vJytsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXIuaWRcIikrJy8nK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpKycvJytkZXNrO1xuXHRcdFx0JC5hamF4KHtcbiAgICAgICAgICB1cmw6dXJsLFxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6ICQoXCIjbG9naW5Gb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMC41JykuYXBwZW5kKCc8aW1nIHNyYz1cInNyYy9pbWcvbG9hZGluZy5naWZcIiBib3JkZXI9XCIwXCIgY2xhc3M9XCJsb2FkaVwiIHN0eWxlPSBcImxlZnQ6IDQ4JTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAyNSU7XCIgYWx0PVwiXCIgdGl0bGU9XCJcIiAvPicpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICB7XG5cdFx0ICAgJChcIiNsb2dpbl9zdWJtaXRcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuXHRcdCAgdmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmlkXCIsIG9iai51c2VyLmlkKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5uYW1lXCIsIG9iai51c2VyLm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmluZHVzdHJ5XCIsIG9iai51c2VyLmluZHVzdHJ5KTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbWFnZVwiLCBvYmoudXNlci5pbWFnZSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJvdXQubmF2aWdhdGUoWycvU2lnblVwQ29uZ3JhdHMnLCB7IGlkOiBvYmoudXNlci5pZCwgbmFtZTogb2JqLnVzZXIubmFtZSxpbmR1c3RyeTpvYmoudXNlci5pbmR1c3RyeSxpbWFnZTpvYmoudXNlci5pbWFnZSB9XSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYob2JqLnN0YXR1cz09XCJlcnJvclwiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0JCgnLmVycm9yX3RleHQnKS5odG1sKG9iai5tc3NnKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQgJChcIi50aHVtYm94M1wiKS5jc3MoJ29wYWNpdHknLCcxJyk7XG5cdFx0XHRcdFx0XHQgJCgnLmxvYWRpJykucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnU2lnbnVwJyx7IGxvY2F0aW9uaWQ6dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJyksZGVzazpkZXNrfV0pO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdGFsZXJ0KCdwbGVhc2Ugc2VsZWN0IGRlc2snKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0fVx0XHRcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
