'use strict';

const menuContents = document.querySelectorAll('.menu-content');
const downArrows =  document.querySelectorAll('.fa-angle-down');
const upArrows =  document.querySelectorAll('.fa-angle-up');
const h1Toggles = document.querySelectorAll('.h1Toggle');

downArrows.forEach((downArrow, index) => {
    downArrow.addEventListener('click',function(){
        menuContents[index].classList.remove('display-none');
        upArrows[index].classList.remove('display-none');
        downArrows[index].classList.add('display-none');

    })
});

upArrows.forEach((upArrow, index) => {
    upArrow.addEventListener('click', function(){
        menuContents[index].classList.add('display-none');
        upArrows[index].classList.add('display-none');
        downArrows[index].classList.remove('display-none');      
    })
});

h1Toggles.forEach((h1TOGGLE,index) =>{
    h1TOGGLE.addEventListener('click',function(){ 
        menuContents[index].classList.toggle('display-none');
        upArrows[index].classList.toggle('display-none');
        downArrows[index].classList.toggle('display-none');   
})
});