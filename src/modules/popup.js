// Попап 
document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.header__button'); // все кнопки
  const popup = document.getElementById('callbackPopup');
  const closeBtn = document.getElementById('callbackClose');
  const overlay = popup.querySelector('.callback-popup__overlay');
  const form = document.getElementById('callbackForm');

  // Открыть попап по любой из кнопок
  openButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  });

  // Закрыть попап
  const closePopup = () => {
    popup.style.display = 'none';
  };

  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);

  // Закрытие попапа по клавише Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  // Обработка формы
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (name && phone) {
      console.log('Имя:', name);
      console.log('Телефон:', phone);
      alert('Спасибо! Мы свяжемся с вами.');
      form.reset();
      closePopup();
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  });
});
