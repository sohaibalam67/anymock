import { SET_ACTIVE_PANE } from "./actionTypes";

export const setActivePane = (activePane) => {
  return {
    type: SET_ACTIVE_PANE,
    activePane,
  };
};
