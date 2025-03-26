import React, { useEffect, useState } from "react";

const TodoListComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // grt von localstoreg
  useEffect(() => {
    const savedTaskts = localStorage.getItem("tasks");
    if (savedTaskts) {
      setTasks(JSON.parse(savedTaskts));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  function handlerInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function handelKeyDown(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Create a Server"
          value={newTask}
          onChange={handlerInput}
          onKeyDown={handelKeyDown}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            {console.log(task)}
            <button className="delete-button" onClick={() => deleteTask(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListComponent;
