import React from 'react';
import Login from './components/loginpage';
import Signup from './components/signup';
import Home from './components/home';
import LandingPage from './components/landingpage';
import MyBookings from './components/MyBookings';
import Flights from './components/Flights';
import './App.css'
import ReactDOM from 'react-dom'


function App() {
  return (
          <div>
            <LandingPage />
            <Login />
            <Signup />
            <Home />
            <MyBookings />
            <Flights />
          </div>
  );
}

export default App;