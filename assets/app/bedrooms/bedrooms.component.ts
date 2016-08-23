/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component } from "@angular/core";

import { BedroomInputComponent } from "./bedroom-input.component";
import { BedroomsListComponent} from "./bedrooms-list.component";

@Component({
    selector: 'my-bedrooms',
    template: `
        <div class="row spacing">
            <my-bedroom-input></my-bedroom-input>
        </div>
        <div class="row spacing">
            <my-bedroom-list></my-bedroom-list>
        </div> 
    `,
    directives: [BedroomsListComponent, BedroomInputComponent]
})
export class BedroomsComponent {

}