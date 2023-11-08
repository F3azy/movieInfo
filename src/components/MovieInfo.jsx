import { Flex, Heading, Text } from "@chakra-ui/react";
import { React, useState } from "react";
import Ratings from "./Ratings";
import SmallInfo from "./SmallInfo";

const MovieInfo = ({
  title,
  rating,
  rated,
  runTime,
  year,
  genre,
  cast,
  plot,
}) => {

  const information = useState([
    {
      title: "Genre",
      content: genre,
    },
    {
      title: "Cast",
      content: cast,
    },
    {
      title: "Plot",
      content: plot,
    },
  ]);

  return (
    <Flex
      bg={{ base: "#161A1D99", lg: "#161A1D"}}
      direction="column"
      p={{ base: "20px", md: "32px", lg: "0" }}
      borderTopRadius="24px"
      minH="50vh"
    >
      <Flex
        direction="column"
        rowGap={{ base: "16px", md: "20px", lg: "24px" }}
      >
        <Heading size="2xl">{title}</Heading>
        {rating && <Ratings rating={rating}></Ratings>}
        <Flex justify="space-between" fontSize="20px" fontWeight="100">
          <Text>{rated}</Text>
          <Text>{runTime}</Text>
          <Text>{year}</Text>
        </Flex>

        {information[0]?.map((info) => (
          <SmallInfo
            key={info.title}
            infoTitle={info.title}
            content={info.content}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default MovieInfo;
