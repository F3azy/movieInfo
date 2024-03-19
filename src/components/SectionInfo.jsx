import { Flex, Heading, Text } from "@chakra-ui/react";

const SectionInfo = ({ label, content }) => {
  return (
    <Flex direction="column">
      <Heading size="lg">{label}:</Heading>
      <Text fontSize="20px" align="justify" fontWeight={100}>
        {content}
      </Text>
    </Flex>
  );
};

export default SectionInfo;
