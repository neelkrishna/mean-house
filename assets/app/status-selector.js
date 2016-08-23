/**
 * Created by neelkrishna on 8/19/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StatusSelector = (function () {
    function StatusSelector() {
        this.select = new core_1.EventEmitter();
        this.statuses = ["started", "completed"];
    }
    StatusSelector.prototype.ngOnInit = function () {
        this.select.emit(this.statuses[0]);
    };
    __decorate([
        core_1.Output()
    ], StatusSelector.prototype, "select");
    StatusSelector = __decorate([
        core_1.Component({
            selector: 'status-selector',
            template: "\n        <div><select><option></option></select></div>\n    "
        })
    ], StatusSelector);
    return StatusSelector;
})();
exports.StatusSelector = StatusSelector;
//# sourceMappingURL=status-selector.js.map