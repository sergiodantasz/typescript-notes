class Car {
  private readonly engine: Engine = new Engine();

  start(): void {
    this.engine.start();
  }

  turnOff(): void {
    this.engine.turnOff();
  }

  revUp(): void {
    this.engine.revUp();
  }

  slowDown(): void {
    this.engine.slowDown();
  }
}

class Engine {
  start(): void {
    console.log("The engine was started.");
  }

  turnOff(): void {
    console.log("The engine was turned off.");
  }

  revUp(): void {
    console.log("The engine is revving.");
  }

  slowDown(): void {
    console.log("The engine is slowing down.");
  }
}

const car = new Car();

car.start();
car.revUp();
car.slowDown();
car.turnOff();
