//1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: `);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;
const preDecrement = --counter;
const postDecrement = counter--;

//4. Assignment operators
let x = 3;
let y = 3;
y -= 6;
x += y; //x = x+y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators: ||, &&, !
const value1 = false;
const value2 = 4 < 2;

// ||, finds the first truthy value
//따라서 무거운 연산이 들어가는 코드는 || 조건중 뒤에 넣어야함

// &&, finds the first falsy value
//따라서 무거운 연산이 들어가는 코드는 && 조건중 뒤에 넣어야함

//7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversation
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

//object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 == ellie3); //true
console.log(ellie1 === ellie3); //true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log("" == false); //ture
console.log("" === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

//8. Conditional operators: if
// if, else if, else
const name = "df";
if (name === "ellie") {
  console.log("Welcome, Ellie");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

//9.Ternary operator: ?
//condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you");
    break;
  default:
    console.log("same all");
    break;
}

//11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

//break, continue
