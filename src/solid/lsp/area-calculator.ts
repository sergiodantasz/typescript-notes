import type { Shape } from "./interfaces/shape";

export class AreaCalculator {
  calculateTotalArea(shapes: Shape[]): number {
    return shapes.reduce((total, shape) => total + shape.area, 0);
  }
}
