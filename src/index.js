import { compose } from "./utils/compose.js";
import { pipe } from "./utils/pipe.js";

const user = {
  name: 'Jai Hanuman',
  password: 'Ram123'
}

const getName = (user) => user.name;
const uppercase = (str) => str.toUpperCase();
const firstFour = (str) => str.substring(0, 4);

const composeResult = compose(firstFour, uppercase, getName)(user);
const pipeResult = pipe(getName, uppercase, firstFour)(user);

console.log(`Result of COMPOSE: ${composeResult}`);
console.log(`Result of PIPE: ${pipeResult}`);