/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component, OnInit } from "@angular/core";

import { House } from "./house";
import { Bedroom } from "../bedrooms/bedroom";
import { BedroomService } from "../bedrooms/bedroom.service";
import { HouseService } from "./house.service";
import { ErrorService } from "../errors/error.service";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'my-house-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="address">Address</label>
                    <input ngControl="address" type="text" class="form-control" id="content" #input [ngModel]="house?.address">
                </div>
                <div class="form-group">
                    <label for="sqFt">Square Footage</label>
                    <input ngControl="sqFt" type="text" class="form-control" id="sQft" #input [ngModel]="house?.sqFt">
                </div>
                <button type="submit" class="btn btn-primary">{{ !house ? "Add House" : "Update House" }}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="house">Cancel</button>
            </form>
        </section>
    `
})
export class HouseInputComponent implements OnInit{
    house:House = null;
    bedroomList:Bedroom[] = null;
    constructor(private _houseService:HouseService, private _bedroomService:BedroomService, private _errorService: ErrorService) {
    }

    onSubmit(form:any) {

        if(this.house){
            this.house.address = form.address;
            this.house.sqFt = form.sqFt;
            this.house.bedroomIds = form.bedrooms;
            this._houseService.updateHouse(this.house)
                .subscribe(
                    data => console.log(data),
                    error => this._errorService.handleError(error)
                );
            this.house = null;
        }else{
            const house:House = new House(form.address, form.sqFt, form.bedrooms, null);
            this._houseService.addHouse(house)
                .subscribe(
                    data => {
                        console.log(data);
                        this._houseService.houses.push(data);
                    },
                    error => this._errorService.handleError(error)
                );
        }

    }

    onCancel(){
        this.house = null;
    }

    ngOnInit(){
        this._houseService.editClicked.subscribe(
            house => {
                this.house = house;
            }
        );
    }
}