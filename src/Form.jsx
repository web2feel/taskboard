import React, { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ setTaskdata }) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task === "") return;
    const newTask = {
      id: nanoid(),
      task,
      category: "pending",
    };
    setTaskdata((prev) => {
      return { ...prev, tasks: [...prev.tasks, newTask] };
    });
    setTask("");
  };
  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          required
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name="task"
          className="taskInput"
          value={task}
        />
        <button onClick={handleSubmit} className="taskSubmit">
          Submit Task
        </button>
      </div>
    </div>
  );
};

export default Form;
