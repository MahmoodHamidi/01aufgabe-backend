import { Routes, Route } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import "./App.css";
import KeyLogger from "./pages/KeyLogger";
import TodoList from "./pages/TodoList";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="/keylogger" element={<KeyLogger />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
