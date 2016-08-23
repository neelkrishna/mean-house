/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component, OnInit } from "@angular/core";

import { HouseComponent } from "./house.component";
import { House } from "./house";
import { HouseService } from "./house.service";

@Component({
    selector: 'my-house-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-house *ngFor="let house of houses" [house]="house" (editClicked)="house.content = $event"></my-house>
        </section>
    `,
    directives: [HouseComponent]
})
export class HousesListComponent implements OnInit {

    constructor(private _houseService: HouseService) {}

    houses: House[];

    ngOnInit() {
        this._houseService.getHouses()
            .subscribe(
                houses => {
                    this.houses = houses;
                    this._houseService.houses = houses;
                }
            );
    }
}