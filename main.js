// # nav-bar transparent effets when scrolling down
const navbar = document.querySelector('.nav-bar');
const origin_logo = document.querySelector('.origin-logo');
const changed_logo = document.querySelector('.changed-logo');
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

// # when clicking on toggle on small screen, navbar column open
const barsToggleBtn = document.querySelector('.bars-toggle-btn');
barsToggleBtn.addEventListener('click', () => {
    nav_bar_contents.classList.toggle('open');
    // HTML에서 .nav-bar_contents 안에 클래스 open이 없으면 추가!
    // 있으면 제거! 
    // on and off 구현할 때 유용함! 
});

// # when scrolling down, about me part goes into opacity small effect
const about_me = document.querySelector(".about-me");
const about_me_span = about_me.querySelectorAll("span");
const about_me_p = about_me.querySelectorAll("p");
const about_me_button = about_me.querySelectorAll("button");
const about_me_a = about_me.querySelectorAll("a");
const about_me_img = about_me.querySelector("img");
const about_me_smallBar = about_me.querySelector(".about-me_profile_part1_content1_smallBar");

document.addEventListener('scroll', () => {
    about_me_p.forEach((value) => {
        value.style.opacity = 1 - (window.scrollY / navbarHeight / 5);
    })

    about_me_span.forEach((value) => {
        value.style.opacity = 1 - (window.scrollY / navbarHeight / 5);
    })

    about_me_button.forEach((value) => {
        value.style.opacity = 1 - (window.scrollY / navbarHeight / 5);
    })

    about_me_a.forEach((value) => {
        value.style.opacity = 1 - (window.scrollY / navbarHeight / 5);
    })

    about_me_img.style.opacity = 1 - (window.scrollY / navbarHeight / 5);

    about_me_smallBar.style.opacity = 1 - (window.scrollY / navbarHeight / 5);
});

// querySelectorAll 선택되어진 전체 값이 배열형태로 리턴 된다. 그래서 forEach 구문을
// 써서 효과를 구현해야 함!