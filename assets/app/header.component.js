"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by neelkrishna on 8/15/16.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header class=\"row\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-pills\">\n                    <li><a [routerLink]=\"['auth']\" >Authentication</a></li>\n                    <li><a [routerLink]=\"['']\" >Houses</a></li>\n                    <li><a [routerLink]=\"['bedrooms']\">Bedrooms</a></li>\n                    <li><auth>{{ _authService.isLoggedIn() ? \"Signed in!\" : \"Please log in...\" }}</auth></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        header {\n            margin-bottom: 20px;\n        }\n\n        ul {\n          text-align: center;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n        }\n\n        .router-link-active {\n            background-color: #337ab7;\n            color: white;\n        }\n        auth {\n            text-align: right;\n            padding-left: 50;\n            color: green;\n        }\n    "]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map