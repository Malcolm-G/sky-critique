import React, { useState } from 'react';
//import {  useNavigate} from 'react-router-dom';

function Signup() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const history = useNavigate();

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Your signup logic goes here
//     history.push('/home');
//   };

  return (
    <div>
      <h1>Sign Up</h1>
      <form >
        <label>
          Email:
          <input type="email"  />
        </label>
        <br />
        <label>
          Password:
          <input type="password"  />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;