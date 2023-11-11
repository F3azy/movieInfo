export function getRGB(imageData) {
  const rgbArray = [];

  for (let i = 0; i < imageData.length; i += 4) {
    const rgb = {
      r: imageData[i],
      g: imageData[i + 1],
      b: imageData[i + 2],
    };
    rgbArray.push(rgb);
  }

  return rgbArray;
}

const findBiggestColorRange = (rgbValues) => {
  let rMin = Number.MAX_VALUE;
  let gMin = Number.MAX_VALUE;
  let bMin = Number.MAX_VALUE;

  let rMax = Number.MIN_VALUE;
  let gMax = Number.MIN_VALUE;
  let bMax = Number.MIN_VALUE;

  rgbValues.forEach((pixel) => {
    rMin = Math.min(rMin, pixel.r);
    gMin = Math.min(gMin, pixel.g);
    bMin = Math.min(bMin, pixel.b);

    rMax = Math.max(rMax, pixel.r);
    gMax = Math.max(gMax, pixel.g);
    bMax = Math.max(bMax, pixel.b);
  });

  const rRange = rMax - rMin;
  const gRange = gMax - gMin;
  const bRange = bMax - bMin;

  const biggestRange = Math.max(rRange, gRange, bRange);
  if (biggestRange === rRange) {
    return "r";
  } else if (biggestRange === gRange) {
    return "g";
  } else {
    return "b";
  }
};

export function quantization(rgbValues, depth) {
  const MAX_DEPTH = 4;
  if (depth === MAX_DEPTH || rgbValues.length === 0) {
    const color = rgbValues.reduce(
      (prev, curr) => {
        prev.r += curr.r;
        prev.g += curr.g;
        prev.b += curr.b;

        return prev;
      },
      {
        r: 0,
        g: 0,
        b: 0,
      }
    );

    color.r = Math.round(color.r / rgbValues.length);
    color.g = Math.round(color.g / rgbValues.length);
    color.b = Math.round(color.b / rgbValues.length);
    return [color];
  }

  const componentToSortBy = findBiggestColorRange(rgbValues);
  rgbValues.sort((p1, p2) => {
    return p1[componentToSortBy] - p2[componentToSortBy];
  });

  const mid = rgbValues.length / 2;
  return [
    ...quantization(rgbValues.slice(0, mid), depth + 1),
    ...quantization(rgbValues.slice(mid + 1), depth + 1),
  ];
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex) {
  let HEX = hexHasHash(hex);

  return {
    r: parseInt(HEX.slice(0, 2), 16),
    g: parseInt(HEX.slice(2, 4), 16),
    b: parseInt(HEX.slice(4, 6), 16),
  };
}

export function brighterHEX(hex, amount = 20) {
  const RGB = hexToRgb(hex);

  if (RGB.r + amount > 255) RGB.r = 255;
  else RGB.r = RGB.r + amount;
  if (RGB.g + amount > 255) RGB.g = 255;
  else RGB.g = RGB.g + amount;
  if (RGB.b + amount > 255) RGB.b = 255;
  else RGB.b = RGB.b + amount;

  return rgbToHex(RGB.r, RGB.g, RGB.b);
}

export function darkerHEX(hex, amount = 20) {
  const RGB = hexToRgb(hex);

  if (RGB.r - amount < 0) RGB.r = 0;
  else RGB.r = RGB.r - amount;
  if (RGB.g - amount < 0) RGB.g = 0;
  else RGB.g = RGB.g - amount;
  if (RGB.b - amount < 0) RGB.b = 0;
  else RGB.b = RGB.b - amount;

  return rgbToHex(RGB.r, RGB.g, RGB.b);
}

export function compareHex(a, b, operator = ">") {
  let A = hexHasHash(a);
  let B = hexHasHash(b);

  if (operator === ">") return parseInt("0x" + A, 16) > parseInt(B, 16);
  else return parseInt("0x" + A, 16) < parseInt(B, 16);
}

function hexHasHash(hex) {
  if (hex.slice(0, 1) === "#") return hex.slice(1);
  else return hex;
}
