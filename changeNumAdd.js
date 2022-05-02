let inputAdd = document.querySelector("#facil_select");
const valueItem = document.querySelectorAll(".value_num");
const nextBtn_facil = document.querySelectorAll(".nextBtn_facil");
const prevBtn_facil = document.querySelectorAll(".prevBtn_facil");
const bedroomsMenu = document.querySelector(".bedrooms_menu");

const initCountAdd = (minusBtn, plusBtn, valueAdd) => {
  valueAdd.innerHTML = 0;

  minusBtn.addEventListener("click", () => {
    const valueSum =
      Number(valueItem[0].innerHTML) + Number(valueItem[1].innerHTML);
    if (valueAdd.innerHTML > 0) {
      const exitValue = (valueAdd.innerHTML = Number(valueAdd.innerHTML) - 1);
      inputAdd.value = exitValue + ` удобств`;
      const valueSum =
        Number(valueItem[0].innerHTML) + Number(valueItem[1].innerHTML);
    }
  });

  plusBtn.addEventListener("click", () => {
    const valueSum =
      Number(valueItem[0].innerHTML) + Number(valueItem[1].innerHTML);
    if (valueAdd.innerHTML < 5) {
      const exitValue = (value.innerHTML = Number(valueAdd.innerHTML) + 1);
      inputAdd.value = exitValue + ` удобств`;
    }
  });
};

for (let i = 0; i < prevBtn_facil.length; i++) {
  initCountAdd(prevBtn_facil[i], nextBtn_facil[i], valueItem[i]);
}
