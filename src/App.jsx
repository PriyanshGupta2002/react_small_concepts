import React, { useState, useMemo } from "react";
import { initalItems } from "./utils";

const App = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initalItems);
  // const selectedItem = useMemo(() => items.find((i) => i.isSelected), [items]);
  const selectedItem = useMemo(
    () => items.find((i) => i.id === count),
    [items, count]
  );
  return (
    <div className="text-white flex items-center flex-col justify-center my-5 space-y-6">
      <h2 className="text-3xl">Count : {count}</h2>
      <p className="text-4xl">Selected Item : {selectedItem?.id}</p>
      <button
        className="bg-rose-700 p-2 rounded-md shadow-lg"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count
      </button>
    </div>
  );
};

export default App;
