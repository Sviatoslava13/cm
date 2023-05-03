(() => {
  const goverlaTourRef = document.querySelector('.goverla');
  const bukovelTourRef = document.querySelector('.bukovel');
  const carpTourRef = document.querySelector('.carp');
  const btnWrapperRef = document.querySelector('.chooseList');
  const btnChooseRef = document.querySelectorAll('.btn__chooseList');

  btnWrapperRef.addEventListener('click', e => {
    if (e.target.classList.contains('is-active')) return;
    if (e.target.dataset.tour === 'goverla') {
      goverlaTourRef.classList.add('is-visible');
      bukovelTourRef.classList.remove('is-visible');
      carpTourRef.classList.remove('is-visible');
    }
    if (e.target.dataset.tour === 'bukovel') {
      bukovelTourRef.classList.add('is-visible');
      goverlaTourRef.classList.remove('is-visible');
      carpTourRef.classList.remove('is-visible');
    }
    if (e.target.dataset.tour === 'carp') {
      bukovelTourRef.classList.remove('is-visible');
      goverlaTourRef.classList.remove('is-visible');
      carpTourRef.classList.add('is-visible');
    }
    btnChooseRef.forEach(btn => {
      btn.classList.remove('is-active');
    });

    e.target.classList.add('is-active');
  });
})();
