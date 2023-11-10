import { useState, useEffect } from "react";
import { Box, Flex, Spinner, Image } from "@chakra-ui/react";
import { MovieInfo, SearchInput, MovieNotFound } from "../components";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const { title = "wednesday" } = useParams();
  const navigate = useNavigate();

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
    if (movie && movie.Response !== "False" && movie.Poster !== "N/A")
      setBgImg(movie.Poster);
  }, [movie]);

  return (
    <Box bgImage={bgImg && `url(${bgImg})`} bgSize="cover" bgPosition="center">
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
          <SearchInput moveTo={navigate} />

          {loading ? (
            <Flex w="100%" minH="90%" justify="center" align="center" p="16px">
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
  );
};

export default Home;
