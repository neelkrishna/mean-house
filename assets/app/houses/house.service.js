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
var house_1 = require("./house");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var HouseService = (function () {
    function HouseService(_http) {
        this._http = _http;
        this.houses = [];
        this.editClicked = new core_1.EventEmitter();
    }
    HouseService.prototype.addHouse = function (house) {
        var body = JSON.stringify(house);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/house', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var house = new house_1.House(data.address, data.sqFt, data.bedrooms ? data.bedrooms : null, null);
            return house;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    HouseService.prototype.getHouses = function () {
        return this._http.get('http://localhost:3000/house')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var house = new house_1.House(data[i].address, data[i].sqFt, data[i].bedrooms ? data[i].bedrooms : null, data[i]._id);
                objs.push(house);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    HouseService.prototype.updateHouse = function (house) {
        var body = JSON.stringify(house);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.patch('http://localhost:3000/house/' + house.houseId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    HouseService.prototype.editHouse = function (house) {
        this.editClicked.emit(house);
    };
    HouseService.prototype.deleteHouse = function (house) {
        this.houses.splice(this.houses.indexOf(house), 1);
        return this._http.delete('http://localhost:3000/house/' + house.houseId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    HouseService = __decorate([
        core_1.Injectable()
    ], HouseService);
    return HouseService;
}());
exports.HouseService = HouseService;
//# sourceMappingURL=house.service.js.map