const prevBtn = document.querySelectorAll(".prevBtn");
const nextBtn = document.querySelectorAll(".nextBtn");
let valueNum = document.querySelectorAll(".value_num");
let input = document.querySelector("#guests_select");
const clearBtn = document.querySelector(".clearBtn");
const acceptBtn = document.querySelector(".acceptBtn");

const nextBtn_facil = document.querySelectorAll(".nextBtn_facil");
const prevBtn_facil = document.querySelectorAll(".prevBtn_facil");
let inputAdd = document.querySelector("#facil_select");

const initCount = (minusBtn, plusBtn, value) => {
  value.innerHTML = 0;

  minusBtn.addEventListener("click", () => {
    if (value.innerHTML > 0) {
      value.innerHTML = Number(value.innerHTML) - 1;
    }
  });

  plusBtn.addEventListener("click", () => {
    if (value.innerHTML < 9) {
      value.innerHTML = Number(value.innerHTML) + 1;

      const valueBedroom = Number(valueNum[0].innerHTML);
      const valueBeds = Number(valueNum[1].innerHTML);
      const valueBathroom = Number(valueNum[2].innerHTML);

      const valueSum = valueBathroom + valueBeds + valueBathroom;

      const valueStringBedroom =
        (inputAdd.value = `${valueBedroom} ${getNounWithDeclension(
          valueBedroom,
          "спальня",
          "спальни",
          "спален"
        )}`);

      const valueStringBeds =
        (inputAdd.value = `${valueBeds} ${getNounWithDeclension(
          valueBeds,
          "кровать",
          "кровати",
          "кроватей"
        )}`);

      const valueStringBath =
        (inputAdd.value = `${valueBathroom} ${getNounWithDeclension(
          valueBathroom,
          "ванна",
          "ванн",
          "ванн"
        )}`);

      if (valueSum === 0) {
        inputAdd.value = "Выберите удобства";
      }
      if (valueBedroom > 1) {
        inputAdd.value = valueStringBedroom;
      }
      if (valueBeds > 1) {
        inputAdd.value = valueStringBeds.innerHTML;
      }
      if (valueBathroom > 1) {
        inputAdd.value = valueStringBath;
      }
      // return (inputAdd.value = `${valueStringBedroom}, ${valueStringBeds}, ${valueStringBath}`);
    }
  });
};

for (let i = 0; i < prevBtn.length; i++) {
  initCount(prevBtn[i], nextBtn[i], valueNum[i]);
}

for (let i = 0; i < prevBtn.length; i++) {
  initCount(prevBtn_facil[i], nextBtn_facil[i], valueNum[i]);
}

// ===================================

const getNounWithDeclension = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

acceptBtn.addEventListener("click", () => {
  const valueSum =
    Number(valueNum[0].innerHTML) + Number(valueNum[1].innerHTML);
  const littlesValue = Number(valueNum[2].innerHTML);
  if (valueSum === 0) {
    input.value = "Выбери гостей";
  } else {
    const littlesValueString = littlesValue
      ? `, ${littlesValue} ${getNounWithDeclension(
          littlesValue,
          "младенец",
          "младенца",
          "младенцев"
        )}`
      : "";
    input.value = `${valueSum} ${getNounWithDeclension(
      valueSum,
      "гость",
      "гостя",
      "гостей"
    )}${littlesValueString}`;
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "Cколько гостей";
  valueNum.forEach((value) => (value.innerHTML = 0));
});
