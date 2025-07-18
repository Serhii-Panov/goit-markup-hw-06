(() => {
    const refs = {
      // Додати атрибут data-menu-open на кнопку відкриття
      openMenuBtn: document.querySelector("[data-menu-open]"),
      // Додати атрибут data-menu-close на кнопку закриття
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      // Додати атрибут data-menu на бекдроп модалки
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", togglemenu);
    refs.closeMenuBtn.addEventListener("click", togglemenu);
  
    function togglemenu() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.menu.classList.toggle("is-open");
    }
  })();