import React from "react";
import { Image } from "@chakra-ui/react";

const MovieImage = ({ source, alter }) => {
  return (
    <>
      {source !== "N/A" ? 
        <Image
          w={{ base: "100%", lg: "auto" }}
          maxH="580px"
          m="0 auto"
          src={source}
          alt={alter}
          borderRadius={{ base: "0", lg: "24px" }}
        />
       : 
        <Image
          w={{ base: "30%", lg: "300px" }}
          minH="550px"
          src={source}
          alt={alter}
        />
      }
    </>
  );
};

export default MovieImage;
