"use strict";

$("#tab1").click(function () {
  $("#cont1").show();
  $("#cont2").hide();

  // タブの色を切り替える。
  $("#tab1").css("background-color", "#0d0322");
  $("#tab2").css("background-color", "#0d030f");
});

$("#tab2").click(function () {
  $("#cont1").hide();
  $("#cont2").show();
  $("#tab1").css("background-color", "#0d0322");
  $("#tab2").css("background-color", "#0d030f");
});

$(".person").click(function () {
  $(this).toggleClass('active');
});
"use strict";

google.load("maps", "3.x", { "other_params": "sensor=false" });

//マップの初期設定
function initialize() {

  //マップの中心座標
  var myLatLng = new google.maps.LatLng(35.6745, 139.645);

  //マップの設定オプション
  var myOptions = {
    zoom: 14, //ズームレベル
    center: myLatLng, //中心座標
    mapTypeId: google.maps.MapTypeId.ROADMAP //マップタイプ
  };

  map = new google.maps.Map(document.getElementById("map"), myOptions);
  /*アイコン設定▼*/
  var icon = new google.maps.MarkerImage('/dist/assets/images/pin_eifuku.png', new google.maps.Size(100, 60), /*アイコンサイズ設定*/
  new google.maps.Point(0, 0) /*アイコン位置設定*/
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
  var styleOption = [{ "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#FFCC00" }, { "lightness": 20 }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }, { "color": "#ff0000" }] }, { "featureType": "landscape.natural", "elementType": "all", "stylers": [{ "visibility": "off" }, { "color": "#cc2626" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#3b3838" }, { "lightness": "-57" }] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }, { "color": "#de2121" }] }, { "featureType": "landscape.natural.terrain", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#68cadb" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#00c9ff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#19bad2" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#19bad2" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#19bad2" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#19bad2" }] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#0b00ff" }, { "lightness": 17 }, { "visibility": "off" }] }];

  var styledMapOptions = { name: 'Eifuku cipher' };
  var sampleType = new google.maps.StyledMapType(styleOption, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
//作成したマップの呼び出し
google.setOnLoadCallback(initialize);
"use strict";

jQuery.easing["jswing"] = jQuery.easing["swing"];jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  }, easeInQuad: function easeInQuad(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  }, easeOutQuad: function easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }, easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;return -c / 2 * (--t * (t - 2) - 1) + b;
  }, easeInCubic: function easeInCubic(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  }, easeOutCubic: function easeOutCubic(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }, easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;return c / 2 * ((t -= 2) * t * t + 2) + b;
  }, easeInQuart: function easeInQuart(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }, easeOutQuart: function easeOutQuart(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }, easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }, easeInQuint: function easeInQuint(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  }, easeOutQuint: function easeOutQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }, easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }, easeInSine: function easeInSine(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }, easeOutSine: function easeOutSine(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }, easeInOutSine: function easeInOutSine(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }, easeInExpo: function easeInExpo(x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }, easeOutExpo: function easeOutExpo(x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }, easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
    if (t == 0) return b;if (t == d) return b + c;if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }, easeInCirc: function easeInCirc(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }, easeOutCirc: function easeOutCirc(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }, easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }, easeInElastic: function easeInElastic(x, t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;if (a < Math.abs(c)) {
      a = c;var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p)) + b;
  }, easeOutElastic: function easeOutElastic(x, t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;if (a < Math.abs(c)) {
      a = c;var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * 2 * Math.PI / p) + c + b;
  }, easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * .3 * 1.5;if (a < Math.abs(c)) {
      a = c;var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);if (t < 1) return -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) + b;return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) * .5 + c + b;
  }, easeInBack: function easeInBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }, easeOutBack: function easeOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }, easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;if ((t /= d / 2) < 1) return c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b;return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }, easeInBounce: function easeInBounce(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  }, easeOutBounce: function easeOutBounce(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * 7.5625 * t * t + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  }, easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  } });
//# sourceMappingURL=all.js.map
