export {}

// Кнопка синия 
  const button = document.getElementById('main__buttonClick');

  // При клике на кнопку — переключаем класс
  button.addEventListener('click', function(event) {
    event.stopPropagation(); 
    button.classList.toggle('active');
  });

  // При клике вне кнопки — удаляем класс
  document.addEventListener('click', function() {
    button.classList.remove('active');
  });
