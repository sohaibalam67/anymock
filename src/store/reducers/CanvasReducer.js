import {
  UPDATE_CANVAS,
  UPDATE_PRESET,
  UPDATE_WIDTH,
  UPDATE_HEIGHT,
  UPDATE_BACKGROUND,
} from "../actions/actionTypes";

import { presets, CUSTOM_CANVAS } from "../../constants/canvas";

const INITIAL_STATE = {
  canvas: null,
  preset: presets[0],
  width: 1600,
  height: 1200,
  background: "#ffffff",
};

const canvasReducer = (state = INITIAL_STATE, action) => {
  let canvas = null;
  let preset = null;
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

    case UPDATE_PRESET:
      preset = state.preset;
      width = state.width;
      height = state.height;

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
      width = state.width;
      preset = state.preset;

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
      height = state.height;
      preset = state.preset;

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
