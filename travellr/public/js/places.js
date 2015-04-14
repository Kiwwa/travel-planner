var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initialize() {
  // Create the autocomplete object, restricting the search
  // to geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
  /** @type {HTMLInputElement} */ (document.getElementById('autocomplete')), {
      types: ['geocode']
  });
  // When the user selects an address from the dropdown,
  // populate the address fields in the form.
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
      printPlacesOutput();
  });
}

function printPlacesOutput() {
  var place = autocomplete.getPlace();

  console.log(place.geometry.location.lat());
  console.log(place.geometry.location.lng());

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      console.log(val);
    }
  }
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = new google.maps.LatLng(
      position.coords.latitude, position.coords.longitude);

      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      document.getElementById("latitude").value = latitude;
      document.getElementById("longitude").value = longitude;

      autocomplete.setBounds(new google.maps.LatLngBounds(geolocation, geolocation));
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
