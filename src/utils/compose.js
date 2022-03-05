export const compose =
  (...functions) =>
  initialArg =>
    functions.reduceRight((accumulator, fn) => fn(accumulator), initialArg);
