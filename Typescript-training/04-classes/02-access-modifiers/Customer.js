var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () { return this._firstName; },
        set: function (value) { this._firstName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () { return this._lastName; },
        set: function (value) { this._lastName = value; },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Instantiating new instance
var myCustomer = new Customer("KK", "Woo");
console.log("First Name >> ".concat(myCustomer.firstName));
console.log("Last Name >> ".concat(myCustomer.lastName));
