// Меню ссылки активность
  const links = document.querySelectorAll('#headermenu a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      links.forEach(el => el.classList.remove('header__link_active'));
      this.classList.add('header__link_active');
    });
  });

// Подменю
  document.addEventListener('DOMContentLoaded', () => {
    const submenuItems = document.querySelectorAll('.with-submenu');

    submenuItems.forEach(item => {
      const toggleButton = item.querySelector('.submenu-toggle');
      const catalogLink = item.querySelector('.header__link');
      const submenu = item.querySelector('.submenu');

      const toggleSubmenu = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = item.classList.contains('open');

        // Закрыть все открытые подменю
        document.querySelectorAll('.with-submenu.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            const openSubmenu = openItem.querySelector('.submenu');
            openSubmenu.style.height = '0px';
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          submenu.style.height = '0px';
        } else {
          item.classList.add('open');
          submenu.style.height = submenu.scrollHeight + 'px';
        }
      };

      // Клик по ссылке "Каталог"
      if (catalogLink) {
        catalogLink.addEventListener('click', toggleSubmenu);
      }
      if (toggleButton) {
        toggleButton.addEventListener('click', toggleSubmenu);
      }
    });

    // Клик вне меню — закрывает всё
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.with-submenu.open').forEach(item => {
        if (!item.contains(e.target)) {
          item.classList.remove('open');
          const submenu = item.querySelector('.submenu');
          submenu.style.height = '0px';
        }
      });
    });
  });