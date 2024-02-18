import { Flex, Spinner } from "@chakra-ui/react";
import { useImageColor } from "../context/ImageColorContext";

const Loading = () => {
  const { base } = useImageColor();

  return (
    <Flex w="100%" minH="90%" justify="center" align="center" p="16px">
      <Spinner color={base || "brand.base"} size="xl" />
    </Flex>
  );
};

export default Loading;
