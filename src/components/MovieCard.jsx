import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import MovieDetails from "./MovieDetails";

const MovieCard = ({ movie }) => {
  return (
    <Flex
      w="100%"
      direction={{ base: "column", lg: "row" }}
      columnGap={{ base: "0", lg: "16px" }}
      rowGap={{ base: "20px", lg: "0" }}
    >
      <Image
        w={{
          base: "auto",
          lg: movie.Poster === "N/A" ? "60%" : "auto",
        }}
        m={{ base: "0 auto", lg: "0" }}
        minH="50vh"
        src={movie.Poster}
        alt={movie.Title}
        borderRadius="16px"
      />
      <MovieDetails
        title={movie.Title}
        rating={movie.Ratings[0]}
        rated={movie.Rated}
        runTime={movie.Runtime}
        year={movie.Year}
        genre={movie.Genre}
        cast={movie.Actors}
        plot={movie.Plot}
      />
    </Flex>
  );
};

export default MovieCard;
