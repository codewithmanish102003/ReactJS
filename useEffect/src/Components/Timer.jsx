// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const ConditionalTimer = () => {
  const [seconds, setSeconds] = useState(0); // State to track time
  const [isActive, setIsActive] = useState(false); // State to track if the timer is active

  useEffect(() => {
    let timer; // Declare timer variable to access in the cleanup function

    if (isActive) {
      // Only set the timer if the timer is active
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup function: Stop the timer when isActive becomes false or the component unmounts
    return () => {
      if (timer) {
        clearInterval(timer); // Clear the interval
        alert("Timer stopped");
      }
    };
  }, [isActive]); // Dependency on isActive to run effect when the timer is toggled

  // Toggle the timer on and off
  const toggleTimer = () => {
    setIsActive(prevIsActive => !prevIsActive); // Toggle between true and false
  };

  // Reset timer to 0
  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
    alert("Timer is reseted")
  };

  return (
    <>
      <h1>Conditional Timer</h1>
      <p>Seconds: {seconds}</p>
      <button onClick={toggleTimer}>
        {isActive ? 'Stop Timer' : 'Start Timer'}
      </button>
      <button onClick={resetTimer}>Reset Timer</button>
      </>
  );
};

export default ConditionalTimer;

