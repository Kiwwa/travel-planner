ActiveRecord::Base.establish_connection({
  :adapter => 'postgresql',
  :database => 'HEROKU_POSTGRESQL_WHITE_URL'
})
