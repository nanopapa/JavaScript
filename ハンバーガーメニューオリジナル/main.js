'use strict';

const hamburgerMenu = document.querySelector('.humburger-menu');
const navi = document.getElementById('humburger-navigation');
const humburgerMenuSections = document.querySelectorAll('humburger-menu-section');


hamburgerMenu.addEventListener('click',function(){
    hamburgerMenu.classList.toggle('active');
    navi.classList.toggle('active');
});