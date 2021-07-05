import { createContext, useReducer } from "react";
import { tabReducer } from "../reducers/tabReducer";
import { SELECTED_TAB } from "./../reducers/constant";

export const TabContext = createContext();

const TabContextProvider = ({ children }) => {
  const [ tabState, dispatch ] = useReducer(tabReducer, {
    tabSelected: "Home",
  });

  const handleSelectedTab = (text) => {
    if (text === "Home") {
      dispatch({
        type: SELECTED_TAB,
        payload: { tabSelected: "Home" },
      });
    }
    if (text === "About") {
      dispatch({
        type: SELECTED_TAB,
        payload: { tabSelected: "About" },
      });
    }
    if (text === "Portfolio") {
      dispatch({
        type: SELECTED_TAB,
        payload: { tabSelected: "Portfolio" },
      });
    }
    if (text === "News") {
      dispatch({
        type: SELECTED_TAB,
        payload: { tabSelected: "News" },
      });
    }
    if (text === "Contact") {
      dispatch({
        type: SELECTED_TAB,
        payload: { tabSelected: "Contact" },
      });
    }
  };

  const tabContextData = { tabState, handleSelectedTab };

  return (
    <TabContext.Provider value={tabContextData}>{children}</TabContext.Provider>
  );
};

export default TabContextProvider;
