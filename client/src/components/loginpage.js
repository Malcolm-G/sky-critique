import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//     setPassword(event.target.value);
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic goes here
    // navigate('/home');
  };

  return (
    <div className='card my-5'>
      <h1>Log In</h1>
      <form className='form-control'
      onSubmit={(e)=>handleSubmit(e)}>
        <label>
          Email:
          <input type="text" placeholder='Enter Email...'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" placeholder='Enter Password...'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
        </label>
        <br />
        <button type="submit">Log In</button>
        </form>
        
      
    </div>
  );
}

export default Login;