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
                    localStorage.setItem("loctionID", this._routeParams.get('locationid'));
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
                            var loctionID = this._routeParams.get('locationid');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBR1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO29CQUNoRixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUd0RSxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUNoRCxJQUFJLE9BQU8sR0FBQyxJQUFJLENBQUM7b0JBQ2pCLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQUEsSUFBSSxPQUFPLEdBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQUEsQ0FBQztvQkFFN0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO29CQUNyQixDQUFDO2dCQUNKLENBQUM7Z0JBR0Ysa0NBQUksR0FBSixVQUFLLEtBQUs7b0JBQ1AsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMs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ay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5kZWNsYXJlIHZhciBsb2NhdGlvbjogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0X2Rlc2snLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9ob21lL3NlbGVjdF9kZXNrLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RGVza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5yZW1haW4gPSBbXTtcbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdF9sb2NhdGlvblwiLCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uX25hbWUnKSk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY3Rpb25JRFwiLCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSk7XG5cblxuIGlmKE51bWJlcih0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpKT4nMjAnKXtcbiAgdmFyIG1heGRlc2s9JzIwJztcbiAgfWVsc2V7dmFyIG1heGRlc2s9TnVtYmVyKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJykpO31cblxuZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhkZXNrOyBpKyspIHtcbiAgICAgIHRoaXMucmVtYWluW2ldPWkrMTtcbiAgICB9XG5cdH1cbnByaXZhdGUgZGVza3JlbWFpbjtcblxuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cblx0XHRcdFxuICBuZ09uSW5pdCgpIHtcbiAgdmFyIG51bT0nJztcbiAgdmFyIHJlbWFpbnNfcm91dD1OdW1iZXIodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSk7XG4gXG4gIGlmKHJlbWFpbnNfcm91dCA+ICcyMCcpe1xuICB2YXIgbWF4ZGVzaz0nMjAnO1xuICB9ZWxzZXt2YXIgbWF4ZGVzaz1yZW1haW5zX3JvdXR9XG4gIHZhciBsYXN0X251bT1tYXhkZXNrO1xuICB2YXIgc2Vjb25kX2xhc3Q9bGFzdF9udW0tMTtcbiAgXG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IG1heGRlc2s7IGkrKykge1xuICB2YXIgbjsgaSA9PSAwID8gbiA9IHNlY29uZF9sYXN0IDogKGkgPT0gMSA/IG4gPSBsYXN0X251bSA6IG4gPSBpLTIpO1xuICBpZihuPT0nMCcpe1xuICBudW09bnVtKyc8c3BhbiBpZD1cInNwYW5fJyswKydcIiBjbGFzcz1cInNlbGVjdG51bSBodF9kZXNrIHNlbGVjdGVkX2Rlc2tcIj5Ib3QgRGVzayAqPC9zcGFuPic7XG4gIH1lbHNle1xuICAgICAgbnVtPW51bSsnPHNwYW4gaWQ9XCJzcGFuXycrbisnXCIgY2xhc3M9XCJzZWxlY3RudW1cIj4nK24rJzwvc3Bhbj4nO1xuXHQgIH1cbiAgICB9XG4gICQoJyNyb3RhdG9yJykuaHRtbChudW0pO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdCBpZihOdW1iZXIodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSk+JzIwJyl7XG4gIHZhciBtYXhkZXNrPScyMCc7XG4gIH1lbHNle3ZhciBtYXhkZXNrPU51bWJlcih0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpKTt9XG52YXIgbGFzdF9udW09bWF4ZGVzayxcdFx0XHRcbnZhciBnYXRlID0gJCh3aW5kb3cpO1xudmFyIGNvZyA9ICQoJyNyb3RhdG9yJyk7XG52YXIgZGlnaXQgPSBjb2cuZmluZCgnc3BhbicpO1xudmFyIHNsb3QgPSBkaWdpdC5lcSgwKS5oZWlnaHQoKTtcbnZhciBiYXNlID0gMS41KnNsb3Q7XG52YXIgb3V0cHV0ID0gJCgnI3Jlc3VsdCcpO1xudmFyIHVwPScnO1xuXG5jb2cuZmFkZVRvKDAsMCk7XG5cblxuXHRzZXRUaW1lb3V0KGludGVyQWN0aW9uLCA1MCk7XG5cblxuZnVuY3Rpb24gaW50ZXJBY3Rpb24oKSB7XG5cblx0b3V0cHV0LnRleHQoMC41KTtcblxuXHRjb2cuc2Nyb2xsVG9wKGJhc2UpLmZhZGVUbygwLDEpLm1vdXNld2hlZWwoZnVuY3Rpb24odHVybiwgZGVsdGEpIHtcblx0XHRpZiAoaXNCdXN5KCkpIHJldHVybiBmYWxzZTtcblxuXHRcdGRlbHRhIDwgMCA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cblx0XHRuZXdOdW1iZXIoKTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cblx0ZGlnaXQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG5cblx0XHR2YXIgdG91Y2ggPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcyxcblx0XHRiZWdpbiA9IHRvdWNoWzBdLnBhZ2VZLCBzd2lwZTtcblxuXHRcdGRpZ2l0Lm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG5cblx0XHRcdHZhciBjb250YWN0ID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsXG5cdFx0XHRlbmQgPSBjb250YWN0WzBdLnBhZ2VZLFxuXHRcdFx0ZGlzdGFuY2UgPSBlbmQtYmVnaW47XG5cblx0XHRcdGlmIChpc0J1c3koKSkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gMzApIHtcblx0XHRcdHN3aXBlID0gdHJ1ZTtcblx0XHRcdGRpc3RhbmNlID4gMzAgPyB1cCA9IHRydWUgOiB1cCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmFkZChnYXRlKS5vbmUoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdGlmIChzd2lwZSkge1xuXHRcdFx0c3dpcGUgPSBmYWxzZTtcblx0XHRcdG5ld051bWJlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaWdpdC5vZmYoJ3RvdWNobW92ZScpLmFkZChnYXRlKS5vZmYoJ3RvdWNoZW5kJyk7XG5cdFx0fSk7XG5cdH0pXG5cdC5vbignbW91c2Vkb3duIHRvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG5cblx0XHRpZiAoZS53aGljaCAmJiBlLndoaWNoICE9IDEpIHJldHVybjtcblxuXHRcdHZhciBpdGVtID0gJCh0aGlzKS5pbmRleCgpO1xuXHRcdGlmIChpdGVtID09IDEgfHwgaXRlbSA9PSAzKSB7XG5cblx0XHRkaWdpdC5vbmUoJ21vdXNldXAgdG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHNhbWUgPSBpdGVtID09ICQodGhpcykuaW5kZXgoKTtcblxuXHRcdFx0aWYgKGlzQnVzeSgpIHx8ICFzYW1lKSByZXR1cm4gY2FuY2VsSXQoKTtcblxuXHRcdFx0aXRlbSA9PSAxID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblxuXHRcdFx0bmV3TnVtYmVyKCk7XG5cblx0XHRcdHJldHVybiBjYW5jZWxJdCgpO1xuXHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGlzQnVzeSgpIHtcblxuXHRyZXR1cm4gY29nLmlzKCc6YW5pbWF0ZWQnKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsSXQoKSB7XG5cblx0ZGlnaXQub2ZmKCdtb3VzZXVwIHRvdWNoZW5kJyk7XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBuZXdOdW1iZXIoKSB7XG5cdHZhciBhaW0gPSBiYXNlO1xuXG5cdHVwID8gYWltIC09IHNsb3QgOiBhaW0gKz0gc2xvdDtcblxuXHRjb2cuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBhaW19LCA1MDAsIGZ1bmN0aW9uKCkge1xuXG5cdFx0dXAgPyBkaWdpdC5lcShOdW1iZXIobGFzdF9udW0pKS5wcmVwZW5kVG8oY29nKSA6IGRpZ2l0LmVxKDApLmFwcGVuZFRvKGNvZyk7XG5cdFx0Y29nLnNjcm9sbFRvcChiYXNlKTtcblxuXHRcdGRpZ2l0ID0gY29nLmZpbmQoJ3NwYW4nKTtcblx0XHRcblx0XHRpZihOdW1iZXIobGFzdF9udW0pPjIpe1xuXHRcdHZhciBudW09TnVtYmVyKGRpZ2l0LmVxKDIpLnRleHQoKSk7XG5cdFx0aWYoISQuaXNOdW1lcmljKG51bSkpe251bT0nMCd9XG5cdFx0JCgnLnNlbGVjdG51bScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0JCgnI3NwYW5fJytudW0pLmFkZENsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0aWYobnVtPT0nMCcpeyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVJbigpO31cblx0XHRlbHNleyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVPdXQoKTt9XG5cdFx0aWYobnVtPT0nMCcpe291dHB1dC50ZXh0KCcwLjUnKTt9ZWxzZXtvdXRwdXQudGV4dChudW0pO31cblx0XHRcblx0XHR9ZWxzZSBpZihOdW1iZXIobGFzdF9udW0pPjEpe1xuXHRcdHZhciBudW09TnVtYmVyKGRpZ2l0LmVxKDEpLnRleHQoKSk7XG5cdFx0aWYoISQuaXNOdW1lcmljKG51bSkpe251bT0nMCd9XG5cdFx0aWYobnVtPT0nMCcpeyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVJbigpO31cblx0XHRlbHNleyQoJy5zcGlubmVyX2JvdHRvbScpLmZhZGVPdXQoKTt9XG5cdFx0JCgnLnNlbGVjdG51bScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0JCgnI3NwYW5fJytudW0pLmFkZENsYXNzKCdzZWxlY3RlZF9kZXNrJyk7XG5cdFx0aWYobnVtPT0nMCcpe291dHB1dC50ZXh0KCcwLjUnKTt9ZWxzZXtvdXRwdXQudGV4dChudW0pO31cblx0XHR9ZWxzZSBpZihOdW1iZXIobGFzdF9udW0pPT0xKXtcblx0XHR2YXIgbnVtPU51bWJlcihkaWdpdC5lcSgwKS50ZXh0KCkpO1xuXHRcdGlmKCEkLmlzTnVtZXJpYyhudW0pKXtudW09JzAnfVxuXHRcdGlmKG51bT09JzAnKXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlSW4oKTt9XG5cdFx0ZWxzZXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlT3V0KCk7fVxuXHRcdCQoJy5zZWxlY3RudW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdCQoJyNzcGFuXycrbnVtKS5hZGRDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdGlmKG51bT09JzAnKXtvdXRwdXQudGV4dCgnMC41Jyk7fWVsc2V7b3V0cHV0LnRleHQobnVtKTt9XG5cdFx0fWVsc2V7XG5cdFx0b3V0cHV0LnRleHQoJzAnKTtcblx0XHR9XG5cdFx0XG5cdH0pO1xufVxuXHRcdFx0XG4gIH1cblx0c2lnbnVwYnRuKCkge1xuXHR2YXIgcm91dD10aGlzLl9yb3V0ZXI7XG5cdFx0XHR2YXIgZGVzaz1OdW1iZXIoJCgnI3Jlc3VsdCcpLnRleHQoKSk7XG5cdFx0XHRcblx0XHRcdGlmKGRlc2s+MCl7XG5cdFx0XHRcblx0XHRcdHZhciB1c2VySWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpO1xuICBcdFx0aWYodXNlcklkIT1udWxsKXtcblx0XHRcblx0XHR2YXIgbG9jdGlvbklEPXRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpO1xuXHRcdFx0dmFyIHVybD0nLi9hcGkvdXNlcnMvZGlyZWN0X2xvY2F0aW9uLycrbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpKycvJyt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSsnLycrZGVzaztcblx0XHRcdCQuYWpheCh7XG4gICAgICAgICAgdXJsOnVybCxcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiAkKFwiI2xvZ2luRm9ybVwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICBiZWZvcmVTZW5kOmZ1bmN0aW9uKClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzAuNScpLmFwcGVuZCgnPGltZyBzcmM9XCJzcmMvaW1nL2xvYWRpbmcuZ2lmXCIgYm9yZGVyPVwiMFwiIGNsYXNzPVwibG9hZGlcIiBzdHlsZT0gXCJsZWZ0OiA0OCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogMjUlO1wiIGFsdD1cIlwiIHRpdGxlPVwiXCIgLz4nKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAge1xuXHRcdCAgICQoXCIjbG9naW5fc3VibWl0XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHQgIHZhciBvYmogPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZihvYmouc3RhdHVzPT1cInN1Y2Nlc3NcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pZFwiLCBvYmoudXNlci5pZCk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIubmFtZVwiLCBvYmoudXNlci5uYW1lKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbmR1c3RyeVwiLCBvYmoudXNlci5pbmR1c3RyeSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW1hZ2VcIiwgb2JqLnVzZXIuaW1hZ2UpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyb3V0Lm5hdmlnYXRlKFsnL1NpZ25VcENvbmdyYXRzJywgeyBpZDogb2JqLnVzZXIuaWQsIG5hbWU6IG9iai51c2VyLm5hbWUsaW5kdXN0cnk6b2JqLnVzZXIuaW5kdXN0cnksaW1hZ2U6b2JqLnVzZXIuaW1hZ2UgfV0pO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmKG9iai5zdGF0dXM9PVwiZXJyb3JcIilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCQoJy5lcnJvcl90ZXh0JykuaHRtbChvYmoubXNzZykuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ICQoXCIudGh1bWJveDNcIikuY3NzKCdvcGFjaXR5JywnMScpO1xuXHRcdFx0XHRcdFx0ICQoJy5sb2FkaScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCcseyBsb2NhdGlvbmlkOnRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbG9jYXRpb25pZCcpLGRlc2s6ZGVza31dKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRhbGVydCgncGxlYXNlIHNlbGVjdCBkZXNrJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdH1cdFx0XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
