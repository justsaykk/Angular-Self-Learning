import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(
        private theX: number,
        private theY: number,
        private _r: number
    ) {
        super(theX, theY);

    }
    public get r(): number {
        return this._r;
    }
    public set r(value: number) {
        this._r = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius= ${this.r}`        
    }
}