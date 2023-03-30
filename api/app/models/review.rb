class Review < ApplicationRecord
    # Associations
   belongs_to :user
   belongs_to :flight
 
   # Validations
   validates :flight_id, presence: true
   validates :user_id, presence: true
   validates :rating, presence: true, inclusion: { in: 1..5 }
   validates :comment, presence: true, length: { maximum: 500 }
 

end
