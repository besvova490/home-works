// function sayHello(userName) {
//   console.log(`Hi ${userName}`);
// }
// sayHello("Zach");
// sayHello("Nick");
// sayHello("joh");
// const counter = 1;
// const START_NUMBER = 1;

// ====== multy function params =======
// function sum(...numbers) {
//   const apple = "apple";
//   let sum = START_NUMBER;

//   for (const item of numbers) {
//     sum += item;
//   }

//   return apple;
// }
// console.log(apple);
// console.log(sum(1));


// const sumOfNumber = sum(1);
// const sumOfOtherNumber = sum(1, 1);

// console.log(sumOfNumber, sumOfOtherNumber);

//
// function checkAge(userAge) {
//   if (userAge < 18) {
//     return false;
//   } else {
//     return true;
//   }
// }

// const hasUserAccess = checkAge(20);
// console.log(hasUserAccess);

// =====function scope =====

// const apple = "apple";

// function sayHello() {
//   const banana = "banana";
//   console.log(apple);
//   console.log(banana);
// }
// console.log(banana);
// sayHello();

// function askPassword() {
//   const userPassword = prompt("Your password:");

//   if (userPassword === "root") {
//     alert("Hello");
//   } else {
//     alert("User not found");
//   }
// }

// function sayHello() {
//   console.log("Hello");
// }

// someOtherFunc("Nick");
function someOtherFunc(userName) {
  const email = prompt(`Hi ${userName} text your email`);

  // someOtherFunc();
}

// someFunc("Nick", askPassword);
// someFunc("Nick", sayHello);

// ======= arrow function (function expressions)========
// const someFunc = (counter = 0) => {
//   console.log(counter);

//   if (counter < -10) {
//     console.log("end");
//   } else {
//     someFunc(counter + 1);
//   }
// };

// someFunc();
// func("Nick");
// ========= callbacks ========
// function registerUser() {
//   const email = prompt("user email");

//   alert(`Your email is ${email}`);
// }

// function loginUser() {
//   const email = prompt("user email");
//   const password = prompt("user Password")

//   alert(`Your email is ${email} and password ${password}`);
// }

// function intiUser(callback) {
//   alert("Hello");

//   callback();
// }

// login
// intiUser(loginUser);

// register
// intiUser(registerUser);

// const options = {
//   enableHighAccuracy: true,
//   timeout: 1000,
//   maximumAge: 0,
// };

// function success(...args) {
//   console.log("success", args);
// }

// function error() {
//   alert("Whyyyyyyyy(((((");
// }

// navigator.geolocation.getCurrentPosition(success, error, options);


// closure
// function makeFunc(name) {

//   function displayName() {
//     alert(name);
//   }

//   return displayName;
// };

// let helloMessage = "test"

// const myFunc = makeFunc(helloMessage);
// helloMessage = "test1"
// myFunc();
