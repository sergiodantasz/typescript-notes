function getUserName(): string | null {
  return Math.random() > 0.5 ? "John" : null;
}

// returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand
const username = getUserName() ?? "Guest";
console.log(username);
