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
                                if (num == '0') {
                                    output.text('0.5');
                                }
                                else {
                                    output.text(num);
                                }
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
                                if (num == '0') {
                                    output.text('0.5');
                                }
                                else {
                                    output.text(num);
                                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBRVosR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0osQ0FBQztnQkFHRixrQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRixzQ0FBUSxHQUFSO29CQUNBLElBQUksR0FBRyxHQUFDLEVBQUUsQ0FBQztvQkFDWCxJQUFJLFlBQVksR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxRQUFRLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdDLElBQUksV0FBVyxHQUFDLFFBQVEsR0FBQyxDQUFDLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FB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QUFFLHFDQUFxQzt3QkFDbEQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O3VDQUFBO2dCQWtPRiwwQkFBQztZQUFELENBak9BLEFBaU9DLElBQUE7WUFqT0QscURBaU9DLENBQUEiLCJmaWxlIjoiaG9tZS9zZWxlY3RfZGVzay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5kZWNsYXJlIHZhciBsb2NhdGlvbjogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0X2Rlc2snLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL3NlbGVjdF9kZXNrLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RGVza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5yZW1haW4gPSBbXTtcbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xuZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpOyBpKyspIHtcbiAgICAgIHRoaXMucmVtYWluW2ldPWkrMTtcbiAgICB9XG5cdH1cbnByaXZhdGUgZGVza3JlbWFpbjtcblxuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cblx0XHRcdFxuICBuZ09uSW5pdCgpIHtcbiAgdmFyIG51bT0nJztcbiAgdmFyIHJlbWFpbnNfcm91dD1wYXJzZUludCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpKTtcbiAgdmFyIGxhc3RfbnVtPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyk7XG4gIHZhciBzZWNvbmRfbGFzdD1sYXN0X251bS0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpOyBpKyspIHtcbiAgdmFyIG47IGkgPT0gMCA/IG4gPSBzZWNvbmRfbGFzdCA6IChpID09IDEgPyBuID0gbGFzdF9udW0gOiBuID0gaS0yKTtcbiAgaWYobj09JzAnKXtcbiAgbnVtPW51bSsnPHNwYW4gaWQ9XCJzcGFuXycrMCsnXCIgY2xhc3M9XCJzZWxlY3RudW0gaHRfZGVzayBzZWxlY3RlZF9kZXNrXCI+SG90IERlc2sgKjwvc3Bhbj4nO1xuICB9ZWxzZXtcbiAgICAgIG51bT1udW0rJzxzcGFuIGlkPVwic3Bhbl8nK24rJ1wiIGNsYXNzPVwic2VsZWN0bnVtXCI+JytuKyc8L3NwYW4+Jztcblx0ICB9XG4gICAgfVxuICAkKCcjcm90YXRvcicpLmh0bWwobnVtKTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xudmFyIGxhc3RfbnVtPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyksXHRcdFx0XG52YXIgZ2F0ZSA9ICQod2luZG93KTtcbnZhciBjb2cgPSAkKCcjcm90YXRvcicpO1xudmFyIGRpZ2l0ID0gY29nLmZpbmQoJ3NwYW4nKTtcbnZhciBzbG90ID0gZGlnaXQuZXEoMCkuaGVpZ2h0KCk7XG52YXIgYmFzZSA9IDEuNSpzbG90O1xudmFyIG91dHB1dCA9ICQoJyNyZXN1bHQnKTtcbnZhciB1cD0nJztcblxuY29nLmZhZGVUbygwLDApO1xuXG5cblx0c2V0VGltZW91dChpbnRlckFjdGlvbiwgNTApO1xuXG5cbmZ1bmN0aW9uIGludGVyQWN0aW9uKCkge1xuXG5cdG91dHB1dC50ZXh0KDAuNSk7XG5cblx0Y29nLnNjcm9sbFRvcChiYXNlKS5mYWRlVG8oMCwxKS5tb3VzZXdoZWVsKGZ1bmN0aW9uKHR1cm4sIGRlbHRhKSB7XG5cdFx0aWYgKGlzQnVzeSgpKSByZXR1cm4gZmFsc2U7XG5cblx0XHRkZWx0YSA8IDAgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXG5cdFx0bmV3TnVtYmVyKCk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdGRpZ2l0Lm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuXG5cdFx0dmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsXG5cdFx0YmVnaW4gPSB0b3VjaFswXS5wYWdlWSwgc3dpcGU7XG5cdFx0YWxlcnQoKTtcblxuXHRcdGRpZ2l0Lm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG5cblx0XHRcdHZhciBjb250YWN0ID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsXG5cdFx0XHRlbmQgPSBjb250YWN0WzBdLnBhZ2VZLFxuXHRcdFx0ZGlzdGFuY2UgPSBlbmQtYmVnaW47XG5cblx0XHRcdGlmIChpc0J1c3koKSkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gMzApIHtcblx0XHRcdHN3aXBlID0gdHJ1ZTtcblx0XHRcdGRpc3RhbmNlID4gMzAgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmFkZChnYXRlKS5vbmUoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdGlmIChzd2lwZSkge1xuXHRcdFx0c3dpcGUgPSBmYWxzZTtcblx0XHRcdG5ld051bWJlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaWdpdC5vZmYoJ3RvdWNobW92ZScpLmFkZChnYXRlKS5vZmYoJ3RvdWNoZW5kJyk7XG5cdFx0fSk7XG5cdH0pXG5cdC5vbignbW91c2Vkb3duIHRvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG5cblx0XHRpZiAoZS53aGljaCAmJiBlLndoaWNoICE9IDEpIHJldHVybjtcblxuXHRcdHZhciBpdGVtID0gJCh0aGlzKS5pbmRleCgpO1xuXHRcdGlmIChpdGVtID09IDEgfHwgaXRlbSA9PSAzKSB7XG5cblx0XHRkaWdpdC5vbmUoJ21vdXNldXAgdG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHNhbWUgPSBpdGVtID09ICQodGhpcykuaW5kZXgoKTtcblxuXHRcdFx0aWYgKGlzQnVzeSgpIHx8ICFzYW1lKSByZXR1cm4gY2FuY2VsSXQoKTtcblxuXHRcdFx0aXRlbSA9PSAxID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblxuXHRcdFx0bmV3TnVtYmVyKCk7XG5cblx0XHRcdHJldHVybiBjYW5jZWxJdCgpO1xuXHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGlzQnVzeSgpIHtcblxuXHRyZXR1cm4gY29nLmlzKCc6YW5pbWF0ZWQnKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsSXQoKSB7XG5cblx0ZGlnaXQub2ZmKCdtb3VzZXVwIHRvdWNoZW5kJyk7XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBuZXdOdW1iZXIoKSB7XG5cdHZhciBhaW0gPSBiYXNlO1xuXG5cdHVwID8gYWltIC09IHNsb3QgOiBhaW0gKz0gc2xvdDtcblxuXHRjb2cuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBhaW19LCA1MDAsIGZ1bmN0aW9uKCkge1xuXG5cdFx0dXAgPyBkaWdpdC5lcShwYXJzZUludChsYXN0X251bSkpLnByZXBlbmRUbyhjb2cpIDogZGlnaXQuZXEoMCkuYXBwZW5kVG8oY29nKTtcblx0XHRjb2cuc2Nyb2xsVG9wKGJhc2UpO1xuXG5cdFx0ZGlnaXQgPSBjb2cuZmluZCgnc3BhbicpO1xuXHRcdFxuXHRcdGlmKHBhcnNlSW50KGxhc3RfbnVtKT4yKXtcblx0XHR2YXIgbnVtPXBhcnNlSW50KGRpZ2l0LmVxKDIpLnRleHQoKSk7XG5cdFx0aWYoISQuaXNOdW1lcmljKG51bSkpe251bT0nMCd9XG5cdFx0JCgnLnNlbGVjdG51bScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0JCgnI3NwYW5fJytudW0pLmFkZENsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0aWYobnVtPT0nMCcpeyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVJbigpO31cblx0XHRlbHNleyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVPdXQoKTt9XG5cdFx0aWYobnVtPT0nMCcpe291dHB1dC50ZXh0KCcwLjUnKTt9ZWxzZXtvdXRwdXQudGV4dChudW0pO31cblx0XHRcblx0XHR9ZWxzZSBpZihwYXJzZUludChsYXN0X251bSk+MSl7XG5cdFx0dmFyIG51bT1wYXJzZUludChkaWdpdC5lcSgxKS50ZXh0KCkpO1xuXHRcdGlmKCEkLmlzTnVtZXJpYyhudW0pKXtudW09JzAnfVxuXHRcdGlmKG51bT09JzAnKXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlSW4oKTt9XG5cdFx0ZWxzZXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlT3V0KCk7fVxuXHRcdCQoJy5zZWxlY3RudW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdCQoJyNzcGFuXycrbnVtKS5hZGRDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdGlmKG51bT09JzAnKXtvdXRwdXQudGV4dCgnMC41Jyk7fWVsc2V7b3V0cHV0LnRleHQobnVtKTt9XG5cdFx0fWVsc2UgaWYocGFyc2VJbnQobGFzdF9udW0pPT0xKXtcblx0XHR2YXIgbnVtPXBhcnNlSW50KGRpZ2l0LmVxKDApLnRleHQoKSk7XG5cdFx0aWYoISQuaXNOdW1lcmljKG51bSkpe251bT0nMCd9XG5cdFx0aWYobnVtPT0nMCcpeyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVJbigpO31cblx0XHRlbHNleyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVPdXQoKTt9XG5cdFx0JCgnLnNlbGVjdG51bScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0JCgnI3NwYW5fJytudW0pLmFkZENsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0aWYobnVtPT0nMCcpe291dHB1dC50ZXh0KCcwLjUnKTt9ZWxzZXtvdXRwdXQudGV4dChudW0pO31cblx0XHR9ZWxzZXtcblx0XHRvdXRwdXQudGV4dCgnMCcpO1xuXHRcdH1cblx0XHRcblx0fSk7XG59XG5cdFx0XHRcbiAgfVxuXHRzaWdudXBidG4oKSB7XG5cdHZhciByb3V0PXRoaXMuX3JvdXRlcjtcblx0XHRcdHZhciBkZXNrPU51bWJlcigkKCcjcmVzdWx0JykudGV4dCgpKTtcblx0XHRcdFxuXHRcdFx0aWYoZGVzaz4wKXtcblx0XHRcdFxuXHRcdFx0dmFyIHVzZXJJZD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXIuaWRcIik7XG4gIFx0XHRpZih1c2VySWQhPW51bGwpe1xuXHRcdFx0dmFyIHVybD0nLi9hcGkvdXNlcnMvZGlyZWN0X2xvY2F0aW9uLycrbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpKycvJyt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSsnLycrZGVzaztcblx0XHRcdCQuYWpheCh7XG4gICAgICAgICAgdXJsOnVybCxcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiAkKFwiI2xvZ2luRm9ybVwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBiZWZvcmVTZW5kOmZ1bmN0aW9uKClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzAuNScpLmFwcGVuZCgnPGltZyBzcmM9XCJzcmMvaW1nL2xvYWRpbmcuZ2lmXCIgYm9yZGVyPVwiMFwiIGNsYXNzPVwibG9hZGlcIiBzdHlsZT0gXCJsZWZ0OiA0OCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMjUlO1wiIGFsdD1cIlwiIHRpdGxlPVwiXCIgLz4nKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAge1xuXHRcdCAgICQoXCIjbG9naW5fc3VibWl0XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHQgIHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pZFwiLCBvYmoudXNlci5pZCk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIubmFtZVwiLCBvYmoudXNlci5uYW1lKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbmR1c3RyeVwiLCBvYmoudXNlci5pbmR1c3RyeSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW1hZ2VcIiwgb2JqLnVzZXIuaW1hZ2UpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyb3V0Lm5hdmlnYXRlKFsnL1NpZ25VcENvbmdyYXRzJywgeyBpZDogb2JqLnVzZXIuaWQsIG5hbWU6IG9iai51c2VyLm5hbWUsaW5kdXN0cnk6b2JqLnVzZXIuaW5kdXN0cnksaW1hZ2U6b2JqLnVzZXIuaW1hZ2UgfV0pO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaHRtbChvYmoubXNzZykuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMScpO1xuXHRcdFx0XHRcdFx0ICQoJy5sb2FkaScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCcseyBsb2NhdGlvbmlkOnRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpLGRlc2s6ZGVza31dKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRhbGVydCgncGxlYXNlIHNlbGVjdCBkZXNrJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdH1cdFx0XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
