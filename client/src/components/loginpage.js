import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from './UserDataProvider';
// import '../login.css';


function Login() {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)

  const input = {"name":username, "password":password}

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}/login`,{
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
        navigate('/');
      }
    })
  };

  function resetClicked(){
    window.alert('New Feature Coming Soon!')
  }

  return (
    <div className='card my-5'>
      <h1>Log In</h1>
      <form className='form-control border-0' onSubmit={(e)=>handleSubmit(e)}>
        <div className="row">
          <div className="col">
            <label>
              Username:
              <input type="text" placeholder='Enter Username...'
              onChange={(e)=>setUsername(e.target.value)}
              value={username}/>
            </label>
          </div>
          <div className="col">
            <label>
              Password:
              <input type="password" placeholder='Enter Password...'
              onChange={(e)=>setPassword(e.target.value)}
              value={password}/>
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Log In</button>
        <div className="row mt-3">
          <div className="col d-flex justify-content-center ">
            <Link to="/signup" className="btn btn-danger my-auto">Register</Link>
          </div>
          <div className="col">
            <button onClick={resetClicked} /*to='/reset-password'*/ type='button' className="btn btn-link">Reset Password</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;