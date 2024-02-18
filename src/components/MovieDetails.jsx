import { Flex, Heading, Text } from "@chakra-ui/react";
import Ratings from "./Ratings";
import SectionInfo from "./SectionInfo";

const MovieDetails = ({ movie }) => {
  const sections = [
    {
      title: "Genre",
      content: movie.Genre,
    },
    {
      title: "Cast",
      content: movie.Actors,
    },
    {
      title: "Plot",
      content: movie.Plot,
    },
  ];

  return (
    <Flex
      w="100%"
      minH="50vh"
      direction="column"
      p={{ base: "20px", md: "32px", lg: "0" }}
      bg={{ base: "linear-gradient(#161A1D75, #161A1D99)", lg: "#161A1D" }}
      borderTopRadius="24px"
      boxShadow={{ base: "0 8px 32px 0 #00000030", lg: "none" }}
    >
      <Flex
        direction="column"
        rowGap={{ base: "16px", md: "20px", lg: "24px" }}
      >
        <Heading size="2xl">{movie.Title}</Heading>
        {movie.Rating && <Ratings rating={movie.Rating}></Ratings>}
        <Flex justify="space-between" fontSize="20px" fontWeight="100">
          <Text>{movie.Rated}</Text>
          <Text>{movie.Runtime}</Text>
          <Text>{movie.Year}</Text>
        </Flex>

        {sections.map((section) => (
          <SectionInfo
            key={section.title}
            label={section.title}
            content={section.content}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default MovieDetails;
