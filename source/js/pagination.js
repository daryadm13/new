const pagesLink = document.querySelectorAll('.pagination__link--page');
const pagesItem = document.querySelectorAll('.pagination__item--page');

const back = document.querySelector('.pagination__link--back');
const forward = document.querySelector('.pagination__link--forward');

let currentPage = 2;

back.addEventListener('click', () =>
    if (currentPage > 0) {
        currentPage-=1;
        if (currentPage === 0) {
            back.disabled = true;
        }
        if (currentPage < length(pagesItem)) {
            forward.disabled = false;
        }
        pagesItem.classList.remove('pagination__item--current');
        pagesItem[currentPage].classList.add('pagination__item--current');
        pagesLink.classList.remove('pagination__link--current');
        pagesLink[currentPage].classList.add('pagination__link--current');
    }

)

forward.addEventListener('click', () =>
    if (currentPage < length(pagesItem) - 1) {
        currentPage+=1;
        if (currentPage === length(pagesItem) - 1) {
            forward.disabled = true;
        }
        if (currentPage > 0) {
            back.disabled = false;
        }
        pagesItem.classList.remove('pagination__item--current');
        pagesItem[currentPage].classList.add('pagination__item--current');
        pagesLink.classList.remove('pagination__link--current');
        pagesLink[currentPage].classList.add('pagination__link--current');
    }
)

for (let i = 0; i<length(pagesItem); i++) {
    pagesLink[i].addEventListener('click', () => {
        currentPage = i;
        pagesItem.classList.remove('pagination__item--current');
        pagesItem[currentPage].classList.add('pagination__item--current');
        pagesLink.classList.remove('pagination__link--current');
        pagesLink[currentPage].classList.add('pagination__link--current');
    })
}