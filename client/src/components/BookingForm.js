import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from './UserDataProvider';

function BookingForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)
  const params = useParams()
  const navigate = useNavigate()
  let departureAirport;
  let arrivalAirport;

  useEffect(()=>{
    fetch(`${API}/flights/${params.flightId}`,{
      credentials: 'include',
      mode: 'cors',
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      departureAirport = data.origin
      arrivalAirport = data.destination
    })
  },[])

  const input = {"flight_id":params.flightId, "passenger_name":name, "passenger_email":email, "user_id":user.id}

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}/bookings`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      credentials: 'include',
      mode: 'cors',
      body:JSON.stringify(input)
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      if(!data.errors){
        console.log([...myBookings,data])
        fetch(`${API}/users/${user.id}/bookings`,{
          credentials: 'include',
          mode: 'cors',
        })
            .then(resp=>resp.json())
            .then(data=>{
                if(!data.errors){
                    setMyBookings(data)
                    navigate('/my-bookings')
                }
            })
      }
    })
    console.log(`Email: ${email}, Name: ${name}`);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Passenger Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Passenger Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(event) => setName(event.target.value)}
              value={name}            
            />
          </div>
          <button type="submit" className="btn btn-primary">Book Flight</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
