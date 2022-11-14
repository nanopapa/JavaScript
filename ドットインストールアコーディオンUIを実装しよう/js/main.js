
'use strict';

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if(dt !== el){
            el.parentNode.classList.remove('appear');
            // 他の要素（dt）が選択された場合、他のappearクラスを取り除き、回答を複数出さないようにする
        }
      });
    });
  });
}