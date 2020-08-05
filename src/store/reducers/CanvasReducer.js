import {
  UPDATE_CANVAS,
  UPDATE_WIDTH,
  UPDATE_HEIGHT,
  UPDATE_BACKGROUND,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  canvas: null,
  width: 1600,
  height: 1200,
  background: "#ffffff",
};

const canvasReducer = (state = INITIAL_STATE, action) => {
  let canvas = null;
  let width = null;
  let height = null;
  let background = null;

  switch (action.type) {
    case UPDATE_CANVAS:
      canvas = state.canvas;

      if (action.canvas) {
        canvas = action.canvas;
      }

      return {
        ...state,
        canvas,
      };

    case UPDATE_WIDTH:
      width = state.width;

      if (action.width >= 0) {
        width = action.width;
      }

      return {
        ...state,
        width,
      };

    case UPDATE_HEIGHT:
      height = state.height;

      if (action.height >= 0) {
        height = action.height;
      }

      return {
        ...state,
        height,
      };

    case UPDATE_BACKGROUND:
      background = state.background;

      if (action.color) {
        background = action.color;
      }

      return {
        ...state,
        background,
      };

    default:
      return state;
  }
};

export default canvasReducer;
