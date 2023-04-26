// import { faker } from '@faker-js/faker';
// const { faker } = require('@faker-js/faker')
// NUMBERS

// const number = 1;
// const numberBig = 112313121231231232131231123123;
// const string = "A";
// const boolean = true;
// const sym = Symbol("foo");
// const UndefinedType = undefined;
// const nullType = null;

// const array = [];
// const object = {};

// const someNumber = 0;
// const someOtherNumber = 2.10;

// // const sum = someNumber * someOtherNUmber;
// console.log();

// STRINGS
// const hello = "Hello";
// const world = "World";

// console.log(hello + world + "!");
// console.log(`Hello ${1} ${hello} Hello ${world}! some text Hello Hello Hello`.replace("Hello", "*"));
// console.log(`Hello ${1} ${hello} Hello ${world}! some text Hello Hello Hello`[0]);

// const email = "      example@gamil.com         ";
// console.log(email.trim())


// const stopSignal = "StOp";
// console.log(stopSignal);
// console.log(stopSignal.toLowerCase());
// console.log(stopSignal.toUpperCase());


// const greeting = "Hello World!";
// console.log(greeting.length);

// BOOLEANS
// const name = "Joh";

// console.log(`Hello ${name || "Default Name"}`);


// const age = 72;

// if (age > 7 || age < 70) {
//   console.log("Hello");
// }

// if (age > 7 && age < 70) {
//   console.log("Hello");
// }

// ARRAYS
const newArray = ["Message 1", "Message 2", "......", "Message 100"];
// console.log(newArray[0]);
// newArray[2] = "Message n + 1"
// newArray[newArray.length] = `Message ${newArray.length}`;
// newArray.push(`Message ${newArray.length}`);
// newArray.pop();

// newArray.unshift("Message 0");
// newArray.shift();
// newArray.splice(2)
// console.log(newArray);

// console.log(newArray.slice(2));
// console.log(newArray);

// let variable = null;
// console.log(variable);

// variable = newArray.slice(2);
// console.log(variable, newArray);

// let number = 1;
// number = number + 1;
// number += 1;
// number++
// console.log(number);

// let newIndex = 0;
// for (let index = 0; index < 10; ++index) {
//   console.log(index);
//   // console.log(newIndex++);
// }
// console.log("loop end")

// console.log(newIndex);

//OBJECTS
// const person = {
//   name: "Joh",
//   secondName: false,
//   surname: "Smit",
//   age: 25,
//   email: "example@gami.com",
//   isOpenToWork: true,
//   lastWorkDate: new Date(),
//   carLogo: null,
//   closes: ["1", "2", "3"],
//   false: true,
// };

// const users = [
//   {},
//   {},
//   {},
//   {},
// ];

// console.log([3, 4, 1, 0]);

// const usersList = new Array(5).fill(null).map(() => ({
//   name: faker.name.firstName(),
//   surname: faker.name.lastName(),
//   age: faker.datatype.number(100),
//   email: faker.internet.email(),
//   isOpenToWork: faker.datatype.boolean(),
// }))

const usersList = [
  {
    name: 'Sierra',
    surname: 'Quigley',
    age: 14,
    email: 'Alfreda12@yahoo.com',
    isOpenToWork: false
  },
  {
    name: 'Barton',
    surname: 'Corkery',
    age: 100,
    email: 'Dewitt.Kohler71@gmail.com',
    isOpenToWork: true
  },
  {
    name: 'Demetrius',
    surname: 'Mohr',
    age: 90,
    email: 'Maureen55@hotmail.com',
    isOpenToWork: false
  },
  {
    name: 'Abby',
    surname: 'Metz',
    age: 26,
    email: 'Zelda93@yahoo.com',
    isOpenToWork: false
  },
  {
    name: 'Connie',
    surname: 'Legros',
    age: 86,
    email: 'Gerardo91@yahoo.com',
    isOpenToWork: true
  }
];

// User "name" "surname", user age is "age", "email" 
// User Sierra Quigley, user age is 14, Alfreda12@yahoo.com 

// OBJECTS ITERATION (LOOP)
// console.log('User "name" "surname", user age is "age", "email" ');
// usersList.forEach(item => {
//   const { name, surname, age, email } = item;
//   console.log(`user name is ${userName}`);
// });

// HOW TO GET LAST ELEMENT FROM ARRAY
// const lastName = usersList[usersList.length - 1];
// const lastName = usersList.slice(-1);
// const lastName = usersList.splice(-1);
// const lastName = usersList.pop();
// console.log(lastName, usersList.length);

// display user data
// console.log(`Hey my name is ${person["lastWorkDate"]} and my email is ${person.email}`);


const person = {
  name: 'Connie',
  surname: 'Legros',
  age: 86,
  email: 'Gerardo91@yahoo.com',
  isOpenToWork: true,
  car: {
    color: "red",
    name: "BMW"
  },
};

// const firstName = person.name;
// const surName = person.surname;
// const age = person.age;

// const car = { color: "red" };

// rest operator js destructuring
// console.log(car.color);
// const { color: carColor } = car;
// const carColor = car.color;
// console.log(carColor, car);

// rest operator js destructuring
const { name, surname, ...otherUserData } = person;
// const otherUserData = {
//   age: person.age,
//   email: person.email,
//   isOpenToWork: person.isOpenToWork,
//   car: person.car,
// };

// rest operator js destructuring
// const { name: carName, color } = car;
// // const carName = car.name;
// console.log(carName, color);
// console.log(name, surname, otherUserData);

const fruits = ["apple", "banana", "blueberry", "orange"];
// const apple = fruits[0];
// const banana = fruits[1];
// const blueberry = fruits[2];
// const orange = fruits[3];
// const [orange, ...otherFruits] = fruits;
const [...otherArray] = fruits;

console.log(otherArray, fruits);

