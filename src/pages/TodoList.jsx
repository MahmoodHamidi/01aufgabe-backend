import React, { useState, useEffect } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./ToduList.css";

const TodoList = () => {
  // مقدار اولیه از localStorage خوانده می‌شود
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks || [];
  });

  const [newTask, setNewTask] = useState("");

  // ذخیره‌ی تغییرات در localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            {console.log(task)}

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete <MdDeleteForever />
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              <FaArrowCircleUp />
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              <FaArrowCircleDown />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
