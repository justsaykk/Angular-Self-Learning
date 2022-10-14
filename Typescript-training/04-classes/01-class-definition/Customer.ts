class Customer {
    _firstName: string;
    _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }    
}

let myCustomer = new Customer("Kai Kein", "Woo");

console.log(`Customer >> ${myCustomer._lastName} ${myCustomer._firstName}`);
