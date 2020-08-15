import {
  UPDATE_CANVAS,
  RESET_CANVAS,
  UPDATE_PRESET,
  UPDATE_WIDTH,
  UPDATE_HEIGHT,
  UPDATE_BACKGROUND,
  UPDATE_CANVAS_ZOOM,
  UPDATE_BACKGROUND_IMAGE,
  UPDATE_BACKGROUND_OPACITY,
  UPDATE_CANVAS_PROCESSING,
} from "../actions/actionTypes";

import { presets, CUSTOM_CANVAS } from "../../constants/canvas";
import { isNumber } from "../../helpers/common";

const INITIAL_STATE = {
  canvas: null,
  zoom: 40,
  preset: presets[0],
  width: 1600,
  height: 1200,
  background: "#ffffff",
  backgroundOpacity: 100,
  backgroundImage: null,
  processing: false,
};

const canvasReducer = (state = INITIAL_STATE, action) => {
  let canvas = state.canvas;
  let zoom = state.zoom;
  let preset = state.preset;
  let width = state.width;
  let height = state.height;
  let background = state.background;
  let backgroundImage = state.backgroundImage;
  let backgroundOpacity = state.backgroundOpacity;
  let processing = state.processing;

  switch (action.type) {
    case RESET_CANVAS:
      return {
        ...state,
        ...INITIAL_STATE,
        canvas,
      };

    case UPDATE_CANVAS:
      if (action.canvas) {
        canvas = action.canvas;
      }

      return {
        ...state,
        canvas,
      };

    case UPDATE_CANVAS_PROCESSING:
      processing = action.processing;

      return {
        ...state,
        processing,
      };

    case UPDATE_CANVAS_ZOOM:
      if (isNumber(action.zoom)) {
        zoom = action.zoom;
      }

      return {
        ...state,
        zoom,
      };

    case UPDATE_PRESET:
      if (action.preset) {
        preset = action.preset;
        if (preset.id !== CUSTOM_CANVAS) {
          width = action.preset.width;
          height = action.preset.height;
        }
      }

      return {
        ...state,
        preset,
        width,
        height,
      };

    case UPDATE_WIDTH:
      if (action.width >= 0) {
        width = action.width;
        preset = presets[0];
      }

      return {
        ...state,
        width,
        preset,
      };

    case UPDATE_HEIGHT:
      if (action.height >= 0) {
        height = action.height;
        preset = presets[0];
      }

      return {
        ...state,
        height,
        preset,
      };

    case UPDATE_BACKGROUND:
      if (action.color) {
        background = action.color;
      }

      return {
        ...state,
        background,
      };

    case UPDATE_BACKGROUND_IMAGE:
      backgroundImage = action.source;

      return {
        ...state,
        backgroundImage,
      };

    case UPDATE_BACKGROUND_OPACITY:
      if (isNumber(action.opacity)) {
        backgroundOpacity = Math.min(Math.max(action.opacity, 0), 100);
      }

      return {
        ...state,
        backgroundOpacity,
      };

    default:
      return state;
  }
};

export default canvasReducer;
