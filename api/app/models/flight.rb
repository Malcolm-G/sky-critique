class Flight < ApplicationRecord
    belongs_to :origin_airport, class_name: 'Airport'
  belongs_to :destination_airport, class_name: 'Airport'
  has_many :bookings
  has_many :passengers, through: :bookings
  has_many :reviews


  validates :name, presence: true
  validates :duration, presence: true, numericality: { greater_than: 0 }


  validates :image_url, presence: true
end

