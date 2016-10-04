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
    var LinkedComponent;
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
            LinkedComponent = (function () {
                function LinkedComponent(http, _router, _routeParams) {
                    this.http = http;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                LinkedComponent.prototype.ngOnInit = function () {
                    localStorage.setItem("user.id", this._routeParams.get('id'));
                    localStorage.setItem("user.name", this._routeParams.get('name'));
                    localStorage.setItem("user.industry", this._routeParams.get('industry'));
                    localStorage.setItem("user.image", this._routeParams.get('image'));
                    //localStorage.setItem("nextloc", obj.nextloc);
                    $("#auth_li").html('<a routerlinkactive="active" id="logout">Logout</a>');
                    this._router.navigate(['/SignupNextStep']);
                };
                LinkedComponent = __decorate([
                    core_1.Component({
                        selector: 'linked',
                        template: "hi test",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_2.Router, router_2.RouteParams])
                ], LinkedComponent);
                return LinkedComponent;
            }());
            exports_1("LinkedComponent", LinkedComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbGlua2VkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFFQSx5QkFBb0IsSUFBUyxFQUFVLE9BQWUsRUFBUyxZQUF5QjtvQkFBcEUsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFFLENBQUM7Z0JBRTNGLGtDQUFRLEdBQVI7b0JBQ00sWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDN0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDakUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDekUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtvQkFDbEUsK0NBQStDO29CQUMvQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUVqRCxDQUFDO2dCQW5CRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRyxRQUFRO3dCQUNuQixRQUFRLEVBQUcsU0FBUzt3QkFDcEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O21DQUFBO2dCQWlCRixzQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsNkNBZUMsQ0FBQSIsImZpbGUiOiJob21lL2xpbmtlZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yIDogJ2xpbmtlZCcsXG4gIHRlbXBsYXRlIDogYGhpIHRlc3RgLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcblxuZXhwb3J0IGNsYXNzIExpbmtlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyl7fVxuXG5uZ09uSW5pdCgpe1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmlkXCIsIHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIubmFtZVwiLCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ25hbWUnKSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW5kdXN0cnlcIiwgdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpbmR1c3RyeScpKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pbWFnZVwiLCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2ltYWdlJykpXG5cdFx0XHRcdFx0XHQvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmV4dGxvY1wiLCBvYmoubmV4dGxvYyk7XG5cdFx0XHRcdFx0XHQkKFwiI2F1dGhfbGlcIikuaHRtbCgnPGEgcm91dGVybGlua2FjdGl2ZT1cImFjdGl2ZVwiIGlkPVwibG9nb3V0XCI+TG9nb3V0PC9hPicpO1xuXHRcdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL1NpZ251cE5leHRTdGVwJ10pO1xuXG59XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
