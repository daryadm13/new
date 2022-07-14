const promoList = document.querySelectorAll('.promo');
const promoFirst = document.querySelector('.promo--first');
const promoSecond = document.querySelector('.promo--second');
const promoThird = document.querySelector('.promo--third');

const next = document.querySelectorAll('.promo__change--next');
const previous = document.querySelectorAll('.promo__change--previous');

let currentSlide = 0;

next.forEach(element => element.addEventListener('click', ()=> {
  currentSlide = (currentSlide + 1) % 3;
  console.log(currentSlide);
  promoList.forEach(element => {
    element.classList.add('visually-hidden');
  });
  promoList[currentSlide].classList.remove('visually-hidden');
}))


previous.forEach(element => element.addEventListener('click', ()=> {
  currentSlide = (currentSlide + 2) % 3;
  console.log(currentSlide);
  promoList.forEach(element => {
    element.classList.add('visually-hidden');
  });
  promoList[currentSlide].classList.remove('visually-hidden');
}))
