"use strict";
[]
const messageIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
<path d="M6.33333 6.26304H19.6667H6.33333ZM6.33333 10.2103H19.6667H6.33333ZM6.33333 14.1576H11.6667H6.33333ZM16.7707 19.4206H22.3333C23.0406 19.4206 23.7189 19.1434 24.219 18.6499C24.719 18.1564 25 17.487 25 16.7891V3.63152C25 2.9336 24.719 2.26426 24.219 1.77075C23.7189 1.27725 23.0406 1 22.3333 1H3.66667C2.95942 1 2.28115 1.27725 1.78105 1.77075C1.28095 2.26426 1 2.9336 1 3.63152V16.7891C1 17.487 1.28095 18.1564 1.78105 18.6499C2.28115 19.1434 2.95942 19.4206 3.66667 19.4206H7.91733C9.25067 19.4206 10.3333 20.4877 10.3333 21.8048C10.3333 22.8679 11.6347 23.3995 12.396 22.6482L14.8853 20.1917C15.3853 19.6981 16.0635 19.4208 16.7707 19.4206V19.4206Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ANIMATION EVENTS
// const animatedDiv = document.querySelector(".lns-div");

// animatedDiv.addEventListener("animationend", (e) => {
//   console.log(e);
// });


// const logInButton = document.querySelector(".lsn-button");
// const newSpanText = document.createElement("span");
// newSpanText.innerText = "text";
// logInButton.appendChild(newSpanText);


// hide bu methods
// const hideButton = $(".lsn-button");
// const showButton = $(".lsn-button-show");
// logInButton.html(`<span>text</span>`);
// logInButton.append(`<span>text</span>`);
// logInButton.text(`<span>text</span>`);

// hideButton.on("click", () => {
//   $(".lns-div").hide();
// });

// showButton.on("click", () => {
//   $(".lns-div").show();
// });
// logInButton.on("mouseover", (e) => console.log("mouseover"));

// console.log($(".lsn-button"));

// logInButton.addEventListener("click", () => {

// });


// hide by toggle
// const toggleButton = $(".lsn-toggle-button");
// const someDiv = $(".lns-div");

// toggleButton.on("click", () => {
//   someDiv.toggleClass("hide");

//   toggleButton.text(someDiv.hasClass("hide") ? "show" : "hide");
// });

// scroll to element
// const scrollButton = document.querySelector("[data-testid='lsn-scroll-to-button']");
// const footerElement = document.querySelector(".lsn-footer");

// scrollButton.addEventListener("click", () => {
//   footerElement.scrollIntoView({ behavior: "smooth", block: "end" });
// });


// const scrollButton = $("[data-testid='lsn-scroll-to-button']");
// const header = $(".lsn-header");

// console.log();
// scrollButton.parent().after("<a href='#'>Show Tech Giants</a>")

// header.on("click", () => {
//   header.animate({
//     left: '250px',
//     opacity: '0.5',
//     height: '150px',
//     width: '150px'
//   }, 1000);
// });

// scrollButton.on("click", () => {
//   console.log($(".lsn-footer").offset());

//   $("html, body").animate({
//     scrollTop: $(".lsn-footer").offset().top
//   }, 4000);
// });

// swiper demo
const SWIPER_OPTIONS = {
  slidesPerView: 1.2,
  spaceBetween: 8,
  navigation: {
    prevEl: ".lns-swiper-prev",
    nextEl: ".lns-swiper-next"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => `<span class="${className}">${messageIcon}</span>`,
  },
  breakpoints: {
    720: {
      slidesPerView: 1.3,
      spaceBetween: 40,
    },
  },
}

// const swiper = new Swiper(".swiper", SWIPER_OPTIONS);


// const userNumber = +prompt("user number");

// null | yes | more | less
let userStatus = null;
let startNumber = 0;
let endNumber = 100;

do {
  const newValue = (endNumber + startNumber) / 2;
  // userStatus = prompt(`enter status for this number ${newValue}`);

  if (!userStatus) {
    userStatus === "yes";
  }

  if (userStatus === "yes") {
    alert(`Your number is ${Math.ceil(newValue)}`);
  } else if (userStatus === "more") {
    startNumber = newValue;
  } else if (userStatus === "less") {
    endNumber = newValue;
  }
} while (userStatus !== "yes" && userNumber)


console.log(userNumber);
