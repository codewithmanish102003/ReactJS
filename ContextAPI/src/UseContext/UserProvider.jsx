/* eslint-disable no-unused-vars */
import React ,{createContext,useState} from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const userContext=createContext(null)
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'

export default function UserProvider() {
    const [user,setUser]=useState({name:'Jhon Doe',age : 30})

    const updateUser = (newName) => {
      setUser((prevUser) => ({ ...prevUser, name: newName }));  // Updated to retain age
    };


  return (
    <div>
      <userContext.Provider value={{user,updateUser}}>
        <UserProfile/>
        <UpdateUser/>
      </userContext.Provider>
    </div>
  )
}
