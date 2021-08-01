const headerMenuContainer = document.querySelector ('.header__menu-container');
const headerMenu = document.querySelector ('.header__menu');
const headerMenuButton = document.querySelector ('.header__button');
const buttonLineOne = document.querySelector ('.header__button-line-1');
const buttonLineTwo = document.querySelector ('.header__button-line-2');
const buttonLineThree = document.querySelector ('.header__button-line-3');
const headerNav = document.querySelector ('.header__nav');
let offset = 0;

headerMenuButton.addEventListener('click', function (){
    buttonLineOne.classList.toggle('active');
    buttonLineTwo.classList.toggle('active');
    buttonLineThree.classList.toggle('active');
})


headerMenuButton.addEventListener('click', function() {
    headerMenuContainer.classList.toggle ('active');
    if (headerMenuContainer.classList.contains('active'))
    {
    headerMenuContainer.style.right = offset - 10 + 'vw';
    }
    else {
    headerMenuContainer.style.right = offset - 42.9 + 'vw';
    }
})

