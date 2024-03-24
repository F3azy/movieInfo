import useRateStarts from "../hooks/useRateStarts";
import RateStarIcon from "../icons/RateStarIcon";
import { Flex, Text } from "@chakra-ui/react";

const Ratings = ({ rating }) => {
  const rateStars = useRateStarts(rating);

  return (
    <Flex align="center" columnGap={{ base: "4px", md: "8px" }}>
      {rateStars.map((rate, idx) => (
        <RateStarIcon key={idx} Offset={rate} id={idx} />
      ))}
      <Text fontSize="20px">{rating.Value}</Text>
    </Flex>
  );
};

export default Ratings;
