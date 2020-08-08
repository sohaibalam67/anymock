import _ from "lodash";
import { isNumber } from "../../helpers/common";
import { SCREEN_SIZE_FILL, SCREEN_SIZE_FIT } from "../../constants/screen";

import {
  ADD_LAYER_ITEM,
  UPDATE_SELECTED_ITEM_ID,
  UPDATE_ITEM_ANGLE_BY_INDEX,
  UPDATE_ITEM_POSITION_BY_INDEX,
  UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
  UPDATE_DEVICE_SCREEN_FIT_BY_INDEX,
  UPDATE_LAYER_ITEM,
  DELETE_ITEMS_BY_IDS,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  selectedItemId: null,
  layers: [],
};

const layersReducer = (state = INITIAL_STATE, action) => {
  let layers = [...state.layers];
  let selectedItemId = state.selectedItemId;

  switch (action.type) {
    case ADD_LAYER_ITEM:
      if (typeof action.item === "object" && action.item.hasOwnProperty("id")) {
        layers.push(action.item);
      }

      return {
        ...state,
        layers,
      };

    case UPDATE_LAYER_ITEM:
      if (typeof action.item === "object" && action.item.hasOwnProperty("id")) {
        const item_index = _.findIndex(layers, { id: action.item.id });

        if (item_index >= 0) {
          layers[item_index] = { ...layers[item_index], ...action.item };
        }
      }

      console.log(layers);

      return {
        ...state,
        layers,
      };

    case UPDATE_SELECTED_ITEM_ID:
      selectedItemId = action.id;

      return {
        ...state,
        selectedItemId,
      };

    case UPDATE_ITEM_POSITION_BY_INDEX:
      if (
        isNumber(action.index) &&
        isNumber(action.left) &&
        isNumber(action.top) &&
        action.index >= 0
      ) {
        layers = Object.assign([], state.layers);
        let transforms = { ...layers[action.index].transforms };
        transforms.top = Math.round(action.top * 100 + Number.EPSILON) / 100;
        transforms.left = Math.round(action.left * 100 + Number.EPSILON) / 100;
        layers[action.index].transforms = transforms;
      }

      return {
        ...state,
        layers,
      };

    case UPDATE_ITEM_ANGLE_BY_INDEX:
      if (
        isNumber(action.index) &&
        isNumber(action.angle) &&
        action.index >= 0
      ) {
        layers = Object.assign([], state.layers);
        let transforms = { ...layers[action.index].transforms };
        transforms.angle =
          Math.round(action.angle * 100 + Number.EPSILON) / 100;
        layers[action.index].transforms = transforms;
      }

      return {
        ...state,
        layers,
      };

    case UPDATE_LAYER_DEVICE_SCREEN_SOURCE:
      const item_index = _.findIndex(layers, { id: action.id });

      if (item_index >= 0) {
        layers[item_index].screenSource = action.source;
      }

      return {
        ...state,
        layers,
      };

    case UPDATE_DEVICE_SCREEN_FIT_BY_INDEX:
      if (
        isNumber(action.index) &&
        action.index >= 0 &&
        action.index < state.layers.length &&
        [SCREEN_SIZE_FILL, SCREEN_SIZE_FIT].includes(action.fit)
      ) {
        layers = Object.assign([], state.layers);
        layers[action.index].screenSize = action.fit;
      }

      return {
        ...state,
        layers,
      };

    case DELETE_ITEMS_BY_IDS:
      if (Array.isArray(action.ids) && action.ids.length > 0) {
        layers = Object.assign([], state.layers);
        layers = layers.filter((layer) => {
          return !action.ids.includes(layer.id);
        });

        selectedItemId = null;
      }

      return {
        ...state,
        layers,
        selectedItemId,
      };

    default:
      return state;
  }
};

export default layersReducer;
