import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Review from './Review';
import CreateReview from './CreateReview';
import { UserContext } from './UserDataProvider';
import defaultImage from '../images/default-flightinfo.jpg'

function FlightInfo({ departureAirport, arrivalAirport, imageSrc }) {
  const [reviews, setReviews] = useState([]);
  const [flightInfo, setFlightInfo] = useState({});
  const [image, setImage] = useState('');
  const params = useParams();
  const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)
  console.log(reviews)

  useEffect(() => {
    fetch(`${API}/flights/${params.id}`,{
      credentials: 'include',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setFlightInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API}/flights/${params.id}/reviews`,{
      credentials: 'include',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });

      // Get plane image
      fetch('https://api.unsplash.com/photos/random/?client_id=pzUByb_qT79wmbadQlfQUv4amrtqffHGxBmMvcjkNSQ&query=aeroplane&orientation=landscape',{
        method:'GET',
        headers:{
          "Accept-Version": "v1",
        }
      })
      .then(resp=>(resp.json()))
      .then(data=>{
        console.log(data)
        setImage(data.urls.raw)
      })
  }, []);

  const handleReviewSubmit = (review) => {
    fetch(`${API}/flights/${params.id}/reviews`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      credentials: 'include',
      mode: 'cors',
      body:JSON.stringify({comment:review.comment, rating:review.rating, user_id:user.id})
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      if(!data.errors){
        setReviews([...reviews, data]);
      }
    })
  };

  return (
    <div className="container-75 mt-0">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className='mb-2 border p-3 rounded bg-light'>
            <img src={image?image:defaultImage} className="img-fluid img-thumbnail mx-auto" alt="Flight" />
            <h2>{flightInfo.origin} to {flightInfo.destination}</h2>
            <Link to={`/booking/${params.id}`}>
              <button className="btn btn-primary mb-3">Make Booking</button>
            </Link>
          </div>
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
