class Airport < ApplicationRecord
    # has_many :departing_flights, class_name: 'Flight'
    # has_many :arriving_flights, class_name: 'Flight'
  
    validates :code, presence: true, uniqueness: true
    validates :name, presence: true
end
