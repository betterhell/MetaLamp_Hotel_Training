const inputSmoking = document.querySelector("#smoking");
const inputPets = document.querySelector("#pets");
const inputInviting = document.querySelector("#inviting");
const inputLeftPrice = document.getElementById("input-left-price");
const inputRightPrice = document.getElementById("input-right-price");
const inputCorridor = document.getElementById("corridor");
const inputInvalid = document.getElementById("invalid");
const inputBreakfast = document.getElementById("breakfast");
const inputTable = document.getElementById("table");
const inputChair = document.getElementById("chair");
const inputCrib = document.getElementById("crib");
const inputTV = document.getElementById("TV");
const inputShampoo = document.getElementById("Shampoo");

const onFilter = () => {
  let newRooms = [...rooms];
  if (inputSmoking.checked) {
    newRooms = newRooms.filter((obj) => obj.smoking);
  }
  if (inputPets.checked) {
    newRooms = newRooms.filter((obj) => obj.pets);
  }
  if (inputInviting.checked) {
    newRooms = newRooms.filter((obj) => obj.guests);
  }
  if (inputCorridor.checked) {
    newRooms = newRooms.filter((obj) => obj.corridor);
  }
  if (inputInvalid.checked) {
    newRooms = newRooms.filter((obj) => obj.invalid);
  }
  if (inputBreakfast.checked) {
    newRooms = newRooms.filter((obj) => obj.breakfast);
  }
  if (inputTable.checked) {
    newRooms = newRooms.filter((obj) => obj.table);
  }
  if (inputChair.checked) {
    newRooms = newRooms.filter((obj) => obj.chair);
  }
  if (inputCrib.checked) {
    newRooms = newRooms.filter((obj) => obj.crib);
  }
  if (inputTV.checked) {
    newRooms = newRooms.filter((obj) => obj.TV);
  }
  if (inputShampoo.checked) {
    newRooms = newRooms.filter((obj) => obj.shampoo);
  }
  const leftValue = inputLeft.value * (maxPrice / 100);
  const rightValue = inputRight.value * (maxPrice / 100);
  newRooms = newRooms.filter(
    (obj) => obj.price >= leftValue && obj.price <= rightValue
  );
  renderCards(newRooms);
};

inputSmoking.addEventListener("click", onFilter);
inputPets.addEventListener("click", onFilter);
inputInviting.addEventListener("click", onFilter);
inputLeftPrice.addEventListener("click", onFilter);
inputRightPrice.addEventListener("click", onFilter);
inputCorridor.addEventListener("click", onFilter);
inputInvalid.addEventListener("click", onFilter);
inputBreakfast.addEventListener("click", onFilter);
inputTable.addEventListener("click", onFilter);
inputChair.addEventListener("click", onFilter);
inputCrib.addEventListener("click", onFilter);
inputTV.addEventListener("click", onFilter);
inputShampoo.addEventListener("click", onFilter);
// ========================================
