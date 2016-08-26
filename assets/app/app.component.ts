import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router } from "@angular/router";
import { HeaderComponent } from "./header.component";
import { Location } from "@angular/common";
import { HousesComponent } from "./houses/houses.component";
import { BedroomsComponent } from "./bedrooms/bedrooms.component";
import { ErrorComponent } from "./errors/error.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthService } from "./auth/auth.service";

@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})
@Routes([
    {path: '/', component: HousesComponent},
    {path: '/bedrooms', component: BedroomsComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {
    constructor(private _authService: AuthService, private _location: Location, private _router: Router){}

    ngOnInit(){
        if(! this._authService.isLoggedIn()){
            this._location.replaceState('/auth');
            this._router.navigate(['/auth']);
        }
    }
}