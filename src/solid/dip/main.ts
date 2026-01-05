// Dependency Inversion Principle (DIP)

// Entities must depend on abstractions, not on concretions.
// It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

import { UserService } from "./services/user-service";
import { ConsoleLogger } from "./loggers/console-logger";
import { FileLogger } from "./loggers/file-logger";

function main() {
  const consoleService = new UserService(new ConsoleLogger());
  consoleService.createUser("John");
  consoleService.deleteUser("123");

  const fileService = new UserService(new FileLogger());
  fileService.createUser("Jane");
  fileService.deleteUser("456");
}

main();
