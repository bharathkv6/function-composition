export const pipe =
  (...functions) =>
  initialArg =>
    functions.reduce((accumulator, fn) => fn(accumulator), initialArg);
