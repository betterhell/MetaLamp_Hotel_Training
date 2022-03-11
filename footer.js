const footer = document.querySelector("footer");

function renderFooter() {
  footer.innerHTML += `
  <div class="upper_foot">
  <div class="bottom_nav">
    <div class="logo_and_descript">
      <a href="##"><img src="/images/logo/Logo.svg" alt="" /></a>
      <h2>
        Бронирование номеров в лучшем <br />
        отеле 2019 года по версии <br />
        ассоциации «Отельные взгляды»
      </h2>
    </div>
    <div class="first_col_nav">
      <nav>
        <ul class="bot_nav">
          <li class="nav_item nav_item_bot head_nav">
            <a href="##">Навигация</a>
          </li>
          <li class="nav_item nav_item_bot"><a href="##">О нас</a></li>
          <li class="nav_item nav_item_bot">
            <a href="##">Новости</a>
          </li>
          <li class="nav_item nav_item_bot">
            <a href="##">Служба поддержки</a>
          </li>
          <li class="nav_item nav_item_bot"><a href="##">Услуги</a></li>
        </ul>
      </nav>
    </div>
    <div class="second_col_nav">
      <nav>
        <ul class="bot_nav">
          <li class="nav_item nav_item_bot head_nav">
            <a href="##">О нас</a>
          </li>
          <li class="nav_item nav_item_bot">
            <a href="##">О сервисе</a>
          </li>
          <li class="nav_item nav_item_bot">
            <a href="##">Наша команда</a>
          </li>
          <li class="nav_item nav_item_bot">
            <a href="##">Вакансии</a>
          </li>
          <li class="nav_item nav_item_bot">
            <a href="##">Инвесторы</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="thirt_col_nav">
      <nav>
        <ul class="bot_nav">
          <li class="nav_item nav_item_bot head_nav">
            <a href="##">Служба поддержки</a>
          </li>
          <li class="nav_item nav_item_bot"><a href="##">О нас</a></li>
          <li class="nav_item nav_item_bot">
            <a href="##">Сообщество</a>
          </li>
          <li class="nav_item nav_item_bot">
            <a href="##">Связь с нами</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="subs_block">
      <nav>
        <ul class="bot_nav">
          <li class="nav_item nav_item_bot head_nav">
            <a href="##">О нас</a>
          </li>
        </ul>
        <p class="subs_info">
          Получайте специальные <br />
          предложения и новости сервиса
        </p>
      </nav>
      <div class="subs_field">
        <form action="post">
          <input
            required
            class="subs_input"
            placeholder="Email"
            type="email"
          />
          <button class="subs_btn">
            <img src="/images/other/arrowright.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="bottom_foot">
  <div class="rights">
    <h3>Copyright © 2018 Toxin отель. Все права защищены.</h3>
  </div>
  <div class="social">
    <a class="social_item" href="##"
      ><img src="/images/other/twitter.svg" alt=""
    /></a>
    <a class="social_item" href="##"
      ><img src="/images/other/facebook.svg" alt=""
    /></a>
    <a class="social_item" href="##"
      ><img src="/images/other/instagram.svg" alt=""
    /></a>
  </div>
</div>`;
}
renderFooter();
