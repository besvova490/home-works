// function sayHello(userName) {
//   console.log(`Hi ${userName}`);
// }
// sayHello("Zach");
// sayHello("Nick");
// sayHello("joh");
// const counter = 1;
const START_NUMBER = 1;
function sum(...numbers) {
  const apple = "apple";
  let sum = START_NUMBER;

  // for (let index = 0; index < numbers.length; index++) {
  //   sum += numbers[index];
  // }
  for (const item of numbers) {
    sum += item;
  }

  return apple;
}
console.log(apple);
console.log(sum(1));
