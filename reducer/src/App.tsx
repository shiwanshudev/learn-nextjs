import "./App.css";
import { useReducer } from "react";
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE = "change-value";
const ADD_VALUE = "add-value";
export default function App() {
  const reducer = (state, action) => {
    console.log(action); // will print 80 on submit, 90 on changing input
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      case CHANGE_VALUE:
        return {
          ...state,
          valueToAdd: action.payload,
        };

      case ADD_VALUE:
        return {
          valueToAdd: 0,
          count: state.count + state.valueToAdd,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE,
      payload: val,
    });
  };

  return (
    <div>
      <h1>Reducer Project</h1>
      <h2>Count: {state.count}</h2>
      <button
        className="btn-add"
        onClick={() => dispatch({ type: INCREMENT_COUNT })}
      >
        Increment
      </button>
      <button
        className="btn-add"
        onClick={() => dispatch({ type: DECREMENT_COUNT })}
      >
        Decrement
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Add to Count"
          onChange={handleChange}
          value={state.valueToAdd}
        />
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
}
