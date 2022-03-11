// const button = document.querySelector(".input_btn");

// button.addEventListener("click", () => {
//   let dateStart = document.querySelector("#first_date").value;
//   let dateEnd = document.querySelector("#second_date").value;
//   dateStart = Date.parse(dateStart);
//   dateEnd = Date.parse(dateEnd);
//   let out = document.q
//   for (let i = dateStart; i < dateEnd; i = i + 24 * 60 * 60 * 1000) {
//     console.log(new Date(i).toISOString().substring(0, 10));
//   }
// });

// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css";

// new AirDatepicker("#first_date", {
//   range: true,
//   multipleDatesSeparator: " - ",
// });

const button = document.querySelector(".choose_btn");
const field = document.querySelector("#guests_select");
const menu = document.querySelector(".expand_menu_guest");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});

field.addEventListener("click", () => {
  menu.classList.toggle("active");
});


