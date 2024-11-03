import React from "react";
import { useCountStore } from "./store";

const countLog = () => {
  let c = useCountStore.getState().count;
  console.log("count value", c);
};

export default function App() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const doubleNum = useCountStore((state) => state.doubleNumber);
  const divideNum = useCountStore((state) => state.divide);

  React.useEffect(() => {
    countLog();
  }, [count]);
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center text-white gap-5">
      <h1 className="text-2xl text-white">Count: {count}</h1>

      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
          onClick={doubleNum}
        >
          Double
        </button>

        <button
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
          onClick={divideNum}
        >
          Divide
        </button>
      </div>
    </div>
  );
}
