class Flight < ApplicationRecord
  belongs_to :origin_airport, class_name: 'Airport', foreign_key: 'origin_id'
  belongs_to :destination_airport, class_name: 'Airport',foreign_key: 'destination_id'
  has_many :bookings
  has_many :passengers, through: :bookings
  has_many :reviews
  belongs_to :origin, class_name: "Airport"
  belongs_to :destination, class_name: "Airport"


  validates :name, presence: true
  validates :duration, presence: true, numericality: { greater_than: 0 }


  validates :image_url, presence: true
end

