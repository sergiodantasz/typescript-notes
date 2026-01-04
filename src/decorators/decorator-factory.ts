type Constructor = new (...args: any[]) => {};

function logger(prefix: string) {
  return function <T extends Constructor>(target: T) {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        console.log(prefix, target.name);
      }
    };
  };
}

@logger("Creating class:")
class User {
  constructor(public name: string) {}
}

const user = new User("Sérgio");
