System.register(['angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'crisis-center', component: CrisisCenterComponent },
                {
                    path: 'heroes',
                    component: HeroListComponent,
                    data: {
                        title: 'Heroes List'
                    }
                },
                { path: 'hero/:id', component: HeroDetailComponent },
                { path: '**', component: PageNotFoundComponent }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFFTSxTQUFTLEVBYUYsbUJBQW1CLEVBSW5CLE9BQU87Ozs7Ozs7WUFqQmQsU0FBUyxHQUFXO2dCQUN4QixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFO2dCQUMzRDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsaUJBQWlCO29CQUM1QixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGFBQWE7cUJBQ3JCO2lCQUNGO2dCQUNELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUU7Z0JBQ3BELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUU7YUFDakQsQ0FBQztZQUVXLGlDQUFBLG1CQUFtQixHQUFVLEVBRXpDLENBQUEsQ0FBQztZQUVXLHFCQUFBLE9BQU8sR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnY3Jpc2lzLWNlbnRlcicsIGNvbXBvbmVudDogQ3Jpc2lzQ2VudGVyQ29tcG9uZW50IH0sXG4gIHtcbiAgICBwYXRoOiAnaGVyb2VzJyxcbiAgICBjb21wb25lbnQ6IEhlcm9MaXN0Q29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlOiAnSGVyb2VzIExpc3QnXG4gICAgfVxuICB9LFxuICB7IHBhdGg6ICdoZXJvLzppZCcsIGNvbXBvbmVudDogSGVyb0RldGFpbENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH1cbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzOiBhbnlbXSA9IFtcblxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
