// $()関数では、特定の属性を持つ要素や属性値を絞り込むことができる。
// 初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示。
// 属性値が特定の値に等しくない要素だけを取得したいときは、$('要素[属性 != "値"]')
// .hide();は、特定のHTML要素を非表示にするメソッド。
// 以下のように記述することで、id="tab-contents"の要素の内、class="tab"であり、id="tab1"ではない要素が非表示になる。
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  // 「id="tab-menu"のaタグがクリックされた時に、処理を実行してください」の意味。
  $("#tab-contents .tab").hide();
  // id="tab-contents"内のいずれかのタブがクリックされた時に、そのタブ内の全コンテンツを一旦非表示にしている。
  // .remoteClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド。activeが削除対象。
  // タブを切り替える時は、CSS設定も一旦削除しなければいけないため、.remoteClass()にactiveクラスを指定している。
  $("#tab-menu .active").removeClass("active");
  // .addClass()は、任意のHTML要素にクラス属性を追加できるメソッド。activeが対象。
  // activeクラスが追加される時は、タブがクリックされた時。$(this)の時。
  $(this).addClass("active");
  // .attr()は、HTML要素の属性を取得したり設定できるメソッド。href属性を指定。
  // .show()は要素を表示するメソッドなので、取得したhref属性の中身が表示。
  // 表示される時は、タブがクリックされた時。$(this)の時。
  $($(this).attr("href")).show();
  event.preventDefault();
});