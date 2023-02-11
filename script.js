const hamIcon = document.getElementById('hamIcon');
const menu = document.getElementById('menu');

const openMenu = () => {
  if (menu.classList.contains('menu-open')) {
    hamIcon.src = 'images/icon-hamburger.svg';
    menu.classList.remove('menu-open');
    document.body.style.overflow = 'visible';
  } else {
    hamIcon.src = 'images/icon-close.svg';
    menu.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  }
};
