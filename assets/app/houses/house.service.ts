/**
 * Created by neelkrishna on 8/15/16.
 */
import { House } from "./house";
import {Http, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class HouseService {
    houses:House[] = [];
    editClicked = new EventEmitter<House>();

    constructor(private _http:Http) {
    }

    addHouse(house: House){
        const body = JSON.stringify(house);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/house', body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let house = new House(data.address, data.sqFt, data.bedrooms ? data.bedrooms : null, null);
                return house;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getHouses(){
        return this._http.get('http://localhost:3000/house')
            .map(response => {
                const data = response.json().obj;
                let objs: any [] = [];
                for(let i = 0; i < data.length; i++){
                    let house = new House(data[i].address, data[i].sqFt, data[i].bedrooms ? data[i].bedrooms : null, data[i]._id);
                    objs.push(house);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    updateHouse(house: House){
        const body = JSON.stringify(house);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.patch('http://localhost:3000/house/' + house.houseId, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    editHouse(house: House){
        this.editClicked.emit(house);
    }

    deleteHouse(house: House){
        this.houses.splice(this.houses.indexOf(house), 1);
        return this._http.delete('http://localhost:3000/house/' + house.houseId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}