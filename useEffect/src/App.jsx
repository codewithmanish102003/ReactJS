// import { useEffect,useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import CounterEfffect from "./Components/CounterEfffect"
import DataFetcher from "./Components/FetchData"
import TimerComponent from "./Components/timer"

function App() {
  // const [count, setCount] = useState(0)
  
// // case 1: Runs On Every Render
// useEffect(()=>{
//   alert("I will run on every Render")
// })  

// //Case 2: Runs Only on first Render
// useEffect(()=>{
//   alert("I will run on only First Render......")
// },[]);


// // Case 3: Runs when a dependency Is Cahanged
// useEffect(()=>{
//   alert("Count Is Changed")
// },[count])  

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
       <DataFetcher />
       <TimerComponent/>
       <CounterEfffect/>
    </>
  )
}

export default App
