import React from "react";
import { Image } from "@chakra-ui/react";

const MovieImage = ({ source, alter }) => {
  return (
    <Image
      w={{ base: "80%", md: "60%", lg: "auto" }}
      m="0 auto"
      minH="50vh"
      src={source}
      alt={alter}
      borderRadius="16px"
    />
  );
};

export default MovieImage;
