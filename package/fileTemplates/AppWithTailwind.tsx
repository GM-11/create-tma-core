// @ts-ignore
import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="w-full h-screen bg-blue-500  flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold ">TON + CORE</h1>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <p className="text-2xl mt-4">{counter}</p>
    </div>
  );
}

export default App;
