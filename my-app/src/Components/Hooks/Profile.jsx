import { useState } from "react";

function Profile() {
   const name="Manish"
   const age=21
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
  
    return (
      <div>
        <p >Name: {name}</p>
        <p>Age: {age}</p>
        <p>{isLoggedIn ? 'Logged in' : 'Logged out'}</p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }

  export default Profile