import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserDataProvider';


function Login() {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [user,setUser] = useContext(UserContext)

  const input = {"name":username, "password":password}

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(input)
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      if(!data.errors){
        setUser(data)
        navigate('/home');
      }
    })
  };

  return (
    <div className='card my-5'>
      <h1>Log In</h1>
      <form className='form-control'
      onSubmit={(e)=>handleSubmit(e)}>
        <label>
          Username:
          <input type="text" placeholder='Enter Username...'
          onChange={(e)=>setUsername(e.target.value)}
          value={username}/>
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