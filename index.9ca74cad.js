!function(){var e=function(e){n[e].addEventListener("click",(function(){t[e].classList.toggle("current")}))},n=(document.querySelector(".reviews__card"),document.querySelectorAll(".reviews__item")),t=document.querySelectorAll(".reviews__card"),c=document.querySelector("#minus"),l=document.querySelector("#plus");n.forEach((function(e){e.addEventListener("click",(function(){return e.classList.toggle("is-transform")}))}));for(var d=0;d<n.length;d++)e(d);l.addEventListener("click",(function(){(s||o)&&u(a+=1);r&&u(a+=2)})),c.addEventListener("click",(function(){(s||o)&&u(a-=1);r&&u(a-=2)}));var r=window.screen.width>=767&&window.screen.height<=1439,s=window.screen.width<=767,o=window.screen.width>=1440,a=1;function u(e){for(i=0;i<n.length;i+=1)n[i].style.display="none";n[a-1].style.display="block",r&&(n[a-2].style.display="block"),o&&(n[a-3].style.display="block"),e===n.length?l.disabled=!0:l.disabled=!1,c.disabled=a<=1,r&&(c.disabled=a<=2),o&&(c.disabled=a<=3)}r&&(a=2),o&&(a=3),u(a)}();
//# sourceMappingURL=index.9ca74cad.js.map
