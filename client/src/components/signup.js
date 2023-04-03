import React, { useContext, useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import { UserContext } from './UserDataProvider';

function Signup() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const navigate = useNavigate();

    const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)
    const navigate = useNavigate()
    const input = {"name":userName, "email":email, "password":password, "password_confirmation":confirmPassword}
    console.log(input)

  function handleSubmit (event) {
    event.preventDefault();
    fetch(`${API}/signup`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      credentials: 'include',
      mode: 'cors',
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
    <div className='form my-5'> 
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}/>
        </label>
        <br />
        <label>
          Username:
          <input type="text" 
          onChange={(e)=>setUserName(e.target.value)}
          value={userName}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password"
          onChange={(e)=>setConfirmPassword(e.target.value)}
          value={confirmPassword}/>
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;