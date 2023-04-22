import TaskItem from "./TaskItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const TaskColumn = ({ category }) => {
  const { state, dispatch } = useContext(AppContext);
  let data = state.tasks.filter((item) => item.category === category);
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
              dispatch={dispatch}
              categories={state.categories}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskColumn;
