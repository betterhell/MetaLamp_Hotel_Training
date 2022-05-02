const sliderPrev = document.querySelectorAll(".left_slider_btn");
const sliderNext = document.querySelectorAll(".right_slider_btn");
const sliderLine = document.querySelectorAll(".img_room_block");
const dots = document.querySelectorAll(".dots_slider > span");
const images = document.querySelectorAll(".img1");

let offset = 0;
const slider = () => {
  sliderNext.forEach((nextBtn, index) => {
    nextBtn.addEventListener("click", () => {
      offset += 271;
      if (offset > 813) {
        offset = 0;
      }
      sliderLine[index].style.left = -offset + "px";
    });
  });

  sliderPrev.forEach((prevBtn, index) => {
    prevBtn.addEventListener("click", () => {
      offset -= 271;
      if (offset < 0) {
        offset = 813;
      }
      sliderLine[index].style.left = -offset + "px";
    });
  });
};

slider();
