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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBRVgsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDeEMsSUFBSSxPQUFPLEdBQUMsSUFBSSxDQUFDO29CQUNqQixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUFBLElBQUksT0FBTyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUFBLENBQUM7b0JBRXJELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztvQkFDckIsQ0FBQztnQkFDSixDQUFDO2dCQUdGLGtDQUFJLEdBQUosVUFBSyxLQUFLO29CQUNQLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVGLHNDQUFRLEdBQVI7b0JBQ0EsSUFBSSxHQUFHLEdBQUMsRUFBRSxDQUFDO29CQUNYLElBQUksWUFBWSxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLENBQUEsQ0FB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QyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQ0FDdkMsQ0FBQztvQ0FDQSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQztvQ0FDbEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29DQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDO2dDQUNiLENBQUM7NkJBRUosQ0FBQyxDQUFDO3dCQUNSLENBQUM7d0JBQUEsSUFBSSxDQUFBLENBQUM7NEJBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxVQUFVLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUYsQ0FBQztvQkFDRCxDQUFDO29CQUNELElBQUksQ0FBQSxDQUFDO3dCQUNMLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUVELENBQUM7Z0JBL09KO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkE2T0YsMEJBQUM7WUFBRCxDQTVPQSxBQTRPQyxJQUFBO1lBNU9ELHFEQTRPQyxDQUFBIiwiZmlsZSI6ImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuZGVjbGFyZSB2YXIgbG9jYXRpb246IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdF9kZXNrJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9zZWxlY3RfZGVzay5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERlc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xucmVtYWluID0gW107XG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbiBpZih0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpPicyMCcpe1xuICB2YXIgbWF4ZGVzaz0nMjAnO1xuICB9ZWxzZXt2YXIgbWF4ZGVzaz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpO31cblxuZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhkZXNrOyBpKyspIHtcbiAgICAgIHRoaXMucmVtYWluW2ldPWkrMTtcbiAgICB9XG5cdH1cbnByaXZhdGUgZGVza3JlbWFpbjtcblxuSG9tZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH1cblx0XHRcdFxuICBuZ09uSW5pdCgpIHtcbiAgdmFyIG51bT0nJztcbiAgdmFyIHJlbWFpbnNfcm91dD1wYXJzZUludCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpKTtcbiAgaWYodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKT4nMjAnKXtcbiAgdmFyIG1heGRlc2s9JzIwJztcbiAgfWVsc2V7dmFyIG1heGRlc2s9dGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKTt9XG4gIHZhciBsYXN0X251bT1tYXhkZXNrO1xuICB2YXIgc2Vjb25kX2xhc3Q9bGFzdF9udW0tMTtcbiAgXG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IG1heGRlc2s7IGkrKykge1xuICB2YXIgbjsgaSA9PSAwID8gbiA9IHNlY29uZF9sYXN0IDogKGkgPT0gMSA/IG4gPSBsYXN0X251bSA6IG4gPSBpLTIpO1xuICBpZihuPT0nMCcpe1xuICBudW09bnVtKyc8c3BhbiBpZD1cInNwYW5fJyswKydcIiBjbGFzcz1cInNlbGVjdG51bSBodF9kZXNrIHNlbGVjdGVkX2Rlc2tcIj5Ib3QgRGVzayAqPC9zcGFuPic7XG4gIH1lbHNle1xuICAgICAgbnVtPW51bSsnPHNwYW4gaWQ9XCJzcGFuXycrbisnXCIgY2xhc3M9XCJzZWxlY3RudW1cIj4nK24rJzwvc3Bhbj4nO1xuXHQgIH1cbiAgICB9XG4gICQoJyNyb3RhdG9yJykuaHRtbChudW0pO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5iYWNrX2JvdG9tJywgZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0cGFyZW50Lmhpc3RvcnkuYmFjaygpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdCBpZih0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpPicyMCcpe1xuICB2YXIgbWF4ZGVzaz0nMjAnO1xuICB9ZWxzZXt2YXIgbWF4ZGVzaz10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpO31cbnZhciBsYXN0X251bT1tYXhkZXNrLFx0XHRcdFxudmFyIGdhdGUgPSAkKHdpbmRvdyk7XG52YXIgY29nID0gJCgnI3JvdGF0b3InKTtcbnZhciBkaWdpdCA9IGNvZy5maW5kKCdzcGFuJyk7XG52YXIgc2xvdCA9IGRpZ2l0LmVxKDApLmhlaWdodCgpO1xudmFyIGJhc2UgPSAxLjUqc2xvdDtcbnZhciBvdXRwdXQgPSAkKCcjcmVzdWx0Jyk7XG52YXIgdXA9Jyc7XG5cbmNvZy5mYWRlVG8oMCwwKTtcblxuXG5cdHNldFRpbWVvdXQoaW50ZXJBY3Rpb24sIDUwKTtcblxuXG5mdW5jdGlvbiBpbnRlckFjdGlvbigpIHtcblxuXHRvdXRwdXQudGV4dCgwLjUpO1xuXG5cdGNvZy5zY3JvbGxUb3AoYmFzZSkuZmFkZVRvKDAsMSkubW91c2V3aGVlbChmdW5jdGlvbih0dXJuLCBkZWx0YSkge1xuXHRcdGlmIChpc0J1c3koKSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0ZGVsdGEgPCAwID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblxuXHRcdG5ld051bWJlcigpO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblxuXHRkaWdpdC5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdHZhciB0b3VjaCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzLFxuXHRcdGJlZ2luID0gdG91Y2hbMF0ucGFnZVksIHN3aXBlO1xuXHRcdGFsZXJ0KCk7XG5cblx0XHRkaWdpdC5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuXG5cdFx0XHR2YXIgY29udGFjdCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzLFxuXHRcdFx0ZW5kID0gY29udGFjdFswXS5wYWdlWSxcblx0XHRcdGRpc3RhbmNlID0gZW5kLWJlZ2luO1xuXG5cdFx0XHRpZiAoaXNCdXN5KCkpIHJldHVybjtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRpc3RhbmNlKSA+IDMwKSB7XG5cdFx0XHRzd2lwZSA9IHRydWU7XG5cdFx0XHRkaXN0YW5jZSA+IDMwID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5hZGQoZ2F0ZSkub25lKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZiAoc3dpcGUpIHtcblx0XHRcdHN3aXBlID0gZmFsc2U7XG5cdFx0XHRuZXdOdW1iZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlnaXQub2ZmKCd0b3VjaG1vdmUnKS5hZGQoZ2F0ZSkub2ZmKCd0b3VjaGVuZCcpO1xuXHRcdH0pO1xuXHR9KVxuXHQub24oJ21vdXNlZG93biB0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuXG5cdFx0aWYgKGUud2hpY2ggJiYgZS53aGljaCAhPSAxKSByZXR1cm47XG5cblx0XHR2YXIgaXRlbSA9ICQodGhpcykuaW5kZXgoKTtcblx0XHRpZiAoaXRlbSA9PSAxIHx8IGl0ZW0gPT0gMykge1xuXG5cdFx0ZGlnaXQub25lKCdtb3VzZXVwIHRvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBzYW1lID0gaXRlbSA9PSAkKHRoaXMpLmluZGV4KCk7XG5cblx0XHRcdGlmIChpc0J1c3koKSB8fCAhc2FtZSkgcmV0dXJuIGNhbmNlbEl0KCk7XG5cblx0XHRcdGl0ZW0gPT0gMSA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cblx0XHRcdG5ld051bWJlcigpO1xuXG5cdFx0XHRyZXR1cm4gY2FuY2VsSXQoKTtcblx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpc0J1c3koKSB7XG5cblx0cmV0dXJuIGNvZy5pcygnOmFuaW1hdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEl0KCkge1xuXG5cdGRpZ2l0Lm9mZignbW91c2V1cCB0b3VjaGVuZCcpO1xuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbmV3TnVtYmVyKCkge1xuXHR2YXIgYWltID0gYmFzZTtcblxuXHR1cCA/IGFpbSAtPSBzbG90IDogYWltICs9IHNsb3Q7XG5cblx0Y29nLmFuaW1hdGUoe3Njcm9sbFRvcDogYWltfSwgNTAwLCBmdW5jdGlvbigpIHtcblxuXHRcdHVwID8gZGlnaXQuZXEocGFyc2VJbnQobGFzdF9udW0pKS5wcmVwZW5kVG8oY29nKSA6IGRpZ2l0LmVxKDApLmFwcGVuZFRvKGNvZyk7XG5cdFx0Y29nLnNjcm9sbFRvcChiYXNlKTtcblxuXHRcdGRpZ2l0ID0gY29nLmZpbmQoJ3NwYW4nKTtcblx0XHRcblx0XHRpZihwYXJzZUludChsYXN0X251bSk+Mil7XG5cdFx0dmFyIG51bT1wYXJzZUludChkaWdpdC5lcSgyKS50ZXh0KCkpO1xuXHRcdGlmKCEkLmlzTnVtZXJpYyhudW0pKXtudW09JzAnfVxuXHRcdCQoJy5zZWxlY3RudW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdCQoJyNzcGFuXycrbnVtKS5hZGRDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdGlmKG51bT09JzAnKXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlSW4oKTt9XG5cdFx0ZWxzZXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlT3V0KCk7fVxuXHRcdGlmKG51bT09JzAnKXtvdXRwdXQudGV4dCgnMC41Jyk7fWVsc2V7b3V0cHV0LnRleHQobnVtKTt9XG5cdFx0XG5cdFx0fWVsc2UgaWYocGFyc2VJbnQobGFzdF9udW0pPjEpe1xuXHRcdHZhciBudW09cGFyc2VJbnQoZGlnaXQuZXEoMSkudGV4dCgpKTtcblx0XHRpZighJC5pc051bWVyaWMobnVtKSl7bnVtPScwJ31cblx0XHRpZihudW09PScwJyl7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZUluKCk7fVxuXHRcdGVsc2V7JCgnLnNwaW5uZXJfYm90dG9tJykuZmFkZU91dCgpO31cblx0XHQkKCcuc2VsZWN0bnVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHQkKCcjc3Bhbl8nK251bSkuYWRkQ2xhc3MoJ3NlbGVjdGVkX2Rlc2snKTtcblx0XHRpZihudW09PScwJyl7b3V0cHV0LnRleHQoJzAuNScpO31lbHNle291dHB1dC50ZXh0KG51bSk7fVxuXHRcdH1lbHNlIGlmKHBhcnNlSW50KGxhc3RfbnVtKT09MSl7XG5cdFx0dmFyIG51bT1wYXJzZUludChkaWdpdC5lcSgwKS50ZXh0KCkpO1xuXHRcdGlmKCEkLmlzTnVtZXJpYyhudW0pKXtudW09JzAnfVxuXHRcdGlmKG51bT09JzAnKXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlSW4oKTt9XG5cdFx0ZWxzZXskKCcuc3Bpbm5lcl9ib3R0b20nKS5mYWRlT3V0KCk7fVxuXHRcdCQoJy5zZWxlY3RudW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdCQoJyNzcGFuXycrbnVtKS5hZGRDbGFzcygnc2VsZWN0ZWRfZGVzaycpO1xuXHRcdGlmKG51bT09JzAnKXtvdXRwdXQudGV4dCgnMC41Jyk7fWVsc2V7b3V0cHV0LnRleHQobnVtKTt9XG5cdFx0fWVsc2V7XG5cdFx0b3V0cHV0LnRleHQoJzAnKTtcblx0XHR9XG5cdFx0XG5cdH0pO1xufVxuXHRcdFx0XG4gIH1cblx0c2lnbnVwYnRuKCkge1xuXHR2YXIgcm91dD10aGlzLl9yb3V0ZXI7XG5cdFx0XHR2YXIgZGVzaz1OdW1iZXIoJCgnI3Jlc3VsdCcpLnRleHQoKSk7XG5cdFx0XHRcblx0XHRcdGlmKGRlc2s+MCl7XG5cdFx0XHRcblx0XHRcdHZhciB1c2VySWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpO1xuICBcdFx0aWYodXNlcklkIT1udWxsKXtcblx0XHRcdHZhciB1cmw9Jy4vYXBpL3VzZXJzL2RpcmVjdF9sb2NhdGlvbi8nK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci5pZFwiKSsnLycrdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJykrJy8nK2Rlc2s7XG5cdFx0XHQkLmFqYXgoe1xuICAgICAgICAgIHVybDp1cmwsXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YTogJChcIiNsb2dpbkZvcm1cIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgYmVmb3JlU2VuZDpmdW5jdGlvbigpXG4gICAgICAgICAge1xuICAgICAgICAgICAgJChcIi50aHVtYm94M1wiKS5jc3MoJ29wYWNpdHknLCcwLjUnKS5hcHBlbmQoJzxpbWcgc3JjPVwic3JjL2ltZy9sb2FkaW5nLmdpZlwiIGJvcmRlcj1cIjBcIiBjbGFzcz1cImxvYWRpXCIgc3R5bGU9IFwibGVmdDogNDglO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDI1JTtcIiBhbHQ9XCJcIiB0aXRsZT1cIlwiIC8+JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICAgIHtcblx0XHQgICAkKFwiI2xvZ2luX3N1Ym1pdFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG5cdFx0ICB2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaWRcIiwgb2JqLnVzZXIuaWQpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLm5hbWVcIiwgb2JqLnVzZXIubmFtZSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW5kdXN0cnlcIiwgb2JqLnVzZXIuaW5kdXN0cnkpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmltYWdlXCIsIG9iai51c2VyLmltYWdlKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cm91dC5uYXZpZ2F0ZShbJy9TaWduVXBDb25ncmF0cycsIHsgaWQ6IG9iai51c2VyLmlkLCBuYW1lOiBvYmoudXNlci5uYW1lLGluZHVzdHJ5Om9iai51c2VyLmluZHVzdHJ5LGltYWdlOm9iai51c2VyLmltYWdlIH1dKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImVycm9yXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmh0bWwob2JqLm1zc2cpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzEnKTtcblx0XHRcdFx0XHRcdCAkKCcubG9hZGknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydTaWdudXAnLHsgbG9jYXRpb25pZDp0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSxkZXNrOmRlc2t9XSk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0YWxlcnQoJ3BsZWFzZSBzZWxlY3QgZGVzaycpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR9XHRcdFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
