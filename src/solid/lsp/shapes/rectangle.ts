import type { BaseShape } from "./base";

export class Rectangle implements BaseShape {
  constructor(private width: number, private height: number) {}

  get area(): number {
    return this.width * this.height;
  }
}
