import { SELECTED_TAB } from "./constant";

export const tabReducer = (state, action) => {
  const {
    type,
    payload: { tabSelected },
  } = action;

  switch (type) {
    case SELECTED_TAB:
      return {
        ...state,
        tabSelected,
      };

    default:
      return state;
  }
};
