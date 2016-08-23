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
var bedroom_1 = require("./bedroom");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var BedroomService = (function () {
    function BedroomService(_http) {
        this._http = _http;
        this.bedrooms = [];
        this.editClicked = new core_1.EventEmitter();
    }
    BedroomService.prototype.addBedroom = function (bedroom) {
        var body = JSON.stringify(bedroom);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/bedroom', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var bedroom = new bedroom_1.Bedroom(data.bedSize, data.sqFt, data.houseId, null);
            return bedroom;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    BedroomService.prototype.getBedrooms = function () {
        return this._http.get('http://localhost:3000/bedroom')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var bedroom = new bedroom_1.Bedroom(data[i].bedSize, data[i].sqFt, data[i].houseId, data[i]._id);
                objs.push(bedroom);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    BedroomService.prototype.updateBedroom = function (bedroom) {
        var body = JSON.stringify(bedroom);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.patch('http://localhost:3000/bedroom/' + bedroom.bedroomId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    BedroomService.prototype.editBedroom = function (bedroom) {
        this.editClicked.emit(bedroom);
    };
    BedroomService.prototype.deleteBedroom = function (bedroom) {
        this.bedrooms.splice(this.bedrooms.indexOf(bedroom), 1);
        return this._http.delete('http://localhost:3000/bedroom/' + bedroom.bedroomId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    BedroomService = __decorate([
        core_1.Injectable()
    ], BedroomService);
    return BedroomService;
}());
exports.BedroomService = BedroomService;
//# sourceMappingURL=bedroom.service.js.map