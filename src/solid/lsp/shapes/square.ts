import type { BaseShape } from "./base";

export class Square implements BaseShape {
  constructor(private side: number) {}

  get area(): number {
    return this.side * this.side;
  }
}
