"use strict";
/**
 * Created by neelkrishna on 8/23/16.
 */
var core_1 = require("@angular/core");
var error_1 = require("./error");
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.title, error.message);
        this.errorOccurred.emit(errorData);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;
//# sourceMappingURL=error.service.js.map