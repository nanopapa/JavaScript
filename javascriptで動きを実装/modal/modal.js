'use strict'
{
/*
================================================================
//1 モーダルで利用するHTMLのbutton要素と、表示・非表示されるモーダル全体のdiv要素を取得する
================================================================
*/


const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');

/*
================================================================
// モーダルが表示されたままになっているので、CSSにて非表示
================================================================
*/


// modal.css

// .modal-bg {
//   display: none;  /* ここに スタイルを追記。 モーダルを消去する*/
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.8);


/*
================================================================
モーダルの表示・非表示を切り替えるためのchangeModalという関数を作成する

================================================================
*/

// function changeModal(showModal) {
//     if (showModal) {
//       modal.classList.add('show-modal')
//     } else {
//       modal.classList.remove('show-modal')
//     }
//   }

// ↓
function changeModal(showModal){
    modal.classList.toggle('show-modal');
}


// cssに追加

// .show-modal {
//     display: block;
//   }


/*
================================================================
ボタンをクリックするとchangeModal関数を実行するという処理を設定
================================================================
*/

// クリックしたらModalを表示する処理
openBtn.addEventListener('click', function () { changeModal(true)})

// クリックしたらModalを削除する処理
closeBtn.addEventListener('click', function () { changeModal(false)})

modal.addEventListener('click', function () { changeModal(false)})



}
