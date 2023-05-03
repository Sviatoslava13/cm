(() => {
  const btnOpenMenuRef = document.querySelector('.btn__menu');
  const mobileMenuRef = document.querySelector('.menu');
  const heroContentRef = document.querySelector('.hero__wrapper');
  const closeMenuRef = document.querySelector('.backdropCloseMenu');
  const closeMobileMenu = () => {
    heroContentRef.classList.add('is-visible');
    btnOpenMenuRef.classList.remove('opened');
    mobileMenuRef.classList.remove('is-open');
    closeMenuRef.classList.remove('is-open');
    closeMenuRef.removeEventListener('click', closeMobileMenu);
  };
  btnOpenMenuRef.addEventListener('click', () => {
    const expanded =
      btnOpenMenuRef.getAttribute('aria-expanded') === 'true' || false;
    heroContentRef.classList.toggle('is-visible');
    btnOpenMenuRef.classList.toggle('opened');
    mobileMenuRef.classList.toggle('is-open');
    closeMenuRef.classList.add('is-open');
    btnOpenMenuRef.setAttribute('aria-expanded', !expanded);
    closeMenuRef.addEventListener('click', closeMobileMenu);
  });
})();
