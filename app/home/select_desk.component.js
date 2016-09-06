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
                    for (var i = 1; i <= this._routeParams.get('remain'); i++) {
                        num = num + '<span>' + i + '</span>';
                    }
                    $('#rotator').html(num);
                    //remain = new Array(this._routeParams.get('remain'));
                    /*var remain=this._routeParams.get('remain');
                    remain = new Array(this._routeParams.get('remain'));
                          $( "#spinner" ).spinner({
                        min: 1,
                        max: remain,
                        step: 1,
                        start: 1,
                        numberFormat: "C"
                      });*/
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
                            up ? digit.eq(parseInt(last_num) - 1).prependTo(cog) : digit.eq(0).appendTo(cog);
                            cog.scrollTop(base);
                            digit = cog.find('span');
                            output.text(digit.eq(2).text());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVBLDZCQUFvQixPQUFlLEVBQVMsWUFBeUI7b0JBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBRVosR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0osQ0FBQztnQkFHRixrQ0FBSSxHQUFKLFVBQUssS0FBSztvQkFDUCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRixzQ0FBUSxHQUFSO29CQUNBLElBQUksR0FBRyxHQUFDLEVBQUUsQ0FBQztvQkFDWCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ3hELEdBQUcsR0FBQyxHQUFHLEdBQUMsUUFBUSxHQUFDLENBQUMsR0FBQyxTQUFTLENBQUM7b0JBQy9CLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsc0RBQXNEO29CQUV0RDs7Ozs7Ozs7MkJBUU87b0JBRVIsQ0FBQyxDQUFD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QyxDQUFBIiwiZmlsZSI6ImhvbWUvc2VsZWN0X2Rlc2suY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuZGVjbGFyZSB2YXIgbG9jYXRpb246IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdF9kZXNrJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvaG9tZS9zZWxlY3RfZGVzay5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERlc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xucmVtYWluID0gW107XG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbmZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKTsgaSsrKSB7XG4gICAgICB0aGlzLnJlbWFpbltpXT1pKzE7XG4gICAgfVxuXHR9XG5wcml2YXRlIGRlc2tyZW1haW47XG5cbkhvbWUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHR9XG5cdFx0XHRcbiAgbmdPbkluaXQoKSB7XG4gIHZhciBudW09Jyc7XG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVtYWluJyk7IGkrKykge1xuICAgICAgbnVtPW51bSsnPHNwYW4+JytpKyc8L3NwYW4+JztcbiAgICB9XG4gICQoJyNyb3RhdG9yJykuaHRtbChudW0pO1xuICAvL3JlbWFpbiA9IG5ldyBBcnJheSh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpKTtcbiAgXG4gIC8qdmFyIHJlbWFpbj10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpO1xuICByZW1haW4gPSBuZXcgQXJyYXkodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZW1haW4nKSk7XG5cdFx0JCggXCIjc3Bpbm5lclwiICkuc3Bpbm5lcih7XG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IHJlbWFpbixcbiAgICAgIHN0ZXA6IDEsXG4gICAgICBzdGFydDogMSxcbiAgICAgIG51bWJlckZvcm1hdDogXCJDXCJcbiAgICB9KTsqL1xuXHRcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywnLmJhY2tfYm90b20nLCBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRwYXJlbnQuaGlzdG9yeS5iYWNrKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbnZhciBsYXN0X251bT10aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlbWFpbicpLFx0XHRcdFxudmFyIGdhdGUgPSAkKHdpbmRvdyk7XG52YXIgY29nID0gJCgnI3JvdGF0b3InKTtcbnZhciBkaWdpdCA9IGNvZy5maW5kKCdzcGFuJyk7XG52YXIgc2xvdCA9IGRpZ2l0LmVxKDApLmhlaWdodCgpO1xudmFyIGJhc2UgPSAxLjUqc2xvdDtcbnZhciBvdXRwdXQgPSAkKCcjcmVzdWx0Jyk7XG52YXIgdXA9Jyc7XG5cbmNvZy5mYWRlVG8oMCwwKTtcblxuXG5cdHNldFRpbWVvdXQoaW50ZXJBY3Rpb24sIDUwKTtcblxuXG5mdW5jdGlvbiBpbnRlckFjdGlvbigpIHtcblxuXHRvdXRwdXQudGV4dCgxKTtcblxuXHRjb2cuc2Nyb2xsVG9wKGJhc2UpLmZhZGVUbygwLDEpLm1vdXNld2hlZWwoZnVuY3Rpb24odHVybiwgZGVsdGEpIHtcblxuXHRcdGlmIChpc0J1c3koKSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0ZGVsdGEgPCAwID8gdXAgPSB0cnVlIDogdXAgPSBmYWxzZTtcblxuXHRcdG5ld051bWJlcigpO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblxuXHRkaWdpdC5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdHZhciB0b3VjaCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzLFxuXHRcdGJlZ2luID0gdG91Y2hbMF0ucGFnZVksIHN3aXBlO1xuXG5cdFx0ZGlnaXQub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGNvbnRhY3QgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcyxcblx0XHRcdGVuZCA9IGNvbnRhY3RbMF0ucGFnZVksXG5cdFx0XHRkaXN0YW5jZSA9IGVuZC1iZWdpbjtcblxuXHRcdFx0aWYgKGlzQnVzeSgpKSByZXR1cm47XG5cblx0XHRcdGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPiAzMCkge1xuXHRcdFx0c3dpcGUgPSB0cnVlO1xuXHRcdFx0ZGlzdGFuY2UgPiAzMCA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuYWRkKGdhdGUpLm9uZSgndG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0aWYgKHN3aXBlKSB7XG5cdFx0XHRzd2lwZSA9IGZhbHNlO1xuXHRcdFx0bmV3TnVtYmVyKCk7XG5cdFx0XHR9XG5cblx0XHRcdGRpZ2l0Lm9mZigndG91Y2htb3ZlJykuYWRkKGdhdGUpLm9mZigndG91Y2hlbmQnKTtcblx0XHR9KTtcblx0fSlcblx0Lm9uKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdGlmIChlLndoaWNoICYmIGUud2hpY2ggIT0gMSkgcmV0dXJuO1xuXG5cdFx0dmFyIGl0ZW0gPSAkKHRoaXMpLmluZGV4KCk7XG5cblx0XHRpZiAoaXRlbSA9PSAxIHx8IGl0ZW0gPT0gMykge1xuXG5cdFx0ZGlnaXQub25lKCdtb3VzZXVwIHRvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBzYW1lID0gaXRlbSA9PSAkKHRoaXMpLmluZGV4KCk7XG5cblx0XHRcdGlmIChpc0J1c3koKSB8fCAhc2FtZSkgcmV0dXJuIGNhbmNlbEl0KCk7XG5cblx0XHRcdGl0ZW0gPT0gMSA/IHVwID0gdHJ1ZSA6IHVwID0gZmFsc2U7XG5cblx0XHRcdG5ld051bWJlcigpO1xuXG5cdFx0XHRyZXR1cm4gY2FuY2VsSXQoKTtcblx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpc0J1c3koKSB7XG5cblx0cmV0dXJuIGNvZy5pcygnOmFuaW1hdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEl0KCkge1xuXG5cdGRpZ2l0Lm9mZignbW91c2V1cCB0b3VjaGVuZCcpO1xuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbmV3TnVtYmVyKCkge1xuXG5cdHZhciBhaW0gPSBiYXNlO1xuXG5cdHVwID8gYWltIC09IHNsb3QgOiBhaW0gKz0gc2xvdDtcblxuXHRjb2cuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBhaW19LCA1MDAsIGZ1bmN0aW9uKCkge1xuXG5cdFx0dXAgPyBkaWdpdC5lcShwYXJzZUludChsYXN0X251bSktMSkucHJlcGVuZFRvKGNvZykgOiBkaWdpdC5lcSgwKS5hcHBlbmRUbyhjb2cpO1xuXG5cdFx0Y29nLnNjcm9sbFRvcChiYXNlKTtcblxuXHRcdGRpZ2l0ID0gY29nLmZpbmQoJ3NwYW4nKTtcblxuXHRcdG91dHB1dC50ZXh0KGRpZ2l0LmVxKDIpLnRleHQoKSk7XG5cdH0pO1xufVxuXHRcdFx0XG4gIH1cblx0c2lnbnVwYnRuKCkge1xuXHR2YXIgcm91dD10aGlzLl9yb3V0ZXI7XG5cdFx0XHR2YXIgZGVzaz1wYXJzZUludCgkKCcjcmVzdWx0JykuaHRtbCgpKTtcblx0XHRcdGlmKGRlc2s+MCl7XG5cdFx0XHRcblx0XHRcdHZhciB1c2VySWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLmlkXCIpO1xuICBcdFx0aWYodXNlcklkIT1udWxsKXtcblx0XHRcdHZhciB1cmw9Jy4vYXBpL3VzZXJzL2RpcmVjdF9sb2NhdGlvbi8nK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci5pZFwiKSsnLycrdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsb2NhdGlvbmlkJykrJy8nK2Rlc2s7XG5cdFx0XHQkLmFqYXgoe1xuICAgICAgICAgIHVybDp1cmwsXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YTogJChcIiNsb2dpbkZvcm1cIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgYmVmb3JlU2VuZDpmdW5jdGlvbigpXG4gICAgICAgICAge1xuICAgICAgICAgICAgJChcIi50aHVtYm94M1wiKS5jc3MoJ29wYWNpdHknLCcwLjUnKS5hcHBlbmQoJzxpbWcgc3JjPVwic3JjL2ltZy9sb2FkaW5nLmdpZlwiIGJvcmRlcj1cIjBcIiBjbGFzcz1cImxvYWRpXCIgc3R5bGU9IFwibGVmdDogNDglO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDI1JTtcIiBhbHQ9XCJcIiB0aXRsZT1cIlwiIC8+JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICAgIHtcblx0XHQgICAkKFwiI2xvZ2luX3N1Ym1pdFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG5cdFx0ICB2YXIgb2JqID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0aWYob2JqLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaWRcIiwgb2JqLnVzZXIuaWQpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLm5hbWVcIiwgb2JqLnVzZXIubmFtZSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW5kdXN0cnlcIiwgb2JqLnVzZXIuaW5kdXN0cnkpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmltYWdlXCIsIG9iai51c2VyLmltYWdlKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cm91dC5uYXZpZ2F0ZShbJy9TaWduVXBDb25ncmF0cycsIHsgaWQ6IG9iai51c2VyLmlkLCBuYW1lOiBvYmoudXNlci5uYW1lLGluZHVzdHJ5Om9iai51c2VyLmluZHVzdHJ5LGltYWdlOm9iai51c2VyLmltYWdlIH1dKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihvYmouc3RhdHVzPT1cImVycm9yXCIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkKCcuZXJyb3JfdGV4dCcpLmh0bWwob2JqLm1zc2cpLnNob3coKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAkKFwiLnRodW1ib3gzXCIpLmNzcygnb3BhY2l0eScsJzEnKTtcblx0XHRcdFx0XHRcdCAkKCcubG9hZGknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydTaWdudXAnLHsgbG9jYXRpb25pZDp0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xvY2F0aW9uaWQnKSxkZXNrOmRlc2t9XSk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0YWxlcnQoJ3BsZWFzZSBzZWxlY3QgZGVzaycpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR9XHRcdFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
