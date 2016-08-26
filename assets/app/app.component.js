"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var header_component_1 = require("./header.component");
var houses_component_1 = require("./houses/houses.component");
var bedrooms_component_1 = require("./bedrooms/bedrooms.component");
var error_component_1 = require("./errors/error.component");
var authentication_component_1 = require("./auth/authentication.component");
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
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map