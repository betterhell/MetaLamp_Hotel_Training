const placeForItems = document.querySelector(".cards");

const renderCards = () => {
  placeForItems.innerHTML = "";
  rooms.forEach((item) => {
    placeForItems.innerHTML += `<div class="room">
        <div class="img_block_all">
          <div class="img_room_block">
            <img src="${item.img1}" alt="Комната" />
            <img src="${item.img2}" alt="Комната2" />
            <img src="${item.img3}" alt="Комната3" />
            <img src="${item.img4}" alt="Комната4" />
          </div>
          <img class="left_slider_btn" src="/images/other/expand_more_white_left.svg" alt="Комната" />
          <img class="right_slider_btn" src="/images/other/expand_more_white_right.svg" alt="Комната" />
        </div>
        <div class="dots_slider">
            <span class="active"></span>
            <span></span>
            <span></span>
            <span></span>
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
