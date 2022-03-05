# Function Composition

Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result. Function compositions can be composed of any number of functions.



## compose function

```javascript
const compose = (...functions) => initialArg => functions.reduceRight((accumulator, fn) => fn(accumulator), initialArg);
```

## pipe function

```javascript
const pipe = (...functions) => initialArg => functions.reduce((accumulator, fn) => fn(accumulator), initialArg);
```