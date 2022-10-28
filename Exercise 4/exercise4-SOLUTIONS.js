//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // returns 13

//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
curriedSum1(30)(1) // 31


//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
add5(12) // 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const addOne = (num) => num + 1;
const addFive = (num) => num + 5;
compose(addOne, addFive)(10) // 16

//What are the two elements of a pure function?
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.