const main = document.querySelector("main");

function renderMain() {
  main.innerHTML += `
  <div class="background_form">
  <div class="login_form">
    <form action="">
      <div class="head_login">
        <h1 class="login_text">Войти</h1>
      </div>
      <div class="inputs">
        <input
          required
          placeholder="Email"
          class="login_email"
          type="email"
        />
        <input
          required
          placeholder="Пароль"
          class="login_pass"
          type="password"
        />
      </div>
      <div class="button_login_check">
        <button class="guest-btn button-reg login-btn">Войти</button>
      </div>
    </form>
    <div class="create_login">
      <h3 class="no_acc">Нет аккаунта на Toxin?</h3>
      <a class="button button_login btn_create_login" href="registration.html">
        <span>CОЗДАТЬ</span>
      </a>
    </div>
  </div>
</div>`;
}
renderMain();
