import React from 'react';

function Booking(props) {
  const { id, flight, departureAirport, arrivalAirport, flightDateTime } = props;

  return (
    <tr>
      <td className="text-center">{id}</td>
      <td className="text-center">{flight}</td>
      <td className="text-center">{departureAirport}</td>
      <td className="text-center">{arrivalAirport}</td>
      <td className="text-center">{flightDateTime}</td>
      <td className="text-center"><button disabled={new Date(flightDateTime) < new Date()}>Update</button></td>
      <td className="text-center"><button disabled={new Date(flightDateTime) < new Date()}>Cancel</button></td>
    </tr>
  );
}

export default Booking;