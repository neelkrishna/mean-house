/**
 * Created by neelkrishna on 8/15/16.
 */
import { Bedroom } from "./bedroom";
import {Http, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BedroomService {
    bedrooms:Bedroom[] = [];
    editClicked = new EventEmitter<Bedroom>();

    constructor(private _http:Http) {
    }

    addBedroom(bedroom: Bedroom){
        const body = JSON.stringify(bedroom);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/bedroom', body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let bedroom = new Bedroom(data.bedSize, data.sqFt, data.houseId, null);
                return bedroom;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getBedrooms(){
        return this._http.get('http://localhost:3000/bedroom')
            .map(response => {
                const data = response.json().obj;
                let objs: any [] = [];
                for(let i = 0; i < data.length; i++){
                    let bedroom = new Bedroom(data[i].bedSize, data[i].sqFt, data[i].houseId, data[i]._id);
                    objs.push(bedroom);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    updateBedroom(bedroom: Bedroom){
        const body = JSON.stringify(bedroom);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.patch('http://localhost:3000/bedroom/' + bedroom.bedroomId, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    editBedroom(bedroom: Bedroom){
        this.editClicked.emit(bedroom);
    }

    deleteBedroom(bedroom: Bedroom){
        this.bedrooms.splice(this.bedrooms.indexOf(bedroom), 1);
        return this._http.delete('http://localhost:3000/bedroom/' + bedroom.bedroomId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}