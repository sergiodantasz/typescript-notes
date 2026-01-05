import type { BaseShape } from "./base";

export class Circle implements BaseShape {
  constructor(private radius: number) {}

  get area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
