import React, { useContext } from 'react';
import { UserContext } from './UserDataProvider';
import Booking from './Booking';

function MyBookings() {
  const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext);

  return (
    <div className='my-5 container text-bg-light'>
      <h2 className="text-center">My Bookings</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Flight</th>
            <th className="text-center">Departure Airport</th>
            <th className="text-center">Arrival Airport</th>
            <th className="text-center">Passenger Name</th>
            <th className="text-center">Passenger Email</th>
            <th className="text-center">Update</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {myBookings?.map((booking,index) => (
            <Booking key={booking?.id}
            number={index+1}
            bookingId={booking?.id}
            flight={booking?.flight?.name}
            departureAirport={booking?.flight?.origin?.name}
            arrivalAirport={booking?.flight?.destination?.name}
            passengerName={booking?.passenger_name}
            passengerEmail={booking?.passenger_email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyBookings;
