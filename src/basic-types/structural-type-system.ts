type ValidateUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const validateUser: ValidateUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: "sérgio", password: "123" };
const sentUser = { username: "sérgio", password: "123", permissions: "" };
// typescript doesn't care about the identity, only about the content (i.e. the content of User type)
const isLoggedIn = validateUser(dbUser, sentUser);
