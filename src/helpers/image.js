import { fabric } from "fabric";
import uuid from "react-uuid";
import { SCREEN_SIZE_FIT } from "../constants/screen";

export const addImage = (url) => {
  return new Promise((resolve, reject) => {
    new fabric.Image.fromURL(url, (img) => {
      if (img._element === null) {
        return reject(new Error("Image not loaded"));
      }
      return resolve(img);
    });
  });
};

export const addDeviceGroup = async (
  id,
  name,
  device,
  screen,
  screen_fit,
  transforms = { top: 0, left: 0, scaleX: 1, scaleY: 1, angle: 0 }
) => {
  let frameInstance = null;

  try {
    frameInstance = await addImage(device.source);
  } catch (error) {
    return null;
  }

  frameInstance.set({
    id: "frame",
    name: "frame",
  });

  frameInstance.scaleToWidth(device.baseWidth);

  let screenshotInstance = null;

  try {
    screenshotInstance = await addImage(screen);
  } catch (error) {
    return null;
  }

  let screenScaleFactor = screenshotInstance.width / device.screenOffset.width;

  screenshotInstance.set({
    id: "screen",
    name: "screen",
    left: device.screenOffset.left,
    top: device.screenOffset.top,
    scaleX: device.screenOffset.width / screenshotInstance.width,
    scaleY:
      screen_fit === SCREEN_SIZE_FIT
        ? device.screenOffset.width / screenshotInstance.width
        : device.screenOffset.height / screenshotInstance.height,
    clipPath: new fabric.Rect({
      originX: "center",
      originY: "top",
      top:
        screen_fit === SCREEN_SIZE_FIT
          ? -screenshotInstance.height / 2
          : -(device.screenOffset.height * screenScaleFactor) / 2,
      width: device.screenOffset.width * screenScaleFactor,
      height: device.screenOffset.height * screenScaleFactor,
    }),
  });

  frameInstance.bringToFront();

  let group = new fabric.Group([screenshotInstance, frameInstance], {
    left: transforms.left,
    top: transforms.top,
  });

  group.set({
    id: id,
    name: name,
    angle: transforms.angle,
    scaleX: transforms.scaleX,
    scaleY: transforms.scaleY,
    device_id: device.device_id,
    device_type: device.device_type,
    variant_id: device.variant_id,
    device_screen_offset: device.screenOffset,
    borderColor: "#0E98FC",
    cornerColor: "#FFFFFF",
    cornerStrokeColor: "#0E98FC",
    transparentCorners: false,
    centeredScaling: false,
    borderOpacityWhenMoving: 1,
    borderScaleFactor: 4,
    cornerSize: 20,
    hasRotationPoint: true,
    lockScalingFlip: true,
    lockUniScaling: true,
    objectCaching: false,
  });

  return group;
};

export const downloadImage = (canvas, type = "png") => {
  var fileName = uuid();
  const canvasDataUrl = canvas.toDataURL({
    format: type ? type : "png",
    multiplier: 1,
  });
  let link = document.createElement("a");
  fileName = `${fileName}.${type}`;
  link.setAttribute("href", canvasDataUrl);
  link.setAttribute("crossOrigin", "anonymous");
  link.setAttribute("target", "_blank");
  link.setAttribute("download", fileName);
  if (document.createEvent) {
    var evtObj = document.createEvent("MouseEvents");
    evtObj.initEvent("click", true, true);
    link.dispatchEvent(evtObj);
  } else if (link.click) {
    link.click();
  }
};
