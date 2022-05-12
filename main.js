'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight= navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});


//handle scrolling when tapping on navbar menu//
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
});

const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', (event) =>{
    scrollIntoView('#contact');
});


//Make home slowly fad to transparent as scrolling down//
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1- window.scrollY /homeHeight;
});



// show arrow up button when scrolling down//
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// go up on a arrow up button//
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});




function scrollIntoView(selector){
    const scrollBut = document.querySelector(selector);
    scrollBut.scrollIntoView({behavior: 'smooth'});
}




