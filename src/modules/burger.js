document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".header__nav");
  const burgerImage = burger?.querySelector("img");
  const basketContainer = document.getElementById("buttonBasket");
  const overlay = document.getElementById("burgerOverlay");

  if (!burger || !nav || !burgerImage || !overlay) return;

  const isMobile = () => window.innerWidth < 960;

  const setBurgerIcon = () => {
    const open = burger.classList.contains("open");

    if (open) {
      burgerImage.src = isMobile()
        ? "/image/icons/close.svg"
        : "/image/icons/burgerClick.svg";
    } else {
      burgerImage.src = "/image/icons/burger.svg";
    }
  };

  const updateBasketVisibility = () => {
    const menuOpen = burger.classList.contains("open");
    if (basketContainer) {
      basketContainer.classList.toggle("hide-basket", isMobile() && menuOpen);
    }
  };

  const updateOverlay = () => {
    const isOpen = burger.classList.contains("open");
    overlay.classList.toggle("active", isMobile() && isOpen);
  };

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("active");
    setBurgerIcon();
    updateBasketVisibility();
    updateOverlay();
  });

  burger.addEventListener("mouseenter", () => {
    if (!burger.classList.contains("open")) {
      burgerImage.src = "/image/icons/burgerHover.svg";
    }
  });

  burger.addEventListener("mouseleave", () => {
    setBurgerIcon();
  });

  window.addEventListener("resize", () => {
    updateBasketVisibility();
    setBurgerIcon();
    updateOverlay();
  });

  // инициализация
  updateBasketVisibility();
  setBurgerIcon();
  updateOverlay();
});
