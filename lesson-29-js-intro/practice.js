const someNumber = 999;
let boolean = true;

var string = 'Hello worlds';
var stringOne = 'Hello "worlds"';
var stringTwo = "Hello world's";
var array = [1, true, "string", someNumber, someNumber, someNumber];
var object = { firstName: "Jon", lastName: "Week", first_Name: "Jon1" };

{/*
const joh = "Joh";
const zachMitchal = "zachMitchal";
*/}

// const FIRST_NAME = "a";
const firstName = "1";


// console.log(helloMessage);
// console.log(helloMessage);
// console.log(helloMessage);
// console.log(helloMessage);
// console.log(helloMessage);

// console.log(object.firstName);
// console.log(object.lastName);
// console.log(object.first_Name);

// console.log(array[0]);

// array.forEach(item => (
//   console.log(item)
// ));


// const firstName = "joh";

// console.log(firstName)
// setTimeout(() => {
//   console.log(firstName)
// }, 2000);

// let firstName = null;

// console.log(firstName);
// console.log(object.email);

// const hugeArray = new Array(100).fill(null).map((_, index) => `apple ${index}`);

// for (let index = 0; index < hugeArray.length; index++) {
//   if (hugeArray[index] === "apple 55") {
//     console.log(hugeArray[index]);

//     break;
//   }

//   console.log(index);
// }


const number = 1;
const otherNumber = 0;

const isNumberBigger = number > 0;
const isOtherNumberBigger = otherNumber > 0;



if (isNumberBigger || isOtherNumberBigger) {
  console.log("Yas");
} else {
  console.log("No");
}


const userName = prompt('Your Name', "Incognito");
alert(`You are ${userName || "Fun name"}`);
