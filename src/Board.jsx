import React from "react";
import TaskColumn from "./TaskColumn";

const Board = ({ taskData, setTaskdata }) => {
  return (
    <div id="taskBoard">
      {taskData.categories?.map((item) => {
        return (
          <TaskColumn
            key={item}
            category={item}
            taskData={taskData}
            setTaskdata={setTaskdata}
          />
        );
      })}
    </div>
  );
};

export default Board;
