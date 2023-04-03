import React, { useContext, useState } from 'react';
import { UserContext } from './UserDataProvider';

function Booking(props) {
  const { number, bookingId, flight, departureAirport, arrivalAirport, passengerName, passengerEmail } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(passengerName);
  const [updatedEmail, setUpdatedEmail] = useState(passengerEmail);

  const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    fetch(`${API}/bookings/${bookingId}`,{
      method:'PUT',
      headers:{
        "Content-Type":"application/json"
      },
      credentials: 'include',
      mode: 'cors',
      body:JSON.stringify({passenger_name:updatedName, passenger_email:updatedEmail})
    })
    .then(resp=>resp.json())
    .then(data=>{
      if(!data.errors){
        const updatedBookings = myBookings?.map((item) => {
          if (item.id == bookingId) {
            return ({
              ...item,
              passenger_name:updatedName,
              passenger_email:updatedEmail
            });
          } else {
            return item;
          }
        });
        setMyBookings(updatedBookings)
      }
    })
    setIsEditing(false);
  };

  function handleDeleteClick(){
    fetch(`${API}/bookings/${bookingId}`,{
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
      },
      credentials: 'include',
      mode: 'cors',
    })
    .then(data=>{
      console.log(data, 'deleted')
      if(!data.errors){
        const updatedBookings = myBookings?.filter((item) => {
          return item.id != bookingId
        });
        setMyBookings(updatedBookings)
      }
    })
  }

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedName(passengerName);
    setUpdatedEmail(passengerEmail);
  };

  return (
    <tr>
      <td className="text-center">{number}</td>
      <td className="text-center">{flight}</td>
      <td className="text-center">{departureAirport}</td>
      <td className="text-center">{arrivalAirport}</td>
      {isEditing ? (
        <>
          <td className="text-center"><input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} /></td>
          <td className="text-center"><input type="text" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} /></td>
          <td className="text-center"><button className="btn btn-sm btn-success" onClick={handleSaveClick}>Save</button></td>
          <td className="text-center"><button className="btn btn-sm btn-secondary" onClick={handleCancelClick}>Cancel</button></td>
        </>
      ) : (
        <>
          <td className="text-center">{passengerName}</td>
          <td className="text-center">{passengerEmail}</td>
          <td className="text-center"><button className="btn btn-sm btn-warning" onClick={handleUpdateClick}>Update</button></td>
          <td className="text-center"><button className="btn btn-sm btn-danger" onClick={handleDeleteClick} >Delete</button></td>
        </>
      )}
    </tr>
  );
}

export default Booking;
