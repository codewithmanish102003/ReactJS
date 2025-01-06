import React, { useState } from 'react'

export default function Textform() {
    const toUpperCase = () => {
        console.log("You have clicked the button")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const toLowerCase = () => {
        console.log("You have clicked the button")
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleonchange = (e) => {
        setText(e.target.value)
    }
   
    
       
        const toggleStyle=()=>{
            if(myStyle.color==="white"){
                setMystyle({
                    color: 'black',
                    backgroundColor:"white"
                    })
                    setbtnText("Enable Dark Mode")
                    }
    
            else{
                setMystyle({
                    color: 'white',
                    backgroundColor:"gray"
                    })
                    setbtnText("Enable Light Mode")
            }
        }

        const AllClear=()=>{
            setText("")
        }

        const CopyTxt=()=>{
            navigator.clipboard.writeText(text)
            
        }
        const [text, setText] = useState("Enter Text here...")
        const [btnTxt,setbtnText]=useState("Enable Light Mode")
        const [myStyle,setMystyle]=useState({
            color: 'white',
            backgroundColor:"gray"})
        
    

    return (
        <>
            <div className="my-3">
                <div className="form-floating">
                    <h1>Type Your Text Here To Analyze.....</h1>
                    <textarea className="form-control border-1 border-black my-3" value={text} onChange={handleonchange} id="floatingTextarea2" style={{ height: 300,...myStyle}}></textarea>
                </div>
                <button className="btn btn-primary m-2 text-center" onClick={toggleStyle} >{btnTxt}</button>
                <button type="button" onClick={toUpperCase} className="btn btn-primary m-2">Convert To UpperCase</button>
                <button type="button" onClick={toLowerCase} className="btn btn-primary m-2">Convert To LowerCase</button>
                <button type="button" onClick={AllClear} className="btn btn-primary m-2">Clear All</button>
                <button type="button" onClick={CopyTxt} className="btn btn-primary m-2">Copy Text</button>
            </div>
            
        </>
    );
}
