import React from 'react';
import { Image } from '@chakra-ui/react';

const MovieImage = ({source, alter}) => {
  return (
      <Image w={{base: "100%", lg: "auto"}} minW="100px" src={source} alt={alter} borderRadius={{base: "0", lg: "24px"}} />
  )
};

export default MovieImage;