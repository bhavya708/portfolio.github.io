const hamburger=document.querySelector('.header .navbar .navList .hamburger');
const mobile_menu=document.querySelector('.header .navbar .navList ul');
const menu_item=document.querySelectorAll('.header .navbar .navList ul li a');

const header=document.querySelector('.header');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position>400){
        header.style.backgroundColor = "#40424D";
    }else{
        header.style.backgroundColor = "transparent";
    }
})
menu_item.forEach((item) => {
    item.addEventListener('click',() =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})