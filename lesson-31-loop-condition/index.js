// const { faker } = require("@faker-js/faker");

// CONSOLE TABLE

// const usersList = [
//   {
//     name: 'Sierra',
//     surname: 'Quigley',
//     age: 14,
//     email: 'Alfreda12@yahoo.com',
//     isOpenToWork: false
//   },
//   {
//     name: 'Barton',
//     surname: 'Corkery',
//     age: 100,
//     email: 'Dewitt.Kohler71@gmail.com',
//     isOpenToWork: true
//   },
//   {
//     name: 'Demetrius',
//     surname: 'Mohr',
//     age: 90,
//     email: 'Maureen55@hotmail.com',
//     isOpenToWork: false
//   },
//   {
//     name: 'Abby',
//     surname: 'Metz',
//     age: 26,
//     email: 'Zelda93@yahoo.com',
//     isOpenToWork: false
//   },
//   {
//     name: 'Connie',
//     surname: 'Legros',
//     age: 86,
//     email: 'Gerardo91@yahoo.com',
//     isOpenToWork: true
//   }
// ];
// console.table(usersList);

// CONSOLE TIME

// console.time("Time this");

// for (var i = 0; i < 10000; i++) {
//   // Your stuff here
// }

// console.timeEnd("Time this");

// const apple = "apple";

// JavaScript has 3 types of scope:

// - Global scope
// - Block scope
// - Function scope

// {
//   const banana = "banana";
//   console.log("banana", banana);
//   console.log("in block", apple);
// }

// console.log(apple);

// // error
// console.log(banana);

// pre condition loops
// for (let index = 0; index < 0; index+=1) {
//   console.log(`for iteration ${index + 1}`);
// }

// let index = 0;
// while (index < 0) {
//   console.log(`while iteration: ${index + 1}`);

//   index+=1;
// }

// post condition
// let doWhileIndex = 0;
// do {
//   console.log(`while iteration: ${doWhileIndex + 1}`);

//   doWhileIndex++;
// } while (doWhileIndex < 0);

// const secretPassword = "00";
// let randomPassword = "11";

// while (secretPassword === randomPassword) {
//   console.log(`while iteration: ${index + 1}`);

//   index+=1;
// }

// FOR OF LOOP
// const someArray = [10, 9, 8, 7];

// for(let index = 0; index < someArray.length; index+=1) {
//   console.log(someArray[index]);
// }

// reverse
// for(let index = someArray.length - 1; index >= 0; index-=1) {
//   console.log(someArray[index]);
// }

// for(const item of someArray) {
//   console.log(item);
// }

// FOR IN
// const userNames = {};

// for (let index = 0; index < 5; index++) {
//   const firstName = faker.name.firstName();
//   const age = faker.datatype.number(100);

//   userNames[firstName] = age;
// }

// console.log(userNames);

const PERSON = {
  name: "Connie",
  surname: "Legros",
  age: 86,
  email: "Gerardo91@yahoo.com",
  isOpenToWork: true,
  car: {
    color: "red",
    name: "BMW",
  },
};

// for(const item in PERSON) {
//   console.log(`object key: ${item}; object value: ${PERSON[item]};`);
// }

// Олександр - 25
// Олена - 30
// Іван - 40
// Марія - 20

// const usersAges = { Randi: 4, Godfrey: 39, Lelia: 45, Jacey: 74, Keira: 30 };
// const usersAges = { Destany: 41, Ashleigh: 3, Ollie: 31, Felton: 40, Alana: 36 };
// for(const item in usersAges) {
//   console.log(`object key: ${item}; object value: ${usersAges[item]};`);
// }

// const usersAges = {
//   Randi: 4,
//   Godfrey: 39,
//   Lelia: 45,
//   Jacey: 74,
//   Keira: 30,
// };

// for (const item in usersAges){
//   console.log(item, usersAges[item], usersAges["item"], usersAges.item);
// }

// const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (const item of numbersList) {
//   sum = sum + item;
//   // sum += item;
// }

// console.log(sum);

// const someString = "Hello World";
// const someString = [
//   'H', 'e', 'l', 'l',
//   'o', ' ', 'W', 'o',
//   'r', 'l', 'd'
// ];

// console.log(someString.split(""));

// for(const item of someString) {
//   console.log(item);
// }

// const userData = {
//   email: "example@gmail.com",
//   password: "someSecretPassword",
// };

// const PASSWORD = "someSecraetPassword";
// const EMAIL = "example@gmaail.com";

// if (EMAIL === userData.email) {
//   if (PASSWORD === userData.password) {
//     console.log("Login");
//   } else {
//     console.log("Invalid password");
//   }
// } else {
//   console.log("user not found");
// }

// if (EMAIL === userData.email && PASSWORD === userData.password) {
//   console.log("Login");
// } else {
//   console.log("user not found");
// }

// if (EMAIL !== userData.email) {
//   console.log("user not found");
// } else if (PASSWORD !== userData.password) {
//   console.log("Invalid password");
// } else if (PASSWORD === userData.password) {
//   console.log("Login");
// }

// const checkWorld = testNumber === "Hello" ||
// testNumber === "apple" ||
// testNumber === "0" ||
// testNumber === "1000";

// if (!isNaN(testNumber)) {
//   const formattedNumber = +testNumber;
  
//   if (formattedNumber > 10 && formattedNumber < 99) {
//     console.log("inside if", formattedNumber + 10);
//   } else {
//     console.log("Invalid number");
//   }
// } else if (testNumber === "Hello") {
//   console.log("Don't use this");
// } else if (testNumber === "apple") {
//   console.log("Don't use this apple");
// } else {
//   console.log(`${testNumber} is not a number (NaN)`);
// }


// const someNumber = 0;

// if (someNumber === 0) {
//   console.log("Is zero");
// } else {
//   console.log("Is nor zero");
// }

// const someNumber = 0;

// someNumber === 0
//   ? console.log("Is zero")
//   : console.log("Is nor zero")

// const email = prompt("User email is");
// const adminEmail = "admin@gmail.com";

// email === adminEmail
//   ? console.warn("hello admin")
//   : console.log(`hello user ${email}`)

// const email = "supporasdt@gmail.com";
// let userRole = "";

// if (email === "simple@gmail.com") {
// } else if (email === "admin@gmail.com") {
// } else if (email === "support@gmail.com") {
// }

// switch(email) {
//   case "simple@gmail.com":
//     userRole = "user";
//     break;
//   case "admin@gmail.com":
//     userRole = "admin";
//     break;
//   case "support@gmail.com":
//     userRole = "support";
//     break;
//   default:
//     break;
// }

// console.log(userRole);

// switch (true) {
//   case !!(1 < 2):

// }
// const mark = +prompt(“Enter the mark from 1 to 5”);
// if(mark === 1) {
//     console.log(“Invalid grade”);
// } else if (mark === 2) {
//     console.log(“Failed”);
// } else if (mark === 3) {
//     console.log(“FUnsatisfactory”);
// }  else if (mark === 4) {
//     console.log(“Good”);
// } else if (mark === 5) {
//     console.log(“Excellent”);
// } else {
//   console.log(“Error”);
// }

// const testString = "Hello";
// let reversedWord = "";

// for(let index = testString.length - 1; index >= 0; index--) {
//   console.log(`letter ${testString[index]}`);
//   reversedWord += testString[index];
//   console.log(reversedWord);
// }

// const testString = "Hello";
// const reversedString = testString.split("").reverse().join("");
// console.log(testString === reversedString ? console.log() : console.log())

// const userInput = prompt("10 number");
// console.log(userInput.split(" "));

// // const days = ["Mon", "", "", "", ""];
// const weekend = false;
// let index = 0;

// do {

// } while (weekend);

// const days = ["m", "t", "w", "th", "f", "s", "s"];
// let week = true;

// // for(let i = 0; i < days.length; i++){
// //   if (confirm(days[i])) {
// //     break
// //   }
// // };

// let dayIndex = 0;

// do {
//   week = confirm(days[dayIndex]);

//   if (dayIndex < days.length - 1) {
//     ++dayIndex;
//   } else {
//     dayIndex = 0;
//   }
// } while (week);

// console.log('Все');


const userName = prompt("Name");
console.log(userName);
