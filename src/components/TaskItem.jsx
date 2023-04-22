const TaskItem = ({ item, categories, dispatch }) => {
  const { id, task, category } = item;

  const handleMove = (id, category) => {

    switch (true) {
      case category === categories[0]:
        dispatch({
          type: "TO_ONGOING",
          payload: id,
        });
        break;
      case category === categories[1]:
        dispatch({
          type: "TO_COMPLETED",
          payload: id,
        });
        break;
      case category === categories[2]:
        dispatch({
          type: "DELETE_TASK",
          payload: id,
        });
        break;
    }
  };

  return (
    <div className="taskItem">
      <p>{task}</p>
      <button
        onClick={() => handleMove(id, category)}
        className={`taskButton ${category === "completed" ? "delete" : "move"}`}
      >
        {category === "completed" ? "Delete" : "Move"}
      </button>
    </div>
  );
};

export default TaskItem;
