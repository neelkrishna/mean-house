/**
 * Created by neelkrishna on 8/15/16.
 */
/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component, OnInit } from "@angular/core";

import { BedroomComponent } from "./bedroom.component";
import { Bedroom } from "./bedroom";
import { BedroomService } from "./bedroom.service";

@Component({
    selector: 'my-bedroom-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-bedroom *ngFor="let bedroom of bedrooms" [bedroom]="bedroom" (editClicked)="bedroom.content = $event"></my-bedroom>
        </section>
    `,
    directives: [BedroomComponent]
})
export class BedroomsListComponent implements OnInit {

    constructor(private _bedroomService: BedroomService) {}

    bedrooms: Bedroom[];

    ngOnInit() {
        this._bedroomService.getBedrooms()
            .subscribe(
                bedrooms => {
                    this.bedrooms = bedrooms;
                    this._bedroomService.bedrooms = bedrooms;
                }
            );
    }
}