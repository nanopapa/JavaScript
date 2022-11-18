// 日本語では交差監視APIと呼ばれる。ある要素を監視して、その要素がスクロールして特定の領域に入ってきたときに
// どれだけその領域と交差したかを調べることができる

// 監視する要素→target
// 交差していく領域→root
// targetがどのくらいrootと交差したかの割合→Intersection Ratio

'use strict';

{
const targets = document.querySelectorAll('img');

function callback(entries,obs){
    console.log(entries);

entries.forEach(entry =>{
    if(!entry.isIntersecting){
        return;
    }

    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
    // unobserve監視を止めることができる
});



// if(entries[0].isIntersecting){
//     entries[0].target.classList.add('appear');
// }else{
//     entries[0].target.classList.remove('appear');
// }
}

const options = {
    threshold:0.2,
    // rootMargin:'0px 0px -100px',
    //threshold→ターゲットがルートに交差する場所を決めることができる。
};

const observer = new IntersectionObserver(callback,options);

    targets.forEach(target =>{
        observer.observe(target);

    });
}

