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

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain, numbers, $ and _. For example: $my_1stVariable</p>")
// document.write("<P>Variables must begin with a letter, $ or _. For example $name, _name or name</p>")
// document.write("<P>Variable names are case sensitive</p>")
// document.write("<P>Variable names should not be JS keywords</p>")

// ========================= Chapter# 12-13 (IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS) ====================

// Qno.1: Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// Ans: 