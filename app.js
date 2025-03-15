// ================================= Chapter# 1 (ALERT) =============================

// Qno.1: Write a script to greet your website visitor using JS alert box.

// Ans: alert(Hello);

// Qno.2: Write a script to display following message on your web page:

// Ans: alert("Error! Please enter a valid a password.");

// Qno.3: Write a script to display following message on your web page: (Hint : Use line break)

// Ans: alert("Welcome to JS Land...\n Happpy Coding!");

// Qno.4: Write a script to display following messages in sequence:
// 1. Welcome to JS Land..
// 2. Happy coding!

// Ans: alert(Welcome to JS Land...)
// alert(Happy coding!)

// Qno.5: Generate the following message through browser’s developer console:

// Ans: console.log("Hello... I can run JS through my web browser's console");

// Qno.6: Make use of alerts in your new/existing HTML & CSS project.

// Ans: alert("HTML & CSS project");

// Qno.7: Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// Ans: d.

// ================================ Chapter# 2 (VARIABLES FOR STRINGS)=======================

// Qno.1: Declare a variable called username.

// Ans: var userName = "Uzain"

// Qno.2: Declare a variable called myName & assign to it a string
// that represents your Full Name.

// Ans: var myName = "Muhammad Uzain Sheikh"

// Qno.3: Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// Ans: var message = "Hello World";
// alert(message);

// Qno.4: Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// Ans: var name = "Uzain Sheikh";
// var age = "21 Year's old";
// var profession = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(profession);

// Qno.5: Write a script to display the following alert using one JS variable:

// Ans: var food = "pizza \npizz \npiz \npi \np\n";
// alert(food);

// Qno.6: Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// Ans: var email = "uzainsheikh55@gmail.com";
// alert("My email address is" + " " + email);

// Qno.7: Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// Ans: var book = "A smarter way to learn Javascript.";
// alert("I am trying to learn from the book"+ " " + book);

// Qno.8: Write a script to display this in browser through JS

// Ans: document.write("<h1>Yah! I can write HTML content through JavaScript</h1>")

// Qno.9: Store following string in a variable and show in alert and
// browser through JS

// Ans: var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(design);

// ================================== Chapter# 3 (VARIABLES FOR NUMBERS) =======================

// Qno.1: Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// Ans: var age = "I am 21 years old";
// alert(age);

// Qno.2: Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// Ans: var visitCount = localStorage.getItem("visitCount");
// if (visitCount === null) {
//     visitCount = 1;
// } else {
//     visitCount = parseInt(visitCount) + 1;
// }
// localStorage.setItem("visitCount", visitCount);
// alert("You have visited this site" + " " + visitCount + " " + "times.");

// Qno.3: Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// Ans: var birthYear = 2004;
// document.write("<p>My birth year is" + " " + birthYear + "<br>Data type of my declared variable is number" + "</p>");

// Qno.4: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// Ans: var visitorName = "John Doe";
// var productTitle = "T-Shirt";
// var quantity = 5;
// document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + "</b> <b>" + productTitle + "</b>(s) XYZ Clothing store.");

// ============================ Chapter# 4 (Variable Names: Legal and illegal) =======================

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

// ========================= Chapter# 9-11 (USER INPUT & CONDITIONAL STATEMENT) =================================

// Qno.1: Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Ans: var cityName = prompt("city");
// if (cityName == "Karachi") {
//     alert("Welcome to city of lights")
// }

// Qno.2: Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// Ans: var gender = prompt("Gender");
// if (gender == "male") {
//     alert("Good Morning Sir!")
// } else if (gender == "female"){
//     alert("Good Morning Ma'am!")
// }

// Qno.3: Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// Qno.4: Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// Ans: 

// Qno.5: Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Ans: 

/* Qno.6: Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:

Ans: */

/* Qno.7: Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.

ANs: */

/* Qno.8: Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.

Ams: */

/* Qno.9: Write a program that checks whether the given input is an
even number or an odd number.

Ans: */

// Qno.10: Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Asn: 

// Qno.11: Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// Ans: 

// ========================= Chapter# 12-13 (IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS) ====================

// Qno.1: Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var inputChar = prompt("Enter a character (number or letter):");
// var asciiCode = inputChar.charCodeAt(0);
// // Check if it's a number (0-9)
// if (asciiCode >= 48 && asciiCode <= 57) {
//     alert("You entered a number.");
// }
// // Check if it's an uppercase letter (A-Z)
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("You entered an uppercase letter.");
// }
// // Check if it's a lowercase letter (a-z)
// else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("You entered a lowercase letter.");
// }
// else {
//     alert("You entered a special character or an invalid input.");
// }

// Qno.2: Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// Ans: let number1 = parseInt(prompt("Enter first integer: "));
// let number2 = parseInt(prompt("Enter second integer: "));

// if (number1 > number2) {
//     alert(number1 + " is larger.");
// } else if (number2 > number1) {
//     alert(number2 + " is larger.");
// } else {
//     alert("Both numbers are equal.");
// }

// Qno.3: Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// Ans:

// Qno.4: Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// Ans: 

// Qno.5: Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// Ans:

// Qno.6: This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// Ans:

// Qno.7: Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// ===================== JavaScript practice =======================

// let num = parseInt(inp); // Don't change this line
// // Type your code below
// if (num == 1) {
//     console.log("T");
// } else {
//     console.log("F")
// }

// let age = parseInt(inp); // Don't change this line
// // Type your code below
// let missingYears = 120 - age;
// console.log(`${missingYears} years till 120`);
// let num = 0;
// for (let i = 3; i <= 27; i++) {
//     num = i;
//     console.log(`Hello Coddy: ${num}`);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// let number = 27;
// let power_of_two = 1;

// while (power_of_two <= number) {
//     power_of_two *= 2;
// }

// console.log(power_of_two);

// let number = 35;
// while (3.5 <= number) {
//     number /= 2;
// }
// console.log(number);

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 1) {
//         continue;
//     }
//     console.log(i);
// }

// let number = 5;
// while (number <= 100) {
//     number *= 2;
// }
// console.log(number);

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i % 3 === 0 && i % 5 === 0) {
//         break;
//     }
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 4 == 0) {
//         continue;
//     }
//     console.log(i);
// }

// let num = 1 *2 *3*4*5*6*7*8;
// console.log(num)

// let n = 8;
// let res = 1;

// for (let i = 1; i <= n; i++) {
//     res *= i
// }
// console.log(res);

// let count = 5;

// do {
//     console.log(count);
//     count -= 1;
// } while (count > 0);

// let count = 10;

// do {
//     console.log(`Counting down: ${count}`);
//     count -= 2;
// } while (count >= 0)

// let n = 12;

// for (let i = 1; i < n; i++) {
//     for (let y = 1; y < n; y++) {
//         if (i + y === n) {
//             console.log(i, y);
//         }
//     }
// };

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i * j === n) {
//             console.log(i, j);
//         }
//     }
// }


// function calculateSum () { 
//     let num = 10000;
//     let total = (num * (num + 1) / 2);
//     console.log(total);
// }

// let numExecutions = 5;
 

// for (let i = 0; i < numExecutions; i++) {
//     calculateSum();
// }


// let a = 9;
// let b = 9;

// function calculateProduct (a, b) {
//     let calculateNum = a * b;
//     console.log(calculateNum);
// }

// calculateProduct(a , b);

// let num1 = 6;
// let num2 = 6000;

// function sumRange(num1, num2) {
//     let count = 0;
//     for (let i = num1; i <= num2; i++) {
//         count += i;
//     }
//     console.log(`The sum of numbers from ${num1} to ${num2} is ${count}`);
//  }

//  sumRange(num1, num2);

// let num = 5;
// // Type your code below
// function square(n) {
//     return n * n;
// }

// let result = square(num);
// console.log(result);

let num = 5;
function sigma(n) {
    // Write code here
    for (let i = 1; i <= n; i++) {
        n += i;
    }
    return n;
}

sigma(num);
console.log("hello");