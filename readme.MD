Travellr - Vagabond without worry.
==================================

Travellr assists in the planning of a long-term, multi-location holiday/exploration by asking questions designed to ensure no important detail is missed.

Quickstart
----------

API Access
----------

Trips, Places and Locations can be accessed via GET requests to /api/;

* localhost:4567/api/trip/?id=123
* localhost:4567/api/place/?id=123
* localhost:4567/api/place/?id=123

Data can be added to the database via POST requests to /api/;

Trip args: name
Place args: trip_id, arrival, departing, accom, todo
Location args: place_id, lat, lng, street_num, route, locality, admin_area, country, post_code

Trips can be deleted from the database via DELETE requests to /api/;

* localhost:4567/api/trip?id=123

Technology Use
--------------

* Ruby
* Sinata
* Javascript
* Postgres

Google Maps API's/Samples of use:

* https://developers.google.com/maps/documentation/staticmaps/
* https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform

Examples of Google Maps Static API calls:

* https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=11&size=600x300
* https://maps.googleapis.com/maps/api/staticmap?center=Sydney,NSW&zoom=13&size=600x300

Database Trip Keys

* http://blog.joevandyk.com/2013/04/18/generating-random-ids-with-postgresql/

Still To Do
-----------

Planner - https://trello.com/b/vcL9kalG/travel-planner-app

Spec Built For
--------------
https://gist.github.com/epoch/26528ddb95e2bcf52a49
