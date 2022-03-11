const header = document.querySelector("header");
header.classList.add("header");

function renderHeader() {
  header.innerHTML += `
    <div class="logo_block">
        <a href="index.html"
        ><img class="logo" src="/images/logo/Logo.svg" alt="Логотип"
        /></a>
    </div>

    <nav class="nav">
        <ul class="nav_all">
        <li class="nav_item"><a href="##">О нас</a></li>
        <li class="nav_item expand_menu">
            <a href="##"
            >Услуги
            <img
                class="arrow_down"
                src="/images/other/expand_more.svg"
                alt=""
            /></a>
        </li>
        <li class="nav_item"><a href="##">Вакансии</a></li>
        <li class="nav_item">
            <a href="##">Новости </a>
        </li>
        <li class="nav_item expand_menu">
            <a href="##"
            >Соглашения
            <img
                class="arrow_down arrow_down-2"
                src="/images/other/expand_more.svg"
                alt=""
            />
            </a>
        </li>
        </ul>
    </nav>

    <div class="entire_block">
        <div class="login">
        <a class="button button_login" href="login.html">
            <span>ВОЙТИ</span>
        </a>
        </div>
        <div class="regist">
        <a class="button button_reg" href="registration.html">
            <span>ЗАРЕГИСТРИРОВАТЬСЯ</span>
        </a>
        </div>
    </div>`;
}
renderHeader();
