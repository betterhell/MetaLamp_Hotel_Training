const placeForItems = document.querySelector(".cards");

const renderCards = () => {
  placeForItems.innerHTML = "";
  rooms.forEach((item) => {
    placeForItems.innerHTML += `<div class="room">
        <div class="img_room_block">
          <img src=${item.img} alt="Комната" />
        </div>
        <div class="bottom_room_block">
          <div class="price_room_block">
            <h3><span class="num_mark"> №</span>${item.number}</h3>
            <h4>${item.luxe}</h4>
            <p><span class="price_num">${item.price}₽</span> в сутки</p>
          </div>
          <div class="rating_room_block">
            <div class="stars">
              <img src="/images/other/star.svg" alt="Звезда" />
              <img src="/images/other/star.svg" alt="Звезда" />
              <img src="/images/other/star.svg" alt="Звезда" />
              <img src="/images/other/star.svg" alt="Звезда" />
              <img src="/images/other/star.svg" alt="Звезда" />
            </div>
            <div class="review_room">
              <p><span class="review_num">${item.review}</span> Отзывов</p>
            </div>
          </div>
        </div>
      </div>`;
  });
};
renderCards();
