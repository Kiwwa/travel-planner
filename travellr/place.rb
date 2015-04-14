class Place < ActiveRecord::Base
  dependent: :destroy
end
