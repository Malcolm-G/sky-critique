import React, { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// create the context object
const UserContext = createContext()
const API = 'https://sky-critique-backend.onrender.com/'

// create the context provider (component)
function UserDataProvider({ children }) {
    const [user, setUser] = useState(null)
    const [myBookings, setMyBookings] = useState([])

    const navigate = useNavigate()

    

    useEffect(() => {
        let loggedInUser;
        fetch('/me')
        .then(resp=>resp.json())
        .then(data=>{
            if(!data.errors){
                loggedInUser = data 
                setUser(data)
            }
        })
        if (loggedInUser) {;
          navigate('/home');
        }
    }, []);

    useEffect(()=>{
        if (user){
            fetch(`/users/${user.id}/bookings`)
            .then(resp=>resp.json())
            .then(data=>{
                if(!data.errors){
                    setMyBookings(data)
                }
            })
        }
    },[user])

    console.log(myBookings)

    // useEffect(()=>{
    //     if(user){
    //         fetch(`${API}/projects/${user.id}`)
    //         .then(resp=>resp.json())
    //         .then(data=>{
    //             // console.log(...data)
    //             setProjects((projects)=>data.my_projects.concat(data.part_of))
    //             // console.log(projects)
    //         })
    //     }
    // },[user])

    const value = [API, user, setUser,myBookings,setMyBookings]
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

// export
export { UserContext, UserDataProvider }