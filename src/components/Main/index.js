import { Flex } from '@chakra-ui/react';
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
      setMovie(movieJson);
      setLoading(false);
      // console.log(query);
    });
  }, [query]);

  if(loading) return "Loading";

  // console.log(movie);

  return (
    <Flex w="100%" h="calc(100vh)" justify="center" align={{base: "flex-start", lg: "center"}}>
      <Flex w={{base: "100%", lg: "50%"}} minH="40%" bg="#161A1D" p={{base:"0", lg: "20px"}} borderRadius={{base:"0", lg: "24px"}} direction="column" rowGap={{base: "", lg: "16px"}}>
        <MovieSearch setMovieTitle={setTitle} />
        <Flex w="100%" direction={{base: "column", lg: "row"}} columnGap={{base: "0", lg: "16px"}}>
          <MovieImage source={movie.Poster} alter={movie.Title} />
          <MovieInfo title={movie.Title} rating={movie.Ratings[0]} />
        </Flex>
      </Flex>
    </Flex>
  )
};

export default Main;