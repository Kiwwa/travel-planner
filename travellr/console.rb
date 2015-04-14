require 'pry'
require 'active_record'

require_relative 'location'
require_relative 'place'
require_relative 'trip'
require_relative 'config'

ActiveRecord::Base.logger = Logger.new(STDERR)

binding.pry
