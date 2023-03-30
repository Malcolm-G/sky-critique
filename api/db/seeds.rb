# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Creating seed..."
#create some users
user1=User.create(name: 'Kennedy',email: 'user1@example.com', password: 'password1')
user2=User.create(name: 'Allan',email: 'user2@example.com', password: 'password2')
user3=User.create(name: 'Jack',email: 'user3@example.com', password: 'password3')


# Create origin and destination airports
# lax = Airport.create(code: 'LAX', name: 'Los Angeles International Airport')
# jfk = Airport.create(code: 'JFK', name: 'John F. Kennedy International Airport')
Airport.create([
  { code: 'LAX', name: 'Los Angeles International Airport' },
  { code: 'JFK', name: 'John F. Kennedy International Airport' },
  { code: 'SFO', name: 'San Francisco International Airport' },
  { code: 'ORD', name: 'O\'Hare International Airport' },
  { code: 'DFW', name: 'Dallas/Fort Worth International Airport' },
  { code: 'DEN', name: 'Denver International Airport' },
  { code: 'LAS', name: 'McCarran International Airport' },
  { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport' },
  { code: 'LGA', name: 'LaGuardia Airport' },
  { code: 'SEA', name: 'Seattle-Tacoma International Airport' }
])

# Create some bookings

# Booking.create(user: user1, flight: flight1, passenger_name: 'John Doe', passenger_email: 'john.doe@example.com')
# Booking.create(user: user2, flight: flight2, passenger_name: 'Ray Alan', passenger_email: 'ray.alan@example.com')
# Booking.create(user: user3, flight: flight3, passenger_name: 'Mary Smith', passenger_email: 'mary.smith@example.com')



# create some flights

Flight.create([
  { name: 'Flight 101', origin_id: 1, destination_id: 2, departure_time: DateTime.new(2023, 4, 1, 8, 0), duration: 360, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 102', origin_id: 2, destination_id: 1, departure_time: DateTime.new(2023, 4, 2, 9, 0), duration: 360, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 103', origin_id: 1, destination_id: 3, departure_time: DateTime.new(2023, 4, 3, 10, 0), duration: 300, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 104', origin_id: 3, destination_id: 1, departure_time: DateTime.new(2023, 4, 4, 11, 0), duration: 300, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 105', origin_id: 1, destination_id: 4, departure_time: DateTime.new(2023, 4, 5, 12, 0), duration: 240, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 106', origin_id: 4, destination_id: 1, departure_time: DateTime.new(2023, 4, 6, 13, 0), duration: 240, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 107', origin_id: 1, destination_id: 5, departure_time: DateTime.new(2023, 4, 7, 14, 0), duration: 180, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 108', origin_id: 5, destination_id: 1, departure_time: DateTime.new(2023, 4, 8, 15, 0), duration: 180, image_url: 'https://via.placeholder.com/150' },
  { name: 'Flight 109', origin_id: 2, destination_id: 3, departure_time: DateTime.new(2023, 4, 9, 16, 0), duration: 240, image_url: 'https://via.placeholder.com/150' }
 ])
 Booking.create([{flight_id: 1, user_id: 1, passenger_name: "John Doe", passenger_email: "john.doe@example.com"}, {flight_id: 2, user_id: 2, passenger_name: "Jane Smith", passenger_email: "jane.smith@example.com"}, {flight_id: 3, user_id: 3, passenger_name: "Bob Johnson", passenger_email: "bob.johnson@example.com"}])

 # Associate some reviews with the flights
Review.create(rating: 4, comment: 'Great flight!', user_id: 1, flight_id: 1)
Review.create(rating: 2, comment: 'Bad experience.', user_id: 2, flight_id: 1)
Review.create(rating: 3, comment: 'Average flight.', user_id: 1, flight_id: 2)
Review.create(rating: 5, comment: 'Amazing!', user_id: 2, flight_id: 2)
Review.create(rating: 1, comment: 'Terrible.', user_id: 1, flight_id: 3)
Review.create(rating: 4, comment: 'Good service.', user_id: 2, flight_id: 3)



puts "seed created successfully!"
