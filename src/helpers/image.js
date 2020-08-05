import { fabric } from "fabric";

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

  screenshotInstance.set({
    id: "screen",
    name: "screen",
    left: device.screenOffset.left,
    top: device.screenOffset.top,
    scaleX: device.screenOffset.width / screenshotInstance.width,
    scaleY: device.screenOffset.height / screenshotInstance.height,
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
    cornerColor: "#0E98FC",
    transparentCorners: false,
    centeredScaling: false,
    borderOpacityWhenMoving: 1,
    hasRotationPoint: true,
    lockScalingFlip: true,
    lockUniScaling: true,
    objectCaching: false,
  });

  return group;
};

export const downloadAsPNG = (canvas) => {
  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var fileName =
    month + "" + day + "" + year + "" + hours + "" + minutes + "" + seconds;
  const canvasdata = canvas;
  const canvasDataUrl = canvasdata
      .toDataURL()
      .replace(/^data:image\/[^;]*/, "data:application/octet-stream"),
    link = document.createElement("a");
  fileName = fileName + ".png";
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
