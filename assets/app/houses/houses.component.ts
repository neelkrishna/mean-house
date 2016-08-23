import { Component } from "@angular/core";

import { HouseInputComponent } from "./house-input.component";
import { HousesListComponent} from "./houses-list.component";

@Component({
    selector: 'my-houses',
    template: `
        <div class="row spacing">
            <my-house-input></my-house-input>
        </div>
        <div class="row spacing">
            <my-house-list></my-house-list>
        </div> 
    `,
    directives: [HousesListComponent, HouseInputComponent]
})
export class HousesComponent {

}