import React, { useContext } from 'react';
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
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './components/UserDataProvider';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import ResetPassword from './components/ResetPassword';


function App() {
  const [user] = useContext(UserContext)
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
              path ="/reset-password"
              element = {<ResetPassword />}
              />
              <Route
              path ="/my-bookings"
              element = {<ProtectedRoute to ="/my-bookings" outlet={<MyBookings />} />}
              />
              <Route
              path ="/flights"
              element = {<ProtectedRoute to ="/flights" outlet={<Flights />} />}
              />
              <Route
              path ="/flight/:id"
              element = {<ProtectedRoute to ="/flight/:id" outlet={<FlightInfo />} />}
              />
              <Route
              path ="/review/:flightId"
              element = {<ProtectedRoute to ="/review/:flightId" outlet={<CreateReview />} />}
              />
              <Route
              path ="/booking/:flightId"
              element = {<ProtectedRoute to ="/booking/:flightId" outlet={<BookingForm />} />}
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