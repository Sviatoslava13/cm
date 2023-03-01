const btn = document.querySelector('.hero__btn');
const tourBtn = document.querySelector('.tour__button');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__button');
const body = document.querySelector('#body');
btn.addEventListener('click', handleOpenModal);
tourBtn.addEventListener('click', handleOpenModal);
btnClose.addEventListener('click', handleOpenModal);
//const hero = document.querySelector('.hero__container');
   //  body.classList.add('active')
export function handleOpenModal() {
  modal.classList.toggle('open');
     body.classList.toggle('active')
   //  hero.classList.toggle('active')

}
