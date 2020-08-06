import {
  ADD_LAYER_ITEM,
  UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
  UPDATE_SELECTED_ITEM_ID,
} from "./actionTypes";

export const addItemToLayer = (item) => {
  return {
    type: ADD_LAYER_ITEM,
    item,
  };
};

export const updateDeviceScreenSource = (id, source) => {
  return {
    type: UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
    id,
    source,
  };
};

export const updateSelectedItemId = (id) => {
  return {
    type: UPDATE_SELECTED_ITEM_ID,
    id,
  };
};
