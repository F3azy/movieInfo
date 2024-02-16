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
import { useNavigate } from "react-router-dom";
import useImageDominantColor from "../hooks/useImageDominantColor";

const SearchInput = ({ bgImg }) => {
  const [input, setInput] = useState("");
  const [inputColor, setInputColor] = useState("transparent");
  const [inputBrighterColor, setInputBrighterColor] = useState("");
  const [inputDarkerColor, setInputDarkerColor] = useState("");

  const navigate = useNavigate();

  const [color, setColor] = useImageDominantColor(bgImg);

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
      navigate("/" + input.toLowerCase());
    }
  }

  useLayoutEffect(() => {
    if (compareHex(color, "272B2E")) {
      if (compareHex(color, "#935163", "<")) {
        setInputColor(brighterHEX(color, 30));
        setInputBrighterColor(brighterHEX(color, 55));
        setInputDarkerColor(darkerHEX(color, 10));
      } else {
        setColor(darkerHEX(color, 10));
      }
    } else {
      setColor(brighterHEX(color, 10));
    }
  }, [color, setColor]);

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
        _groupActive={{ borderColor: inputDarkerColor }}
        type="text"
        placeholder="Movie title..."
        _placeholder={{ opacity: 0.8, color: "#F5F3F4" }}
        onChange={(e) => getName(e)}
        onKeyDown={(e) => searchOnEnter(e)}
      />

      <InputRightElement w="80px">
        <Button
          borderRadius={{ base: "0", lg: "0 16px 16px 0" }}
          w="80px"
          size="lg"
          bgColor={inputColor}
          _groupHover={{ bgColor: inputBrighterColor }}
          _groupActive={{ bgColor: inputDarkerColor }}
          onClick={() => searchMovie()}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
