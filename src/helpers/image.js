import { fabric } from "fabric";

export const addImage = (url) => {
  return new Promise((resolve, reject) => {
    new fabric.Image.fromURL(url, (frameImage) => resolve(frameImage));
  });
};
