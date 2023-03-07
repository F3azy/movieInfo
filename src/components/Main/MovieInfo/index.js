import { Flex, Heading, Text } from '@chakra-ui/react';
import { React, useState } from 'react';
import Ratings from './Ratings';
import { Icon, useMediaQuery } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const MovieInfo = ({title, rating, rated, runTime, year, genre, cast, plot}) => {




  return (
    <Flex grow={1} h={{base: "calc(65vh)", lg: "auto"}} bg={{base: "#161A1D"}} position={{base: "relative", lg: "static"}} top={"-300px"} overflowY={{base: "scroll", lg: "auto"}} direction={"column"} rowGap={{base: "8px",lg: "16px"}} p={{base: "8px", lg: "0"}}>
      <Heading size={'2xl'}>{title}</Heading>
      <Ratings rating={rating}></Ratings>
      <Flex justify={"space-between"} fontSize={"20px"} fontWeight={100} >
        <Text>{rated}</Text>
        <Text>{runTime}</Text>
        <Text>{year}</Text>
      </Flex>
      <Flex direction={"column"} rowGap={"4px"}>
        <Heading size={'lg'}>Genre:</Heading>
        <Text fontSize={"20px"} fontWeight={100}>{genre}</Text>
      </Flex>
      <Flex direction={"column"} rowGap={"4px"}>
        <Heading size={'lg'}>Cast:</Heading>
        <Text fontSize={"20px"} fontWeight={100}>{cast}</Text>
      </Flex>
      <Flex direction={"column"} rowGap={"4px"}>
        <Heading size={'lg'}>Plot:</Heading>
        <Text fontSize={"20px"} fontWeight={100} align={"justify"}>{plot}</Text>
      </Flex>
    </Flex>
  )
};

export default MovieInfo;