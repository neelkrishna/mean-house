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
/**
 * Created by neelkrishna on 8/15/16.
 */
/**
 * Created by neelkrishna on 8/15/16.
 */
var core_1 = require("@angular/core");
var bedroom_component_1 = require("./bedroom.component");
var bedroom_service_1 = require("./bedroom.service");
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
        }), 
        __metadata('design:paramtypes', [bedroom_service_1.BedroomService])
    ], BedroomsListComponent);
    return BedroomsListComponent;
}());
exports.BedroomsListComponent = BedroomsListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZHJvb21zL2JlZHJvb21zLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNIOztHQUVHO0FBQ0gscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXZELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBV25EO0lBRUksK0JBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFHLENBQUM7SUFJdkQsd0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7YUFDN0IsU0FBUyxDQUNOLFVBQUEsUUFBUTtZQUNKLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsNk5BSVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNqQyxDQUFDOzs2QkFBQTtJQWdCRiw0QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksNkJBQXFCLHdCQWVqQyxDQUFBIiwiZmlsZSI6ImJlZHJvb21zL2JlZHJvb21zLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5lZWxrcmlzaG5hIG9uIDgvMTUvMTYuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBuZWVsa3Jpc2huYSBvbiA4LzE1LzE2LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJlZHJvb21Db21wb25lbnQgfSBmcm9tIFwiLi9iZWRyb29tLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQmVkcm9vbSB9IGZyb20gXCIuL2JlZHJvb21cIjtcbmltcG9ydCB7IEJlZHJvb21TZXJ2aWNlIH0gZnJvbSBcIi4vYmVkcm9vbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYmVkcm9vbS1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPG15LWJlZHJvb20gKm5nRm9yPVwibGV0IGJlZHJvb20gb2YgYmVkcm9vbXNcIiBbYmVkcm9vbV09XCJiZWRyb29tXCIgKGVkaXRDbGlja2VkKT1cImJlZHJvb20uY29udGVudCA9ICRldmVudFwiPjwvbXktYmVkcm9vbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0JlZHJvb21Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJlZHJvb21zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9iZWRyb29tU2VydmljZTogQmVkcm9vbVNlcnZpY2UpIHt9XG5cbiAgICBiZWRyb29tczogQmVkcm9vbVtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2JlZHJvb21TZXJ2aWNlLmdldEJlZHJvb21zKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgYmVkcm9vbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZHJvb21zID0gYmVkcm9vbXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JlZHJvb21TZXJ2aWNlLmJlZHJvb21zID0gYmVkcm9vbXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
