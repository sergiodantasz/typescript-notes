// Liskov Substitution Principle (LSP)

// Let φ(x) be a property provable about objects of x of type T. Then φ(y) should be provable for objects y of type S where S is a subtype of T.
// This means that every subclass or derived class should be substitutable for their base or parent class.

import { AreaCalculator } from "./area-calculator";
import { Rectangle } from "./shapes/rectangle";
import { Square } from "./shapes/square";
import { Circle } from "./shapes/circle";

function main() {
  const calculator = new AreaCalculator();

  const shapes = [new Rectangle(5, 4), new Square(3), new Circle(2)];

  const totalArea = calculator.calculateTotalArea(shapes);
  console.log(`Total area: ${totalArea.toFixed(2)}`);
}

main();
