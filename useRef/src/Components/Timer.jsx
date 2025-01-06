import { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    // Prevent starting multiple timers
    if (timerRef.current) return;

    // Start a new timer
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000); // Increment every second
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Reset the ref to allow restarting
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
