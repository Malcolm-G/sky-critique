import React, { useState } from 'react';
import Flight from './Flight';

function Flights() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Departure');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredFlights = FLIGHTS.filter(
    (flight) =>
      filter === 'Departure'
        ? flight.departureAirport.toLowerCase().includes(search.toLowerCase())
        : flight.arrivalAirport.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <form>
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
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredFlights.map((flight) => (
          <div className="col" key={flight.id}>
            <Flight
              departureAirport={flight.departureAirport}
              arrivalAirport={flight.arrivalAirport}
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
