// Меню на странице сортировки /  дополнительно

const drowUp = (buttonSelector, fieldSelector, menuSelector) => {
  const button = document.querySelector(buttonSelector);
  const field = document.querySelector(fieldSelector);
  const menu = document.querySelector(menuSelector);

  if (button)
    button.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

  if (field)
    field.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
};

// // Основная страница - календарь
drowUp(".choose_btn", "#guests_select", ".expand_menu_guest");

// Страница сортировки - удобства
drowUp(".btn_facil", "#facil_select", ".expand_menu_facil");

// Страница сортировки - дополнительно
drowUp(".btn_add", ".add_head", ".add_items");
