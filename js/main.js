
let caret = document.querySelector('.fa-caret-down')
let dropdown = document.querySelector('.language-dropdown')

caret.addEventListener('click', () => {

    dropdown.classList.toggle('show')

})

const mobileIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileIcon.addEventListener("click", () => {
    
    mobileMenu.classList.toggle('show-mobile-menu')
   
  });
  