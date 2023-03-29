import React from 'react';
import Login from './components/loginpage';
import Signup from './components/signup';
import Home from './components/home';
import LandingPage from './components/landingpage';
import './App.css'

function App() {
  return (
          <div>
            <LandingPage />
            <Login />
            <Home />
            <Signup />
          </div>
  );
}

export default App;