import { React, useState } from "react";
import {
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = ({ setMovieTitle }) => {
  const [input, setInput] = useState("");

  function getName(ev) {
    setInput(ev.target.value);
  }

  function searchOnEnter(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      ev.target.blur();
      searchMovie();
    }
  }

  function searchMovie() {
    if (input !== "") {
      setMovieTitle(input.toLowerCase());
    }
  }

  return (
    <InputGroup
      size="lg"
      bg="#161A1D"
      position="sticky"
      top={0}
      zIndex={10}
      role="group"
    >
      <InputLeftElement
        pointerEvents={"none"}
        children={<SearchIcon color="#A4161A" />}
      />

      <Input
        borderRadius={{ base: "0", lg: "16px" }}
        borderWidth="2px"
        borderColor="#A4161A"
        focusBorderColor="#E5383B"
        _groupHover={{ borderColor: "#BA181B" }}
        type="text"
        color="#E5383B"
        placeholder="Movie title..."
        _placeholder={{ opacity: 0.8, color: "#F5F3F4" }}
        value={input}
        onChange={getName}
        onKeyDown={searchOnEnter}
      />

      <InputRightElement w="80px">
        <Button
          borderRadius={{ base: "0", lg: "0 16px 16px 0" }}
          w="80px"
          size="lg"
          bgColor="#A4161A"
          _groupHover={{ bgColor: "#BA181B" }}
          _groupActive={{ bgColor: "#660708" }}
          onClick={searchMovie}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
