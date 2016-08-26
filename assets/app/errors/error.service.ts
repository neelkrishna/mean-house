/**
 * Created by neelkrishna on 8/23/16.
 */
import { EventEmitter } from "@angular/core";

import { Error } from "./error";

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.title, error.message);
        this.errorOccurred.emit(errorData);
    }
}