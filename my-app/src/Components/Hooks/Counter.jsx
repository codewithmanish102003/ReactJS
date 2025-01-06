import { useState } from "react";
import styles from "./styles.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="text-center">React Hooks</h1>
      <h1>{count}</h1>
      <button onClick={increment} className={styles.button}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
