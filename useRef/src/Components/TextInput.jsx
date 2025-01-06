import { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="red"
    inputRef.current.value ="red"
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default TextInput