import { Routes, Route } from "react-router-dom";
import "./App.css";
import KeyLogger from "./components/KeyLogger";
import TodoList from "./components/TodoList";
import TodoListComponent from "./components/TodoListComponent";

function App() {
  return (
    <>
      <TodoList />
      {/* <KeyLogger /> */}
    </>
  );
}

export default App;
