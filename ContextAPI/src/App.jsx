// import './App.css'
// import Component1 from './PropsDrilling/Component1'
// import { createContext } from 'react'
import UserProfile from './UseContext/UserProfile'
import UserProvider from './UseContext/UserProvider'


// export const Data=createContext()
function App() {
 
// const name="Hey Developer"
  return (
    <>
      {/* <Component1 name={name}/>
      <Data.Provider value={name}>
       <Component1/> 
      </Data.Provider> */}
      <UserProvider>
        <UserProfile/>
      </UserProvider>
      
    </>
  )
}


export default App
