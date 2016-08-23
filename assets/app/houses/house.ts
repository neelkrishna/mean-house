/**
 * Created by neelkrishna on 8/15/16.
 */

export class House {
    address: string;
    sqFt: string;
    bedroomIds: string[];
    houseId: string;

    constructor (address: string, sqFt: string, bedroomIds?: string[], houseId?: string) {
        this.address = address;
        this.sqFt = sqFt;
        this.bedroomIds = bedroomIds;
        this.houseId = houseId;
    }
}