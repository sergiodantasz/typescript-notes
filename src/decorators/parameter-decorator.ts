function myParam(target: any, propertyKey: string, parameterIndex: number) {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

class User {
  greet(@myParam name: string, age: number) {
    console.log(`${name} is ${age} years old`);
  }
}

const user = new User();
user.greet("sérgio", 20);
