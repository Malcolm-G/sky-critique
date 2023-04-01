import React from 'react';
import { Link } from 'react-router-dom';

function Flight(props) {
  const { flight_id, departureAirport, arrivalAirport, flightImage } = props;

  
  return (
    <div className="card w-75 h-75">
      <img className="card-img-top img-fluid h-50" src={flightImage} alt="Plane" />
      <div className="card-body">
        <h5 className="card-title">Flight Information</h5>
        <p className="card-text">Departure Airport: {departureAirport}</p>
        <p className="card-text">Arrival Airport: {arrivalAirport}</p>
        <Link to={`/flight/${flight_id}`} className="btn btn-primary">Flight Info</Link>
      </div>
    </div>
  );
}

export default Flight;



