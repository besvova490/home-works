import { faker } from "@faker-js/faker";

// helpers
import generateList from "./helpers/generateList";

const generateUser = () => ({
  id: faker.number.int(),
  age: faker.number.int({ min: 18, max: 60 }),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number("+44##########"),
  payloadClass: faker.lorem.word(),
  status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
});


const generatePlaces = (_, index) => ({
  id: faker.number.int(),
  name: faker.name.fullName(),
  type: faker.helpers.arrayElement([0, 1]),
  image: `https://picsum.photos/1000/600?key=1-${index}`,
  slug: faker.lorem.slug(),
  description: faker.commerce.productDescription(),
});


// class Car {
//   #speedLimit = null; // private field

//   constructor(brand, speed, drivers, color, doorsCount, speedLimit) {
//     this.brand = brand;
//     this._speed = speed;
//     this._drivers = drivers;
//     this.color = color;
//     this.doorsCount = doorsCount;
//     this.#speedLimit = speedLimit || 60;
//   }

//   get drivers() {
//     console.log(this._drivers.join(", "));
//   }

//   set drivers(newDriver) {
//     if (!this._drivers.includes(newDriver)) {
//       this._drivers.push(newDriver);
//     }
//   }

//   get speed() {
//     console.log(`car speed is ${this._speed}`);
//   }

//   set speed(newSpeed) {
//     if (newSpeed <= this.#speedLimit) {
//       this._speed = newSpeed;
//     } else {
//       throw new Error(`Max speed if ${this.#speedLimit}`);
//     }
//   }

//   getInfo() {
//     console.log(`car brand is ${this.brand} and color is ${this.color}`);
//   }
// }

// const mayCar = new Car("BMW", 60, ["Joh"], "red", 2, 90);
// const mayCarTwo = new Car("JEEP", 180, ["Joh"], "blue", 2, "someFactory");

// mayCar.getInfo();
// mayCarTwo.getInfo();

// mayCar.drivers = "Nick";
// mayCar.drivers = "Bill";
// mayCar.drivers;

// mayCar["#factory"] = "asd";
// mayCar.factory 

// console.log(mayCar);

// mayCar.speed;
// mayCar.speed = 80;
// mayCar.speed;
// mayCar["#speedLimit"] = 200;
// mayCar.speed = 120;

{/* <table>
<thead>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
</thead>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */}

class UsersTable {
  constructor(usersList, selector, renderFunction) {
    this.usersList = usersList;
    this.parentNode = document.querySelector(selector);
    this.renderFunction = renderFunction;
  }

  sort(order) {
    this.usersList = [...this.usersList].sort((current, next) => {
      if (order === "asc") {
        return current.age - next.age;
      }

      return next.age - current.age;
    });

    this.rerenderTable();
  }

  renderTableHeader() {
    const tableHeader = document.createElement("thead");
    tableHeader.classList = "lsn-table-thead";

    const tableHeaderRow = document.createElement("tr");
    tableHeaderRow.addEventListener("click", () => this.sort("asc"));

    const headerTitles = Object.keys(this.usersList[0]);

    headerTitles.forEach(title => {
      const newHeaderCell = document.createElement("th");
      newHeaderCell.classList = "lsn-table-cell lsn-table-header-cell"

        newHeaderCell.innerHTML = title; 

      tableHeaderRow.appendChild(newHeaderCell);
    });

    tableHeader.appendChild(tableHeaderRow); 

    return tableHeader;
  }

  renderRow(userObject) {
    const tableRow = document.createElement("tr");

    Object.keys(userObject).forEach(key => {
      const tableCell = document.createElement("td");
      tableCell.classList = "lsn-table-cell"

      if(this.renderFunction) {
        tableCell.innerHTML = this.renderFunction(key, userObject[key]);
      } else {
        tableCell.innerHTML = userObject[key];
      }
      
      tableRow.appendChild(tableCell);
    });

    // Object.values(userObject).forEach(value => {
    //   const tableCell = document.createElement("td");
    //   tableCell.classList = "lsn-table-cell";
      
    //   tableCell.innerHTML = value;
    //   tableRow.appendChild(tableCell);
    // });

    return tableRow;
  }

  renderBody() {
    const tableBody = document.createElement("tbody");
    tableBody.classList = "lsn-table-tbody";

    this.usersList.forEach(user => {
      const newRow = this.renderRow(user);

      tableBody.appendChild(newRow);
    });
    
    return tableBody;
  }

  renderTable() {
    const tableHeader = this.renderTableHeader();
    const tableBody = this.renderBody();

    const tableElement = document.createElement("table");
    tableElement.appendChild(tableHeader);
    tableElement.appendChild(tableBody);

    this.parentNode.appendChild(tableElement);
  }

  rerenderTable() {
    const table = this.parentNode.querySelector("table");

    this.parentNode.removeChild(table);
    this.renderTable();

    // const table = this.parentNode.querySelector("table");
    // const tableBody = this.parentNode.querySelector("tbody");
    // const tableBodyUpdated = this.renderBody();

    // table.removeChild(tableBody);
    // table.appendChild(tableBodyUpdated);
  }
};

const renderImage  = (key, value) => {
  if (key === "image") {
    return `<img class="table-image" src=${value}/>`;
  }

  if (key === "slug") {
    return `<a href="http://localhost:3000/${value}">${value}</a>`
  }

  return value;
}

const users = generateList(10, generateUser);
const otherUsers = generateList(10, generateUser);
const places = generateList(10, generatePlaces);

export const employeeTable = new UsersTable(users, ".lsn-container");
export const otherUsersTable = new UsersTable(otherUsers, ".lsn-container-next");
export const placesTable = new UsersTable(places, ".lsn-container-places", renderImage);

// export default mayCar;
