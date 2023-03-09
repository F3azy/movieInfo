import { Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { React, useState } from 'react';
import Ratings from './Ratings';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import SmallInfo from './SmallInfo';

const MovieInfo = ({title, rating, rated, runTime, year, genre, cast, plot}) => {
  const [showInfo, setShowInfo] = useState(() => {return false});
  const [newBottom, setNewBottom] = useState(() => {return 0});

  const information = useState(() => { return [
    {
      title : "Genre",
      content : genre
    },
    {
      title : "Cast",
      content : cast
    },
    {
      title : "Plot",
      content : plot
    }
  ]});

  function show() {
    setShowInfo(true);
    setNewBottom(window.innerHeight/1.9);
  }

  function unShow() {
    setShowInfo(false);
    setNewBottom(0);
  }

  return (
    <Flex grow={1} h={{base: window.innerHeight/1.6, sm: "86vh", lg: "auto"}} borderTopRadius={"16px"} bg={{base: "#161A1D"}} position={{base: "relative", md: "static"}} bottom={{base: newBottom, sm: 0}} transition={"bottom 1s"} overflowY={{base: "scroll", lg: "auto"}} direction={"column"} rowGap={"16px"} p={{base: "0 8px", lg: "0"}}>
      <Flex display={{base: "flex", sm: "none", lg: "none"}} position={"sticky"} bg={{base: "#161A1D"}} top={0} w={"100%"} justify={"center"} m={"0 auto"} borderBottom={"solid 1px"} cursor="pointer" onClick={ showInfo ? unShow : show}>
        <Icon as={showInfo ? ChevronDownIcon : ChevronUpIcon} boxSize={10} />
      </Flex>
      <Heading size={'2xl'}>{title}</Heading>
      <Ratings rating={rating}></Ratings>
      <Flex justify={"space-between"} fontSize={"20px"} fontWeight={100} >
        <Text>{rated}</Text>
        <Text>{runTime}</Text>
        <Text>{year}</Text>
      </Flex>

      {information[0]?.map((info) => <SmallInfo key={info.title} infoTitle={info.title} content={info.content} />)}

    </Flex>
  )
};

export default MovieInfo;