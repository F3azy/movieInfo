import { useLayoutEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SearchInput, Error, Loading, MovieCard } from "../components";
import useFetchMovie from "../hooks/useFetchMovie";
import { useImageColor } from "../context/ImageColorContext";

const Home = () => {
  const { data: movie, loading, error } = useFetchMovie();

  const { bgImg, setBgImg } = useImageColor();

  useLayoutEffect(() => {
    if (movie && movie.Poster !== "N/A") setBgImg(movie.Poster);
  }, [movie, setBgImg]);

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
          <SearchInput />
          {loading && <Loading />}
          {error !== "" && <Error err={error} />}
          {movie && <MovieCard movie={movie} />}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
