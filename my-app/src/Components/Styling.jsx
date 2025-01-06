import { RxFontStyle } from "react-icons/rx";
import styles from "./styles.module.css";

export default function StyleCard() {
  return (
    <div style={{backgroundColor:"blue", padding:"20px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", gap:"10px"}}>
        <RxFontStyle />
      <h1>Inline Styling</h1>
      <button className={styles.button}>Click Me</button>
    </div>
  )
}
