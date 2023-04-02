import React from 'react';
import Booking from './Booking';

function MyBookings() {
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
            <th className="text-center">Flight Date-Time</th>
            <th className="text-center">Update</th>
            <th className="text-center">Cancel</th>
          </tr>
        </thead>
        <tbody>
          <Booking id={1} flight="ABC123" departureAirport="JFK" arrivalAirport="LAX" flightDateTime="2023-01-01 08:00:00" />
          <Booking id={2} flight="DEF456" departureAirport="LAX" arrivalAirport="JFK" flightDateTime="2023-04-02 13:30:00" />
          <Booking id={3} flight="GHI789" departureAirport="SFO" arrivalAirport="ORD" flightDateTime="2023-04-03 10:15:00" />
        </tbody>
      </table>
    </div>
  );
}

export default MyBookings;
