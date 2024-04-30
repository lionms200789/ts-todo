import React from "react";
import Todo from "./pages/Todo";
import { TodoContext } from "./context/todoContext";
import "./App.css";

const todos = [
  {
    subject: "title1",
    content: "content1",
  },
  {
    subject: "title2",
    content: "content2",
  },
];

function App() {
  return (
    <TodoContext.Provider value={{ todos }}>
      <div className="App">
        <Todo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
