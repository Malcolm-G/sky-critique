class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    # New table called "bookings" with three columns: "flight_id", "user_id", and "date"
    create_table :bookings do |t|
      # Define "flight_id" column as a foreign key that references the "flights" table
      t.references :flight, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :passenger_email
      t.string :passenger_name

      t.timestamps
    end
  end
end