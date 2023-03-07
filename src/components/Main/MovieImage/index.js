import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

const MovieImage = ({source, alter}) => {
  return (
    <>
    {(source!=="N/A") ? 
    <Image 
      w={{base: "100%", lg: "auto"}} 
      maxH={{lg:"480px"}}
      src={source} 
      alt={alter} 
      borderRadius={{base: "0", lg: "24px"}} 
    />
    :
    <Image 
      w={{base: "100%", lg: "300px"}} 
      minH={"300px"}
      src={source} 
      alt={alter} 
    />
    }
    </>
  )
};

export default MovieImage;