import React, { useEffect, useState } from 'react';
import Flight from './Flight';

function Flights() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Departure');
  const [flights, setFlights] = useState([]);

  useEffect(()=>{
    fetch('/flights')
    .then(resp=>resp.json())
    .then(data=>{
      setFlights([...data])
    })
  },[])

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredFlights = flights?.filter(
    (flight) =>
      // filter === 'Departure'
      //   ? flight.departureAirport.toLowerCase().includes(search.toLowerCase())
      //   : flight.arrivalAirport.toLowerCase().includes(search.toLowerCase())
      true
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
              departureAirport={flight.departureAirport}
              arrivalAirport={flight.arrivalAirport}
              flightImage = {flight.image_url}
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
