import type { Workable } from "../interfaces/workable";

export class Robot implements Workable {
  work(): void {
    console.log("Robot is working");
  }
}
