/**
 * Created by neelkrishna on 8/15/16.
 */
import { House } from "../houses/house";

export class Bedroom {
    bedSize: string;
    sqFt: string;
    houseId: string;
    bedroomId: string;

    constructor (bedSize: string, sqFt: string, houseId: string, bedroomId: string) {
        this.bedSize = bedSize;
        this.sqFt = sqFt;
        this.houseId = houseId;
        this.bedroomId = bedroomId;
    }
}