// Google Places Functions

var places_obj = {
  latitude: null,
  longitude: null,
  street_number: null,
  route: null,
  locality: null,
  administrative_area_level_1: null,
  country: null,
  postal_code: null,
  full_address: null,
  autocomplete: null,
  initialize: function() {
    places_obj.autocomplete = new google.maps.places.Autocomplete(
     (document.getElementById('autocomplete')), {types: ['geocode'] });
    // When the user selects an address from the dropdown,
    // populate the address fields in the form.
    google.maps.event.addListener(places_obj.autocomplete, 'place_changed', function () {
      places_obj.update_places_obj();
    });
  },
  update_places_obj: function() {
    var place = places_obj.autocomplete.getPlace();
    if ( $('#autocomplete').val() !== '' ) {
      places_obj.full_address = $('#autocomplete').val();
      places_obj.latitude  = place.geometry.location.lat();
      places_obj.longitude = place.geometry.location.lng();

      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (places_obj.hasOwnProperty(addressType)) {
          var val = place.address_components[i].long_name;
          places_obj[addressType] = val;
        }
      }
    }
  },
  geolocate: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var geolocation = new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude);

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $("#latitude").val() = latitude;
        $("#longitude").val() = longitude;

        autocomplete.setBounds(new google.maps.LatLngBounds(geolocation, geolocation));
      });
    }
  }
}

google.maps.event.addDomListener(window, 'load', places_obj.initialize);
