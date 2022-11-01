$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .toggleClass()は、指定されているclass(ここではactive)をトゲル処理するメソッド。
    // トゲル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加される。
    // <a class="menu-trigger" href="#"> aタグのclassにはmenu-triggerが指定され、activeは指定されていない。
    // toggleClass()を設定すると、アイコンがクリックされた時にactiveクラスが追加され、もう一度クリックすると削除される。
    $(this).toggleClass('active');
    // .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド。ハンバーガーメニューを開いた時の状態を設定。
    // #sp-menuが開いた時に、.fadeToggle()が処理されるように設定。
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});