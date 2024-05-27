import "./App.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCount((currentCount) => currentCount + valueToAdd);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    setValueToAdd(val);
  };

  return (
    <div>
      <h1>Reducer Project</h1>
      <h2>Count: {count}</h2>
      <button
        className="btn-add"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Increment
      </button>
      <button
        className="btn-add"
        onClick={() => setCount((currentCount) => currentCount - 1)}
      >
        Decrement
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Add to Count"
          onChange={handleChange}
          value={valueToAdd}
        />
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
}
