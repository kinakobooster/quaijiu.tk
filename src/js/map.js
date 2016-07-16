function init(){
  const latlng = new google.maps.LatLng(35.676272,139.6404296);
  const myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  const map = new google.maps.Map(document.getElementById('map'), myOptions);

  const styledMapOptions = { name: 'EIFUKU' }

  const styleOptions = [
  {
    "stylers": [
      { "invert_lightness": true },
      { "hue": "#003bff" }
    ]
  }
  ]

  const markerOptions = {
    position: latlng,
    map: map,
  };
  var marker = new google.maps.Marker(markerOptions);
  var type = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('eifuku', type);
  map.setMapTypeId('eifuku');
};
