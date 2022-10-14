class Customer {
    private _firstName: string;
    private _lastName: string;

    public get firstName(): string { return this._firstName; }
    public set firstName(value: string) { this._firstName = value; }
    public get lastName(): string { return this._lastName; }
    public set lastName(value: string) { this._lastName = value; }

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
}

// Instantiating new instance
let myCustomer = new Customer("KK", "Woo");
console.log(`First Name >> ${myCustomer.firstName}`);
console.log(`Last Name >> ${myCustomer.lastName}`);

