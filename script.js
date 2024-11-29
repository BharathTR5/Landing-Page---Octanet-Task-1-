var navbar = document.querySelector('nav')

window.onscroll = function() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

const bar= document.querySelector('#bar');
const menu = document.querySelector('ul');
if(bar){
  bar.addEventListener('click', ()=>{
    menu.classList.toggle("active")
  })
}