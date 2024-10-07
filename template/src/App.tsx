import React, { useState } from 'react';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="app-container">
      <h1 className="title">TON + CORE</h1>

      <button className="increment-button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <p className="counter-display">{counter}</p>
    </div>
  );
};

export default App;
