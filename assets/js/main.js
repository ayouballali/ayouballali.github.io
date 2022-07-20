/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu') ,
      navClose = document.getElementById('nav-close') ,
      navToggle = document.getElementById('nav-toggle') ;

      

/*===== MENU SHOW =====*/
/* Validate if constant exists */
   if (navToggle) {
     navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
     })
   }

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click',()=>{
       navMenu.classList.remove('show-menu');
    })
  }

/*==================== REMOVE MENU MOBILE ====================*/
// this code is very repeted we use it for (look below)
const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
      let itemClass = this.parentNode.className;

      for (let index = 0; index < skillsContent.length; index++) {
         skillsContent[index].className = 'skills__content skills__close';
      }
      if(itemClass == 'skills__content skills__close'){
         this.parentNode.className = 'skills__content skills__open' ;
      }
}

skillsHeader.forEach(element => {
   element.addEventListener('click',toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content');

      tabs.forEach(tab=>{
         tab.addEventListener('click',()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent=>{
               tabContent.classList.remove('qualification__active');
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab=>{
               tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
         })
      })

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button');
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
   modalViews[modalClick].classList.add('active-modal');
} 

modalBtns.forEach((modalBtn,i)=>{
   modalBtn.addEventListener('click',()=>{
      modal(i);
   })
})

modalCloses.forEach((modalClose)=>{
   modalClose.addEventListener('click',()=>{
      modalViews.forEach((modalView)=>{
         modalView.classList.remove('active-modal')
      })
   })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
   cssMode: true,
   loop:true,

   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
     clickable:true,
   },
  
 });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 