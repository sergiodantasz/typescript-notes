import type { Logger } from "../interfaces/logger";

export class FileLogger implements Logger {
  log(message: string): void {
    console.log(`[File] ${message}`);
  }
}
