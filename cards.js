const rooms = [
  {
    img: "/images/rooms/room1.svg",
    number: 888,
    luxe: "люкс",
    price: 9990,
    rating: 5,
    review: 145,
    pets: true,
    smoking: false,
    guests: true,
    corridor: false,
    invalid: true,
    bedroom: 4,
    bed: 6,
    bathroom: 3,
    breakfast: true,
    table: true,
    chair: true,
    crib: true,
    TV: true,
    shampoo: true,
  },
  {
    img: "/images/rooms/room2.svg",
    number: 840,
    luxe: " ",
    price: 9900,
    rating: 4,
    review: 65,
    pets: false,
    smoking: true,
    guests: false,
    corridor: true,
    invalid: false,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
    table: true,
    chair: false,
    crib: false,
    TV: true,
    shampoo: true,
  },
  {
    img: "/images/rooms/room3.svg",
    number: 980,
    luxe: "люкс",
    price: 8500,
    rating: 3,
    review: 35,
    pets: true,
    smoking: false,
    guests: true,
    corridor: false,
    invalid: true,
    bedroom: 3,
    bed: 5,
    bathroom: 2,
    table: true,
    chair: true,
    crib: true,
    TV: true,
    shampoo: true,
  },
  {
    img: "/images/rooms/room4.svg",
    number: 856,
    luxe: " ",
    price: 7300,
    rating: 5,
    review: 19,
    pets: false,
    smoking: true,
    guests: false,
    corridor: true,
    invalid: false,
    bedroom: 2,
    bed: 3,
    bathroom: 1,
    table: true,
    chair: false,
    crib: true,
    TV: true,
    shampoo: false,
  },
  {
    img: "/images/rooms/room5.svg",
    number: 740,
    luxe: " ",
    price: 6000,
    rating: 4,
    review: 44,
    pets: false,
    smoking: false,
    guests: true,
    corridor: false,
    invalid: true,
    bedroom: 1,
    bed: 3,
    bathroom: 1,
    table: false,
    chair: true,
    crib: false,
    TV: true,
    shampoo: true,
  },
  {
    img: "/images/rooms/room6.svg",
    number: 982,
    luxe: " ",
    price: 5800,
    rating: 3,
    review: 56,
    pets: false,
    smoking: true,
    guests: false,
    corridor: true,
    invalid: false,
    bedroom: 1,
    bed: 1,
    bathroom: 2,
    table: false,
    chair: true,
    crib: false,
    TV: false,
    shampoo: true,
  },
  {
    img: "/images/rooms/room7.svg",
    number: 678,
    luxe: " ",
    price: 5500,
    rating: 5,
    review: 45,
    pets: false,
    smoking: false,
    guests: true,
    corridor: false,
    invalid: true,
    bedroom: 2,
    bed: 3,
    bathroom: 3,
    table: false,
    chair: true,
    crib: false,
    TV: true,
    shampoo: false,
  },
  {
    img: "/images/rooms/room8.svg",
    number: 450,
    luxe: " ",
    price: 5300,
    rating: 4,
    review: 39,
    pets: false,
    smoking: true,
    guests: false,
    corridor: true,
    invalid: false,
    bedroom: 4,
    bed: 3,
    bathroom: 1,
    table: true,
    chair: false,
    crib: true,
    TV: false,
    shampoo: true,
  },
  {
    img: "/images/rooms/room9.svg",
    number: 350,
    luxe: " ",
    price: 5000,
    rating: 3,
    review: 77,
    pets: false,
    smoking: false,
    guests: true,
    corridor: false,
    invalid: true,
    bedroom: 1,
    bed: 4,
    bathroom: 2,
    table: false,
    chair: true,
    crib: false,
    TV: false,
    shampoo: true,
  },
  {
    img: "/images/rooms/room10.svg",
    number: 666,
    luxe: " ",
    price: 5000,
    rating: 5,
    review: 25,
    pets: false,
    smoking: true,
    guests: false,
    corridor: true,
    invalid: false,
    bedroom: 2,
    bed: 3,
    bathroom: 3,
    table: true,
    chair: true,
    crib: false,
    TV: false,
    shampoo: false,
  },
  {
    img: "/images/rooms/room11.svg",
    number: 444,
    luxe: " ",
    price: 5000,
    rating: 3,
    review: 15,
    pets: false,
    smoking: false,
    guests: true,
    corridor: false,
    invalid: true,
    bedroom: 2,
    bed: 3,
    bathroom: 1,
    table: false,
    chair: false,
    crib: false,
    TV: false,
    shampoo: false,
  },
  {
    img: "/images/rooms/room12.svg",
    number: 352,
    luxe: " ",
    price: 5000,
    rating: 3,
    review: 55,
    pets: false,
    smoking: true,
    guests: false,
    corridor: true,
    invalid: false,
    bedroom: 5,
    bed: 3,
    bathroom: 3,
    table: false,
    chair: false,
    crib: false,
    TV: false,
    shampoo: false,
  },
];

const placeForItems = document.querySelector(".cards");

const renderCards = () => {
  placeForItems.innerHTML = "";
  rooms.forEach((item) => {
    placeForItems.innerHTML += `<div class="room">
        <div class="img_room_block">
          <img src="${item.img}" alt="Комната" />
        </div>
        <div class="bottom_room_block">
          <div class="price_room_block">
          <a href="##"><h3><span class="num_mark"> №</span>${
            item.number
          }</h3></a>
            <h4>${item.luxe}</h4>
            <p><span class="price_num">${item.price}₽</span> в сутки</p>
          </div>
          <div class="rating_room_block">
            <div class="stars">
              <img src="${
                item.rating >= 0
                  ? "/images/other/star.svg"
                  : "/images/other/star_border.svg"
              }" alt="Звезда" />
              <img src="${
                item.rating >= 2
                  ? "/images/other/star.svg"
                  : "/images/other/star_border.svg"
              }" alt="Звезда" />
              <img src="${
                item.rating >= 3
                  ? "/images/other/star.svg"
                  : "/images/other/star_border.svg"
              }" alt="Звезда" />
              <img src="${
                item.rating >= 4
                  ? "/images/other/star.svg"
                  : "/images/other/star_border.svg"
              }" alt="Звезда" />
              <img src="${
                item.rating >= 5
                  ? "/images/other/star.svg"
                  : "/images/other/star_border.svg"
              }" alt="Звезда" />
            </div>
            <div class="review_room">
            <a href="##"><p><span class="review_num">${
              item.review
            }</span> Отзывов</p></a>
            </div>
          </div>
        </div>
      </div>`;
  });
};
renderCards();
