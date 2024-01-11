
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputNumber, setInputNumber] = useState('');

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + parseInt(inputNumber, 10));
    setInputNumber('');
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-black text-white">
      <h1 className="text-8xl mb-10">Counter</h1>

      <div className="flex gap-4 mb-4">
        <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={handleDecrement}>
          -
        </button>
        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={handleIncrement}>
          +
        </button>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="number"
          className="text-sm px-3 py-3 bg-gray-800 text-white"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Enter a spooky number"
        />
        <button type="submit" className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Sumbit
        </button>
      </form>

      <p className="mt-8 text-sm">
        Bu Vazifalar eskisiga judayam oxshaligi uchun koproq design berdim
      </p>

    </div>
  );
}

export default App;