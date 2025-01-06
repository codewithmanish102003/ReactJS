import { useEffect, useRef, useState } from "react";
import TextInput from "./Components/TextInput";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";

function App() {
  let a = 0;
  const refCount = useRef(0);
  let [count, setCount] = useState(0);

  useEffect(() => {
    refCount.current = refCount.current + 1;
    alert(`rerendering ${refCount.current} time`);
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    a = a + 1;
    alert(`value of a = ${a}`);
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>React useRef Hook</h1>
        <div>
          <h1>Count : {count}</h1>
          <button onClick={increment}>CliCk</button>
        </div>
        <h1>refCount : {refCount.current}</h1>
      </div>
      <TextInput/>
      <Counter/>
      <Timer/>
    </>
  );
}

export default App;
