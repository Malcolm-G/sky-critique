import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to our flight booking website!</h1>
      <h2>Available Flights:</h2>
      <ul>
        <li>
          <strong>Flight 1:</strong> New York to Los Angeles
        </li>
        <li>
          <strong>Flight 2:</strong> Chicago to Miami
        </li>
        <li>
          <strong>Flight 3:</strong> San Francisco to Las Vegas
        </li>
        <li>
          <strong>Flight 4:</strong> Seattle to Denver
        </li>
      </ul>
    </div>
  );
}

export default Home;