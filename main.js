// nav-bar transparent effets when scrolling down
const navbar = document.querySelector('.nav-bar');
const origin_logo = document.querySelector('.origin-logo');
const changed_logo = document.querySelector('.changed-logo');
const barsToggleBtn = document.querySelector('.bars-toggle-btn');

const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('nav-bar-color-bgcolor');
        origin_logo.classList.remove('logo-show-up');
        changed_logo.classList.add('logo-show-up');
        barsToggleBtn.classList.add('bars-toggle-btn-change-bgColor');   
    }else{
        navbar.classList.remove('nav-bar-color-bgcolor');
        changed_logo.classList.remove('logo-show-up');
        barsToggleBtn.classList.remove('bars-toggle-btn-change-bgColor'); 
    }
});