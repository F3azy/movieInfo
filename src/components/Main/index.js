import { Flex, Spinner } from '@chakra-ui/react';
import { React, useState, useEffect } from 'react';
import MovieImage from './MovieImage';
import MovieInfo from './MovieInfo';
import MovieSearch from './MovieSearchInput';

const Main = () => {
  const [title, setTitle] = useState(() => {return "wednesday"});
  const [query, setQuery] = useState(() => {return `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=`+title});
  const [loading, setLoading] = useState(() => {return true});
  const [movie, setMovie] = useState(() => {return null});

  useEffect(() => {
    setQuery(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=`+title);
  }, [title]);

  useEffect(() => {
    setLoading(true);
    fetch(query)
    .then(response => response.json())
    .then(movieJson => {
      let timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      setMovie(movieJson);
      return () => clearTimeout(timer);
    });
  }, [query]);

  return (
    <Flex w={"100%"} h={"calc(100vh)"} overflowY={{base: "hidden", lg: "auto"}} justify={"center"} align={{base: "flex-start", lg: "center"}}>
      <Flex w={{base: "100%", lg: "50%"}} minH={"50%"} direction={"column"} bg={"#161A1D"} p={{base:"0", lg: "20px"}} borderRadius={{base:"0", lg: "24px"}} rowGap={{base: "0", lg: "16px"}}>
        <MovieSearch setMovieTitle={setTitle} />
        
        {loading ? 
        <Flex w={"100%"} justify={"center"} align={"center"} p={"16px"}>
          <Spinner color='#BA181B' size='xl' /> 
        </Flex>
        : 
          <Flex w={"100%"} direction={{base: "column", lg: "row"}} columnGap={{base: "0", lg: "16px"}}>
            <MovieImage source={movie.Poster} alter={movie.Title} />
            <MovieInfo title={movie.Title} rating={movie.Ratings[0]} rated={movie.Rated} runTime={movie.Runtime} year={movie.Year} genre={movie.Genre} cast={movie.Actors} plot={movie.Plot} />
          </Flex>
        }
      </Flex>
    </Flex>
  )
};

export default Main;