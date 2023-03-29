class AddPassengerEmailToBooking < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :passenger_email, :string
  end
end
