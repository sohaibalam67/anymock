import {
  ADD_LAYER_ITEM,
  UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
  UPDATE_ITEM_POSITION_BY_INDEX,
  UPDATE_DEVICE_SCREEN_FIT_BY_INDEX,
  UPDATE_ITEM_ANGLE_BY_INDEX,
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

export const updateItemPositionByIndex = (index, left, top) => {
  return {
    type: UPDATE_ITEM_POSITION_BY_INDEX,
    index,
    left,
    top,
  };
};

export const updateItemAngleByIndex = (index, angle) => {
  return {
    type: UPDATE_ITEM_ANGLE_BY_INDEX,
    index,
    angle,
  };
};

export const updateDeviceSreenFitByIndex = (index, fit) => {
  return {
    type: UPDATE_DEVICE_SCREEN_FIT_BY_INDEX,
    index,
    fit,
  };
};
