// header scroll

let nav = document.querySelector(".navbar")
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}

// Nav hide

let navbar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click" ,function(){
        navCollapse.classList.remove("show");
    })
})







// Owl carousel

$(document).ready(function(){
$('.client-slider-section').owlCarousel({
    items:4,
    loop:true,
    autoplay:true,
    nav:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});























