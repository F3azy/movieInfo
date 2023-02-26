import { Flex } from '@chakra-ui/react';
import React from 'react';
import MovieImage from './MovieImage';
import MovieInfo from './MovieInfo';

const Main = () => {
  return (
    <Flex w="100%" h="calc(100vh)" justify="center" align="center">
        <MovieImage />
        <MovieInfo />
    </Flex>
  )
};

export default Main;