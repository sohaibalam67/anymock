import { createSelector } from "reselect";
import { devices } from "../../constants/devices";
import { DEVICE_TYPES } from "../../constants/deviceTypes";

const getSelectedItemId = (state) => state.layers.selectedItemId;
const getLayers = (state) => state.layers.layers;

export const getSelectedLayer = createSelector(
  [getSelectedItemId, getLayers],
  (selectedItemId, layers) => {
    if (selectedItemId === null) {
      return null;
    }

    let selectedLayer = null;
    for (let index = 0; index < layers.length; index++) {
      if (layers[index].id === selectedItemId) {
        selectedLayer = layers[index];
        break;
      }
    }
    return selectedLayer;
  }
);

export const getSelectedLayerIndex = createSelector(
  [getSelectedItemId, getLayers],
  (selectedItemId, layers) => {
    if (selectedItemId === null) {
      return null;
    }

    let selectedLayerIndex = null;
    for (let index = 0; index < layers.length; index++) {
      if (layers[index].id === selectedItemId) {
        selectedLayerIndex = index;
        break;
      }
    }
    return selectedLayerIndex;
  }
);

export const getSelectedDevice = createSelector(
  [getSelectedLayer],
  (selectedLayer) => {
    if (
      selectedLayer === null ||
      !Object.values(DEVICE_TYPES).includes(selectedLayer.type)
    ) {
      return null;
    }

    let selectedDevice = null;
    let allDevicesOfSameType = null;

    if (selectedLayer.type === DEVICE_TYPES.PHONE) {
      allDevicesOfSameType = devices.phones;
    } else if (selectedLayer.type === DEVICE_TYPES.LAPTOP) {
      allDevicesOfSameType = devices.laptops;
    } else if (selectedLayer.type === DEVICE_TYPES.TABLET) {
      allDevicesOfSameType = devices.tablets;
    } else if (selectedLayer.type === DEVICE_TYPES.WATCH) {
      allDevicesOfSameType = devices.watches;
    } else if (selectedLayer.type === DEVICE_TYPES.DISPLAY) {
      allDevicesOfSameType = devices.displays;
    }

    if (
      Array.isArray(allDevicesOfSameType) &&
      allDevicesOfSameType.length > 0
    ) {
      for (let index = 0; index < allDevicesOfSameType.length; index++) {
        if (allDevicesOfSameType[index].id === selectedLayer.device_id) {
          selectedDevice = allDevicesOfSameType[index];
          break;
        }
      }
    }

    return selectedDevice;
  }
);

export const getSelectedDeviceVariant = createSelector(
  [getSelectedDevice, getSelectedLayer],
  (selectedDevice, selectedLayer) => {
    if (
      selectedDevice === null ||
      selectedLayer === null ||
      !Object.values(DEVICE_TYPES).includes(selectedLayer.type)
    ) {
      return null;
    }

    let selectedDeviceVariant = null;

    if (Object.values(DEVICE_TYPES).includes(selectedLayer.type)) {
      for (let index = 0; index < selectedDevice.variants.length; index++) {
        if (selectedDevice.variants[index].id === selectedLayer.variant_id) {
          selectedDeviceVariant = selectedDevice.variants[index];
          break;
        }
      }
    }

    return selectedDeviceVariant;
  }
);
