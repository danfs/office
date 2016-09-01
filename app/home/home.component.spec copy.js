System.register(['@angular/core/testing', './home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, home_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Home Component', function () {
                testing_1.it('should be named `HomeComponent`', function () {
                    testing_1.expect(home_component_1.HomeComponent['name']).toBe('HomeComponent');
                });
                testing_1.it('should have a method called `updateMessage`', function () {
                    testing_1.expect(home_component_1.HomeComponent.prototype.updateMessage).toBeDefined();
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuc3BlYyBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFTQSxrQkFBUSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixZQUFFLENBQUMsaUNBQWlDLEVBQUU7b0JBQ3BDLGdCQUFNLENBQUMsOEJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsWUFBRSxDQUFDLDZDQUE2QyxFQUFFO29CQUNoRCxnQkFBTSxDQUFDLDhCQUFhLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM5RCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuc3BlYyBjb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICBkZXNjcmliZSxcbiAgZXhwZWN0LFxuICBpdFxufSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdIb21lIENvbXBvbmVudCcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBiZSBuYW1lZCBgSG9tZUNvbXBvbmVudGAnLCAoKSA9PiB7XG4gICAgZXhwZWN0KEhvbWVDb21wb25lbnRbJ25hbWUnXSkudG9CZSgnSG9tZUNvbXBvbmVudCcpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGhhdmUgYSBtZXRob2QgY2FsbGVkIGB1cGRhdGVNZXNzYWdlYCcsICgpID0+IHtcbiAgICBleHBlY3QoSG9tZUNvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlTWVzc2FnZSkudG9CZURlZmluZWQoKTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
