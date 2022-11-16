'use strict';

{
    const images = [
        'img/pic01.jpg',
        'img/pic02.jpg',
        'img/pic03.jpg',
        'img/pic04.jpg',
        'img/pic05.jpg',
        'img/pic06.jpg',
        'img/pic07.jpg',
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById('main')
    mainImage.src = images[currentIndex];

    images.forEach((image,index) => {
        const img = document.createElement('img');
        img.src = image;
  
        const li = document.createElement('li');
        if(index === currentIndex){
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        });

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

        const next = document.getElementById('next');
            next.addEventListener('click', ()=>{
                let target = currentIndex + 1;
                if(target === images.length){
                    target = 0;
                }
                document.querySelectorAll('.thumbnails > li')[target].click();
            });
            const prev = document.getElementById('prev');
            prev.addEventListener('click', ()=>{
                let target = currentIndex - 1;
                if(target < 0){
                    target = images.length -1;
                }
                document.querySelectorAll('.thumbnails > li')[target].click();
            });
            
            const back = document.getElementById('back');
            back.addEventListener('click',() =>{
                let target = currentIndex[0];
                target = 0;
                
    document.querySelectorAll('.thumbnails > li')[target].click();
    });



    let timeoutId;

    function playSlideshow(){
        timeoutId = setTimeout(() =>{        
        next.click();
            playSlideshow();
        },2000);
    }



    let isPlaying = false;


    const play =document.getElementById('play');
    play.addEventListener('click', ()=>{
        if(isPlaying === false){
        playSlideshow();
        play.textContent = 'pause';
    }else{
        clearTimeout(timeoutId);
        play.textContent = 'play';
        
        }
        isPlaying = !isPlaying;
    });





}

