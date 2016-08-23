/**
 * Created by neelkrishna on 8/19/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StatusSelector.prototype, "select", void 0);
    StatusSelector = __decorate([
        core_1.Component({
            selector: 'status-selector',
            template: "\n        <div><select><option></option></select></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], StatusSelector);
    return StatusSelector;
}());
exports.StatusSelector = StatusSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBZ0QsZUFBZSxDQUFDLENBQUE7QUFRaEU7SUFBQTtRQUNjLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFLeEMsQ0FBQztJQUhHLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUxEO1FBQUMsYUFBTSxFQUFFOztrREFBQTtJQVBiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLCtEQUVUO1NBQ0osQ0FBQzs7c0JBQUE7SUFRRixxQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksc0JBQWMsaUJBTzFCLENBQUEiLCJmaWxlIjoic3RhdHVzLXNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5lZWxrcmlzaG5hIG9uIDgvMTkvMTYuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3RhdHVzLXNlbGVjdG9yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PjxzZWxlY3Q+PG9wdGlvbj48L29wdGlvbj48L3NlbGVjdD48L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c1NlbGVjdG9ye1xuICAgIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgc3RhdHVzZXMgPSBbXCJzdGFydGVkXCIsIFwiY29tcGxldGVkXCJdO1xuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnN0YXR1c2VzWzBdKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
