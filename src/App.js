import { React, useState, useEffect } from "react";
import { theme } from "./styles/theme";
import "./styles/globals.css";
import { Box, ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import {
  MovieImage,
  MovieInfo,
  MovieSearchInput,
  MovieNotFound,
} from "./components";

function App() {
  const [title, setTitle] = useState("wednesday");
  const query =
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=` +
    title;

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [movie, setMovie] = useState(null);
  const [bgImg, setBgImg] = useState(null);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetch(query)
      .then((response) => response.json())
      .then((movieJson) => {
        setLoading(false);
        setMovie(movieJson);

        if (movieJson.Response !== "True") setNotFound(true);
      });
  }, [query]);

  useEffect(() => {
    if (movie && movie.Response !== "False") setBgImg(movie.Poster);
  }, [movie]);

  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImage={bgImg && `url(${bgImg})`}
        bgSize="cover"
        bgPosition="center"
      >
        <Flex 
        minH="calc(100vh)"
        justify="center"
        align="center"       
        backdropFilter={{ base: "auto" }}
        backdropBlur={{ base: "70px" }}
        >
          <Flex
            w={{ base: "100%", lg: "90%", xl: "70%", "2xl": "50%" }}
            m="0 auto"
            minH={{ base: "calc(100vh)", lg: "auto" }}
            direction="column"
            bg={{ base: "transparent", lg: "#161A1D" }}
            p={{ base: "0", lg: "20px" }}
            borderRadius={{ base: "0", lg: "36px" }}
            rowGap="20px"
          >
            <MovieSearchInput setMovieTitle={setTitle} />

            {loading ? (
              <Flex
                w="100%"
                minH="90%"
                justify="center"
                align="center"
                p="16px"
              >
                <Spinner color="#BA181B" size="xl" />
              </Flex>
            ) : notFound ? (
              <MovieNotFound err={movie.Error} />
            ) : (
              <Flex
                w="100%"
                direction={{ base: "column", lg: "row" }}
                columnGap={{ base: "0", lg: "16px" }}
                rowGap={{ base: "20px", lg: "0" }}
              >
                <MovieImage source={movie.Poster} alter={movie.Title} />
                <MovieInfo
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
            )}
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
