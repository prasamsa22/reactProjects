import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //   console.log(input);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const handleClose = (todo) => {
    setTodos((todos) => todos.filter((t) => t !== todo));
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {todos.length > 0 && (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo} className="todo">
              <span>{todo}</span>
              <button className="close" onClick={(e) => handleClose(todo)}>
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
