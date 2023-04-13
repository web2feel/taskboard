import React from "react";
import TaskItem from "./TaskItem";

const TaskColumn = ({ category, taskData, setTaskdata }) => {
  let data = taskData.tasks.filter((item) => item.category === category);
  return (
    <div className="taskColumn">
      <div className="columnHeader">
        <h3>{category}</h3>
      </div>
      <div className="taskItems">
        {data?.map((item) => {
          return (
            <TaskItem
              key={item.id}
              item={item}
              taskData={taskData}
              setTaskdata={setTaskdata}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskColumn;
