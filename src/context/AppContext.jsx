import { data } from "../utils/data";
import { reducer } from "./AppReducer";
import { useReducer, createContext } from "react";

export const AppContext = createContext();

const AppContextProviderWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);
  const contextValue = { state, dispatch };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProviderWrapper;
