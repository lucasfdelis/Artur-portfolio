const setLight = () => {
    const cssVariables = document.documentElement.style;
    cssVariables.setProperty('--first-color', '#4070F4');
    cssVariables.setProperty('--second-color', '#0E2431');
    cssVariables.setProperty('--btn-text', '#fff');
    cssVariables.setProperty('--skills-bg', 'rgb(250, 250, 250)');
    cssVariables.setProperty('--background-color', '#fff');
    cssVariables.setProperty('--footer-color', '#0c1c29'); 

    document.getElementById('btn-image').src='assets/img/moon.svg';
}

const setDark = () => {
    const cssVariables = document.documentElement.style;
    cssVariables.setProperty('--first-color', '#4070F4');
    cssVariables.setProperty('--second-color', '#fff');
    cssVariables.setProperty('--btn-text', '#0E2431');
    cssVariables.setProperty('--skills-bg', '#0c1c29');
    cssVariables.setProperty('--background-color', '#0E2431');
    cssVariables.setProperty('--footer-color', '#0c1c29');

    document.getElementById('btn-image').src='assets/img/sun.svg';
}

const getThemeOnLoad = () => {
    const persistedValue = localStorage.getItem('theme');
    if(persistedValue === null){
        persistedValue = 'light'
        localStorage.setItem('theme', persistedValue);
    }else if(persistedValue === 'dark'){
        setDark();
    }
}

window.onload = () => {
    getThemeOnLoad();
}

document.getElementById('btn-theme').addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        if(currentTheme === 'dark'){
            setLight();
            localStorage.setItem('theme', 'light');
        }else{
            setDark();
            localStorage.setItem('theme', 'dark');
        }
    });

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})

sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

sr.reveal('.work__img',{interval: 200})

sr.reveal('.contact__input',{interval: 200})