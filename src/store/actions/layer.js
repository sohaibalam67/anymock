import {
  ADD_LAYER_ITEM,
  UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
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
