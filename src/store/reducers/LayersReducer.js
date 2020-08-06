import _ from "lodash";

import {
  ADD_LAYER_ITEM,
  UPDATE_SELECTED_ITEM_ID,
  UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  selectedItemId: null,
  layers: [],
};

const layersReducer = (state = INITIAL_STATE, action) => {
  let layers = [];
  let selectedItemId = null;

  switch (action.type) {
    case ADD_LAYER_ITEM:
      layers = [...state.layers];

      if (typeof action.item === "object" && action.item.hasOwnProperty("id")) {
        layers.push(action.item);
      }

      return {
        ...state,
        layers,
      };

    case UPDATE_SELECTED_ITEM_ID:
      selectedItemId = state.selectedItemId;
      selectedItemId = action.id;

      return {
        ...state,
        selectedItemId,
      };

    case UPDATE_LAYER_DEVICE_SCREEN_SOURCE:
      layers = [...state.layers];

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
