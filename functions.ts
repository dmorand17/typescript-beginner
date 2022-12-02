function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// create a function definition to ensure you can pass two numbers and return a number
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(`I processed ${result}`);
});
