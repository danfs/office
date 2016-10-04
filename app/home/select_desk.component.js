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
                    if (this._routeParams.get('remain') > '20') {
                        var maxdesk = '20';
                    }
                    else {
                        var maxdesk = this._routeParams.get('remain');
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
                    var remains_rout = parseInt(this._routeParams.get('remain'));
                    if (this._routeParams.get('remain') > '20') {
                        var maxdesk = '20';
                    }
                    else {
                        var maxdesk = this._routeParams.get('remain');
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
                    if (this._routeParams.get('remain') > '20') {
                        var maxdesk = '20';
                    }
                    else {
                        var maxdesk = this._routeParams.get('remain');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBR1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO29CQUMvRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUN4QyxJQUFJLE9BQU8sR0FBQyxJQUFJLENBQUM7b0JBQ2pCLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQUEsSUFBSSxPQUFPLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQUEsQ0FBQztvQkFFckQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO29CQUNyQixDQUFDO2dCQUNKLENBQUM7Z0JBR0Ysa0NBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1AsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUYsc0NBQVEsR0FBUjtvQkFDQSxJQUFJLEdBQUcsR0FBQyxFQUFFLENBQUM7b0JBQ1gsSUFBSSxZ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QUFHLENBQUMsTUFBTSxJQUFFLE9BQU8sQ0FBQyxDQUM1QixDQUFDO3dDQUNELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29DQUN2QyxDQUFDO29DQUNBLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUNsQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0NBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0NBQ2IsQ0FBQzs2QkFFSixDQUFDLENBQUM7d0JBQ1IsQ0FBQzt3QkFBQSxJQUFJLENBQUEsQ0FBQzs0QkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFVBQVUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RixDQUFDO29CQUNELENBQUM7b0JBQ0QsSUFBSSxDQUFBLENBQUM7d0JBQ0wsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQzVCLENBQUM7Z0JBRUQsQ0FBQztnQkFqUEo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O3VDQUFBO2dCQStPRiwwQkFBQztZQUFELENBOU9BLEFBOE9DLElBQUE7WUE5T0QscURBOE9DLENBQUEiLCJmaWxlIjoiaG9tZS9zZWxlY3RfZGVzay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5kZWNsYXJlIHZhciBsb2NhdGlvbjogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0X2Rlc2snLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL3NlbGVjdF9kZXNrLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RGVza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5yZW1haW4gPSBbXTtcbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdF9sb2NhdGlvblwiLCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uX25hbWUnKSk7XG4gaWYodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKT4nMjAnKXtcbiAgdmFyIG1heGRlc2s9JzIwJztcbiAgfWVsc2V7dmFyIG1heGRlc2s9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKTt9XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgbWF4ZGVzazsgaSsrKSB7XG4gICAgICB0aGlzLnJlbWFpbltpXT1pKzE7XG4gICAgfVxuXHR9XG5wcml2YXRlIGRlc2tyZW1haW47XG5cbkhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9XG5cdFx0XHRcbiAgbmdPbkluaXQoKSB7XG4gIHZhciBudW09Jyc7XG4gIHZhciByZW1haW5zX3JvdXQ9cGFyc2VJbnQodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSk7XG4gIGlmKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyk+JzIwJyl7XG4gIHZhciBtYXhkZXNrPScyMCc7XG4gIH1lbHNle3ZhciBtYXhkZXNrPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyk7fVxuICB2YXIgbGFzdF9udW09bWF4ZGVzaztcbiAgdmFyIHNlY29uZF9sYXN0PWxhc3RfbnVtLTE7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBtYXhkZXNrOyBpKyspIHtcbiAgdmFyIG47IGkgPT0gMCA/IG4gPSBzZWNvbmRfbGFzdCA6IChpID09IDEgPyBuID0gbGFzdF9udW0gOiBuID0gaS0yKTtcbiAgaWYobj09JzAnKXtcbiAgbnVtPW51bSsnPHNwYW4gaWQ9XCJzcGFuXycrMCsnXCIgY2xhc3M9XCJzZWxlY3RudW0gaHRfZGVzayBzZWxlY3RlZF9kZXNrXCI+SG90IERlc2sgKjwvc3Bhbj4nO1xuICB9ZWxzZXtcbiAgICAgIG51bT1udW0rJzxzcGFuIGlkPVwic3Bhbl8nK24rJ1wiIGNsYXNzPVwic2VsZWN0bnVtXCI+JytuKyc8L3NwYW4+Jztcblx0ICB9XG4gICAgfVxuICAkKCcjcm90YXRvcicpLmh0bWwobnVtKTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuYmFja19ib3RvbScsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdHBhcmVudC5oaXN0b3J5LmJhY2soKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXHQgaWYodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKT4nMjAnKXtcbiAgdmFyIG1heGRlc2s9JzIwJztcbiAgfWVsc2V7dmFyIG1heGRlc2s9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKTt9XG52YXIgbGFzdF9udW09bWF4ZGVzayxcdFx0XHRcbnZhciBnYXRlID0gJCh3aW5kb3cpO1xudmFyIGNvZyA9ICQoJyNyb3RhdG9yJyk7XG52YXIgZGlnaXQgPSBjb2cuZmluZCgnc3BhbicpO1xudmFyIHNsb3QgPSBkaWdpdC5lcSgwKS5oZWlnaHQoKTtcbnZhciBiYXNlID0gMS41KnNsb3Q7XG52YXIgb3V0cHV0ID0gJCgnI3Jlc3VsdCcpO1xudmFyIHVwPScnO1xuXG5jb2cuZmFkZVRvKDAsMCk7XG5cblxuXHRzZXRUaW1lb3V0KGludGVyQWN0aW9uLCA1MCk7XG5cblxuZnVuY3Rpb24gaW50ZXJBY3Rpb24oKSB7XG5cblx0b3V0cHV0LnRleHQoMC41KTtcblxuXHRjb2cuc2Nyb2xsVG9wKGJhc2UpLmZhZGVUbygwLDEpLm1vdXNld2hlZWwoZnVuY3Rpb24odHVybiwgZGVsdGEpIHtcblx0XHRpZiAoaXNCdXN5KCkpIHJldHVybiBmYWxzZTtcblxuXHRcdGRlbHRhIDwgMCA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cblx0XHRuZXdOdW1iZXIoKTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cblx0ZGlnaXQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG5cblx0XHR2YXIgdG91Y2ggPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcyxcblx0XHRiZWdpbiA9IHRvdWNoWzBdLnBhZ2VZLCBzd2lwZTtcblx0XHRhbGVydCgpO1xuXG5cdFx0ZGlnaXQub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGNvbnRhY3QgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcyxcblx0XHRcdGVuZCA9IGNvbnRhY3RbMF0ucGFnZVksXG5cdFx0XHRkaXN0YW5jZSA9IGVuZC1iZWdpbjtcblxuXHRcdFx0aWYgKGlzQnVzeSgpKSByZXR1cm47XG5cblx0XHRcdGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPiAzMCkge1xuXHRcdFx0c3dpcGUgPSB0cnVlO1xuXHRcdFx0ZGlzdGFuY2UgPiAzMCA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuYWRkKGdhdGUpLm9uZSgndG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0aWYgKHN3aXBlKSB7XG5cdFx0XHRzd2lwZSA9IGZhbHNlO1xuXHRcdFx0bmV3TnVtYmVyKCk7XG5cdFx0XHR9XG5cblx0XHRcdGRpZ2l0Lm9mZigndG91Y2htb3ZlJykuYWRkKGdhdGUpLm9mZigndG91Y2hlbmQnKTtcblx0XHR9KTtcblx0fSlcblx0Lm9uKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdGlmIChlLndoaWNoICYmIGUud2hpY2ggIT0gMSkgcmV0dXJuO1xuXG5cdFx0dmFyIGl0ZW0gPSAkKHRoaXMpLmluZGV4KCk7XG5cdFx0aWYgKGl0ZW0gPT0gMSB8fCBpdGVtID09IDMpIHtcblxuXHRcdGRpZ2l0Lm9uZSgnbW91c2V1cCB0b3VjaGVuZCcsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgc2FtZSA9IGl0ZW0gPT0gJCh0aGlzKS5pbmRleCgpO1xuXG5cdFx0XHRpZiAoaXNCdXN5KCkgfHwgIXNhbWUpIHJldHVybiBjYW5jZWxJdCgpO1xuXG5cdFx0XHRpdGVtID09IDEgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXG5cdFx0XHRuZXdOdW1iZXIoKTtcblxuXHRcdFx0cmV0dXJuIGNhbmNlbEl0KCk7XG5cdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaXNCdXN5KCkge1xuXG5cdHJldHVybiBjb2cuaXMoJzphbmltYXRlZCcpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxJdCgpIHtcblxuXHRkaWdpdC5vZmYoJ21vdXNldXAgdG91Y2hlbmQnKTtcblxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG5ld051bWJlcigpIHtcblx0dmFyIGFpbSA9IGJhc2U7XG5cblx0dXAgPyBhaW0gLT0gc2xvdCA6IGFpbSArPSBzbG90O1xuXG5cdGNvZy5hbmltYXRlKHtzY3JvbGxUb3A6IGFpbX0sIDUwMCwgZnVuY3Rpb24oKSB7XG5cblx0XHR1cCA/IGRpZ2l0LmVxKHBhcnNlSW50KGxhc3RfbnVtKSkucHJlcGVuZFRvKGNvZykgOiBkaWdpdC5lcSgwKS5hcHBlbmRUbyhjb2cpO1xuXHRcdGNvZy5zY3JvbGxUb3AoYmFzZSk7XG5cblx0XHRkaWdpdCA9IGNvZy5maW5kKCdzcGFuJyk7XG5cdFx0XG5cdFx0aWYocGFyc2VJbnQobGFzdF9udW0pPjIpe1xuXHRcdHZhciBudW09cGFyc2VJbnQoZGlnaXQuZXEoMikudGV4dCgpKTtcblx0XHRpZighJC5pc051bWVyaWMobnVtKSl7bnVtPScwJ31cblx0XHQkKCcuc2VsZWN0bnVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHQkKCcjc3Bhbl8nK251bSkuYWRkQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHRpZihudW09PScwJyl7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZUluKCk7fVxuXHRcdGVsc2V7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZU91dCgpO31cblx0XHRpZihudW09PScwJyl7b3V0cHV0LnRleHQoJzAuNScpO31lbHNle291dHB1dC50ZXh0KG51bSk7fVxuXHRcdFxuXHRcdH1lbHNlIGlmKHBhcnNlSW50KGxhc3RfbnVtKT4xKXtcblx0XHR2YXIgbnVtPXBhcnNlSW50KGRpZ2l0LmVxKDEpLnRleHQoKSk7XG5cdFx0aWYoISQuaXNOdW1lcmljKG51bSkpe251bT0nMCd9XG5cdFx0aWYobnVtPT0nMCcpeyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVJbigpO31cblx0XHRlbHNleyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVPdXQoKTt9XG5cdFx0JCgnLnNlbGVjdG51bScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0JCgnI3NwYW5fJytudW0pLmFkZENsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0aWYobnVtPT0nMCcpe291dHB1dC50ZXh0KCcwLjUnKTt9ZWxzZXtvdXRwdXQudGV4dChudW0pO31cblx0XHR9ZWxzZSBpZihwYXJzZUludChsYXN0X251bSk9PTEpe1xuXHRcdHZhciBudW09cGFyc2VJbnQoZGlnaXQuZXEoMCkudGV4dCgpKTtcblx0XHRpZighJC5pc051bWVyaWMobnVtKSl7bnVtPScwJ31cblx0XHRpZihudW09PScwJyl7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZUluKCk7fVxuXHRcdGVsc2V7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZU91dCgpO31cblx0XHQkKCcuc2VsZWN0bnVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHQkKCcjc3Bhbl8nK251bSkuYWRkQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHRpZihudW09PScwJyl7b3V0cHV0LnRleHQoJzAuNScpO31lbHNle291dHB1dC50ZXh0KG51bSk7fVxuXHRcdH1lbHNle1xuXHRcdG91dHB1dC50ZXh0KCcwJyk7XG5cdFx0fVxuXHRcdFxuXHR9KTtcbn1cblx0XHRcdFxuICB9XG5cdHNpZ251cGJ0bigpIHtcblx0dmFyIHJvdXQ9dGhpcy5fcm91dGVyO1xuXHRcdFx0dmFyIGRlc2s9TnVtYmVyKCQoJyNyZXN1bHQnKS50ZXh0KCkpO1xuXHRcdFx0XG5cdFx0XHRpZihkZXNrPjApe1xuXHRcdFx0XG5cdFx0XHR2YXIgdXNlcklkPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci5pZFwiKTtcbiAgXHRcdGlmKHVzZXJJZCE9bnVsbCl7XG5cdFx0XHR2YXIgdXJsPScuL2FwaS91c2Vycy9kaXJlY3RfbG9jYXRpb24vJytsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXIuaWRcIikrJy8nK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpKycvJytkZXNrO1xuXHRcdFx0JC5hamF4KHtcbiAgICAgICAgICB1cmw6dXJsLFxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6ICQoXCIjbG9naW5Gb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6ZnVuY3Rpb24oKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMC41JykuYXBwZW5kKCc8aW1nIHNyYz1cInNyYy9pbWcvbG9hZGluZy5naWZcIiBib3JkZXI9XCIwXCIgY2xhc3M9XCJsb2FkaVwiIHN0eWxlPSBcImxlZnQ6IDQ4JTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAyNSU7XCIgYWx0PVwiXCIgdGl0bGU9XCJcIiAvPicpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICB7XG5cdFx0ICAgJChcIiNsb2dpbl9zdWJtaXRcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuXHRcdCAgdmFyIG9iaiA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdGlmKG9iai5zdGF0dXM9PVwic3VjY2Vzc1wiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmlkXCIsIG9iai51c2VyLmlkKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5uYW1lXCIsIG9iai51c2VyLm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmluZHVzdHJ5XCIsIG9iai51c2VyLmluZHVzdHJ5KTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbWFnZVwiLCBvYmoudXNlci5pbWFnZSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJvdXQubmF2aWdhdGUoWycvU2lnblVwQ29uZ3JhdHMnLCB7IGlkOiBvYmoudXNlci5pZCwgbmFtZTogb2JqLnVzZXIubmFtZSxpbmR1c3RyeTpvYmoudXNlci5pbmR1c3RyeSxpbWFnZTpvYmoudXNlci5pbWFnZSB9XSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYob2JqLnN0YXR1cz09XCJlcnJvclwiKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0JCgnLmVycm9yX3RleHQnKS5odG1sKG9iai5tc3NnKS5zaG93KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQgJChcIi50aHVtYm94M1wiKS5jc3MoJ29wYWNpdHknLCcxJyk7XG5cdFx0XHRcdFx0XHQgJCgnLmxvYWRpJykucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnU2lnbnVwJyx7IGxvY2F0aW9uaWQ6dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJyksZGVzazpkZXNrfV0pO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdGFsZXJ0KCdwbGVhc2Ugc2VsZWN0IGRlc2snKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0fVx0XHRcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
