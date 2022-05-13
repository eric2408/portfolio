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
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});



// Navbar toggle
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
navbarToggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
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

//projects

const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event)=>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter== null){
        return;
    }
    
    const active = document.querySelector('.category_btn.selected');
    active.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode; 
        event.target.classList.add('selected');
    


    projectContainer.classList.add('anim-out');
    
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
    
});


function scrollIntoView(selector){
    const scrollBut = document.querySelector(selector);
    scrollBut.scrollIntoView({behavior: 'smooth'});
}




