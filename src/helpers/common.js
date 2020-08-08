export const isNumber = (value) => {
  return typeof value === "number" && !isNaN(value);
};

export const opacityPercentToHex = (value) => {
  let percent = value;

  if (!isNumber(percent)) {
    percent = 0;
  }

  let percentToHexIntrapolationValue = Math.round((percent / 100) * 255);

  return percentToHexIntrapolationValue.toString(16).padStart(2, "0");
};

export const mergeColorAndOpacity = (color, opacity) => {
  return `${color}${opacity}`;
};
