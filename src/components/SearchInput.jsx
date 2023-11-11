import { useLayoutEffect, useState } from "react";
import {
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { brighterHEX, compareHex, darkerHEX } from "../utils/color";

const SearchInput = ({ moveTo, dominantColor, setDominant }) => {
  const [input, setInput] = useState("");
  const [inputColor, setInputColor] = useState("transparent");
  const [inputBrighterColor, setInputBrighterColor] = useState("");
  const [inputDarkerColor, setInputDarkerColor] = useState("");

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
      moveTo("/" + input.toLowerCase());
    }
  }

  useLayoutEffect(() => {
    if (compareHex(dominantColor, "272B2E")) {
      if (compareHex(dominantColor, "aa687a", "<")) {
        setInputColor(brighterHEX(dominantColor, 30));
        setInputBrighterColor(brighterHEX(dominantColor, 55));
        setInputDarkerColor(darkerHEX(dominantColor, 10));
      } else {
        setDominant(darkerHEX(dominantColor, 10));
      }
    } else {
      setDominant(brighterHEX(dominantColor, 10));
    }
    // eslint-disable-next-line
  }, [dominantColor]);

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
        children={<SearchIcon color={inputColor} />}
      />

      <Input
        borderRadius={{ base: "0", lg: "16px" }}
        borderWidth="2px"
        borderColor={inputColor}
        focusBorderColor={inputColor}
        _groupHover={{ borderColor: inputBrighterColor }}
        type="text"
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
          bgColor={inputColor}
          _groupHover={{ bgColor: inputBrighterColor }}
          active={{ bgColor: inputDarkerColor }}
          onClick={searchMovie}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
