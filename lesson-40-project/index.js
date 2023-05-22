// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: 48.922447149618094, lng: 24.71138693838905 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "fcede327f7ddb4c9",
//   });

//   // The marker, positioned at Uluru
//   new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();

const paginationItems = [
  `<div class="lsn-game-card__navigation-item">
    <span class="lsn-game-card__navigation-item__icon">
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.33333 6.26304H19.6667H6.33333ZM6.33333 10.2103H19.6667H6.33333ZM6.33333 14.1576H11.6667H6.33333ZM16.7707 19.4206H22.3333C23.0406 19.4206 23.7189 19.1434 24.219 18.6499C24.719 18.1564 25 17.487 25 16.7891V3.63152C25 2.9336 24.719 2.26426 24.219 1.77075C23.7189 1.27725 23.0406 1 22.3333 1H3.66667C2.95942 1 2.28115 1.27725 1.78105 1.77075C1.28095 2.26426 1 2.9336 1 3.63152V16.7891C1 17.487 1.28095 18.1564 1.78105 18.6499C2.28115 19.1434 2.95942 19.4206 3.66667 19.4206H7.91733C9.25067 19.4206 10.3333 20.4877 10.3333 21.8048C10.3333 22.8679 11.6347 23.3995 12.396 22.6482L14.8853 20.1917C15.3853 19.6981 16.0635 19.4208 16.7707 19.4206V19.4206Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <span class="lsn-game-card__navigation-item__label">
      Information
    </span> 
  </div>`,
  `<div class="lsn-game-card__navigation-item">
    <span class="lsn-game-card__navigation-item__icon">
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.9899 20.0403L22.4453 5.94854C22.3998 5.51745 22.199 5.11889 21.8817 4.83008C21.5644 4.54127 21.1532 4.38275 20.7278 4.38524H17.1092C16.9013 3.1578 16.2746 2.04469 15.3398 1.24234C14.405 0.439998 13.2221 0 12 0C10.7779 0 9.59503 0.439998 8.66022 1.24234C7.72542 2.04469 7.09873 3.1578 6.89078 4.38524H3.2722C2.8468 4.38275 2.43563 4.54127 2.11833 4.83008C1.80104 5.11889 1.6002 5.51745 1.55472 5.94854L0.0100746 20.0403C-0.0160867 20.2878 0.00884007 20.538 0.0832522 20.775C0.157664 21.012 0.279915 21.2305 0.442144 21.4165C0.603832 21.6007 0.801973 21.748 1.02353 21.8486C1.24508 21.9491 1.48502 22.0007 1.72755 22H22.2724C22.515 22.0007 22.7549 21.9491 22.9765 21.8486C23.198 21.748 23.3962 21.6007 23.5579 21.4165C23.7201 21.2305 23.8423 21.012 23.9167 20.775C23.9912 20.538 24.0161 20.2878 23.9899 20.0403ZM12 1.74302C12.7661 1.74451 13.5102 2.00457 14.116 2.48259C14.7218 2.96061 15.1552 3.62965 15.3485 4.38524H8.65146C8.84478 3.62965 9.27819 2.96061 9.88399 2.48259C10.4898 2.00457 11.2339 1.74451 12 1.74302ZM1.72755 20.2385L3.2722 6.14671H6.81517V8.78892C6.81517 9.02251 6.90621 9.24653 7.06827 9.4117C7.23033 9.57687 7.45012 9.66966 7.67931 9.66966C7.90849 9.66966 8.12829 9.57687 8.29034 9.4117C8.4524 9.24653 8.54345 9.02251 8.54345 8.78892V6.14671H15.4566V8.78892C15.4566 9.02251 15.5476 9.24653 15.7097 9.4117C15.8717 9.57687 16.0915 9.66966 16.3207 9.66966C16.5499 9.66966 16.7697 9.57687 16.9317 9.4117C17.0938 9.24653 17.1848 9.02251 17.1848 8.78892V6.14671H20.7278L22.2724 20.2385H1.72755Z" fill="#FFFFFF"/>
        </svg>                
    </span>
    <span class="lsn-game-card__navigation-item__label">
      Ratings Info
    </span> 
    </div>`,
  `<div class="lsn-game-card__navigation-item">
    <span class="lsn-game-card__navigation-item__icon">
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 14.4459C14.3333 19.2865 21 19.2542 21 13.9081C21 9.6054 16.5556 6.37837 11 1C5.44444 6.37837 1 9.6054 1 13.9081C1 19.2542 7.66667 19.2865 11 14.4459Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.4112 15.3736L7.07821 21.9663C7.02411 22.0735 6.99724 22.1936 7.00022 22.315C7.0032 22.4364 7.03593 22.5549 7.09522 22.659C7.15451 22.7631 7.23834 22.8492 7.33855 22.909C7.43876 22.9687 7.55193 23.0001 7.66704 23H14.333C14.4481 23.0001 14.5612 22.9687 14.6615 22.909C14.7617 22.8492 14.8455 22.7631 14.9048 22.659C14.9641 22.5549 14.9968 22.4364 14.9998 22.315C15.0028 22.1936 14.9759 22.0735 14.9218 21.9663L11.5888 15.3736C11.5321 15.2608 11.4473 15.1664 11.3436 15.1006C11.2398 15.0348 11.1211 15 11 15C10.8789 15 10.7602 15.0348 10.6564 15.1006C10.5527 15.1664 10.4679 15.2608 10.4112 15.3736V15.3736Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
    <span class="lsn-game-card__navigation-item__label">
      where to buy
    </span> 
  </div>`,
];

new Swiper(".lns-card-slider", {
  pagination: {
    el: ".lsn-game-card__navigation-first",
    clickable: true,
    renderBullet: (index, className) => {
      return `<div class="${className}">${paginationItems[index]}</div>`;
    },
  },
});

new Swiper(".lns-card-slider-second", {
  pagination: {
    el: ".lsn-game-card__navigation-second",
    clickable: true,
    renderBullet: (index, className) => {
      return `<div class="${className}">${paginationItems[index]}</div>`;
    },
  },
  effect: "cards",
  grabCursor: true,
});
