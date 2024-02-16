import { useEffect, useLayoutEffect, useState } from "react";
import {
  brighterHEX,
  compareHex,
  darkerHEX,
  getRGB,
  quantization,
  rgbToHex,
} from "../utils/color";

const useImageDominantColor = (source) => {
  const [color, setColor] = useState("");
  const [base, setBase] = useState("");
  const [bright, setBright] = useState("");
  const [dark, setDark] = useState("");

  useEffect(() => {
    const image = document.createElement("img");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    image.setAttribute("crossOrigin", "");

    image.onload = () => {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      ctx.drawImage(image, 0, 0);

      try {
        const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const rgbArray = getRGB(data);
        const rgbValue = quantization(rgbArray, 4)[0];

        setColor(rgbToHex(rgbValue.r, rgbValue.g, rgbValue.b));
      } catch (e) {
        console.log(e);
      }
    };

    image.srcset = source;
  }, [source]);

  useLayoutEffect(() => {
    if (compareHex(color, "272B2E")) {
      if (compareHex(color, "#935163", "<")) {
        setBase(brighterHEX(color, 30));
        setBright(brighterHEX(color, 55));
        setDark(darkerHEX(color, 10));
      } else {
        setColor(darkerHEX(color, 10));
      }
    } else {
      setColor(brighterHEX(color, 10));
    }
  }, [color]);

  return { base, bright, dark };
};

export default useImageDominantColor;
