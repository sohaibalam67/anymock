import { fabric } from "fabric";

export const addImage = (url) => {
  return new Promise((resolve, reject) => {
    new fabric.Image.fromURL(url, (frameImage) => resolve(frameImage));
  });
};

export const addDeviceGroup = async (
  id,
  name,
  device,
  screen,
  transforms = { top: 0, left: 0, scaleX: 1, scaleY: 1, angle: 0 }
) => {
  let frameInstance = await addImage(device.source);

  frameInstance.set({
    left: 0,
    top: 0,
    angle: 0,
    transparentCorners: false,
    id: "frame",
    borderColor: "#0E98FC",
    cornerColor: "#0E98FC",
    centeredScaling: false,
    borderOpacityWhenMoving: 1,
    hasRotationPoint: false,
    lockScalingFlip: true,
    lockUniScaling: true,
    objectCaching: false,
    name: "frame",
  });

  frameInstance.scaleToWidth(device.baseWidth);

  let screenshotInstance = await addImage(screen);

  screenshotInstance.set({
    left: device.screenOffset.left,
    top: device.screenOffset.top,
    cropX: 0,
    cropY: 0,
    id: "screen",
    scaleX: device.screenOffset.width / screenshotInstance.width,
    scaleY: device.screenOffset.height / screenshotInstance.height,
    centeredScaling: false,
    borderOpacityWhenMoving: 1,
    lockScalingFlip: true,
    lockUniScaling: true,
    objectCaching: false,
    name: "screen",
  });

  frameInstance.bringToFront();

  let group = new fabric.Group([screenshotInstance, frameInstance], {
    left: transforms.left,
    top: transforms.top,
  });

  group.set({
    transparentCorners: false,
    angle: transforms.angle,
    scaleX: transforms.scaleX,
    scaleY: transforms.scaleY,
    id: id,
    device_id: device.id,
    variant_id: device.variant_id, // TODO: change
    device_screen_offset: device.screenOffset,
    borderColor: "#0E98FC",
    cornerColor: "#0E98FC",
    centeredScaling: false,
    borderOpacityWhenMoving: 1,
    hasRotationPoint: true,
    lockScalingFlip: true,
    lockUniScaling: true,
    objectCaching: false,
    name: name,
  });

  return group;
};
