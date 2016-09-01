System.register(['angular2/core/testing', './home.component'], function(exports_1, context_1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBU0Esa0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsWUFBRSxDQUFDLGlDQUFpQyxFQUFFO29CQUNwQyxnQkFBTSxDQUFDLDhCQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxDQUFDO2dCQUVILFlBQUUsQ0FBQyw2Q0FBNkMsRUFBRTtvQkFDaEQsZ0JBQU0sQ0FBQyw4QkFBYSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDOUQsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIGRlc2NyaWJlLFxuICBleHBlY3QsXG4gIGl0XG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ0hvbWUgQ29tcG9uZW50JywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGJlIG5hbWVkIGBIb21lQ29tcG9uZW50YCcsICgpID0+IHtcbiAgICBleHBlY3QoSG9tZUNvbXBvbmVudFsnbmFtZSddKS50b0JlKCdIb21lQ29tcG9uZW50Jyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgaGF2ZSBhIG1ldGhvZCBjYWxsZWQgYHVwZGF0ZU1lc3NhZ2VgJywgKCkgPT4ge1xuICAgIGV4cGVjdChIb21lQ29tcG9uZW50LnByb3RvdHlwZS51cGRhdGVNZXNzYWdlKS50b0JlRGVmaW5lZCgpO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
