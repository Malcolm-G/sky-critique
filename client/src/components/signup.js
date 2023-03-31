import React, { useState } from 'react';
import {  useNavigate} from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your signup logic goes here
    // navigate('/home');
  };

  return (
    <div className='form my-5'> 
      <h1>Sign Up</h1>
      <form >
        <label>
          Email:
          <input type="email" 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password"
          onChange={(e)=>setConfirmPassword(e.target.value)}
          value={confirmPassword}/>
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;