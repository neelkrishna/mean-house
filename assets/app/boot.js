///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var house_service_1 = require("./houses/house.service");
var bedroom_service_1 = require("./bedrooms/bedroom.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [house_service_1.HouseService, bedroom_service_1.BedroomService, router_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=boot.js.map