import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';


function Login() {
    
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useNavigate();

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useNavigate();
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Your login logic goes here
//     history.push('/home');
//   };

  return (
    <div className='card'>
      <h1>Log In</h1>
      <form className='form-control'>
        <label>
          Email:
          <input type="text" placeholder='Enter Email...' />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" placeholder='Enter Password...'  
           />
        </label>
        <br />
        <button type="submit">Log In</button>
        </form>
        
      
    </div>
  );
}

export default Login;