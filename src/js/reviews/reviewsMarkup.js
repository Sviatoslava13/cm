import { navigationReviews } from './reviewsNavigation';

export const markupReviews = data => {
  const list = document.querySelector('#swiper2');

  const markup = data.map(
    el => `
<div class="swiper-slide reviews__slide" id="slider">
<picture> 
<source srcset="
              ${el.bcgPhoto_desk_1x} 1x,
              ${el.bcgPhoto_desk_2x} 2x,
              ${el.bcgPhoto_desk_3x} 3x
            " media="(min-width:1280px)"/>
<source srcset=
              ${el.bcgPhoto_tab_1x} 1x,
              ${el.bcgPhoto_tab_2x} 2x,
              ${el.bcgPhoto_tab_3x} 3x
            media="(min-width:768)" />
<source srcset="
            ${el.bcgPhoto_mob_1x} 1x,
            ${el.bcgPhoto_mob_2x} 2x,
            ${el.bcgPhoto_mob_3x} 3x
            " media="(max-width:767)" />
 <img class="reviews__img" src=${el.bcgPhoto_mob_1x} alt='background' height="134px" />
  </picture>
<div class="reviews__content">
<img class="reviews__avatar" src=${el.avatar} alt="avatar" />
<h3 class="reviews__subtitle">${el.username}</h3>
<p class="reviews__text">${el.comment}</p>
</div>
<div class="reviews__card">
<picture>
<source srcset="
               ${el.photo_desk_1x} 1x,
               ${el.photo_desk_2x} 2x,
               ${el.photo_desk_3x} 3x
              " media="(min-width:1279px)" />
<source srcset="
                ${el.photo_tab_1x} 1x,
                ${el.photo_tab_2x} 2x,
                ${el.photo_tab_3x} 3x
              " media="(min-width:767px)" />
<source srcset="
               ${el.photo_mob_1x} 1x,
               ${el.photo_mob_2x} 2x,
               ${el.photo_mob_3x} 3x
              " media="(max-width:767px)" />
 <img src=${el.photo_mob_1x} alt="example-photo" class="reviews__picture"/>
 </picture>
 </div> 
 <button class="reviews__btn">   
 <svg class="reviews__svg" width="33" height="21">
<path d="M15.455 0.606c-8.364 0-15.152 3.394-15.152 7.575 0 3.394 4.455 6.257 10.606 7.227v3.061c0 0.682 0.818 1.015 1.288 0.53l4.227-4.227c0.14-0.136 0.227-0.327 0.227-0.538s-0.087-0.401-0.227-0.538l-0-0-4.227-4.227c-0.137-0.134-0.324-0.216-0.53-0.216-0.419 0-0.758 0.339-0.758 0.758 0 0.001 0 0.002 0 0.003v-0 2.303c-4.773-0.848-7.575-2.879-7.575-4.136 0-1.606 4.605-4.545 12.121-4.545s12.122 2.939 12.122 4.545c0 1-1.818 2.545-5.031 3.545-0.603 0.197-1.030 0.754-1.030 1.411 0 0.005 0 0.009 0 0.014v-0.001c0 1.015 0.985 1.757 1.939 1.455 4.288-1.334 7.152-3.713 7.152-6.425 0-4.182-6.788-7.575-15.152-7.575z" />
</svg>
</button>
</div>
`
  );

  list.insertAdjacentHTML('beforeend', markup.join(''));

  navigationReviews();
};
