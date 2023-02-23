export const mobileMenu = () => {
  const menu = document.querySelector('.navigation');
  const menuClose = document.querySelector('.close');
  const menuOpen = document.querySelector('.open');
 const body = document.querySelector('#body');
//const hero = document.querySelector('.hero__container');
  const handleClick = () => {
    const isOpen = menuOpen.getAttribute('aria-expanded') === 'true' || false;
    menuOpen.setAttribute('aria-expanded', !isOpen);
    menu.classList.toggle('is-open');
    body.classList.toggle('active');
   // hero.classList.toggle('active')
  };
  menuOpen.addEventListener('click', handleClick);
  menuClose.addEventListener('click', handleClick);
};
