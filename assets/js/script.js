let hamburger = document.querySelector('.hamburger-menu');
let navCollapse = document.querySelector('.header-nav__collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});

let language = document.querySelector('.header-language__static');
let languageContent = document.querySelector('.header-language__content');
language.addEventListener('click', () => {
  language.classList.toggle('is-active');
  languageContent.classList.toggle('is-active');
});

let question = document.querySelectorAll('.faq-content__info');

    for (let i = 0; i < question.length; i++) {
      question[i].addEventListener('click', () => {
        question[i].classList.toggle('active');
      })
    }