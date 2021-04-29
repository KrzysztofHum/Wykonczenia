const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const section = document.querySelector('section');
const footer = document.querySelector('footer');

const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    hamburger.setAttribute('aria-expanded',
    hamburger.classList.contains('hamburger-active'));

    nav.classList.toggle('navigation-active');
    section.classList.toggle('section-active');
    footer.classList.toggle('footer-active');
}

hamburger.addEventListener('click', handleClick);