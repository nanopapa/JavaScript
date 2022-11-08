/*
================================================================
DOMについて理解しよう
================================================================
*/

// DOMとは→Document Object Modelの略

// HTMLを読み込むとDOMと呼ばれるデータ構造が作られて、その内容に応じてページが描画される

// それぞれのデータはNodeと呼ばれ、documentから始まって枝分かれしているので、Nodeツリー（DOMツリー）と呼ばれる

// 改行や字下げもNodeになる。（HTML要素内の先頭と末尾はNodeにならない）


// https://www.javadrive.jp/javascript/dom/index1.html


/*
================================================================
DOMについて理解しよう
================================================================
*/

// {
//     function update(){   
//         // document.querySelector('h1').textContent ='Changed'

//         // document.querySelector('#target').textContent ='Changed'
//         document.getElementById('target').textContent ='Changed'
//         // idを探す場合、どちらを使ってもOK
//     }

//     setTimeout(update,1000);
// }

// querySelector 文書内から特定の要素を取得する。
// .textContent 中身のテキストを表現する
// getElementById IDを取得する


/*
================================================================
複数の要素を取得してみよう
================================================================
*/
// {
//     function update(){
//         // document.querySelector('p').textContent ='Changed';
//         // このままでは、pの最初の要素しか変わらない↓
//         // document.querySelectorAll('p')[1].textContent ='Changed';
//         document.querySelectorAll('p').forEach((p, index) => {
//             p.textContent = `${index}番目のpです！`;
//         });
    
    

//     }
//     setTimeout(update,1000);

// }


/*
================================================================
要素の取得方法を理解しよう
================================================================
*/


// id属性がついていたら　getElementById('target')
// 一つの要素を取得するなら　querySelector('section h1')
// 複数の要素を取得するなら　querySelectorAll('ul > li')

// その他の方法　getelementsByTagName('h1')要素名を指定する
//             getElementByClassName('box')クラス名を指定する


// https://qiita.com/KDE_SPACE/items/e21bb31dd4d9c162c4a6



/*
================================================================
addEventListener()を使ってみよう
================================================================
*/

// {

//         document.querySelector('button').addEventListener('click',() =>{
//     document.getElementById('target').textContent ='Changed';
// });
// }



/*
================================================================
要素の属性を操作してみよう
================================================================
*/


// {

//     document.querySelector('button').addEventListener('click',() =>{
//         const targetNode = document.getElementById('target');
//         targetNode.textContent ='Changed!';
//         targetNode.title ='This is title!';
//         targetNode.style.color ='red';
//         targetNode.style.backgroundColor ='skyblue';
//         // ⬆*CSSのプロパティが-で区切られている場合は使用できない
//         // 区切らず2単語目以降を大文字にしてあげる必要がある
// });
// }


/*
================================================================
ClassNameを操作してみよう
================================================================
*/

// {

//     document.querySelector('button').addEventListener('click',() =>{
//         const targetNode = document.getElementById('target');
    
//             targetNode.className = 'my-color my-border';
// });
// }


/*
================================================================
ClassListを使ってみよう
================================================================
*/

// {

//     document.querySelector('button').addEventListener('click',() =>{
//         const targetNode = document.getElementById('target');
    
//             // targetNode.className = 'my-color my-border';
//             // targetNode.classList.add('my-color');
//             // 既存のクラスの設定にmy-colorを新しく追加してくれる
//             // if(targetNode.classList.contains('my-color') === true){
//             //     targetNode.classList.remove('my-color');
//             // }else{
//             //     targetNode.classList.add('my-color');
//             // }
//             // クリックするたびに、my-colorを開いたり閉じたりできる

//             targetNode.classList.toggle('my-color');
//             // ⬆この1行で出し入れを完結
//         });
// }


/*
================================================================
カスタムデータ属性を扱ってみよう
================================================================
*/

// {
//     document.querySelector('button').addEventListener('click',() =>{
//         const targetNode = document.getElementById('target');
//         // targetNode.textContent='Dotinstall';
//         targetNode.textContent= targetNode.dataset.translation;
//         //  カスタムデータ属性　HTMLにdataから始まっていれば独自の属性を付けられる
//         //  dataset.~~としてあげる 
// });

// }


/*
================================================================
要素を扱ってみよう
================================================================
*/

// {
//     document.querySelector('button').addEventListener('click',() =>{
//         const item2 = document.createElement('li');
//         item2.textContent = 'item 2';
        
//         // const ulNode = document.querySelector('ul');
//         const ul = document.querySelector('ul');
//         ul.appendChild(item2);
        
//     });
// }

// createElement 要素を追加する
// appendChild 子要素を末尾に追加する


/*
================================================================
要素の複製、挿入をしてあげよう
================================================================
*/

// document.querySelector('button').addEventListener('click',() =>{
//     const item0 = document.querySelectorAll('li')[0];
//     const copy =  item0.cloneNode(true);
//     // 要素をコピーする

//     const ul = document.querySelector('ul');
//     const item2 = document.querySelectorAll('li')[2];
//     ul.insertBefore(copy,item2);

//         });
//         //　cloneNode 要素をコピーする
//         // insertBefore 要素の前に挿入する



        /*
================================================================
要素の削除をしてみよう
================================================================
*/

// {
//     document.querySelector('button').addEventListener('click',() =>{
//         const item1 = document.querySelectorAll('li')[1];
//         // item1.remove();
//         // ＊古いブラウザだと使えない
        
//         // 親Node.removeChild(削除するNode)
//         document.querySelector('ul').removeChild(item1);
        
//     });
    
// }


/*
================================================================
input要素を操作してみよう
================================================================
*/
// {
// document.querySelector('button').addEventListener('click',() =>{
//     const li = document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);
//     // inputの中に文字を入力してボタンを押すと、入力した内容がliとして追加される
    
//     text.value =''
//     text.focus();
    
//     // 入力後、テキストの値を空欄にして、フォーカスさせる
// });

// }


/*
================================================================
セレクトボックスを操作してみよう
================================================================
*/

// {
    
//     document.querySelector('button').addEventListener('click',() =>{
    //         const li = document.createElement('li');
    //         const color = document.querySelector('select');
    //         li.textContent = `${color.value} - ${color.selectedIndex}`;
    //         document.querySelector('ul').appendChild(li);
    //     });
    // }
    
    
    /*
    ================================================================
    ラジオボタンを操作してみよう
    ================================================================
    */
//    {
//    document.querySelector('button').addEventListener('click',() =>{
//     const colors =document.querySelectorAll('input');
//     let selectedColor;
    
//     colors.forEach(color => {
//         if(color.checked === true){
//             selectedColor = color.value;
//         }
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);

//     });

//     }


      /*
    ================================================================
    チェックボックスを操作してみよう
    ================================================================
    */
// {
//     document.querySelector('button').addEventListener('click',() =>{
//         const colors = document.querySelectorAll('input');
//         const selectedColors = [];

//         colors.forEach(color => {
//             if(color.checked === true){
//                     selectedColors.push(color.value);
//             }
//         });

//         const li = document.createElement('li');
//         li.textContent=selectedColors.join(',');
//         document.querySelector('ul').appendChild(li);


//     });

// }

      /*
    ================================================================
    いろんなイベントを見てみよう
    ================================================================
    */

    // {
    //     document.querySelector('button').addEventListener('dblclick', () => {
    //         console.log('Double Clicked!');
    //         // ダブルクリックしたらイベント
    //     });

    //     document.addEventListener('mousemove',()=>{
    //         console.log('moved!');
    //         // マウスを動かすとイベント
    //     });

    // }

    
      /*
    ================================================================
    イベントオブジェクトを扱ってみよう
    ================================================================
    */

    // {
    //     // document.querySelector('button').addEventListener('dblclick', () => {
    //     //     console.log('Double Clicked!');
    //     //     // ダブルクリックしたらイベント
    //     // });

    //     // document.addEventListener('mousemove',(e)=>{　//慣例的にeventを示すeが使われることが多い
    //     //     // console.log('moved!');
    //     //     console.log(e.clientX, e.clientY);
    //     //     // マウスを動かすとイベント
    //     //     //マウスの位置（座標）を表示

    //     // });

    //     document.addEventListener('keydown',e=>{
    //         console.log(e.key);
    //         キーを押すと、コンソールに文字を表示            
    //     });

    // }


        /*
    ================================================================
    フォームで使われるイベントを見てみよう
    ================================================================
    */
//     {
//     const text = document.querySelector('textarea');

//     // text.addEventListener('focus', () => {
//     //    console.log('focus'); 
//     // //    フォーカスが当たった時、コンソールにfocusと表示する
//     // });
    
    
//     // text.addEventListener('blur', () => {
//     //     console.log('blur'); 
//     //     // フォーカスが外れた時、コンソールにblurと表示する
//     // });


//     text.addEventListener('input', () => {
//     //    console.log('input'); 
//     //    input 内容が更新されたとき、表示する
//        console.log(text.value.length); 
//        テキストの長さを表示する
//     });
    
    
//     text.addEventListener('change', () => {
//         console.log('change'); 
//         // change 更新が確定したとき、表示する
//     });
// }



       /*
    ================================================================
    フォームを送信してみよう
    ================================================================
    */

    // {
    //     document.querySelector('form').addEventListener('submit',e=> {
    //         e.preventDefault();
    //     console.log('submit');
    //     });
        // ページ遷移すると一瞬テキストが表示されただけで消えてしまう。
        // 既定の動作をキャンセルすることができるprebentDefault()を使ってsubmitを表示し続ける
    // }


           /*
           
    ================================================================
    イベントの伝播を理解しよう
    ================================================================
    */

    // document.querySelector('ul').addEventListener('click',e =>{
    //     if(e.target.nodeName === 'LI'){
    //         e.target.classList.toggle('done');
    //     }
    //     //doneクラスをつけ外しすることにより、打消し線を消したり外したりできる
    // });