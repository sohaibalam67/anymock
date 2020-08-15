import {
  RESET_LAYERS,
  ADD_LAYER_ITEM,
  UPDATE_LAYER_DEVICE_SCREEN_SOURCE,
  UPDATE_ITEM_POSITION_BY_INDEX,
  UPDATE_DEVICE_SCREEN_FIT_BY_INDEX,
  UPDATE_ITEM_ANGLE_BY_INDEX,
  UPDATE_SELECTED_ITEM_ID,
  UPDATE_LAYER_ITEM,
  DELETE_ITEMS_BY_IDS,
} from "./actionTypes";

export const resetLayer = () => {
  return {
    type: RESET_LAYERS,
  };
};

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

export const updateLayerItem = (item) => {
  return {
    type: UPDATE_LAYER_ITEM,
    item,
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

export const deleteItemsByIds = (ids) => {
  return {
    type: DELETE_ITEMS_BY_IDS,
    ids,
  };
};
