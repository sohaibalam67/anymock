import {
  UPDATE_CANVAS,
  UPDATE_WIDTH,
  UPDATE_HEIGHT,
  UPDATE_BACKGROUND,
} from "./actionTypes";

export const updateCanvas = (canvas) => {
  return {
    type: UPDATE_CANVAS,
    canvas,
  };
};

export const updateWidth = (width) => {
  return {
    type: UPDATE_WIDTH,
    width,
  };
};

export const updateHeight = (height) => {
  return {
    type: UPDATE_HEIGHT,
    height,
  };
};

export const updateBackground = (color) => {
  return {
    type: UPDATE_BACKGROUND,
    color,
  };
};
