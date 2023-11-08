import { Flex, Heading, Text, Icon, Divider  } from '@chakra-ui/react';
import { React, useState } from 'react';
import Ratings from './Ratings';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import SmallInfo from './SmallInfo';

const MovieInfo = ({title, rating, rated, runTime, year, genre, cast, plot}) => {
  const [showInfo, setShowInfo] = useState(() => {return false});
  const [newBottom, setNewBottom] = useState(() => {return 4});
  const [newHeight, setNewHeight] = useState(() => {return 90});

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
    setNewBottom(500);
    setNewHeight(550);
  }

  function unShow() {
    setShowInfo(false);
    setNewBottom(4);
    setNewHeight(90);
  }

  return (
    <Flex grow={1} borderTopRadius={"16px"} bg={{base: "#161A1D"}} position={{base: "relative", md: "static"}} bottom={{base: newBottom, sm: 0}} transition={"bottom 1s"} overflowY={{base: "scroll", lg: "auto"}} direction={"column"} p={{base: "0 8px", lg: "0"}}>
        <Flex display={{base: "flex", sm: "none", lg: "none"}} position={"sticky"} bg={{base: "#161A1D"}} top={0} w={"100%"} justify={"center"} m={"0 auto"} cursor="pointer" onClick={ showInfo ? unShow : show}>
          <Icon as={showInfo ? ChevronDownIcon : ChevronUpIcon} boxSize={10} />
        </Flex>
        <Divider display={{base: "flex", sm: "none", lg: "none"}}  />
      <Flex h={{base: newHeight, sm: "86vh", lg: "auto"}} transition={"height 1s"} borderTopRadius={"16px"} bg={{base: "#161A1D"}} overflowY={{base: "scroll", lg: "auto"}} direction={"column"} rowGap={{base: "8px", md: "16px"}}>
        <Heading size={'2xl'}>{title}</Heading>
        <Ratings rating={rating}></Ratings>
        <Flex justify={"space-between"} fontSize={"20px"} fontWeight={100} >
          <Text>{rated}</Text>
          <Text>{runTime}</Text>
          <Text>{year}</Text>
        </Flex>

        {information[0]?.map((info) => <SmallInfo key={info.title} infoTitle={info.title} content={info.content} />)}

      </Flex>
    </Flex>
  )
};

export default MovieInfo;