// export class Animal {
//   #totalYear = 0;

//   constructor(name, totalAge = 1) {
//     this.name = name;
//     this.#totalYear = totalAge;
//   }

//   speak() {
//     return `${this.name} makes a noise.`;
//   }

//   isOld() {
//     if (this.#totalYear > 10) {
//       console.log("this is old Animal");
//     }
//   }

//   addYears() {
//     this.#totalYear += 1;
//   }
// }

// export class Dog extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }

//   // speak() {
//   //   return super.speak().toUpperCase();
//   // }

//   protect() {
//     console.log("you are protected");
//   }
// }

// const someAnimal = new Animal("Cat", 9);
// const someDog = new Dog("Dog", "black");

// function check(arg) {
//   console.log(arg === null);
//   console.log(arg instanceof Array);
//   console.log(Array.isArray(arg));
// }

// check([])
// check({})
// check(null)

// someAnimal.isOld();
// someAnimal.addYears();
// someAnimal.addYears();
// someAnimal.isOld();
// // console.log(someDog);

// // console.log(someAnimal.speak());
// // someAnimal.protect(); will create an error

// console.log(someDog.speak());
// someDog.protect();


// class Utils {
//   static colorsBlackList = ["red"];

//   static toPixel(value) {
//     return `${value + 1}px`;
//   }

//   static isColorAllowed(color) {    
//     return !this.colorsBlackList.includes(color);
//   }
// }

// const obj = {
//   toPixel(value) {
//     return `${value + 1}px`;
//   },

//   isColorAllowed(color) {    
//     return !this.colorsBlackList.includes(color);
//   }
// }


// const sizeInPixel = Utils.toPixel(20);

// console.log(sizeInPixel);
// console.log(Utils.isColorAllowed("rewd"));
