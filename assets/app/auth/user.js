"use strict";
/**
 * Created by neelkrishna on 8/23/16.
 */
var User = (function () {
    function User(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map