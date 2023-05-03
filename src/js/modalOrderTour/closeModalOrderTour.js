const backdrop = document.querySelector('.backdrop');
const modalOrderTourRef = document.querySelector('.modalOrderTour');

(() => {
  backdrop.addEventListener('click', e => {
    if (e.target.classList.contains('backdrop')) {
      backdrop.classList.remove('is-open');
      modalOrderTourRef.classList.remove('is-open');
      document.body.style.overflow = 'visible';
    }
  });
  modalOrderTourRef.addEventListener('click', e => {
    if (e.target.nodeName === 'use' || e.target.nodeName === 'svg') {
      backdrop.classList.remove('is-open');
      modalOrderTourRef.classList.remove('is-open');
      document.body.style.overflow = 'visible';
    }
  });
})();
