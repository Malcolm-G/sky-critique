class User < ApplicationRecord

    # Associations
  has_many :bookings
  has_many :flights, through: :bookings
  has_many :reviews
  has_many :flights, through: :reviews

  # Validations
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true

  # Password management
  has_secure_password
   
end
