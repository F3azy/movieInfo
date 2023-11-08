import { React, useState, useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "./styles/theme"
import "./styles/globals.css";
import { Flex, Spinner } from '@chakra-ui/react';
import { 
  MovieImage,  
  MovieInfo,
  MovieSearchInput,
  MovieNotFound 
} from './components';

function App() {
  const [title, setTitle] = useState("wednesday");
  const query = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=`+title;

  const [loading, setLoading] = useState(() => {return true});
  const [notFound, setNotFound] = useState(() => {return false});
  const [movie, setMovie] = useState(() => {return null});

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetch(query)
    .then(response => response.json())
    .then(movieJson => {
      setLoading(false);
      setMovie(movieJson);

      if(movieJson.Response !== "True") setNotFound(true);

    });
  }, [query]);

  return (
    <ChakraProvider theme={theme}>
      <Flex w={"100%"} h={"calc(100vh)"} bg={{base: "#161A1D", sm: "inherit"}} overflowY={{base: "hidden", lg: "auto"}} justify={"center"} align={{base: "flex-start", lg: "center"}}>
        <Flex w={{base: "100%", lg: "90%", xl: "70%", "2xl": "50%"}} h={{base: "calc(100vh)", lg: "auto"}} minH={"50%"} direction={"column"} bg={"#161A1D"} p={{base:"0", lg: "20px"}} borderRadius={{base:"0", lg: "24px"}} rowGap={{base: "0", lg: "16px"}}>
          <MovieSearchInput setMovieTitle={setTitle} />
          
          {loading ? 
          <Flex w={"100%"} minH={"90%"} justify={"center"} align={"center"} p={"16px"}>
            <Spinner color='#BA181B' size='xl' /> 
          </Flex>
          : 
          notFound ? 
          <MovieNotFound err={movie.Error} />
          :
          <Flex w={"100%"} direction={{base: "column", sm: "row"}} columnGap={{base: "0", lg: "16px"}}>
            <MovieImage source={movie.Poster} alter={movie.Title} />
            <MovieInfo title={movie.Title} rating={movie.Ratings[0]} rated={movie.Rated} runTime={movie.Runtime} year={movie.Year} genre={movie.Genre} cast={movie.Actors} plot={movie.Plot} />
          </Flex>
          
          }
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
