import { React, useState } from "react";
import {
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const MovieSearchInput = ({ setMovieTitle }) => {
  const [input, setInput] = useState("");

  function getName(ev) {
    setInput(ev.target.value);
  }

  function searchMovie() {
    if (input !== "") {
      setMovieTitle(input.toLowerCase());
    }
  }

  return (
    <InputGroup size={"lg"} bg="#161A1D" position="sticky" top={0} zIndex={10}>
      <InputLeftElement
        pointerEvents={"none"}
        children={<SearchIcon color="#A4161A" />}
      />

      <Input
        borderRadius={{ base: "0", lg: "16px" }}
        borderWidth="2px"
        borderColor="#A4161A"
        focusBorderColor="#E5383B"
        _hover={{ borderColor: "#BA181B" }}
        type="text"
        color="#E5383B"
        placeholder="Movie title..."
        _placeholder={{ opacity: 0.8, color: "#F5F3F4" }}
        value={input}
        onChange={getName}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchMovie();
        }}
      />

      <InputRightElement w="80px">
        <Button
          borderRadius={{ base: "0", lg: "0 16px 16px 0" }}
          w="80px"
          size="lg"
          bgColor="#A4161A"
          _hover={{ bgColor: "#BA181B" }}
          _active={{ bgColor: "#660708" }}
          onClick={searchMovie}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default MovieSearchInput;
