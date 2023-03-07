import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Ratings from './Ratings';

const MovieInfo = ({title, rating}) => {
  return (
    <Flex grow={1} direction={"column"} gap={"16px"} p={{base: "8px", lg: "0"}}>
      <Heading>{title}</Heading>
      <Ratings rating={rating}></Ratings>
    </Flex>
  )
};

export default MovieInfo;