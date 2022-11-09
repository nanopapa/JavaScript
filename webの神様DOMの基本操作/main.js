'use strict';

// メソッドは関数と同じようなもの

// オブジェクトとメソッドの関係

// const myBlog ={
//     title:'JavaScriptがんばるぞブログ',
//     author: 'Webの神太郎'
// };

// console.table(myBlog);
// console.log(myBlog.title); 

/*
================================================================
================================================================
*/

// const myBlog ={
//     title:'JavaScriptがんばるぞブログ',
//     author: 'Webの神太郎',
//     // プロパティ

//     addPost: ()=> {
//         console.log('記事を投稿したよ！');
//     },
//     deletePost: () => {
//         console.log('記事を削除したよ！');
//     }
//     // メソッド→オブジェクトに格納された関数

// };

// // 値を取り出す
// console.log(myBlog.title);

// // メソッドを取り出す
// myBlog.addPost();


/*
================================================================
================================================================
*/

// JavaScriptにもともと用意されているメソッド

// console.log();
// ↑コンソールというオブジェクトからログというメソッドを呼び出している

// コンソールにもいろいろある
// https://developer.mozilla.org/ja/docs/Web/API/console

/*
================================================================
================================================================
*/

// よく使う基本のメソッド紹介

// DOM操作

// document.getElementById();
// document.getElementsByClassName();
// document→HTML全体の文章をさしている

// const btn01 = document.getElementById('btn01');
// console.log(btn01);

// const btn = document.getElementsByClassName('btn');
// console.log(btn);




// クリックイベントの設定

// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click', function(){
//     console.log(this);
// });
// this→クリックされた要素自身を表している
// アロー関数を使うとthisの扱いに変化があるので、ここではアロー関数は使わないのがおススメ。





//クラス名の追加

// ID 「btn01」の要素をひとつだけ取得
// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click', function(){
//     // this.classList.add('clicked');
//     this.classList.toggle('clicked');
// });
// // クリックすると、clickedというクラスが追加され、スタイルが追加される


//     // ダメな例
//     const btn = document.getElementsByClassName('btn');
//     btn.addEventListener('click', function(){
//         this.classList.toggle('clicked');
//     });
    
//     // クラス「btn」をもつ要素を複数個一気にまとめて取得
//     // 複数の要素をまとめたものに対して呼び出してる＿エラー
//     ↓
    // forループを使って複数の要素にクリックイベントを設置する
    // const btn = document.getElementsByClassName('btn');
    // for(let i = 0; 1< btn.length; i++){
    //     btn[i].addEventListener('click', function(){
    //         this.classList.toggle('clicked');
    //     });
    // }

// foreachを使いたい↓

