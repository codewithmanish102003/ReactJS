/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { userContext } from './UserProvider'

function UserProfile() {
    const {user}=useContext(userContext)
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
    </div>
  )
}

export default UserProfile
