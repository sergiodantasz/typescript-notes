class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log("Can't write without a tool...");
    } else {
      this.tool.write();
    }
  }
}

abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing...`);
  }
}

class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer("Sérgio");
const pen = new Pen("BIC");
const typewriter = new Typewriter("Olympia");

writer.write();
writer.tool = pen;
writer.write();
writer.tool = typewriter;
writer.write();
