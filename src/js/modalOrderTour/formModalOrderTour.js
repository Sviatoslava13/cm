(() => {
  const formRef = document.querySelector('.modalOrderTour__form');
  const backdrop = document.querySelector('.backdrop');
  const modalOrderTourRef = document.querySelector('.modalOrderTour');
  formRef.addEventListener('submit', e => {
    e.preventDefault();
    const { name, phone, choosedTour } = e.target.elements;
    name.value = '';
    phone.value = '';
    choosedTour.value = '';
    backdrop.classList.remove('is-open');
    modalOrderTourRef.classList.remove('is-open');
  });
  
})();
