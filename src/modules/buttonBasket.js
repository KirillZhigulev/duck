document.addEventListener('DOMContentLoaded', () => {
  const basketContainer = document.getElementById('buttonBasket');
  if (!basketContainer) return;

  const iconButton = document.createElement('button');
  iconButton.className = 'icon-button';
  iconButton.setAttribute('aria-label', 'Корзина');

  const iconImage = document.createElement('img');
  iconImage.src = '/image/icons/basket.svg';
  iconImage.alt = 'Корзина';
  iconImage.className = 'basket-icon';

  iconButton.appendChild(iconImage);
  basketContainer.appendChild(iconButton);

  iconButton.addEventListener('mouseenter', () => {
    iconImage.src = '/image/icons/baskethover.svg';
  });
  iconButton.addEventListener('mouseleave', () => {
    iconImage.src = '/image/icons/basket.svg';
  });
  iconButton.addEventListener('mousedown', () => {
    iconImage.src = '/image/icons/basketclick.svg';
  });
  iconButton.addEventListener('mouseup', () => {
    iconImage.src = '/image/icons/baskethover.svg';
  });

  // Даем сигнал, что корзина готова
  window.dispatchEvent(new Event("basketReady"));
});
