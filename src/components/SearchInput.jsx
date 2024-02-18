import { useState } from "react";
import {
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useImageColor } from "../context/ImageColorContext";

const SearchInput = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const { base, bright, dark } = useImageColor();

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
        children={<SearchIcon color={base || "brand.base"} />}
      />

      <Input
        borderRadius={{ base: "0", lg: "16px" }}
        borderWidth="2px"
        borderColor={base || "brand.base"}
        focusBorderColor={base || "brand.base"}
        _groupHover={{ borderColor: (bright || "brand.bright") }}
        _groupActive={{ borderColor: (dark || "brand.dark") }}
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
          bgColor={base || "brand.base"}
          _groupHover={{ bgColor: (bright || "brand.bright") }}
          _groupActive={{ bgColor: (dark || "brand.dark") }}
          onClick={() => searchMovie()}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
