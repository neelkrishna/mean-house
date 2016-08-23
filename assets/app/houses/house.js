/**
 * Created by neelkrishna on 8/15/16.
 */
"use strict";
var House = (function () {
    function House(address, sqFt, bedroomIds, houseId) {
        this.address = address;
        this.sqFt = sqFt;
        this.bedroomIds = bedroomIds;
        this.houseId = houseId;
    }
    return House;
}());
exports.House = House;
//# sourceMappingURL=house.js.map