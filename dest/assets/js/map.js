function init() {
  var latlng = new google.maps.LatLng(35.676272,139.6404296);
  var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), myOptions);

	var styledMapOptions = { name: 'EIFUKU' }

	var styleOptions = [
  {
    "stylers": [
      { "invert_lightness": true },
      { "hue": "#003bff" }
    ]
  }
	]

  var markerOptions = {
    position: latlng,
    map: map,
  };

  var marker = new google.maps.Marker(markerOptions);

	var type = new google.maps.StyledMapType(styleOptions, styledMapOptions);
	map.mapTypes.set('eifuku', type);
	map.setMapTypeId('eifuku');
};
