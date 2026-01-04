function toUpperCase(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    return result.toUpperCase();
  };
}

class User {
  @toUpperCase
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}

const user = new User();
console.log(user.greet("Sérgio"));
