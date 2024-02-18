import React, { useContext, useState } from "react";
import useImageDominantColor from "../hooks/useImageDominantColor";

const ImageColorContext = React.createContext(null);

export const useImageColor = () => {
  const context = useContext(ImageColorContext);
  if (!context)
    throw new Error("useImageColor must be used within an ImageColorProvider");
  return context;
};

const ImageColorProvider = ({ children }) => {
  const [bgImg, setBgImg] = useState(null);

  const colors = useImageDominantColor(bgImg);

  const value = {
    bgImg,
    setBgImg,
    ...colors,
  };

  return (
    <ImageColorContext.Provider value={value}>
      {children}
    </ImageColorContext.Provider>
  );
};

export default ImageColorProvider;
