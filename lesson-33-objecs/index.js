// const userKey = prompt("enter your product");
// const userInputValue = prompt("enter your product amount");

// const bin = {};

// bin[userKey] = userInputValue;

// console.table([bin]);

// const deleteProductKey = prompt("delete product");
// delete bin[deleteProductKey];

// console.table([bin]);

// car.testKey = "test value";
// console.log(car);

// delete car.testKey;
// car[userKey] = userInputValue;
// console.log(car);

// console.log((car.relatedCar || {}).color);
// console.log(car.relatedCar?.color);

// console.log("mark" in car);
// console.log(car.hasOwnProperty("mark"));

// console.log(car.mark);
// console.log(!!car.mark1);

// const car = {
//   door: 4,
//   color: "red",
//   drive: function() {
//     console.log("woom woom");
//   },
  
//   open: () => {
//     console.log("door open");
//   },

//   stop() {
//     console.log("stop!!!")
//   }
// };

// car.drive();
// car.open();
// car.stop();

// const doggy = {
//   name: "Rox",
//   color: "brown",
//   paws: { right: 2, left: 2, },
//   toys: [],

//   sound: () => {
//     console.log('Гав-гав!');
//   },

//   giveToy (newToy) {
//     this.toys.push(newToy)
//   },

//   showToy () {
//     console.log(this.toys);
//   },

//   removeToys() {
//     this.toys = [];
//   },
// }

// console.log(JSON.stringify(doggy.toys));
// doggy.showToy();
// doggy.giveToy("ball");
// doggy.showToy();
// doggy.giveToy("next ball");
// doggy.showToy();

// doggy.removeToys();
// doggy.showToy();
// doggy.giveToy("ball");
// console.log(doggy.toys);


const dog = {
  paws: 4,
  tail: 1,
  color: "“grey”",
  toys: [],
  bark: () => {
    console.log("Woof Woof");
  },
  addToy(newToy) {
    this.toys.push(newToy);
  },
  removeToys() {
    this.toys = [];
  },

  training(command, callback) {

    this[command] = callback;
    // console.log(`This dog is ${command}ing`);
  },
};


// dog.training("sleep", () => {
//   console.log("sleeeeeppppppp")
// });

// dog.training("getBool", () => {
//   console.log("get bool")
// });

// dog.sleep();
// dog.getBool();


const product = {
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95123123123,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: 3.9,
  // get priceToDisplay() {
  //   return `$ ${this.__price.toFixed(2)}`;
  // },
  // set changePrice(newPrice) {
  //   if (+newPrice > 0) {
  //     this.__price = newPrice;
  //   }
  // },
};

// function Dog() {
//   this.paws = 4;
// }

// Object.keys({});
// Object.values({});

// function Product(title, price, description, category, image, rating) {
//   this.title = title;
//   this.price = price;
//   this.description = description;
//   this.category = category;
//   this.image = image;
//   this.rating = rating;
// }

// Product.prototype.setRate = function (newRate) {
//   if (newRate > 4) {
//     this.rating = newRate;
//   }
// }

// const newProduct = new Product("title", 12, "description", "category", "image", 12.2);
// const newProduct1 = new Product("title1", 13, "description1", "category1", "image1", 12.3);
// const newProduct2 = new Product("title1", 14, "description2", "category2", "image2", 12.4);
// const newProduct3 = new Product("title2", 15, "description3", "category4", "image4", 12.5);

// console.log({ newProduct, newProduct1, newProduct2 });
// newProduct.setRate(90);
// console.log({ newProduct, newProduct1, newProduct2 });
// console.log(product.priceToDisplay);
// product.changePrice = -11.22;
// console.log(product.priceToDisplay);



// function sayHello() {
//   console.log("Hello world!");
// }

// new sayHello;

// let testObject = { color: "red", nested: { color: "green" } };
// const otherTest = JSON.parse(JSON.stringify(testObject));

// testObject.floor = 1;
// testObject.nested.color = "red";
// console.log(otherTest);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);
const returnedTarget = { ...target, ...source };

// Expected output: Object { a: 1, b: 4, c: 5 }

target.b.c = 2;
console.log(JSON.stringify(target));
console.log(returnedTarget);
