import type { Shape } from "../interfaces/shape";

export abstract class BaseShape implements Shape {
  abstract get area(): number;
}
