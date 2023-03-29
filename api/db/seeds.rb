# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Booking.create([{flight_id: 1, passenger_name: "John Doe", passenger_email: "john.doe@example.com"}, {flight_id: 2, passenger_name: "Jane Smith", passenger_email: "jane.smith@example.com"}, {flight_id: 3, passenger_name: "Bob Johnson", passenger_email: "bob.johnson@example.com"}])