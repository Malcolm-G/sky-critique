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
import { Routes, Route } from 'react-router-dom';
import CreateReview from './components/CreateReview';


function App() {
  return (
          <div>
          <NavBar />
            <Routes>
              <Route
              exact path ="/"
              element = {<Home />}
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
              element = {<CreateReview />}
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