import React from 'react';
import Review from './Review';

function FlightInfo({ departureAirport, arrivalAirport, imageSrc }) {
  const reviews = [
    { id: 1, username: 'John Doe', comment: 'Great flight!', rating: 4 },
    { id: 2, username: 'Jane Smith', comment: 'The flight was okay.', rating: 3 },
    { id: 3, username: 'Bob Johnson', comment: 'Terrible flight.', rating: 1 },
  ];

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={imageSrc} className="img-fluid" alt="Flight" />
          <h2>{departureAirport} to {arrivalAirport}</h2>
          <button className="btn btn-primary mb-3">Make Booking</button>
          <ul className="list-group">
            {reviews.map((review) => (
              <li className="list-group-item" key={review.id}>
                <Review username={review.username} comment={review.comment} rating={review.rating} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FlightInfo;
