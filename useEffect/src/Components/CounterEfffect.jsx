import { useState,useEffect } from "react";


function CounterEfffect() {

    const [count,setCount]=useState(0)

    useEffect(()=>{
        document.title = `Count ${count}`
        alert(
            "Title is Changed"
        )
    },[count])


  return (
    <div>
      <h1>Counter Effect</h1>
      <p>Count = {count}</p>
      <button onClick={()=>{setCount(count +1)}}>Increment</button>
    </div>
  )
}

export default CounterEfffect
