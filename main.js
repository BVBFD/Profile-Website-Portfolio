// nav-bar transparent effets when scrolling down
const navbar = document.querySelector('.nav-bar');
const origin_logo = document.querySelector('.origin-logo');
const changed_logo = document.querySelector('.changed-logo');
const barsToggleBtn = document.querySelector('.bars-toggle-btn');
const nav_bar_contents = document.querySelector('.nav-bar_contents');

const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('nav-bar-color-bgcolor');
        origin_logo.classList.remove('logo-show-up');
        changed_logo.classList.add('logo-show-up');
        barsToggleBtn.classList.add('bars-toggle-btn-change-bgColor');
        nav_bar_contents.classList.add('change_color');   
    }else{
        navbar.classList.remove('nav-bar-color-bgcolor');
        changed_logo.classList.remove('logo-show-up');
        barsToggleBtn.classList.remove('bars-toggle-btn-change-bgColor');
        nav_bar_contents.classList.remove('change_color');
    }
});

// when clicking on toggle on small screen, navbar column open
barsToggleBtn.addEventListener('click', () => {
    nav_bar_contents.classList.toggle('open');
    // HTML에서 .nav-bar_contents 안에 클래스 open이 없으면 추가!
    // 있으면 제거! 
    // on and off 구현할 때 유용함! 
});