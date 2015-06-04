Travellr - Vagabond without worry.
==================================

Travellr assists in the planning of a long-term, multi-location holiday/exploration by asking questions designed to ensure no important detail is missed.

Quickstart
----------
Visit https://travellrr.herokuapp.com and enter some cities! :)

Cool Tech
---------

* Database Trip Keys are pseudo-randomly generated, rather than sequential - [explaination](http://blog.joevandyk.com/2013/04/18/generating-random-ids-with-postgresql/)
* Location HASMANY Places HASONE Location; the assignment of these via AJAX is kind of cool (the logic that keeps the otherwise asynchronous requests in order)
* Google-Maps and Google-Places integration
* Mobile-first design principle

API Access
----------

The subdomain '/api/' is used for all API access. There is no rate limiting, however as it is hosted on a basic-Heroku-dyno any significant use (more than a few concurrent users) will cause significant lag/break the API and perhaps the entire app.

Google Maps API's/Samples of use:

* https://developers.google.com/maps/documentation/staticmaps/
* https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform

Examples of Google Maps Static API calls:

* https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=11&size=600x300
* https://maps.googleapis.com/maps/api/staticmap?center=Sydney,NSW&zoom=13&size=600x300

Trips, Places and Locations can be accessed via GET requests to /api/;

* localhost:4567/api/trip/?id=123
* localhost:4567/api/place/?id=123
* localhost:4567/api/location/?id=123

Data can be added to the database via POST requests to /api/;

Trip args: name
Place args: trip_id, arrival, departing, accom, todo
Location args: place_id, latitude, longitude, street_num, route, locality, admin_area, country, full_address, post_code

Trips can be deleted from the database via DELETE requests to /api/;

* localhost:4567/api/trip?id=123

Trips and Places can be updated via the PUT requests to /api/;

* localhost:4567/api/trip?trip_id=123?name=cool%20stuff
* Place args; arrival=x, departing=x, accom=x, todo=x

Technology Use
--------------

* Ruby
* Sinata
* Javascript
* Postgres
* AJAX'ie requests
* Horribly built CSS

Still To Do
-----------

Access the planner - [Planner](https://trello.com/b/vcL9kalG/travel-planner-app)

Style Issues -

* Create non-mobile styling
* Place entry-bar on splash page
* Multiple styling issues for non-Chrome browsers
* Mobile app input fields need to be MUCH more usable
* Better context for saving and deleting places

Logic issues -

* GPS "center"/"average" coords need to be calculated for guaranteed correct map viewing (aside from unsolvable edge-cases)
* Dealing with the "tied together" nature of the series of AJAX calls; async nature makes this difficult, JS-promises will help alieviate?

Spec Built For
--------------
https://gist.github.com/epoch/26528ddb95e2bcf52a49
