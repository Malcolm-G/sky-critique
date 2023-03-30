import React from 'react';
import Login from './components/loginpage';
import Signup from './components/signup';
import Home from './components/home';
import LandingPage from './components/landingpage';
import MyBookings from './components/MyBookings';
import Flights from './components/Flights';
import FlightInfo from './components/FlightInfo';
import './App.css'
import ReactDOM from 'react-dom'
import CreateReview from './components/CreateReview';


function App() {
  return (
          <div>
            <LandingPage />
            <Login />
            <Signup />
            <Home />
            <MyBookings />
            <Flights />
            <FlightInfo />
            <CreateReview />
          </div>
  );
}

export default App;