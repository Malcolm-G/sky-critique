import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review';
import CreateReview from './CreateReview';

function FlightInfo({ departureAirport, arrivalAirport, imageSrc }) {
  const [reviews, setReviews] = useState([]);
  const [flightInfo, setFlightInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/flights/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setFlightInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch(`/flights/${params.id}/reviews`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="container-75 mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={flightInfo.image_url} className="img-fluid" alt="Flight" />
          <h2>{flightInfo.origin} to {flightInfo.destination}</h2>
          <button className="btn btn-primary mb-3">Make Booking</button>
          <ul className="list-group border p-3 rounded shadow-lg bg-light">
            <h2 className='text-center'>Reviews</h2>
            <CreateReview flightId={params.id} onReviewSubmit={handleReviewSubmit} />
            {reviews?.map((review) => (
              <li className="list-group-item" key={review.id}>
                <Review username={review.user_name} comment={review.comment} rating={review.rating} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FlightInfo;
