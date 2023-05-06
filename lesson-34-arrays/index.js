// const someArray = ["a", "b", "c", "d"];

// replace element
// someArray.splice(2, 0, "n", "a");
// const firstPart = someArray.slice(0, 2);
// const secondPart = someArray.slice(2);
// const newArray = [...firstPart, "n", "a", ...secondPart];

// console.log(newArray);
// const numbersArray = ["h", "e", "l", "l"];

// will mod existing
// someArray.push(...numbersArray);

// will create new array
// someArray.concat(numbersArray);
// const newArray = [...someArray, ...numbersArray];

// console.log(newArray, numbersArray, someArray);

// get element from array
// console.log(someArray[-1]);
// console.log(someArray.includes("a"));

// console.log(someArray.indexOf("ca")); return -1
// console.log(someArray.indexOf("c")); return 2
// const userNames = ["Barton", "Sierra"];

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
    name: 'Barton',
    surname: 'Mohr',
    age: 90,
    email: 'Maureen55@hotmail.com',
    isOpenToWork: false
  },
  {
    name: 'Ba123',
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
    name: 'ConBanie',
    surname: 'Legros',
    age: 86,
    email: 'Gerardo91@yahoo.com',
    isOpenToWork: true
  }
];

// function checkIfIndexExist(arrayItem) {
//   return arrayItem === "c";
// };

// console.log(someArray.findIndex(checkIfIndexExist));
// console.log(someArray.find(checkIfIndexExist));

// filter practice
// const userInput = prompt("Search user name ....");
// console.log(usersList.find(user => userInput === user.name));
const filteredUsers = usersList.filter(item => {
  // strict search
  // return userInput === item.name;

  // return item.name.includes(userInput);

  return true;
});

// console.log(filteredUsers, usersList);

// map forEach practice (only for iteration)
// usersList.forEach((item, index) => {
//   item.isChild = item.age < 18;
//   item.email = "***";
// });

// for (const item of usersList) {
//   item.isChild = item.age < 18;
// };

const updatedArray = usersList.map((item, index) => {

  return {
    name: item.name,
    surname: item.surname,
    age: item.age,
    isOpenToWork: item.isOpenToWork,
    email: "***",
    isChild: item.age < 18,
  };
});

// const updatedArray = [];
// for (const item of usersList) {
//   item.isChild = item.age < 18;
//   updatedArray.push({
    // name: item.name,
    // surname: item.surname,
    // age: item.age,
    // isOpenToWork: item.isOpenToWork,
    // email: "***",
    // isChild: item.age < 18,
//  });
// };

// console.log(updatedArray);
// console.log(usersList);
// console.log(usersList[0]);

// rest operator
// const user = {
//   name: 'Ba123',
//   surname: 'Mohr',
//   age: 90,
//   email: 'Maureen55@hotmail.com',
//   isOpenToWork: false
// };

// const { name, surname, age } = user;
// const otherObj = { ...user, email: "***" };

// console.log(user, otherObj);

// array copy
// const srcArray = [[1], [2], [3], [4]];

// simple copy
// const newArray = [...srcArray];

// deep copy
// const newArray = JSON.parse(JSON.stringify(srcArray));

// newArray[0][0] = "122"
// console.log(srcArray);

// const emptyArray = new Array(12).fill(null).map((_, index) => console.log(index));
// console.log(emptyArray);
const initialArray = [4, 5, 8, 0];

// sort
// const orderedArray = usersList.sort((currentUser, nextElement) => currentUser.age - nextElement.age);
// console.log(orderedArray);

// some
// const hasChildren = usersList.some(user => user.age > 190);
// console.log(hasChildren);

// every
// const hasChildren = usersList.every(user => user.age < 100);
// console.log(hasChildren);

// reduce
// const hasChildren = initialArray.reduce((currentUser, nextElement) => currentUser + nextElement, 0);
const hasChildren = usersList.reduce((prevValue, user) => {
  return prevValue + user.age;
}, 0);

const array = [[1], [2], [3], [4]];
// [1, 2, 3, 4];

console.log(hasChildren);
