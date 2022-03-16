const prevBtn = document.querySelectorAll(".prevBtn");
const nextBtn = document.querySelectorAll(".nextBtn");
let valueNum = document.querySelectorAll(".value_num");
let input = document.querySelector("#guests_select");

const clearBtn = document.querySelector(".clearBtn");
const acceptBtn = document.querySelector(".acceptBtn");

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
    }
  });
};

for (let i = 0; i < prevBtn.length; i++) {
  initCount(prevBtn[i], nextBtn[i], valueNum[i]);
}

// ===================================

acceptBtn.addEventListener("click", () => {
  const valueSum = Array.from(valueNum).reduce(
    (sum, value) => sum + Number(value.innerHTML),
    0
  );
  if (valueSum === 0) {
    input.value = "Выбери гостей";
  } else if (valueSum === 1) {
    input.value = valueSum + " гость";
  } else if (valueSum === 2 || valueSum === 3 || valueSum === 4) {
    input.value = valueSum + " гостя";
  } else {
    input.value = valueSum + " гостей";
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "Cколько гостей";
  valueNum.forEach((value) => (value.innerHTML = 0));
});
