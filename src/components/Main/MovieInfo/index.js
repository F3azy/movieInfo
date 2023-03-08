import { Flex, Heading, Text, Icon, useMediaQuery } from '@chakra-ui/react';
import { React, useState } from 'react';
import Ratings from './Ratings';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const MovieInfo = ({title, rating, rated, runTime, year, genre, cast, plot}) => {
  const [showInfo, setShowInfo] = useState(() => {return false});
  const [newTop, setNewTop] = useState(() => {return 0});

  const [isLargerThan800] = useMediaQuery('(min-height: 800px)')

  function show() {
    setShowInfo(true);
    setNewTop(window.innerHeight/2.5);
  }

  function unShow() {
    setShowInfo(false);
    setNewTop(0);
  }

  return (
    <Flex grow={1} h={{base: "calc(55vh)", lg: "auto"}} borderTopRadius={"16px"} bg={{base: "#161A1D"}} position={{base: "relative", lg: "static"}} top={-newTop} transition={"top 1s"} overflowY={{base: "scroll", lg: "auto"}} direction={"column"} rowGap={{base: "8px",lg: "16px"}} p={{base: "0 8px", lg: "0"}}>
      <Flex display={{base: "flex", lg: "none"}} position={"sticky"} bg={{base: "#161A1D"}} top={0} w={"100%"} justify={"center"} m={"0 auto"} borderBottom={"solid 1px"} cursor="pointer" onClick={ showInfo ? unShow : show}>
        <Icon as={showInfo ? ChevronDownIcon : ChevronUpIcon} boxSize={10} />
      </Flex>
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