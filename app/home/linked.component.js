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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvbGlua2VkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFFQSx5QkFBb0IsSUFBUyxFQUFVLE9BQWUsRUFBUyxZQUF5QjtvQkFBcEUsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFFLENBQUM7Z0JBRTNGLGtDQUFRLEdBQVI7b0JBQ00sWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDN0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDakUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDekUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtvQkFDbEUsK0NBQStDO29CQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFFakQsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFHLFNBQVM7d0JBQ3BCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNoQyxDQUFDOzttQ0FBQTtnQkFnQkYsc0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDZDQWNDLENBQUEiLCJmaWxlIjoiaG9tZS9saW5rZWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciA6ICdsaW5rZWQnLFxuICB0ZW1wbGF0ZSA6IGBoaSB0ZXN0YCxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaW5rZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbmNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpe31cblxubmdPbkluaXQoKXtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci5pZFwiLCB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJykpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLm5hbWVcIiwgdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCduYW1lJykpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLmluZHVzdHJ5XCIsIHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaW5kdXN0cnknKSk7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIuaW1hZ2VcIiwgdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpbWFnZScpKVxuXHRcdFx0XHRcdFx0Ly9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5leHRsb2NcIiwgb2JqLm5leHRsb2MpO1xuXHRcdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL1NpZ251cE5leHRTdGVwJ10pO1xuXG59XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
