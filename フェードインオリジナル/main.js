'use strict';

let fadeInTarget = document.querySelectorAll('.fade-in');


window.addEventListener('scroll',() => {
    for(let i=0;i< fadeInTarget.length;i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;

        if(scroll > offset - windowHeight + 150){
            fadeInTarget[i].classList.add('scroll-in');
        }
    }
});

// getBoundingClientRectターゲットまでの位置を取得するが、ビューポートの左上から
//window.pageYOffset ドキュメントの左上からのスクロール量を取得できる


