import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../app/features/counter/counterSlice';
const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default Counter
