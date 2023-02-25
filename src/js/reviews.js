const divs = document.querySelector('.reviews__card');
const item = document.querySelectorAll('.reviews__item');
const s = document.querySelectorAll('.reviews__card');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
item.forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('is-transform'));
});

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function () {
    s[i].classList.toggle('current');
  });
}

plusBtn.addEventListener('click', plusSlides);
minusBtn.addEventListener('click', minusSlides);


const tablet = window.screen.width >= 767 && window.screen.height <= 1439;
const mobile = window.screen.width <= 767;
const desk = window.screen.width >= 1440;
let slideIndex = 1;
if (tablet) {
  slideIndex = 2;
}
if (desk) {
   slideIndex = 3;
}
showSlides(slideIndex);
function plusSlides() {
  if (mobile || desk) {
    showSlides((slideIndex += 1));
  }
  if (tablet) {
    showSlides((slideIndex += 2));
   }

}

function minusSlides() {
  if (mobile || desk) {
    showSlides((slideIndex -= 1));
  }
  if (tablet) {
    showSlides((slideIndex -= 2));
   }
}

function showSlides(n) {

  for (i = 0; i < item.length; i+=1) {
     item[i].style.display = 'none';
   }
   
  item[slideIndex - 1].style.display = 'block';

  if (tablet) {
     item[slideIndex - 2].style.display = 'block';
  }
 if (desk) {
    item[slideIndex - 3].style.display = 'block';
  }

  if (n === item.length) {
    plusBtn.disabled = true;
  } else {
    plusBtn.disabled = false;
  }
  if (slideIndex <= 1) {
    minusBtn.disabled = true;
  } else {
    minusBtn.disabled = false;
   }
   if (tablet) {
      if (slideIndex <= 2) {
         minusBtn.disabled = true;
      } else {
         minusBtn.disabled = false;
      }
   }
      if (desk) {
      if (slideIndex <= 3) {
         minusBtn.disabled = true;
      } else {
         minusBtn.disabled = false;
      }
   }
}