import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const SmallInfo = ({ infoTitle, content }) => {
  return (
    <Flex direction="column" rowGap="4px">
      <Heading size="lg">{infoTitle}:</Heading>
      <Text fontSize="20px" align="justify" fontWeight={100}>
        {content}
      </Text>
    </Flex>
  );
};

export default SmallInfo;
