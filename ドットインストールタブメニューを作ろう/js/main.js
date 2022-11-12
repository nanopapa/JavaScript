'use strict';

{
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();
            // リンク先にページが遷移するという規定の動作があるが、それをキャンセルしたいので
            // イベントオブジェクト（e）を渡して、preventDefault()を呼ぶ
            // https://qiita.com/yokoto/items/27c56ebc4b818167ef9e
            //要はaタグだけどほかのページに飛ぶなよということ

            menuItems.forEach(item => {
                item.classList.remove('active');
            });

            clickedItem.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });
}