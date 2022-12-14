$(function(){
  // #back内のaタグがクリックされた時の処理
  // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される。
  // id="back"内のaタグがクリックされた時に、処理が行われるように記述している。
  // eventはイベントオブジェクトというもので、今回はclickイベントが発生した際の様々な情報をeventという名前の引数に渡されます。
  $('#back a').on('click',function(event){
    // ページ全体に対して処理を実行したいので、セレクタには、$('body,html')が設定されている。「body要素またはhtml要素」の意味。
    $('body, html').animate({ // animate()は、アニメーション効果を設定するjQueryの関数です。
      scrollTop:0　　　　　　 // scrollTopは、スクロールの位置を取得できるメソッド。
    },800);　　　　　　　　　 // アニメーションの動作時間。「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味。
    event.preventDefault();   // aタグの機能を無効にするメソッド。
  });
});