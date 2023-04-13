import React from "react";

const TaskItem = ({ item, taskData, setTaskdata }) => {
  const { id, task, category } = item;
  const { categories } = taskData;
  const handleMove = () => {
    if (category === categories[0]) {
      setTaskdata((prev) => {
        let tasks = prev.tasks.map((item) => {
          if (item.id === id) {
            return { ...item, category: categories[1] };
          } else {
            return item;
          }
        });
        return { ...prev, tasks };
      });
    } else if (category === categories[1]) {
      setTaskdata((prev) => {
        let tasks = prev.tasks.map((item) => {
          if (item.id === id) {
            return { ...item, category: categories[2] };
          } else {
            return item;
          }
        });
        return { ...prev, tasks };
      });
    } else if (category === categories[2]) {
      setTaskdata((prev) => {
        let tasks = prev.tasks.filter((item) => item.id !== id);
        return { ...prev, tasks };
      });
    }
  };

  return (
    <div className="taskItem">
      <p>{task}</p>
      <button
        onClick={() => handleMove(id)}
        className={`taskButton ${
          category === categories[2] ? "delete" : "move"
        }`}
      >
        {category === categories[2] ? "Delete" : "Move"}
      </button>
    </div>
  );
};

export default TaskItem;
