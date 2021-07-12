'use strict';

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

// # after clicking on toggle in small size screen, open bar will be automatically closed.
nav_bar_contents.addEventListener('click', (event) => {
    const target = event.target.parentNode;
    if(target == nav_bar_contents){
        nav_bar_contents.classList.remove('open');
    }
});

// # when scrolling down, about me part goes into opacity small effect
const body = document.querySelector('body');
const about_me = document.querySelector(".about-me");
const about_me_span = about_me.querySelectorAll("span");
const about_me_p = about_me.querySelectorAll("p");
const about_me_button = about_me.querySelectorAll("button");
const about_me_a = about_me.querySelectorAll("a");
const about_me_img = about_me.querySelector("img");
const about_me_smallBar = about_me.querySelector(".about-me_profile_part1_content1_smallBar");

document.addEventListener('scroll', () => {
    const about_me_small_screen_width = body.getBoundingClientRect().width;
    // 반응형에 따라 너비 구하는 방법. addEventListener 안에 추가 해줘야 함
    // 위에서 선언하게 되면 제일 처음 켜진 화면 기준 너비로 고정되어 버림!!
    console.log(about_me_small_screen_width);
    if(about_me_small_screen_width > 768){
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

    }else{
        about_me_p.forEach((value) => {
            value.style.opacity = 1;
        })
    
        about_me_span.forEach((value) => {
            value.style.opacity = 1;
        })
    
        about_me_button.forEach((value) => {
            value.style.opacity = 1;
        })
    
        about_me_a.forEach((value) => {
            value.style.opacity = 1;
        })
    
        about_me_img.style.opacity = 1;
    
        about_me_smallBar.style.opacity = 1;
    }
});

// if(about_me.getBoundingClientRect.width > 768px){
//     document.addEventListener('scroll', () => {
//         about_me_p.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 18);
//         })
    
//         about_me_span.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 18);
//         })
    
//         about_me_button.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 18);
//         })
    
//         about_me_a.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 18);
//         })
    
//         about_me_img.style.opacity = 1 - (window.scrollY / navbarHeight / 18);
    
//         about_me_smallBar.style.opacity = 1 - (window.scrollY / navbarHeight / 18);
//     });
// }else{
//     document.addEventListener('scroll', () => {
//         about_me_p.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 25);
//         })
    
//         about_me_span.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 25);
//         })
    
//         about_me_button.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 25);
//         })
    
//         about_me_a.forEach((value) => {
//             value.style.opacity = 1 - (window.scrollY / navbarHeight / 25);
//         })
    
//         about_me_img.style.opacity = 1 - (window.scrollY / navbarHeight / 25);
    
//         about_me_smallBar.style.opacity = 1 - (window.scrollY / navbarHeight / 25);
//     });
// };

// querySelectorAll 선택되어진 전체 값이 배열형태로 리턴 된다. 그래서 forEach 구문을
// 써서 효과를 구현해야 함!

// # when clicking on the navbar menu, auto scroll down the navbar menu part 
nav_bar_contents.addEventListener('click', (event) => {
    if(event.target.dataset.filter == null){
        return;
    }
    const filter = event.target.dataset.filter;
    const scrollTo = document.querySelector(filter);
    switch(filter){
        case ".about-me":
            scrollTo.scrollIntoView({behavior: "smooth", block: "end"}, true);
            break;

        case ".resume":
            scrollTo.scrollIntoView({behavior: "smooth", block: "start"}, true);
            break;

        case ".projects":
            scrollTo.scrollIntoView({behavior: "smooth", block: "center"}, true);
            break;
        
        case ".testimonials":
            scrollTo.scrollIntoView({behavior: "smooth", block: "start"}, true);
            break;
        // default:
        // 위의 값 A~E 모두 아닐 떄 실행하는 명령문;
    }
    // switch 문법 및 scrollIntoView 소개
    // - true : element 요소의 상단을 기준으로 스크롤을 이동한다.
    // - false : element 요소의 하단을 기준으로 스크롤을 이동한다.
    // document.getElementById("mine").scrollIntoView(true);
    // document.getElementById("mine").scrollIntoView(false);

    // - behavior : 전환 에니메이션 정의 (auto || smooth)
    // - block : 수직 정렬 (start || center || end || nearest)
    // - inline : 수평 정렬 (start || center || end || nearest)
    // let element = document.getElementById("mine");
    // element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

const about_me_profile_part2_href = document.querySelector(".about-me_profile_part2_href");
about_me_profile_part2_href.addEventListener('click', (event) => {
    if(event.target.dataset.filter == null){
        return;
    }
    const filter = event.target.dataset.filter;
    const scrollTo = document.querySelector(filter);
    switch(filter) {
        case ".resume":
            scrollTo.scrollIntoView({behavior: "smooth", block: "start"}, true);
            break;

        case ".projects":
            scrollTo.scrollIntoView({behavior: "smooth", block: "center"}, true);
            break;
        
        case ".testimonials":
            scrollTo.scrollIntoView({behavior: "smooth", block: "start"}, true);
            break;
    }
});

// # when clicking on the button of the projects part, 
// it will sort out the projects according to the kind of projects
const projects_btn_part = document.querySelector(".projects_btn-part");
const prj_pic_part = document.querySelectorAll(".prj-pic");
projects_btn_part.addEventListener('click', (event) => {
    // # when clicking on the button of the projects part,
    // the button will be background-yellow-colored.
    const active = document.querySelector(".projects_btn.selected");
    active.classList.remove("selected");
    // 이거는 기존에 있는 버튼 배경색 클릭하면 없애주는 것이고..
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    // BUTTON 이라고 대문자 써야함!! note 주의 클릭된 버튼 배경색 지정.
    target.classList.add("selected");

    const filter = event.target.parentNode.dataset.filter || event.target.dataset.filter;
    const prj_pic_container = document.querySelector('.prj-pic-container');
    prj_pic_part.forEach((value) => {
        prj_pic_container.classList.add('anim-out');
        setTimeout(() => {
            if(filter != value.dataset.type && filter != "all"){
                value.classList.add('prj-pic-remove');
            }
            // 이거 헷갈림 진짜 잘 생각해야함!!
            else{
                value.classList.remove('prj-pic-remove');
            }
            prj_pic_container.classList.remove('anim-out');
        }, 300);
    });
});

// # when clicking on the arrow-up button, it will move to the top automatically.
const arrow_up = document.querySelector('.arrow-up');
const aboutMeHeight = document.querySelector('.about-me').getBoundingClientRect().height;

arrow_up.addEventListener('click', () => {
    const scrollToAboutMe = document.querySelector('.about-me');
    scrollToAboutMe.scrollIntoView({behavior: "smooth", block: "end"});
});

document.addEventListener('scroll', () => {
    // 스크롤 이벤트 적용할때 document 다 arrow_up 이 아니라 
    // 진짜 주의 ㅠㅠ
    if(window.scrollY > aboutMeHeight){
        arrow_up.classList.add('appear');
    }else{
        arrow_up.classList.remove('appear');
    }
});