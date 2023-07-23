import React, { useContext, useEffect, useState } from 'react';
import Flight from './Flight';
import defaultImage from '../images/default-plane.jpg'
import { UserContext } from './UserDataProvider';

function Flights() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Departure');
  const [flights, setFlights] = useState([]);
  const [image, setImage] = useState('');

  const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)

  useEffect(()=>{
    fetch(`${API}/flights`,{
      credentials: 'include',
      mode: 'cors',
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      setFlights([...data])
    })
  },[])

  useEffect(() => {
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

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredFlights = flights?.filter(
    (flight) =>
      filter === 'Departure'
        ? flight.origin.toLowerCase().includes(search.toLowerCase())
        : flight.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <form className='container my-3 p-4 border rounded shadow-sm bg-light'>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            className="form-control"
            id="search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="filter">Filter By:</label>
          <select
            className="form-control"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="Departure">Departure Airport</option>
            <option value="Arrival">Arrival Airport</option>
          </select>
        </div>
      </form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-1 mx-5 my-5 border rounded shadow-lg bg-light p-3">
        {filteredFlights.map((flight) => (
          <div className="col" key={flight.id}>
            <Flight
              flight_id = {flight.id}
              departureAirport={flight.origin}
              arrivalAirport={flight.destination}
              flightImage = {image?image:defaultImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const FLIGHTS = [
  { id: 1, departureAirport: 'JFK', arrivalAirport: 'LAX' },
  { id: 2, departureAirport: 'LAX', arrivalAirport: 'JFK' },
  { id: 3, departureAirport: 'SFO', arrivalAirport: 'ORD' },
];

export default Flights;
