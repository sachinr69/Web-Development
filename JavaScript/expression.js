//==================================
//1: Assignment Operators
//================================

var num = 15
//Assign the value 15 to yhe vriable number

//* ===================================
//* 2: Arithmetic operators
//* ====================================

//? Addition (+): Adds two values or variables.

let x = 5;
let y = 10;
let sum = x + y;
console.log(sum);

//? Subtraction (-): Subtracts the right operand from the left operand.

let a = 10;
let b = 7;
let difference = a - b;
console.log(difference);

//? Multiplication (*): Multiplies two values or variables.

let p = 4;
let q = 6;
let product = p * q;
console.log(product);

//? Division (/): Divides the left operand by the right operand.

let m = 15;
let n = 3;
let quotient = m / n;
console.log(quotient);

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.

let c = 17;
let d = 5;
let remainder = c % d;
console.log(remainder);

//Ques
var res = 0.1 + 0.2;
console.log(res.toFixed(2));

//* ===================================
//* 3: String Operators
//* ====================================

//? There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

var str1 = "Hello";
var str2 = "World";
var str3 = str1 + str2;
console.log(str3);

//* ===================================
//* 4: comparison operators
//* ====================================

//? Comparison operators in JavaScript are used to compare values and return a Boolean result (true or false).

//? Equal (==): Checks if two values are equal, performing type coercion if necessary.
console.log(5 == 5);

//? Strict Equal (===):
// Checks if two values are equal without performing type coercion.
console.log(5 === "5");

//? Not Equal (!=   👉 ! =):
// Checks if two values are not equal, performing type coercion if necessary.
console.log(5 != "5");

//? Greater Than (>):
// Checks if the value on the left is greater than the value on the right.
// Example: 10 > 5 evaluates to true.
console.log(5 > 2);

//? Less Than (<):
// Checks if the value on the left is less than the value on the right.
// Example: 5 < 10 evaluates to true.
console.log(5 < 10);

//? Greater Than or Equal To (>=):
// Checks if the value on the left is greater than or equal to the value on the right.
// Example: 10 >= 10 evaluates to true.
console.log(10 <= 10);

//? Less Than or Equal To (<=):
// Checks if the value on the left is less than or equal to the value on the right.
// Example: 5 <= 10 evaluates to true.
console.log(5 >= 10);

//* ===================================
//* 5: Logical operators in JavaScript
//* ====================================

//* There are three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT).

//? Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:
var x = 5;
var y = 10;
console.log(x > 0 && y > 0);

//? Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:
var a = 15;
var b = 0;
console.log(a > 10 || b > 10);

//? Logical NOT (!):
//? Returns true if the operand is false, and false if the operand is true.
// Example:
var isOpen = false;
console.log(!isOpen);
