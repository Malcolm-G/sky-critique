import React from 'react';

function Flight(props) {
  const { departureAirport, arrivalAirport } = props;

  return (
    <div className="card">
      <img className="card-img-top" src="https://via.placeholder.com/150x50" alt="Plane" />
      <div className="card-body">
        <h5 className="card-title">Flight Information</h5>
        <p className="card-text">Departure Airport: {departureAirport}</p>
        <p className="card-text">Arrival Airport: {arrivalAirport}</p>
        <button className="btn btn-primary">Flight Info</button>
      </div>
    </div>
  );
}

export default Flight;
