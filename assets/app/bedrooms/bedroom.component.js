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
var BedroomComponent = (function () {
    function BedroomComponent(_bedroomService) {
        this._bedroomService = _bedroomService;
        this.editClicked = new core_1.EventEmitter();
    }
    BedroomComponent.prototype.onEdit = function () {
        this._bedroomService.editBedroom(this.bedroom);
    };
    BedroomComponent.prototype.onDelete = function () {
        this._bedroomService.deleteBedroom(this.bedroom);
    };
    __decorate([
        core_1.Input()
    ], BedroomComponent.prototype, "bedroom");
    __decorate([
        core_1.Output()
    ], BedroomComponent.prototype, "editClicked");
    BedroomComponent = __decorate([
        core_1.Component({
            selector: 'my-bedroom',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ bedroom.bedSize }} bed\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    Belongs to {{ bedroom.bedSize }} | {{ bedroom.sqFt }} sq. ft\n                </div>\n                <div class=\"config\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        })
    ], BedroomComponent);
    return BedroomComponent;
})();
exports.BedroomComponent = BedroomComponent;
//# sourceMappingURL=bedroom.component.js.map