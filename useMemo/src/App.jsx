import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const num=new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index:i,
    isMagical:i===20_000_000
  }
})
function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber] = useState(num)

  // const magical=number.find(item => item.isMagical===true)  //Performing Expensive Calculations
  const magical=useMemo(()=>number.find(item => item.isMagical===true),[]) //Performing Expensive Calculations inside useMemo


 useEffect(()=>{
  console.log("page is rerendering")
 })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>The Magical Number is {magical.index}</h1>
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
      </p>
    </>
  )
}

export default App
