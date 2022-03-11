const main = document.querySelector("main");

function renderMain() {
  main.innerHTML += `
  <div class="background_form">
        <div class="reg_form">
          <form action="">
            <div class="head_login">
              <h1 class="login_text">Регистрация аккаунта</h1>
            </div>
            <div class="inputs">
              <input
                required
                placeholder="Имя"
                class="reg_first_name"
                type="text"
              />
              <input
                required
                placeholder="Фамилия"
                class="reg_second_name"
                type="text"
              />
            </div>
            <div class="male_female">
              <input required name="sex" id="radio_male" type="radio" />
              <label class="sex_label" for="radio_male">Мужчина</label>
              <input required name="sex" id="radio_female" type="radio" />
              <label class="sex_label" for="radio_female">Женщина</label>
            </div>
            <div class="birth">
              <label class="head_label" for="birth">Дата рождения</label>
              <input required id="birth" type="date" />
            </div>
            <div class="log_pass">
              <label class="head_label" for="email password"
                >Данные для входа в сервис</label
              >
              <input required placeholder="Email" id="email" type="email" />
              <input
                required
                placeholder="Пароль"
                id="password"
                type="password"
              />
            </div>

            <div class="tumbler">
              <div class="tumbler_and_text">
                <label class="switch">
                  <input id="checkbox" type="checkbox" />
                  <span class="slider round"></span>
                </label>
                <div class="tumbler_text">
                  <label class="recieve_spec" for="checkbox">Получать спецпредложения</label>
                </div>
              </div>
            </div>
            <div class="button_login_check">
              <button class="guest-btn button-reg login-btn">
                ЗАРЕГЕСТРИРОВАТЬСЯ
              </button>
            </div>
          </form>
          <div class="create_login log_in">
            <h3 class="no_acc ready_acc">Уже есть аккаунт на Toxin?</h3>
            <a class="button button_login btn_create_login log_in" href="##">
              <span>ВОЙТИ</span>
            </a>
          </div>
        </div>
      </div>`;
}
renderMain();
