// eslint-disable-next-line no-unused-vars
import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByAmount":
      return { count: state.count + action.payload }; //payload
    case "decrementByAmount":
      return { count: state.count - action.payload };

    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() =>
              dispatch({ type: "incrementByAmount", payload: +inputValue })
            }
          >
            Add Amount
          </button>
          <button
            onClick={() =>
              dispatch({ type: "decrementByAmount", payload: +inputValue })
            }
          >
            Subtract Amount
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
