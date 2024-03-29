const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector(".burger-btn__bars");
const footerYear = document.querySelector('.footer__year');


const handleNav = () =>{
    nav.classList.toggle('nav--active');
    navBtnBars.classList.toggle("black-bars-color");
    navBtn.classList.toggle("black-bars-border");
    
    allNavItems.forEach(item=>{
        item.addEventListener('click', () =>{
            nav.classList.remove('nav--active');
            navBtnBars.classList.remove("black-bars-color");
            navBtn.classList.remove("black-bars-border");
        })
    })

    handleNavItemAnimation();
}


const handleNavItemAnimation = ()=>{
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime ++;
    })
}
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();
navBtn.addEventListener('click', handleNav)

