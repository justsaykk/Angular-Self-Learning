var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Kai Kein", "Woo");
console.log("Customer >> ".concat(myCustomer.lastName, " ").concat(myCustomer.firstName));
