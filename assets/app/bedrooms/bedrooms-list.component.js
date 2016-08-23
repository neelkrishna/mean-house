var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by neelkrishna on 8/15/16.
 */
/**
 * Created by neelkrishna on 8/15/16.
 */
var core_1 = require("@angular/core");
var bedroom_component_1 = require("./bedroom.component");
var BedroomsListComponent = (function () {
    function BedroomsListComponent(_bedroomService) {
        this._bedroomService = _bedroomService;
    }
    BedroomsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bedroomService.getBedrooms()
            .subscribe(function (bedrooms) {
            _this.bedrooms = bedrooms;
            _this._bedroomService.bedrooms = bedrooms;
        });
    };
    BedroomsListComponent = __decorate([
        core_1.Component({
            selector: 'my-bedroom-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <my-bedroom *ngFor=\"let bedroom of bedrooms\" [bedroom]=\"bedroom\" (editClicked)=\"bedroom.content = $event\"></my-bedroom>\n        </section>\n    ",
            directives: [bedroom_component_1.BedroomComponent]
        })
    ], BedroomsListComponent);
    return BedroomsListComponent;
})();
exports.BedroomsListComponent = BedroomsListComponent;
//# sourceMappingURL=bedrooms-list.component.js.map