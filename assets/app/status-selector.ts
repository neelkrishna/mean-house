/**
 * Created by neelkrishna on 8/19/16.
 */

import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'status-selector',
    template: `
        <div><select><option></option></select></div>
    `
})
export class StatusSelector{
    @Output() select = new EventEmitter();
    statuses = ["started", "completed"];

    ngOnInit(){
        this.select.emit(this.statuses[0]);
    }
}