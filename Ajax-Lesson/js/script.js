const API_KEY = "取得したAPIキー";

$(function() {
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    // $.ajax()は、Ajaxを実装するメソッド。オプション（パラメーター）も設定可能。
    $.ajax({
      // url:では、APIにリクエストするURLを指定。
      // $('#cityname').val()では、#citynameの値を受け取り、URLを結合させている。val()は、HTMLのvalue属性を取得するメソッド。
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      // dataTypeでは、レスポンスとして取得したいデータの型を指定。
      dataType : 'jsonp',
      // 通信成功
    }).done(function (data){
      // $('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換される。
      $('#place').text(data.name);               // 位置
      $('#temp_max').text(data.main.temp_max);   // 最高気温
      $('#temp_min').text(data.main.temp_min);   // 最低気温
      $('#humidity').text(data.main.humidity);   // 湿度
      $('#speed').text(data.wind.speed);         // 風速
      $('#weather').text(data.weather[0].main);  // 天気
      // $(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加され、天気のアイコンを表示することが可能。
      // アイコンを取得するURLは、http://openweathermap.prg/img/w/"アイコン名".png
      $('img').attr("src","http://openweathermap.prg/img/w/" + data.weather[0].icon + ".png");  // 天気アイコン
      $('img').attr("alt",data.weather[0].main);
      // 通信失敗
    }).fail(function (data){
      alert('通信に失敗しました。');
    });
  });
});