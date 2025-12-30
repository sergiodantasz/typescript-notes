function createPerson(
  firstName: string,
  lastName?: string // string | undefined
): {
  firstName: string;
  lastName?: string; // string | undefined
} {
  return {
    firstName,
    lastName,
  };
}
