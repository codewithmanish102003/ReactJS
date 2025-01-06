import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false); // Manages the modal's open/close state
  

  return (
    <div>
      <h1>React Portals Example</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button> {/* Open Modal button */}

      {isOpen && (
        <Modal>
          <div>
            <h2>Modal Content</h2>
            <button onClick={() => setIsOpen(false)}>Close Modal</button> {/* Close Modal button */}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
