google.load("maps", "3.x", {"other_params":"sensor=false"});

//マップの初期設定
function initialize() {

//マップの中心座標
  var myLatLng = new google.maps.LatLng(35.6745,139.645);

//マップの設定オプション
  var myOptions = {
    zoom: 14,                                 //ズームレベル
    center: myLatLng,                         //中心座標
    mapTypeId: google.maps.MapTypeId.ROADMAP  //マップタイプ
  };

  map = new google.maps.Map(document.getElementById("map"), myOptions);
  /*アイコン設定▼*/
var icon = new google.maps.MarkerImage('/dist/assets/images/pin_eifuku.png',
  new google.maps.Size(100,60),/*アイコンサイズ設定*/
  new google.maps.Point(0,0)/*アイコン位置設定*/
  );
var markerOptions = {
  position: myLatLng,
  map: map,
  icon: icon,
  title: 'Eifuku Cipher'
};
var marker = new google.maps.Marker(markerOptions);
　/*アイコン設定ここまで▲*/
//map style
var styleOption =[{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFCC00"},{"lightness":20},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"},{"color":"#cc2626"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#3b3838"},{"lightness":"-57"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#de2121"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#68cadb"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#00c9ff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#19bad2"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#19bad2"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#19bad2"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#19bad2"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0b00ff"},{"lightness":17},{"visibility":"off"}]}];

var styledMapOptions = { name: 'Eifuku cipher' }
  var sampleType = new google.maps.StyledMapType(styleOption, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
  //作成したマップの呼び出し
google.setOnLoadCallback(initialize);
