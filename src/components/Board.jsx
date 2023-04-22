import TaskColumn from "./TaskColumn";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Board = () => {
  const {state} = useContext(AppContext)
  return (
    <div id="taskBoard">
      {state.categories?.map((item) => {
        return <TaskColumn key={item} category={item} />;
      })}
    </div>
  );
};
export default Board;
