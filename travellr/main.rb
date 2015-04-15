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

get '/trip' do
  trip_id = params[:id]
end

get '/api/trip' do
  content_type :json
  trip = Trip.find_by(id: params[:id])
  trip.to_json
end

get '/api/place' do
  content_type :json
  place = Place.find_by(id: params[:id])
  place.to_json
end

get '/api/location' do
  content_type :json
  location = Location.find_by(id: params[:id])
  location.to_json
end

post '/api/trip' do
  content_type :json
  trip_created = Trip.create({
    :name => params[:name]
  })
  trip_created.to_json
end

post '/api/place' do
  content_type :json
  place_created = Place.create({
    :trip_id      => params[:trip_id],
    :arrival      => params[:arrival],
    :departing    => params[:departing],
    :accomodation => params[:accom],
    :stuff_to_do  => params[:todo] 
  })
  place_created.to_json
end

post '/api/location' do
  content_type :json
  location_created = Location.create({
    :place_id      => params[:place_id],
    :latitude      => params[:latitude],
    :longitude     => params[:longitude],
    :street_number => params[:street_num],
    :route         => params[:route],
    :locality      => params[:locality],
    :admin_area    => params[:admin_area],
    :country       => params[:country],
    :full_address  => params[:full_address],
    :post_code     => params[:post_code]
  })
  location_created.to_json
end

delete '/api/trip' do
  trip = Trip.find_by(id: params[:trip_id])
  user.destroy
end
