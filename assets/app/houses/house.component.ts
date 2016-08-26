/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { House } from "./house";
import { HouseService } from "./house.service";
import { ErrorService } from "../errors/error.service";

@Component({
    selector: 'my-house',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ house.address }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ house.sqFt }} sq. ft
                </div>
                <div class="config">
                    <a (click)="onEdit()">Edit</a>
                    <a (click)="onDelete()">Delete</a>
                </div>
            </footer>
        </article>
    `,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class HouseComponent {
    @Input() house:House;
    @Output() editClicked = new EventEmitter<string>();

    constructor (private _houseService: HouseService, private _errorService: ErrorService) {}

    onEdit() {
        this._houseService.editHouse(this.house);
    }

    onDelete() {
        this._houseService.deleteHouse(this.house)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            );
    }
}