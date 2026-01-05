import type { Logger } from "../interfaces/logger";

export class UserService {
  constructor(private logger: Logger) {}

  createUser(name: string): void {
    this.logger.log(`Creating user: ${name}`);
  }

  deleteUser(id: string): void {
    this.logger.log(`Deleting user: ${id}`);
  }
}
