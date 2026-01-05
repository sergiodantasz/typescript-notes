import type { Workable } from "../interfaces/workable";
import type { Eatable } from "../interfaces/eatable";
import type { Sleepable } from "../interfaces/sleepable";

export class Human implements Workable, Eatable, Sleepable {
  work(): void {
    console.log("Human is working");
  }

  eat(): void {
    console.log("Human is eating");
  }

  sleep(): void {
    console.log("Human is sleeping");
  }
}
