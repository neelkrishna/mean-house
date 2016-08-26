"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by neelkrishna on 8/23/16.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
var AuthenticationComponent = (function () {
    function AuthenticationComponent(_authService) {
        this._authService = _authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a [routerLink]=\"['signup']\">Signup</a></li>\n                    <li><a [routerLink]=\"['signin']\" *ngIf=\"!isLoggedIn()\">Signin</a></li>\n                    <li><a [routerLink]=\"['logout']\" *ngIf=\"isLoggedIn()\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .router-link-active {\n            color: #555;\n            cursor: default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n    "]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;
//# sourceMappingURL=authentication.component.js.map