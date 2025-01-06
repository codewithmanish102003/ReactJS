import { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current++;
    alert("Current count:"+ countRef.current);
  };

  return (
    <div>
      <p>Render count: {renderCount}</p>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Re-render
      </button>
      <button onClick={increment}>Increment (no re-render)</button>
    </div>
  );
}

export default Counter