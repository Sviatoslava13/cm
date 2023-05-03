export const navigationReviews = ()=> {
  const btn = document.querySelectorAll('.reviews__btn');
  const item = document.querySelectorAll('#slider');
  const card = document.querySelectorAll('.reviews__card');

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
      card[i].classList.toggle('current');
      item[i].classList.toggle('is-transform');
    });
  }
}