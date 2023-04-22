import { nanoid } from "nanoid";

const switchCategory = (arr, id, category) => {
  return arr.map((item) => (item.id === id ? { ...item, category } : item));
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NEW_TASK":
      let newTask = {
        id: nanoid(),
        category: state.categories[0],
        task: payload,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    case "TO_ONGOING":
      return {
        ...state,
        tasks: switchCategory(state.tasks, payload, "ongoing"),
      };
    case "TO_COMPLETED":
      return {
        ...state,
        tasks: switchCategory(state.tasks, payload, "completed"),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== payload),
      };
  }
};
