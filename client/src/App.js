import React from 'react';
import Login from './components/loginpage';
import Signup from './components/signup';
import Home from './components/home';
import LandingPage from './components/landingpage';
import './App.css'
import ReactDOM from 'react-dom'


function App() {
  return (
          <div>
            <LandingPage />
            <Login />
            <Signup />
            <Home />
           
          </div>
  );
}

export default App;