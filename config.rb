require 'active_record'

ActiveRecord::Base.establish_connection(ENV['HEROKU_POSTGRESQL_WHITE_URL'] || 'postgres://localhost/travellr')
