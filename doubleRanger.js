const minPrice = 0;
const maxPrice = 20000;

const inputLeft = document.getElementById("input-left-price");
const inputRight = document.getElementById("input-right-price");

const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");
const priceValue = document.querySelector(".price_value");

function setPriceValue() {
  const leftValue = inputLeft.value * 200;
  const rightValue = inputRight.value * 200;
  priceValue.innerHTML = `${leftValue}₽ - ${rightValue}₽`;
}
setPriceValue();

function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  setPriceValue();
}
setLeftValue();

function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  setPriceValue();
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});
