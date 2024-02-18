import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex w="100%" minH="90%" justify="center" align="center" p="16px">
      <Spinner color="#BA181B" size="xl" />
    </Flex>
  );
};

export default Loading;
