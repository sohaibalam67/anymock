import { SET_ACTIVE_PANE } from "../actions/actionTypes";

import { CANVAS_PANE, DEVICE_PANE } from "../../constants/rightPane";

const INITIAL_STATE = {
  activePane: CANVAS_PANE,
};

const rightPaneReducer = (state = INITIAL_STATE, action) => {
  let activePane = null;

  switch (action.type) {
    case SET_ACTIVE_PANE:
      activePane = state.activePane;

      if (
        action.activePane &&
        [CANVAS_PANE, DEVICE_PANE].includes(action.activePane)
      ) {
        activePane = action.activePane;
      }

      return {
        ...state,
        activePane,
      };

    default:
      return state;
  }
};

export default rightPaneReducer;
