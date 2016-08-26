"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var header_component_1 = require("./header.component");
var common_1 = require("@angular/common");
var houses_component_1 = require("./houses/houses.component");
var bedrooms_component_1 = require("./bedrooms/bedrooms.component");
var error_component_1 = require("./errors/error.component");
var authentication_component_1 = require("./auth/authentication.component");
var auth_service_1 = require("./auth/auth.service");
var AppComponent = (function () {
    function AppComponent(_authService, _location, _router) {
        this._authService = _authService;
        this._location = _location;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this._authService.isLoggedIn()) {
            this._location.replaceState('/auth');
            this._router.navigate(['/auth']);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>\n        <my-error></my-error>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, error_component_1.ErrorComponent]
        }),
        router_1.Routes([
            { path: '/', component: houses_component_1.HousesComponent },
            { path: '/bedrooms', component: bedrooms_component_1.BedroomsComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, common_1.Location, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0QsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCx1QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUMzQyxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCxtQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSxnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMxRCx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQUMxRSw2QkFBNEIscUJBQXFCLENBQUMsQ0FBQTtBQWtCbEQ7SUFDSSxzQkFBb0IsWUFBeUIsRUFBVSxTQUFtQixFQUFVLE9BQWU7UUFBL0UsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFFLENBQUM7SUFFdEcsK0JBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBeEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw2S0FNVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLEVBQUUsZ0NBQWMsQ0FBQztTQUNuRSxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7WUFDakQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBQztTQUN0RCxDQUFDOztvQkFBQTtJQVVGLG1CQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxvQkFBWSxlQVN4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgSG91c2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vaG91c2VzL2hvdXNlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJlZHJvb21zQ29tcG9uZW50IH0gZnJvbSBcIi4vYmVkcm9vbXMvYmVkcm9vbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuL2Vycm9ycy9lcnJvci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG15LWVycm9yPjwvbXktZXJyb3I+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCwgRXJyb3JDb21wb25lbnRdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvJywgY29tcG9uZW50OiBIb3VzZXNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2JlZHJvb21zJywgY29tcG9uZW50OiBCZWRyb29tc0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvYXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICBpZighIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvbi5yZXBsYWNlU3RhdGUoJy9hdXRoJyk7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
