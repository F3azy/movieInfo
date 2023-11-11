import { useEffect, useState } from "react";
import { getRGB, quantization, rgbToHex } from "../utils/color";

const useImageDominantColor = (source) => {
  const [color, setColor] = useState("");

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

  return [color, setColor];
};

export default useImageDominantColor;
