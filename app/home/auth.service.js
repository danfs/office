System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService() {
                    this.lock = new Auth0Lock('nuRmiCvjODqWtOCIX8wMnjrxkMjCTXOa', 'ric2toxic.auth0.com');
                }
                AuthService.prototype.login = function () {
                    this.lock.show(function (error, profile, id_token) {
                        if (error) {
                            console.log(error);
                        }
                        // We get a profile object for the user from Auth0
                        localStorage.setItem('profile', JSON.stringify(profile));
                        // We also get the user's JWT
                        localStorage.setItem('id_token', id_token);
                    });
                };
                AuthService.prototype.logout = function () {
                    // To log out, we just need to remove
                    // the user's profile and token
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7b0JBRUMsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBb0JqRixDQUFDO2dCQWxCQSwyQkFBSyxHQUFMO29CQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxRQUFnQjt3QkFDOUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixDQUFDO3dCQUNELGtEQUFrRDt3QkFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCw2QkFBNkI7d0JBQzdCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM3QyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDRCQUFNLEdBQU47b0JBQ0UscUNBQXFDO29CQUNyQywrQkFBK0I7b0JBQy9CLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBdEJGO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXVCYixrQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQscUNBc0JDLENBQUEiLCJmaWxlIjoiaG9tZS9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vLyBXZSB3YW50IHRvIGF2b2lkIGFueSAnbmFtZSBub3QgZm91bmQnXG4vLyB3YXJuaW5ncyBmcm9tIFR5cGVTY3JpcHRcbmRlY2xhcmUgdmFyIEF1dGgwTG9jazogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gbG9jayA9IG5ldyBBdXRoMExvY2soJ251Um1pQ3ZqT0RxV3RPQ0lYOHdNbmpyeGtNakNUWE9hJywgJ3JpYzJ0b3hpYy5hdXRoMC5jb20nKTtcblxuIGxvZ2luKCkge1xuICAgdGhpcy5sb2NrLnNob3coKGVycm9yOiBzdHJpbmcsIHByb2ZpbGU6IE9iamVjdCwgaWRfdG9rZW46IHN0cmluZykgPT4ge1xuICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgIH1cbiAgICAgLy8gV2UgZ2V0IGEgcHJvZmlsZSBvYmplY3QgZm9yIHRoZSB1c2VyIGZyb20gQXV0aDBcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbGUnLCBKU09OLnN0cmluZ2lmeShwcm9maWxlKSk7XG4gICAgIC8vIFdlIGFsc28gZ2V0IHRoZSB1c2VyJ3MgSldUXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIGlkX3Rva2VuKTtcbiAgIH0pO1xuIH1cblxuIGxvZ291dCgpIHtcbiAgIC8vIFRvIGxvZyBvdXQsIHdlIGp1c3QgbmVlZCB0byByZW1vdmVcbiAgIC8vIHRoZSB1c2VyJ3MgcHJvZmlsZSBhbmQgdG9rZW5cbiAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XG4gICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
