// const submitButton = document.querySelector(".lsn-submit-button");
const otherButton = document.querySelector(".lsn-other-button");

// const buttonContainer = document.querySelector(".lns-button-container");

// buttonContainer.onclick = () => { console.log("buttonContainer"); } 
// otherButton.onclick = () => { console.log("otherButton"); } 

// buttonContainer.addEventListener("click", () => { console.log("buttonContainer"); })

const onClick = (event) => {
  event.stopPropagation();
  event.preventDefault();


  console.log(event, event.currentTarget);
  // otherButton.removeEventListener("click", onClick);
}

otherButton.addEventListener("click", onClick);
// const formElement = document.querySelector(".lsn-form");


// formElement.onsubmit = e => {
  // e.preventDefault();

  // console.log(e.target.elements);
// };
// function onSubmitButtonClick(e) {
//   e.preventDefault();
// }

// submitButton.onclick = onSubmitButtonClick;

// const listElement = document.querySelector(".lsn-list");

// function onClick(e) {
//   console.log(e.target);
// }

// listElement.addEventListener("click", onClick, false);
// console.log();

// listElement.forEach(element => {
//   element.addEventListener("click", onClick);
// })

// lesson.addEventListener('click', function(event) {

//   if(event.target.closest('.button'));
//    showConsole();
//   }
// )

// function displayFormValues(event) {
//   event.preventDefault();

//   // console.log(this);

//   // // get all values
//   // const formData = new FormData(this);

//   // for (const item of formData) {
//   //   const [name, value] = item;
//   //   console.log(name, value);
//   // }
// }
// let email = null;
// let password = null;

// function displayFormValues(e) {
//   e.preventDefault();

//   console.log(email, password);
// }

// const emailInput = document.querySelector("input[name='email']");
// const passwordInput = document.querySelector("input[name='password1']");

// emailInput.addEventListener("input", event => {
//   email = event.target.value;
// })

// passwordInput.addEventListener("input", event => {
//   password = event.target.value;
// })

// document.querySelector(".lsn-form").addEventListener("submit", displayFormValues);
// document.querySelector(".lsn-form-second").addEventListener("submit", displayFormValues);


const resizableDiv = document.querySelector(".lns-div-resize");
let isDivFocus = false

resizableDiv.addEventListener("mousedown", () => {
  isDivFocus = true;
});

window.addEventListener("mouseup", () => {
  isDivFocus = false;
});

window.addEventListener("mousemove", (event) => {
  if (isDivFocus) {
    const newCalculatedSize = event.x / 100;
    const newDivSize = event.movementX >= 0 ? newCalculatedSize : newCalculatedSize * -1;

    // check direction and decries or incise block size
    const newDivSizeToSet = +resizableDiv.offsetWidth + newDivSize;
    resizableDiv.style.width = `${newDivSizeToSet}px`;
  }
});
