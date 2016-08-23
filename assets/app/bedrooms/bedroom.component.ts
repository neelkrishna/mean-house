/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Bedroom } from "./bedroom";
import { BedroomService } from "./bedroom.service";
import { HouseService } from "../houses/house.service";

@Component({
    selector: 'my-bedroom',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ bedroom.bedSize }} bed
            </div>
            <footer class="panel-footer">
                <div class="author">
                    Belongs to {{ houseAddress ? houseAddress : "no house" }} | {{ bedroom.sqFt }} sq. ft
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
export class BedroomComponent {
    @Input() bedroom:Bedroom;
    @Output() editClicked = new EventEmitter<string>();
    houseAddress : string;

    constructor (private _bedroomService: BedroomService, private _houseService: HouseService) {}

    ngOnInit(){
        if(this.bedroom.houseId){
            this._houseService.getHouseAddress(this.bedroom.houseId)
                .subscribe(
                    data => this.houseAddress = data,
                    error => console.error(error)
                );
        }

    }

    onEdit() {
        this._bedroomService.editBedroom(this.bedroom);
    }

    onDelete() {
        this._bedroomService.deleteBedroom(this.bedroom)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }
}