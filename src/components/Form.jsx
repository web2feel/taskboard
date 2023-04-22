import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
const Form = () => {
  const { dispatch } = useContext(AppContext);
  const [taskInput, setTaskInput] = useState("");
  const handleSubmit = () => {
    if (taskInput === "") return;
    dispatch({
      type: "NEW_TASK",
      payload: taskInput,
    });
    setTaskInput("");
  };
  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          required
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          name="task"
          className="taskInput"
          value={taskInput}
        />
        <button onClick={handleSubmit} className="taskSubmit">
          Submit Task
        </button>
      </div>
    </div>
  );
};

export default Form;
