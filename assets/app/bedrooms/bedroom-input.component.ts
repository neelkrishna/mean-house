/**
 * Created by neelkrishna on 8/15/16.
 */
import { Component, OnInit } from "@angular/core";

import { Bedroom } from "./bedroom";
import { House } from "../houses/house";
import { BedroomService } from "./bedroom.service";
import { HouseService } from "../houses/house.service";
import { ErrorService } from "../errors/error.service";

@Component({
    selector: 'my-bedroom-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="bedSize">Bed Size</label>
                    <input ngControl="bedSize" type="text" class="form-control" id="content" #input [ngModel]="bedroom?.bedSize">
                </div>
                <div class="form-group">
                    <label for="sqFt">Square Footage</label>
                    <input ngControl="sqFt" type="text" class="form-control" id="sqFt" #input [ngModel]="bedroom?.sqFt">
                </div>
                <div class="form-group">
                    <label for="house">House</label>
                    <select id="houseSelect" ngModel="bedroom?.houseId" ngControl="houseId" class="form-control" >
                        <option *ngFor="let house of houseList" value="{{house.houseId}}">{{ house.address }}</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">{{ !bedroom ? "Add Bedroom" : "Edit Bedroom" }}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="bedroom">Cancel</button>
            </form>
        </section>
    `
})
export class BedroomInputComponent implements OnInit{
    bedroom:Bedroom = null;
    houseList:House[] = null;
    constructor(private _bedroomService:BedroomService, private _houseService:HouseService, private _errorService: ErrorService) {
    }

    onSubmit(form:any) {
        if(this.bedroom){
            this.bedroom.bedSize = form.bedSize;
            this.bedroom.sqFt = form.sqFt;
            this.bedroom.houseId = form.houseId;
            this._bedroomService.updateBedroom(this.bedroom)
                .subscribe(
                    data => console.log(data),
                    error => this._errorService.handleError(error)
                );
            this.bedroom = null;
        }else{
            const bedroom:Bedroom = new Bedroom(form.bedSize, form.sqFt, form.houseId, null);
            this._bedroomService.addBedroom(bedroom)
                .subscribe(
                    data => {
                        console.log(data);
                        this._bedroomService.bedrooms.push(data);
                    },
                    error => this._errorService.handleError(error)
                );
        }

    }

    onCancel(){
        this.bedroom = null;
    }

    ngOnInit(){
        this._bedroomService.editClicked.subscribe(
            bedroom => {
                this.bedroom = bedroom;
            }
        );


        this._houseService.getHouses()
            .subscribe(
                houses => {
                    this.houseList = houses;
                    this._houseService.houses.push(houses);
                }
            );

    }
}