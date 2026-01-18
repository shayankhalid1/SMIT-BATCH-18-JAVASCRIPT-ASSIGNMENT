// Q1 :

// var firstInt = parseInt(prompt("Enter first integer:"));
// var secondInt = parseInt(prompt("Enter second integer:"));

// if (firstInt > secondInt) {
//     alert("The larger number is: " + firstInt);
// } else if (secondInt > firstInt) {
//     alert("The larger number is: " + secondInt);
// } else {
//     alert("Both integers are equal.");
// }


// Q2 :


// var num = +prompt("Enter a number");

// if (num > 0) {
//     alert("Number is positive");
// } else if (num < 0) {
//     alert("Number is negative");
// } else {
//     alert("Number is zero");
// }


// Q3 :


// var char = prompt("Enter a single character:").toLowerCase();
// var isVowel = (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');

// alert("Is it a vowel? " + isVowel);

// Q4 :

// var correctPassword = "abc123";
// var userPassword = prompt("Enter your password");

// if (userPassword === "") {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// Q5 :

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

// Q6 :

// var time = parseInt(prompt("Enter time in 24hr format (e.g., 1900):"));

// if (time >= 0 && time < 1200) {
//     console.log("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     console.log("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//     console.log("Good Night!");
// }