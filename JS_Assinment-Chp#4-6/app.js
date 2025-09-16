//============= Chapter# 4 (Variable Names: Legal and illegal) ==============

// Qno.1: Declare 3 variables in one statement.

// Ans: var a = 1, var b = 2, var c = 3;

// Qno.2: Declare 5 legal & 5 illegal variable names.

// Ans: Legal variables names: 1. userName 2. _fullName 3. $lastName 4. user_age 5. user123
// Illegal variables names: 1. 123user 2. user-name 3. @name 4. var 5. full name

// Qno.3: Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// Ans: document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain, numbers, $ and _. For example: $my_1stVariable</p>")
// document.write("<P>Variables must begin with a letter, $ or _. For example $name, _name or name</p>")
// document.write("<P>Variable names are case sensitive</p>")
// document.write("<P>Variable names should not be JS keywords</p>")

// ============== Chapter# 5 (Math Expressions) =====================

/* Qno.01: Write a program that take two numbers & add them in a
new variable. Show the result in your browser.

Ans: 01.
let num1 = 5;
let num2 = 3;
const total = num1 + num2;

document.write(`<h1>Sum of ${num1} and ${num2} is ${total}</h1>`); */

/* Qno.02: Repeat task1 for subtraction, multiplication, division &
modulus.

Ans: 02.
let num1 = 5;
let num2 = 3;

const subTotal = num1 - num2;
document.write(`<h1>Subtraction of ${num1} and ${num2} is ${subTotal}</h1>`);

const diviTotal = num1 / num2;
document.write(`<h1>Division of ${num1} and ${num2} is ${diviTotal}</h1>`);

const mulTotal = num1 * num2;
document.write(`<h1>Multiplication of ${num1} and ${num2} is ${mulTotal}</h1>`);

const modTotal = num1 % num2;
document.write(`<h1>Modulus of ${num1} and ${num2} is ${modTotal}</h1>`); */

/* Qno.03: Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.

Ans: 03. let a = "??";
document.write(`<p>Value after variable declaration is: ${a}</p>`);
a = 5;
document.write(`<p>Initial value: ${a}</p>`);
a++;
document.write(`<p>Value after increment is: ${a}</p>`);
a = a + 7;
document.write(`<p>Value after addition is: ${a}</p>`);
a--;
document.write(`<p>Value after decrement is: ${a}</p>`);
a = a % 3;
document.write(`<p>The remainder is: ${a}</p>`); */

/* Qno.04: Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output:

Ans. 04: let ticketPrice = 600;
let totalTicketPrice = ticketPrice * 5;
document.write(`<p>Total cost to buy 5 tickets to a movie is ${totalTicketPrice}PKR</p>`) */

/* Qno.05: Write a script to display multiplication table of any
number in your browser. E.g

Ans. 05: let num = 5;
for (let i = 1; i <= 10; i++) {
    document.write(`<p>${num} x ${i} = ${num * i}</p>`)
} */

/* Qno.06: The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.

Conversion Formulae:

Ans. 06: let celsiusTemp = 25;
let Fahrenheit = (celsiusTemp * 9 / 5) + 32;

document.write(`<h1>${celsiusTemp}°C is ${Fahrenheit}°F</h1>`)

let FahrenheitTemp = 70;
let Celsius = (FahrenheitTemp - 32) * 5 / 9;

document.write(`<h1>${Fahrenheit}°F is ${Celsius}°C</h1>`); */

// Qno.07: Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// Ans.07: document.write(`<h1>Shopping Cart<h1/>`);

// let priceOfItem1 = prompt("Please Enter the Price Item 1");
// let priceOfItem2 = prompt("Please Enter the Price of Item 2");
// let oderQty1 = prompt("Please Enter Quantity 1");
// let oderQty2 = prompt("Please Enter Quatity 2");
// let shippingCharges = 100

// document.write(`<p>Price of Item 1 is ${priceOfItem1}<p/>`);
// document.write(`<p>Quantity of Item 1 is ${oderQty1}<p/>`);
// document.write(`<p>Price of Item 2 is ${priceOfItem2}<p/>`);
// document.write(`<p>Quantity of Item 2 is ${oderQty2}<p/>`);
// document.write(`<p>Shipping Charges ${shippingCharges}<p/>`);

// let calculatePrice = ((priceOfItem1 * oderQty1) + (priceOfItem2 * oderQty2) + shippingCharges);

// document.write(`<p>Total Cost of your Order ${calculatePrice}<p/>`);

// Qno.08: 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Ans.08: document.write(`<h1>Mark Sheet<h1/>`);

// let totalMarks = prompt("Plese Enter Total Marks");
// let obtainedMarks = prompt("Plese Enter Obtained Marks");
// let calculatePercentage = (obtainedMarks * 100) / totalMarks;

// document.write(`<p>Total Marks: ${totalMarks}<p/>`);
// document.write(`<p>Marks Obtained: ${obtainedMarks}<p/>`);
// document.write(`<p>Percentage: ${calculatePercentage}<p/>`);

// Qno.09: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Ans.09: document.write(`<h1>Currency In PKR<h1/>`);

// let dollarRate = prompt("Please Enter Dollar 1$ equal PKR is 104.80");
// let saudiRiyalRate = prompt("Please Enter Saudi Riyal 1r equal PKR is 28");

// let calculateDollar = dollarRate * 104.80;
// let calculateSaudiRiyal = saudiRiyalRate * 28;

// document.write(`<p>Total Currency in PKR: ${calculateDollar + calculateSaudiRiyal}</p>`);

// Qno.10: Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let addNumber = parseInt(prompt("Please Enter Number"));

// let calculateAddition = addNumber + 5;
// let calculateMultiplication = calculateAddition * 10;
// let calculateDividend = calculateMultiplication / 2;

// document.write(`<p>Add 5: ${calculateAddition}<p/>`);
// document.write(`<p>Multiply by 10: ${calculateMultiplication}<p/>`);
// document.write(`<p>Divide the result by 2: ${calculateDividend}<p/>`);








