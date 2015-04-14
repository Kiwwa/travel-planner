require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require 'active_record'

require_relative 'location'
require_relative 'place'
require_relative 'trip'
require_relative 'config'

get '/' do
  erb :index
end

get '/testing' do
  trip_created = Trip.create({
    name: 'Test Trip'
  })

  place_created = Place.create({
    trip_id:      trip_created.id,
    arrival:      "15/01/2014",
    departing:    "17/01/2014",
    accomodation: "Hotel California",
    stuff_to_do:  "Such a loveeely place." 
  })

  location_created = Location.create({
    place_id:      place_created.id,
    latitude:      37.795284,
    longitude:     144.95756299999994,
    street_number: 57,
    route:         "Royal Parade",
    locality:      "Parkville",
    admin_area:    "VIC",
    country:       "Australia",
    post_code:     3052
  })

  @test_trip = trip_created
  @test_place = place_created
  @test_location = location_created
  erb :testing
end
