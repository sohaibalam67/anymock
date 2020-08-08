import { addImage } from "./image";

export const getItemById = (canvas, id) => {
  var object = null,
    objects = canvas.getObjects();

  for (var i = 0, len = canvas.size(); i < len; i++) {
    if (objects[i].id && objects[i].id === id) {
      object = objects[i];
      break;
    }
  }

  return object;
};

export const setCanvasBackgroundImage = async (canvas, source) => {
  try {
    let img = await addImage(source);

    let canvasAspect = canvas.width / canvas.height;
    let imgAspect = img.width / img.height;
    let left, top, scaleFactor;

    if (canvasAspect >= imgAspect) {
      scaleFactor = canvas.width / img.width;
      left = 0;
      top = -(img.height * scaleFactor - canvas.height) / 2;
    } else {
      scaleFactor = canvas.height / img.height;
      top = 0;
      left = -(img.width * scaleFactor - canvas.width) / 2;
    }

    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      opacity: 1,
      top: top,
      left: left,
      originX: "left",
      originY: "top",
      scaleX: scaleFactor,
      scaleY: scaleFactor,
      crossOrigin: "anonymous",
    });
  } catch (error) {
    return false;
  }

  return true;
};
