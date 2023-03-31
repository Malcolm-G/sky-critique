import React from 'react';
import Login from './components/loginpage';
import Signup from './components/signup';
import Home from './components/home';
import LandingPage from './components/landingpage';
import MyBookings from './components/MyBookings';
import Flights from './components/Flights';
import FlightInfo from './components/FlightInfo';
import BookingForm from './components/BookingForm';
import NavBar from './components/Navbar';
import './App.css'
import ReactDOM from 'react-dom'
import ReviewForm from './components/ReviewForm';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
          <div>
          <NavBar />
            <Routes>
              <Route
              exact path ="/"
              element = {<LandingPage />}
              />
            
              <Route
              exact path ="/home"
              element = {<Home />}
              />
              <Route
              path ="/login"
              element = {<Login />}
              />
              <Route
              path ="/signup"
              element = {<Signup />}
              />
              <Route
              path ="/my-bookings"
              element = {<MyBookings />}
              />
              <Route
              path ="/flights"
              element = {<Flights />}
              />
              <Route
              path ="/flight/:id"
              element = {<FlightInfo />}
              />
              <Route
              path ="/review/:flightId"
              element = {<ReviewForm />}
              />
              <Route
              path ="/booking/:flightId"
              element = {<BookingForm />}
              />
              {/* <Route
              path ="/"
              element = {}
              /> */}
            </Routes>
            {/* <LandingPage /> */}
            {/* <Login /> */}
            {/* <Signup /> */}
            {/* <Home /> */}
            {/* <MyBookings /> */}
            {/* <Flights /> */}
            {/* <FlightInfo /> */}
            {/* <ReviewForm /> */}
            {/* <BookingForm /> */}
          </div>
  );
}

export default App;