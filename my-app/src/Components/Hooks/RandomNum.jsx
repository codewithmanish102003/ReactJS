import {useState} from 'react'
import styles from "./styles.module.css";
export default function RandomNum() {

    // lazy Intialization
    const [RandomNum,setRandomNum]=useState(
        ()=>{
            Math.floor(Math.random() * 100)
        }
    )
    
    const GenerateNum =()=>{
        const newNum= Math.floor(Math.random()*100)
        setRandomNum(newNum)
    }

  return (
    <div>
      <h1>Random Number : {RandomNum}</h1>
      <button className={styles.button} onClick={GenerateNum}>Generate Num</button>
    </div>
  )
}
