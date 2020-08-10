// If the value is a valid number
export const isNumber = (value) => typeof value === "number" && !isNaN(value);

// If the value is a valid object
export const isObject = (item) =>
  typeof item === "object" && Array.isArray(item) === false && item !== null;

// Maps 0 - 100%  =>  00 to ff
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
