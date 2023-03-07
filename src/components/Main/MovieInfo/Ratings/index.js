import { React, useState, useEffect} from 'react';
import RateStarIcon from '../../../../icons/RateStarIcon';
import { Flex, Text } from '@chakra-ui/react';

const Ratings = ({rating}) => {

    const [rateStars, setRateStars] = useState(() => {return []});

    useEffect(() => {
        setRateStars(old => old = []);

        const rate = parseFloat(rating.Value.split('/')[0]) / 2;

        for(let i = 0; i < parseInt(rate); i++) setRateStars(old => [...old, "100%"]);

        for(let i = 0; i < rate % parseInt(rate); i++) setRateStars(old => [...old, (rate % parseInt(rate)).toFixed(2)*100+"%"]);

        if(rateStars.length < 5) for(let i = 0; i < 5 - Math.ceil(rate); i++) setRateStars(old => [...old, "0%"]);

        // eslint-disable-next-line
      }, []);

  return (
    <Flex align={"center"} columnGap={"8px"}>
        {rateStars.map((rate, idx) => <RateStarIcon key={idx} Offset={rate} id={idx} />)}
        <Text fontSize={"20px"}>{rating.Value}</Text>
    </Flex>
  )
};

export default Ratings;