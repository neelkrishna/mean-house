import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { HeaderComponent } from "./header.component";

import { HousesComponent } from "./houses/houses.component";
import { BedroomsComponent } from "./bedrooms/bedrooms.component";

@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@Routes([
    {path: '/', component: HousesComponent},
    {path: '/bedrooms', component: BedroomsComponent}
])
export class AppComponent {
    
}