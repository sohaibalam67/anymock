import _ from "lodash";

import {
  ADD_LAYER_ITEM,
  UPDATE_SELECTED_ITEM_ID,
  UPDATE_ITEM_POSITION_BY_INDEX,
  UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
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

    case UPDATE_SELECTED_ITEM_ID:
      selectedItemId = action.id;

      return {
        ...state,
        selectedItemId,
      };

    case UPDATE_ITEM_POSITION_BY_INDEX:
      if (
        typeof action.index === "number" &&
        typeof action.left === "number" &&
        typeof action.top === "number" &&
        action.index >= 0
      ) {
        layers = Object.assign([], state.layers);
        let transforms = { ...layers[action.index].transforms };
        transforms.top = action.top;
        transforms.left = action.left;
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

    default:
      return state;
  }
};

export default layersReducer;
