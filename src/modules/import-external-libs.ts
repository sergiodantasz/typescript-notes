// we installed validator and @types/validator packages
// now we can just import it

import { isEmail } from "validator";

const user = {
  name: "sérgio",
  email: "sergio@email.com",
};

console.log(
  isEmail(user.email)
    ? `${user.email} is a valid email.`
    : `${user.email} is not a valid email.`
);
