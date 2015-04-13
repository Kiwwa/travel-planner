function init_map(condition) {
  
  // create the map
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(-37.8142155, 144.96323069999994),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  
  // render the maps
  map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions); 
}

google.maps.event.addDomListener(window, 'load', init_map);
