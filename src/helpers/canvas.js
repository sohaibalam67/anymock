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
