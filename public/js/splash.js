var trip = {
  places: [],
  trip_id: -1,
  trip_name: undefined,
  createTrip: function() {
    
    // POST call to /api/trip to generate trip
    // conditional on trip not currently having a trip_id set (unset = -1)
    if (trip.trip_id === -1) {
      constructed_trip = $.ajax({
        url: '/api/trip',
        type: 'POST',
        data: {},
        success: function(data, textStatus, jqXHR) {
          trip.trip_id = data.id;
          console.log('trip success')
        }
      });
    }
  },
  storePlace: function(loc) {
    // Store a place (along with location) and associate 
    // it with the current 'trip'
    
    constructed_place = $.ajax({
      url: "/api/place",
      type: "POST",
      data: {
        trip_id: trip.trip_id,
      },
      success: function(data, textStatus, jqXHR) {
        trip.places.push(data.id);
        console.log('place success');
        contructed_location = $.ajax({
          url: "/api/location",
          type: "POST",
          data: {
            latitude: loc.latitude,
            longitude: loc.longitude,
            street_number: loc.street_number,
            route: loc.route,
            locality: loc.locality,
            admin_area: loc.administrative_area_level_1,
            country: loc.country,
            post_code: loc.postal_code,
            full_address: loc.full_address,
            place_id: data.id
          },
          success: function(data, textStatus, jqXHR) {
            console.log('location success');
            places_obj.resetLocation();
          }
        });
      }
    });
  },
}

function loc_add_btn_press() { 
  trip_created = trip.createTrip();
  
  $("#mobile-content-container").fadeIn("slow");
  $("#mobile-content-button").fadeIn("slow");

  $("#mobile-content-button").click(function() {
    window.location = window.location.pathname + "/trip?id=" + trip.trip_id;
  });

  // TODO: implement this with a javascript "promise"
  setTimeout(function(){ 
    trip.storePlace(places_obj); 
  }, 200);

  var $autocomp = $('#autocomplete');
  $('#mobile-content-container ul').append("<li>" + $autocomp.val());
  $('#mobile-content-container ul').append("<li>" + "<img src='/img/arrow-down.png'>");
  $autocomp.val('');
}
