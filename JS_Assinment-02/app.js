// ========================= Chapter# 5 (Math Expressions) =================================

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


