import { StrictMode, useState } from 'react';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';



function App() {
  const [setMode,setDarkMode]=useState("light")
  const [settxt,setbtnText]=useState("Enable Dark Mode")

  const toggleMode =()=>{
    if(setMode==="light"){
      setDarkMode("dark")
      setbtnText("Enable Light Mode")
      document.body.style.backgroundColor="#2f4f4f"
      document.body.style.color="white"
      document.title="TextUtils - Dark Mode"
      }
      else{
        setDarkMode("light")
        setbtnText("Enable Dark Mode")
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
         document.title="TextUtils - Light Mode"
        }
  }
  return (
    <>
    <StrictMode>
      <Navbar title="TextUtils" mode={setMode} toggle={toggleMode} settxt={settxt}/>
      {/* <ChildComponent message="Hello, I am passed as a prop!" /> */}
      <div className="container my-3">
        <Textform />
      </div>

      <div className="container my-3">
        <Counter />
      </div>
      </StrictMode>
    </>
  );
}


export default App;
