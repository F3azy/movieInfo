import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const MovieNotFound = ({err}) => {
  return (
    <Flex w={"100%"} minH={"90%"} justify={"center"} align={"center"} p={"16px"}>
        <Text fontSize='5xl' align={"center"}>{err}</Text>
    </Flex>
  )
}

export default MovieNotFound