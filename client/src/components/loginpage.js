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
    <div >
      <h1 className='log-header'>Log In</h1>
      <form className=''>
        <label>
          Email:
          <input type="email"   />
        </label>
        <br />
        <label>
          Password:
          <input type="password"  
           />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;