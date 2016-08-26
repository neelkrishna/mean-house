/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { AuthService } from "./auth/auth.service";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li><a [routerLink]="['auth']" >Authentication</a></li>
                    <li><a [routerLink]="['']" >Houses</a></li>
                    <li><a [routerLink]="['bedrooms']">Bedrooms</a></li>
                    <li><auth>{{ _authService.isLoggedIn() ? "Signed in!" : "Please log in..." }}</auth></li>
                </ul>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        header {
            margin-bottom: 20px;
        }

        ul {
          text-align: center;
        }

        li {
            float: none;
            display: inline-block;
        }

        .router-link-active {
            background-color: #337ab7;
            color: white;
        }
        auth {
            text-align: right;
            padding-left: 50;
            color: green;
        }
    `]
})
export class HeaderComponent {
    constructor(private _authService: AuthService){}


}