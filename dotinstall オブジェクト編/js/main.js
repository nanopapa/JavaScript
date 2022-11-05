'use strict';

/*
================================================================
配列を作ってみよう
================================================================
*/
// {
// const score1 =80;
// const score2 =90;
// const score3 =40;

// const scores = [80,90,40];
// console.log(scores);
// 同じデータを一元管理
// }

/*
================================================================
配列の要素にアクセスしよう
================================================================
*/
// {

//     const scores = [80,90,40];
//     console.log(scores[1]);

//     // 値の変更
//     scores[2] = 44;
//     console.log(scores);
//     // constで定義した定数でできないのはscore=10;といったようなscoresそのものへの再代入であって
//     // 配列の要素への代入はできる。

//     console.log(scores.length);
// }



/*
================================================================
配列とループ処理を組み合わせよう
================================================================
*/

// {
    // const scores = [80,90,40,70];  

    // console.log(`Score: ${scores[0]}`);
    // console.log(`Score: ${scores[1]}`);
    // console.log(`Score: ${scores[2]}`);
    
    // for(let i = 0;i <3; i++){
    // for(let i = 0;i< scores.length; i++){
        // 配列の数が変更する度、i<3;などど変更するのは面倒なので、i<scores.lengthなどとしておくと
        // 数に柔軟に対応できる

        // console.log(`Score ${i}: ${scores[i]}`);
    // }
// }


/*
================================================================
配列の要素を変更してみよう
================================================================
*/
/*
{

    const scores = [80,90,40,70]; 
    scores.push(60,50);
    scores.shift();
    //90,40,70,60,50

    unshift() 先頭から要素を追加する
    push() 末尾から要素を追加する
    shift() 先頭から要素を削除する
    pop() 末尾から要素を削除する
    
    for(let i = 0;i< scores.length; i++){
        console.log(`Score ${i}: ${scores[i]}`);
    }
        
}
*/

/*
================================================================
splice()で配列を変更してみよう
================================================================
*/
// splice 途中の要素を操作できる

// splice(変化が開始する位置,削除数)
// splice(変化が開始する位置,削除数,追加する要素)
// {

//     const scores = [80,90,40,70]; 
//     scores.splice(1,1,40,50);//80,40,50,40,70

// for(let i = 0;i< scores.length; i++){
//         console.log(`Score ${i}: ${scores[i]}`);
//     }
// }

/*
================================================================
スプレット構文を使ってみよう
================================================================
*/

// {
//     // const otherScores = [10,20]; 
//     // const scores = [80,90,40,70, otherScores];
//     // console.log(scores); 
//     // この記述だと配列の中に別の配列が出来てしまう
//     // 80,90,40,70,10,20と表示したい


//     const otherScores = [10,20]; 
//     const scores = [80,90,40,70, ...otherScores];
//     // console.log(scores); 

//     function sum(a,b){
//         console.log(a + b);
//     }
//     sum(...otherScores);
//     // sum(10,20);
// }

/*
================================================================
分割代入を使ってみよう
================================================================
*/
/*
{
        const scores = [80,90,40,70]; 
        // const[a,b,c,d] = scores;
        // console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);
        // 値を別々の定数にした

        // const[a,b,...others] = scores;
        // console.log(a);
        // console.log(b);
        // console.log(others);
        // a,bを定数にして、残りを配列として残しておきたい

let x = 30;
let y = 70;
[x,y] = [y,x];
console.log(x);
console.log(y);
}

*/


/*
================================================================
forEach()を使ってみよう
================================================================
*/

// forEachを使えばforよりもスッキリと、数を気にせず書くことができる

/*
{
    const scores = [80,90,40,70]; 
    
    // scores.forEach((score) => {
        scores.forEach((score,index) => {
            console.log(`Score${index}: ${score}`);
        });
    }
    */

/*
================================================================
map()を使ってみよう
================================================================
*/    

/*
// 配列に何らかの処理をして、その結果を別の配列として取得したい

{
    const prices = [180,190,200]; 
    
    //    const updatePrices =  prices.map((price) =>{
        //     return + 20;
        //     });
        
        const updatePrices =  prices.map(price => price + 20);
        console.log(updatePrices);
    }
    */    


/*
================================================================
filter()を使ってみよう
================================================================
*/    
// 配列の要素をチェックして、条件にあうものだけを抽出して別の配列として取得することができる filter()

// {
//     const numbers = [1,4,7,8,10];

//    const evenNumbers = numbers.filter(number =>{
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }

// });
//    const evenNumbers = numbers.filter( number => number % 2 === 0);


// console.log(evenNumbers);
// }


/*
================================================================
オブジェクトを使ってみよう
================================================================
*/    

/*
{
    // const point = [100,180];
    
    // const point = {x:100, y:180};
    const point = {
        x:100,
        y:180,
    };
    console.log(point);
}

各名称
// x:100 → プロパティ
↓
x →　名前（キー）
 x →　値
 
 */    


 /*
 ================================================================
 プロパティを操作してみよう
 ================================================================
 */    

/*
const point ={

    x:100,
    y:180,
};

point.x=120;
// point['x'] = 120;

console.log(point.x);
console.log(point['y']);
// 出力の方法はどちらでもよい

point.z = 90;
delete point.y;
// 要素を削除
console.log(point);
*/    


 /*
================================================================
オブジェクトを操作してみよう
================================================================
*/    
// const otherProps = {
//     r:4,
//     color:'red',
// }
// const point ={

//     x:100,
//     y:180,
//     ...otherProps,
// };

// console.log(point);

// const {x,r, ...others}= point;
// console.log(x);
// console.log(r);
// console.log(others);

 /*
================================================================
Object.keys()を使ってみよう
================================================================
*/    
// プロパティだけを出したい

// const point ={

//     x:100,
//     y:180,

// };

// // const keys = Object.keys(point);
// // keys.forEach(key => {
// //     console.log(`key: ${key} Value: ${point[key]}`);//x,yのみを出力
// // });

// const points = [
//     {x:30, y :20},
//     {x:30, y :50},
//     {x:30, y :40},
// ];
// console.log(points[1].y);//50

 /*
================================================================
変数を代入してみよう
================================================================
*/    

// {
    // let x =1;
    // let y = x;
    // x =5;
    // console.log(x); //5
    // console.log(y); //1

    // let x =[1,2];
    // let y = x;
    // x[0] =5;
    // console.log(x); //[5,2]
    // console.log(y); //[5,2]→　なぜ[5,1]ではないのか
// }
// y=x とすると、xに割り当てた値ではなくて、xの値がどこに格納されているかという情報だけが
// 作られて、そこにyという名前がつくという仕組みになっている


// {
//     // let x =1;
//     // let y = x;
//     // x =5;
//     // console.log(x); //5
//     // console.log(y); //1

//     let x =[1,2];
//     let y = [...x];//...xとすることによって、yにはxの値がある場所ではなくて[1,2]という値
//     // そのものが代入される
//     x[0] =5;
//     console.log(x); //[5,2]
//     console.log(y); //[1,2]
// }


 /*
================================================================
文字列を操作してみよう
================================================================
*/    

// {
// const str = 'hello';

// console.log(str.length);

// // str.substring(開始位置,終了位置);
// // 一部の文字列を表示する
// console.log(str.substring(2,4));

// console.log(str[1]);
// }


/*
================================================================
join(),split()を使ってみよう
================================================================
*/    
// {
//     const d = [2019,11,14];

//     console.log(d.join('/'));//2019/11/14
//     // join 文字を連結させる。引数に入れることで結合するときの文字列を渡してあげることが可能

//     const t = '17:08:24';
//     console.log(t.split(':'));//["17","08","24"]
//     // split joinとは逆に、文字列を区切り文字のところで分割して、それを配列にしたいときに使う
//     const[hour,minute,second]= t.split(':');
//     console.log(hour);
//     console.log(minute);
//     console.log(second);
// }


 /*
================================================================
数値を操作してみよう
================================================================
*/  

// {
//     const scores = [10,3,9];

//     let sum = 0;
//     scores.forEach(score => {
//         sum += score;
//     });

//     const avg = sum/ scores.length;

//     console.log(sum);
//     console.log(avg);

//     console.log(Math.floor(avg));//7
//     // Math.floor 小数点以下切り捨て

//     console.log(Math.ceil(avg));//8 
//     // Math.ceil 小数点以下切り上げ 
    
//     console.log(Math.round(avg));//7 
//     // Math.round 四捨五入
    
//     console.log(avg.toFixed(3));//7.333 
//     // Math.round 指定した小数点まで表示
    
//     console.log(Math.random());
//     Math.random 乱数
        // 0以上1未満の数値がランダムで生成
// }


 /*
================================================================
ランダムな整数値を作ってみよう
================================================================
*/  
// {
    // console.log(Math.random());
//     // // 0以上1未満の数値がランダムで生成
//     // 0,1,2
//     // Math.floor(Math.random() * 3)
//     // // 0以上3未満の範囲になる
    
//     // //0,...,n
//     // Math.floor(Math.random() * (n +1))
    
//     // min,...,max
//     // Math.floor(Math.random() * (max + 1 - min)) + min
    


//     サイコロの作り方
//     console.log(Math.floor(Math.random() * 6) + 1);
    


// }

 /*
================================================================
現在日時を扱ってみよう
================================================================
*/  

{
    // const d = new Date();
    // // new Date 現在日時を表示できる
    // // console.log(d);
    // console.log(`${d.getMonth() + 1}月${d.getDate()}日`);

    // d.getFullYear(); 2019
    // d.getMonth(); 0-11(Jan:0, Feb:1,)
    // d.getDate();  1-31
    // d.getDay(); 0-6(Sun:0, Mon:1)
    // d.getHours();0-23
    // d.getMinutes();0-59
    // d.getSeconds();0-59
    // d.MillSeconds();0-999 1ms =1/1000 sec

    // getTime() UTCという世界共通時間が表示される
}


 /*
================================================================
特定の日時を扱ってみよう
================================================================
*/  

// {
//         const d = new Date(2019,10); //2019/11/01 00:00:00
//         d.setHours(10,20,30); //2019/11/01 10:20:30
//         d.setDate(d.getDate() + 3);//2019/12/01 10:20:30
//         console.log(d);
// }


 /*
================================================================
alert(),confirm()を使ってみよう
================================================================
*/  
// {
//     // alert('jhello');警告を出す
//     //confirm('削除しますか？');確認をする
    
//     const answer =  confirm('削除しますか？');

//     if(answer){
//         console.log('削除しました');
//     }else {
//             console.log('キャンセルしました');
//         }
    
// }



 /*
================================================================
setInterval()を使ってみよう
================================================================
*/  

    // setInterval タイマー機能

// {

//     let i = 0;
    
//     function showTime(){
//         console.log(new Date());

//         i++;
//         if(i > 2){
//             clearInterval(intervalID);
//         }
//     }

//  const intervalID =  setInterval(showTime,1000);
//  1秒ごとに実行する
// }

 /*
================================================================
setTimeout()を使ってみよう
================================================================
*/  

// setTimeout(); 一度だけ処理を繰り返す
// 下記のように記述すれば、複数回処理することも可能

// {
//     let i = 0;

//     function showTime(){
//         console.log(new Date());
//         const timeoutId = setTimeout(showTime, 1000);
//         i++;
//         if(i>2){
//             clearTimeout(timeoutId);
//         }
//     }

//     showTime();

// }


 /*
================================================================
例外処理を使ってみよう
================================================================
*/  

// {
    // const name = 'taguchi';

    // console.log(name.toUpperCase());
    // console.log('Finish!');
    
    // toUpperCase 文字列を大文字にする


// const name = 5;

// try{

//     console.log(name.toUpperCase());
    
// }catch(e){
//     console.log(e);
// }

// console.log('Finish!');
// }


// 想定外のエラー、今回の場合は文字列を数値に入れ替えた場合
// その他、ネットワークがつながらない、ハードウェアが故障した場合などで例外が発生する。
// それでも処理を止めたくない場合はtry,catchで処理をそのまま続けることができる


 /*
================================================================
オブジェクトが複数ある場合を考えよう
================================================================
*/  
// {
//     const posts = [
//         {
//             text: 'JavaScriptの勉強中',
//             likeCount: 0,
//         },    
//         {
//             text: 'プログラミング楽しい！',
//             likeCount: 0,
//         },
        
//     ];
//         function show(post){
//             console.log(`${post.text} - ${post.likeCount}いいね`);
//         }

//     show(posts[0]);


// }


 /*
================================================================
メソッドを使ってみよう
================================================================
*/  

// {
//     const posts = [
//         {
//             text: 'JavaScriptの勉強中',
//             likeCount: 0,
//             show(){
//                 console.log(`${this.text} - ${this.likeCount}いいね`);
//             }
//         },    
//         {
//             text: 'プログラミング楽しい！',
//             likeCount: 0,
//             show(){
//                 console.log(`${this.text} - ${this.likeCount}いいね`);
//             }
//         },
        
//     ];

//         // show(posts[0]);
//         posts[0].show();
//         posts[1].show();


// }

// this -同じオブジェクト内のプロパティにアクセスする
//　メソッド -関数をプロパティの値にする事


 /*
================================================================
クラスの概念を理解しよう
================================================================
*/  


// {

//     class Post{
//         constructor(text){ //constructorでプロパティを初期化
//             this.text = text,
//             this.likeCount = 0;
//         }

//         show(){
//             console.log(`${this.text} - ${this.likeCount}いいね`);
//         }
//     }

//         // クラスを作ってコンポーネント化する
//         // 今回はテキスト部分とカウント数を、ポストごとに違う表示にしたい
    

//     const posts = [
//         new Post('Javascriptの勉強中'),
//         new Post('プログラミング楽しい'),
        
//     ];

//         // show(posts[0]);
//         posts[0].show();
//         posts[1].show();


// }


 /*
================================================================
カプセル化を理解しよう
================================================================
*/  

    // {

    //     class Post{
    //         constructor(text){ //constructorでプロパティを初期化
    //             this.text = text;
    //             this.likeCount = 0;
    //         }
    
    //         show(){
    //             console.log(`${this.text} - ${this.likeCount}likes`);
    //         }

    //         like() {
    //             this.likeCount++;
    //             this.show();
    //         }
    //     }

    //     const posts = [
    //         new Post('Javascriptの勉強中'),
    //         new Post('プログラミング楽しい'),
            
    //     ];
    
    //         posts[0].like();
    //         // show(posts[0]);
    //         // posts[0].show();
    //         // posts[1].show();
    
    
    // }
    

/*
================================================================
静的メソッドを使ってみよう
================================================================
*/  

//  {

//         class Post{
//             constructor(text){ //constructorでプロパティを初期化
//                 this.text = text;
//                 this.likeCount = 0;
//             }
    
//             show(){
//                 console.log(`${this.text} - ${this.likeCount}likes`);
//             }

//             like() {
//                 this.likeCount++;
//                 this.show();
//             }

//             static showInfo(){
//                 console.log('Post class version 1.0');
//                 //静的メソッド- インスタンスを介さずに直接クラスから呼び出せる
//                 //thisを使えない
//         }
//         }

//         const posts = [
//             new Post('Javascriptの勉強中'),
//             new Post('プログラミング楽しい'),
            
//         ];
    
//             // posts[0].like();
//             // show(posts[0]);
//             // posts[0].show();
//             // posts[1].show();
    
//         Post.showInfo();
//     }
    

    /*
================================================================
クラスを拡張したい場合を考えよう
================================================================
*/  

//    {

//         class Post{
//             constructor(text){ //constructorでプロパティを初期化
//                 this.text = text;
//                 this.likeCount = 0;
//             }
    
//             show(){
//                 console.log(`${this.text} - ${this.likeCount}likes`);
//             }

//             like() {
//                 this.likeCount++;
//                 this.show();
//             }
//         }

//         class SponsoredPost{
//             constructor(text,Sponsor){ //constructorでプロパティを初期化
//                 this.text = text;
//                 this.likeCount = 0;
//                 this.Sponsor = Sponsor;
//             }
    
//             show(){
//                 console.log(`${this.text} - ${this.likeCount}likes`);
//                 console.log(`... sponsored by ${this.Sponsor}`);
//             }

//             like() {
//                 this.likeCount++;
//                 this.show();
//             }
//         }

//         const posts = [
//             new Post('Javascriptの勉強中'),
//             new Post('プログラミング楽しい'),
//             new SponsoredPost('3分動画でマスターしよう','dotinstall'),
            
//         ];
    
//             posts[0].like();
//             // show(posts[0]);
//             // posts[0].show();
//             // posts[1].show();
//             posts[2].show();
//             posts[2].like();
    
//     }
    

        /*
================================================================
クラスを継承してみよう
================================================================
*/  

// extends クラスを継承する


{
    class Post{//親クラス
                    constructor(text){ //constructorでプロパティを初期化
                        this.text = text;
                        this.likeCount = 0;
                    }
            
                    show(){
                        console.log(`${this.text} - ${this.likeCount}likes`);
                    }
        
                    like() {
                        this.likeCount++;
                        this.show();
                    }
                }




    class SponsoredPost extends Post{//子クラス
        constructor(text,Sponsor){ //constructorでプロパティを初期化
            super(text);
            // 子クラスのconstructor()でthisを使うにはconstructorの最初でsuper()とする
            this.Sponsor = Sponsor;
        }

        show(){
            console.log(`${this.text} - ${this.likeCount}likes`);
            console.log(`... sponsored by ${this.Sponsor}`);
        }

        like() {
            this.likeCount++;
            this.show();
        }
    }

    const posts = [
        new Post('Javascriptの勉強中'),
        new Post('プログラミング楽しい'),
        new SponsoredPost('3分動画でマスターしよう','dotinstall'),
        
    ];

        posts[0].like();
        // show(posts[0]);
        // posts[0].show();
        // posts[1].show();
        posts[2].show();
        posts[2].like();

}




