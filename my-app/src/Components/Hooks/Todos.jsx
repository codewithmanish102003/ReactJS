import { useState } from "react"

export default function Todos() {

    const [todos,setTodos]=useState([])
   
    const [inputValue,setInputValue]=useState("")

    const addTodos = (e) =>{
        e.preventDefault()

        if(inputValue.trim()){
        setTodos ([...todos ,inputValue])
        setInputValue('')
    }
};


    const handleChange = e =>{
     setInputValue(e.target.value)

    }
  return (
    <div> 
        <h1>TODO LIST :</h1>
      <form onSubmit={addTodos}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button  type="submit">Add Todos</button>
      </form>
    {
        todos.map((item , index )=>(
            <ul key={index}>
                <li>{item}</li>
            </ul>
        ))
    }
    
    </div>
  )
}
