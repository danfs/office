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
                    num = num + '<span id="span_' + 0 + '" class="selectnum ht_desk">Hot Desk *</span>';
                    for (var i = 1; i <= this._routeParams.get('remain'); i++) {
                        num = num + '<span id="span_' + i + '" class="selectnum">' + i + '</span>';
                    }
                    $('#rotator').html(num);
                    //remain = new Array(this._routeParams.get('remain'));
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
                        output.text(1);
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
                            up ? digit.eq(parseInt(last_num)).prependTo(cog) : digit.eq(0).appendTo(cog);
                            cog.scrollTop(base);
                            digit = cog.find('span');
                            if (parseInt(last_num) > 3) {
                                $('.selectnum').removeClass('selected_desk');
                                $('#span_' + digit.eq(2).text()).addClass('selected_desk');
                                output.text(digit.eq(2).text());
                            }
                            else if (parseInt(last_num) > 1) {
                                $('.selectnum').removeClass('selected_desk');
                                $('#span_' + digit.eq(1).text()).addClass('selected_desk');
                                output.text(digit.eq(1).text());
                            }
                            else if (parseInt(last_num) == 1) {
                                output.text('1');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBRVosR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0osQ0FBQztnQkFHRixrQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRixzQ0FBUSxHQUFSO29CQUNBLElBQUksR0FBRyxHQUFDLEVBQUUsQ0FBQztvQkFDWCxHQUFHLEdBQUMsR0FBRyxHQUFDLGlCQUFpQixHQUFDLENBQUMsR0FBQywrQ0FBK0MsQ0FBQztvQkFDNUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUN4RCxHQUFHLEdBQUMsR0FBRyxHQUFDLGlCQUFpQixHQUFDLENBQUMsR0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDO29CQUNqRSxDQUFDO29CQUNILENBQUMsQ0FBQyxVQUFV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WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5kZWNsYXJlIHZhciBsb2NhdGlvbjogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0X2Rlc2snLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL3NlbGVjdF9kZXNrLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RGVza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5yZW1haW4gPSBbXTtcbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xuZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpOyBpKyspIHtcbiAgICAgIHRoaXMucmVtYWluW2ldPWkrMTtcbiAgICB9XG5cdH1cbnByaXZhdGUgZGVza3JlbWFpbjtcblxuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cblx0XHRcdFxuICBuZ09uSW5pdCgpIHtcbiAgdmFyIG51bT0nJztcbiAgbnVtPW51bSsnPHNwYW4gaWQ9XCJzcGFuXycrMCsnXCIgY2xhc3M9XCJzZWxlY3RudW0gaHRfZGVza1wiPkhvdCBEZXNrICo8L3NwYW4+JztcbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKTsgaSsrKSB7XG4gICAgICBudW09bnVtKyc8c3BhbiBpZD1cInNwYW5fJytpKydcIiBjbGFzcz1cInNlbGVjdG51bVwiPicraSsnPC9zcGFuPic7XG4gICAgfVxuICAkKCcjcm90YXRvcicpLmh0bWwobnVtKTtcbiAgLy9yZW1haW4gPSBuZXcgQXJyYXkodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSk7XG4gIFxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xudmFyIGxhc3RfbnVtPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyksXHRcdFx0XG52YXIgZ2F0ZSA9ICQod2luZG93KTtcbnZhciBjb2cgPSAkKCcjcm90YXRvcicpO1xudmFyIGRpZ2l0ID0gY29nLmZpbmQoJ3NwYW4nKTtcbnZhciBzbG90ID0gZGlnaXQuZXEoMCkuaGVpZ2h0KCk7XG52YXIgYmFzZSA9IDEuNSpzbG90O1xudmFyIG91dHB1dCA9ICQoJyNyZXN1bHQnKTtcbnZhciB1cD0nJztcblxuY29nLmZhZGVUbygwLDApO1xuXG5cblx0c2V0VGltZW91dChpbnRlckFjdGlvbiwgNTApO1xuXG5cbmZ1bmN0aW9uIGludGVyQWN0aW9uKCkge1xuXG5cdG91dHB1dC50ZXh0KDEpO1xuXG5cdGNvZy5zY3JvbGxUb3AoYmFzZSkuZmFkZVRvKDAsMSkubW91c2V3aGVlbChmdW5jdGlvbih0dXJuLCBkZWx0YSkge1xuXG5cdFx0aWYgKGlzQnVzeSgpKSByZXR1cm4gZmFsc2U7XG5cblx0XHRkZWx0YSA8IDAgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXG5cdFx0bmV3TnVtYmVyKCk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdGRpZ2l0Lm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuXG5cdFx0dmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsXG5cdFx0YmVnaW4gPSB0b3VjaFswXS5wYWdlWSwgc3dpcGU7XG5cblx0XHRkaWdpdC5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuXG5cdFx0XHR2YXIgY29udGFjdCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzLFxuXHRcdFx0ZW5kID0gY29udGFjdFswXS5wYWdlWSxcblx0XHRcdGRpc3RhbmNlID0gZW5kLWJlZ2luO1xuXG5cdFx0XHRpZiAoaXNCdXN5KCkpIHJldHVybjtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRpc3RhbmNlKSA+IDMwKSB7XG5cdFx0XHRzd2lwZSA9IHRydWU7XG5cdFx0XHRkaXN0YW5jZSA+IDMwID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5hZGQoZ2F0ZSkub25lKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZiAoc3dpcGUpIHtcblx0XHRcdHN3aXBlID0gZmFsc2U7XG5cdFx0XHRuZXdOdW1iZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlnaXQub2ZmKCd0b3VjaG1vdmUnKS5hZGQoZ2F0ZSkub2ZmKCd0b3VjaGVuZCcpO1xuXHRcdH0pO1xuXHR9KVxuXHQub24oJ21vdXNlZG93biB0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuXG5cdFx0aWYgKGUud2hpY2ggJiYgZS53aGljaCAhPSAxKSByZXR1cm47XG5cblx0XHR2YXIgaXRlbSA9ICQodGhpcykuaW5kZXgoKTtcblx0XHRpZiAoaXRlbSA9PSAxIHx8IGl0ZW0gPT0gMykge1xuXG5cdFx0ZGlnaXQub25lKCdtb3VzZXVwIHRvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBzYW1lID0gaXRlbSA9PSAkKHRoaXMpLmluZGV4KCk7XG5cblx0XHRcdGlmIChpc0J1c3koKSB8fCAhc2FtZSkgcmV0dXJuIGNhbmNlbEl0KCk7XG5cblx0XHRcdGl0ZW0gPT0gMSA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cblx0XHRcdG5ld051bWJlcigpO1xuXG5cdFx0XHRyZXR1cm4gY2FuY2VsSXQoKTtcblx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpc0J1c3koKSB7XG5cblx0cmV0dXJuIGNvZy5pcygnOmFuaW1hdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEl0KCkge1xuXG5cdGRpZ2l0Lm9mZignbW91c2V1cCB0b3VjaGVuZCcpO1xuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbmV3TnVtYmVyKCkge1xuXG5cdHZhciBhaW0gPSBiYXNlO1xuXG5cdHVwID8gYWltIC09IHNsb3QgOiBhaW0gKz0gc2xvdDtcblxuXHRjb2cuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBhaW19LCA1MDAsIGZ1bmN0aW9uKCkge1xuXG5cdFx0dXAgPyBkaWdpdC5lcShwYXJzZUludChsYXN0X251bSkpLnByZXBlbmRUbyhjb2cpIDogZGlnaXQuZXEoMCkuYXBwZW5kVG8oY29nKTtcblx0XHRjb2cuc2Nyb2xsVG9wKGJhc2UpO1xuXG5cdFx0ZGlnaXQgPSBjb2cuZmluZCgnc3BhbicpO1xuXHRcdGlmKHBhcnNlSW50KGxhc3RfbnVtKT4zKXtcblx0XHQkKCcuc2VsZWN0bnVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHQkKCcjc3Bhbl8nK2RpZ2l0LmVxKDIpLnRleHQoKSkuYWRkQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHRvdXRwdXQudGV4dChkaWdpdC5lcSgyKS50ZXh0KCkpO1xuXHRcdH1lbHNlIGlmKHBhcnNlSW50KGxhc3RfbnVtKT4xKXtcblx0XHRcblx0XHQkKCcuc2VsZWN0bnVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHQkKCcjc3Bhbl8nK2RpZ2l0LmVxKDEpLnRleHQoKSkuYWRkQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHRvdXRwdXQudGV4dChkaWdpdC5lcSgxKS50ZXh0KCkpO1xuXHRcdH1lbHNlIGlmKHBhcnNlSW50KGxhc3RfbnVtKT09MSl7XG5cdFx0b3V0cHV0LnRleHQoJzEnKTtcblx0XHR9ZWxzZXtcblx0XHRvdXRwdXQudGV4dCgnMCcpO1xuXHRcdH1cblx0XHRcblx0fSk7XG59XG5cdFx0XHRcbiAgfVxuXHRzaWdudXBidG4oKSB7XG5cdHZhciByb3V0PXRoaXMuX3JvdXRlcjtcblx0XHRcdHZhciBkZXNrPXBhcnNlSW50KCQoJyNyZXN1bHQnKS5odG1sKCkpO1xuXHRcdFx0aWYoZGVzaz4wKXtcblx0XHRcdFxuXHRcdFx0dmFyIHVzZXJJZD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXIuaWRcIik7XG4gIFx0XHRpZih1c2VySWQhPW51bGwpe1xuXHRcdFx0dmFyIHVybD0nLi9hcGkvdXNlcnMvZGlyZWN0X2xvY2F0aW9uLycrbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpKycvJyt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSsnLycrZGVzaztcblx0XHRcdCQuYWpheCh7XG4gICAgICAgICAgdXJsOnVybCxcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiAkKFwiI2xvZ2luRm9ybVwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBiZWZvcmVTZW5kOmZ1bmN0aW9uKClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzAuNScpLmFwcGVuZCgnPGltZyBzcmM9XCJzcmMvaW1nL2xvYWRpbmcuZ2lmXCIgYm9yZGVyPVwiMFwiIGNsYXNzPVwibG9hZGlcIiBzdHlsZT0gXCJsZWZ0OiA0OCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMjUlO1wiIGFsdD1cIlwiIHRpdGxlPVwiXCIgLz4nKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAge1xuXHRcdCAgICQoXCIjbG9naW5fc3VibWl0XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHQgIHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pZFwiLCBvYmoudXNlci5pZCk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIubmFtZVwiLCBvYmoudXNlci5uYW1lKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbmR1c3RyeVwiLCBvYmoudXNlci5pbmR1c3RyeSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW1hZ2VcIiwgb2JqLnVzZXIuaW1hZ2UpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyb3V0Lm5hdmlnYXRlKFsnL1NpZ25VcENvbmdyYXRzJywgeyBpZDogb2JqLnVzZXIuaWQsIG5hbWU6IG9iai51c2VyLm5hbWUsaW5kdXN0cnk6b2JqLnVzZXIuaW5kdXN0cnksaW1hZ2U6b2JqLnVzZXIuaW1hZ2UgfV0pO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaHRtbChvYmoubXNzZykuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMScpO1xuXHRcdFx0XHRcdFx0ICQoJy5sb2FkaScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCcseyBsb2NhdGlvbmlkOnRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpLGRlc2s6ZGVza31dKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRhbGVydCgncGxlYXNlIHNlbGVjdCBkZXNrJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdH1cdFx0XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
