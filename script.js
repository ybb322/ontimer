const pageContainer = document.querySelector ('.page-container');
const headerMenuContainer = document.querySelector ('.header__menu-container');
const headerMenu = document.querySelector ('.header__menu');
const headerMenuButton = document.querySelector ('.header__button');
const buttonLineOne = document.querySelector ('.header__button-line-1');
const buttonLineTwo = document.querySelector ('.header__button-line-2');
const buttonLineThree = document.querySelector ('.header__button-line-3');
const headerNav = document.querySelector ('.header__nav');
const weOfferTitle = document.querySelector ('.we-offer__title');
const weOfferItems = document.querySelector ('.we-offer__items');
const specialFeaturesTitle = document.querySelector ('.special-features-wrap__title');
const specialOne = document.querySelector ('.special-1');
const specialTwo = document.querySelector ('.special-2');
const specialThree = document.querySelector ('.special-3');
const pricingPlansTitle = document.querySelector ('.pricing-plans__text-wrap')
const itemOne = document.querySelector ('.item-1')
const itemTwo = document.querySelector ('.item-2')
const itemThree = document.querySelector ('.item-3')
const footerTitle = document.querySelector ('.footer__social-media-title');
const footerIcons = document.querySelector ('.footer__social-media-icons');
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


window.addEventListener ('scroll', function (){
    const scrolled = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
/*     console.log (scrolled);
    console.log (scrollable); */
    if (scrolled >= (scrollable / 12)) {
        weOfferTitle.style.opacity = offset + 100 + '%';
        weOfferTitle.style.left = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 8.5)) {
        weOfferItems.style.opacity = offset + 100 + '%';
        weOfferItems.style.right = offset - 0 + '%';
    }

    if (scrolled >= (scrollable / 5)) {
        specialFeaturesTitle.style.opacity = offset + 100 + '%';
        specialFeaturesTitle.style.left = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 3.8)) {
        specialOne.style.opacity = offset + 100 + '%';
        specialOne.style.right = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 2.75)) {
        specialTwo.style.opacity = offset + 100 + '%';
        specialTwo.style.left = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 2.15)) {
        specialThree.style.opacity = offset + 100 + '%';
        specialThree.style.right = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 1.65)) {
        pricingPlansTitle.style.opacity = offset + 100 + '%';
        pricingPlansTitle.style.left = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 1.61)) {
        itemOne.style.opacity = offset + 100 + '%';
        itemOne.style.right = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 1.42)) {
        itemTwo.style.opacity = offset + 100 + '%';
        itemTwo.style.left = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 1.27)) {
        itemThree.style.opacity = offset + 100 + '%';
        itemThree.style.right = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 1.01)) {
        footerTitle.style.opacity = offset + 100 + '%';
        footerTitle.style.left = offset - 0 + '%';
    }
    if (scrolled >= (scrollable / 1.01)) {
        footerIcons.style.opacity = offset + 100 + '%';
        footerIcons.style.right = offset - 0 + '%';
    }
})

