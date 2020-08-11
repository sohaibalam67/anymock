import {
  UPDATE_CANVAS,
  UPDATE_PRESET,
  UPDATE_WIDTH,
  UPDATE_HEIGHT,
  UPDATE_BACKGROUND,
  UPDATE_CANVAS_ZOOM,
  UPDATE_BACKGROUND_IMAGE,
  UPDATE_BACKGROUND_OPACITY,
} from "./actionTypes";

export const updateCanvas = (canvas) => {
  return {
    type: UPDATE_CANVAS,
    canvas,
  };
};

export const updateZoom = (zoom) => {
  return {
    type: UPDATE_CANVAS_ZOOM,
    zoom,
  };
};

export const updatePreset = (preset) => {
  return {
    type: UPDATE_PRESET,
    preset,
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

export const updateCanvasBackgroundImage = (source) => {
  return {
    type: UPDATE_BACKGROUND_IMAGE,
    source,
  };
};

export const updateCanvasBackgroundOpacity = (opacity) => {
  return {
    type: UPDATE_BACKGROUND_OPACITY,
    opacity,
  };
};
