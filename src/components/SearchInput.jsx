import {
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useImageColor } from "../context/ImageColorContext";
import useSearchNavigation from "../hooks/useSearchNavigation";

const SearchInput = () => {
  const { base, bright, dark } = useImageColor();

  const { getInput, search, searchOnEnter } = useSearchNavigation();

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
        _groupHover={{ borderColor: bright || "brand.bright" }}
        _groupActive={{ borderColor: dark || "brand.dark" }}
        type="text"
        placeholder="Movie title..."
        _placeholder={{ opacity: 0.8, color: "#F5F3F4" }}
        onChange={(e) => getInput(e)}
        onKeyDown={(e) => searchOnEnter(e)}
      />

      <InputRightElement w="80px">
        <Button
          borderRadius={{ base: "0", lg: "0 16px 16px 0" }}
          w="80px"
          size="lg"
          bgColor={base || "brand.base"}
          _groupHover={{ bgColor: bright || "brand.bright" }}
          _groupActive={{ bgColor: dark || "brand.dark" }}
          onClick={() => search()}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
