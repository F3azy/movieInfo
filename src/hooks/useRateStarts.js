import { useState, useEffect } from "react";

export default function useRateStarts(rating) {
  const [rateStars, setRateStars] = useState([]);

  useEffect(() => {
    setRateStars((old) => (old = []));

    const rate = parseFloat(rating.Value.split("/")[0]) / 2;

    for (let i = 0; i < parseInt(rate); i++)
      setRateStars((old) => [...old, "100%"]);

    for (let i = 0; i < rate % parseInt(rate); i++)
      setRateStars((old) => [
        ...old,
        (rate % parseInt(rate)).toFixed(2) * 100 + "%",
      ]);

    for (let i = 0; i < 5 - Math.ceil(rate); i++)
      setRateStars((old) => [...old, "0%"]);
  }, [rating]);

  return rateStars;
}
