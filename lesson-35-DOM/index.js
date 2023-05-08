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

const input = document.querySelector(".lsn-input");
const button = document.querySelector(".lsn-button");
const buttonSelectAll = document.querySelector("#lsn-button-select-all");
const buttonDeleteAll = document.querySelector(".lsn-button-delete-all");
const usersListElement = document.querySelector(".lsn-users-list");

let userInput = null;


// create li element with provide text
const renderItem = (fullName) => {
  const newListElement = document.createElement("li");

  newListElement.className = "list"
  newListElement.innerHTML = `<b>${fullName}</b>`;

  newListElement.addEventListener("click", () => {
    newListElement.classList.toggle("dobby");
  });

  return newListElement;
}

// helpers
const selectAllFromList = (listSelector = ".lsn-users-list") => {
  return document.querySelectorAll(`${listSelector} li`);
}


// events
input.addEventListener("input", e => userInput = e.target.value);
button.addEventListener("click", () => {
  if (!userInput) {
    return;
  }

  const newListElement = renderItem(userInput);
  usersListElement.appendChild(newListElement);

  input.value = "";
});

buttonSelectAll.addEventListener("click", () => {
  const allUsers = selectAllFromList();

  // usersListElement.innerHTML = null;
  allUsers.forEach(item => {
    usersListElement.removeChild(item);
  });
});

function onDeleteClick() {
  const allUsers = selectAllFromList();

  allUsers.forEach(listItem => {
    listItem.classList.toggle("red-color");
  });
}

buttonDeleteAll.addEventListener("click", onDeleteClick);

// render users list
if (usersListElement) {
  usersList.forEach((user) => {
    const newListElement = renderItem(`${user.name} ${user.surname}`);
    usersListElement.appendChild(newListElement);    
  });
}


const itemsList = [{ isPurchase: false, price: 1 }, { isPurchase: true, price: 2 }, { isPurchase: false, price: 1 }, { isPurchase: true, price: 3 }];

const totalSum = (items) => {
  return items.filter(item => !item.isPurchase).reduce((count, item) => count + item.price, 0);
}

console.log(totalSum(itemsList));
