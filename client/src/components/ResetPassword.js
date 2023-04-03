import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserDataProvider';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)
  const navigate = useNavigate()
  const input = {email:email, password:password}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    fetch('/reset_password',{
        method:'PATCH',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(input)
      })
      .then(resp=>resp.json())
      .then(data=>{
        if(!data.errors){
          setUser(data)
          setEmail('')
          setPassword('')
          navigate('/')
        }
      })
  }

  return (
    <div className='container my-5'>
      <h2 className="text-center">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>New Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>Reset</button>
      </form>
    </div>
  );
}

export default ResetPassword;
