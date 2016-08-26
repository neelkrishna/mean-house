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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUU3QyxzQkFBc0IsU0FBUyxDQUFDLENBQUE7QUFFaEM7SUFBQTtRQUNJLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFTLENBQUM7SUFNOUMsQ0FBQztJQUpHLGtDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLElBQU0sU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksb0JBQVksZUFPeEIsQ0FBQSIsImZpbGUiOiJlcnJvcnMvZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBuZWVsa3Jpc2huYSBvbiA4LzIzLzE2LlxuICovXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBFcnJvciB9IGZyb20gXCIuL2Vycm9yXCI7XG5cbmV4cG9ydCBjbGFzcyBFcnJvclNlcnZpY2Uge1xuICAgIGVycm9yT2NjdXJyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBuZXcgRXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9yT2NjdXJyZWQuZW1pdChlcnJvckRhdGEpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
