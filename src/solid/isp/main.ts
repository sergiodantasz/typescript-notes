// Interface Segregation Principle (ISP)

// A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.
// This principle emphasizes that large, general-purpose interfaces should be broken down into smaller, more specific ones.
// This way, client classes only need to know about the methods that are relevant to them.

import { Human } from "./workers/human";
import { Robot } from "./workers/robot";

function main() {
  const human = new Human();
  human.work();
  human.eat();
  human.sleep();

  const robot = new Robot();
  robot.work();
}

main();
