import React from 'react'
import useToggle from './UseTogggle';

const App2 = () => {
    const [isVisible, toggleVisibility] = useToggle();
  React.return (
    <div>
        <button onClick={toggleVisibility}>Toggle</button>
        {isVisible && <p>Content is visible!</p>}
      </div>
  )
}

export default App2
