"use strict";
// function resolve() {
//   console.log("success");
// }

// function reject() {
//   console.log("some error");
// }

function calculateSomeStaff(number) {
  const someTask = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number !== 0) {
        resolve(2 / number)
      } else {
        reject(Error("dividing by zero"));
      }
    }, 2000);
  });

  return someTask;
}

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// console.log("start");

// calculateSomeStaff(1)
//   .then(result => { resp = result; })
//   .catch((e) => console.log(e, "error!!!"))
//   .finally(() => console.log("finally"));

const checkResult = async () => {
  // const res = await calculateSomeStaff(0).catch(e => console.log("error"));
  // console.log(res);

  // return `response is ${res}`;
  // // try {
  //   const res = await calculateSomeStaff(0);
  //   console.log(res);

  //   return `response is ${res}`;
  // } catch(e) {
  //   console.log(e);
  // }
}

// async function checkResult() {
//   const res = await calculateSomeStaff(2);

//   console.log(res);
// }
// checkResult();
// console.log("after calculateSomeStaff");

//constants
const BASE_URL = "https://fakestoreapi.com"

//html elements
const listElement = document.querySelector(".lns-product-list");
const buttonElement = document.querySelector(".lns-button");

const saveItem = async () => {
  await axios.post(`${BASE_URL}/products`, {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  });
}

buttonElement.addEventListener("click", saveItem)

//render function
const addProducts = (item) => {
  const newListElement = document.createElement("li");
  newListElement.classList = "lns-product-list-item";
  newListElement.innerHTML = `
    <h2 class="item-title">${item.title}</h2>
    <p>${item.description}</p>
    <img src="${item.image}" alt="">
    <span>$ ${item.price}</span>
  `;

  listElement.appendChild(newListElement);
}

const getProductsByAxios = async () => {
  const resp = await axios.get(`${BASE_URL}/products`);
  const respItem = await axios.get(`${BASE_URL}/products/21`);

  console.log(respItem);

  const loadingIndicator = document.querySelector(".lns-product-list-loading");
  listElement.removeChild(loadingIndicator);
  
  resp.data.forEach(addProducts);
}

getProductsByAxios();

const getUsersData = async () => {
  console.log();
  // fetch(`${BASE_URL}/data`).then(resp => resp.json().then(e => console.log(e)));
  // const response = await fetch(`${BASE_URL}/data`)
  // const jsonData = await response.json();

  // console.log(jsonData);
}

const postUser = async (user) => {
  const response = await fetch(`${BASE_URL}/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(user)
  });

  return response;
}

// postUser({ name: "test", age: 20 });
// getUsersData();
