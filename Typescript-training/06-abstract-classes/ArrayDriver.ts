import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(3, 7, 0, 0);

// Declare an Array of Shapes
let shapes: Shape[] = [];

shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}