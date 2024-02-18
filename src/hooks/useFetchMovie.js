import { useEffect, useState } from "react";

export default function useFetchMovie(title) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError("");
    setData(null);

    const fetching = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=` +
            title
        );

        if (!response.ok)
          throw new Error(
            "\nCode: " + response.status + " \nurl: " + response.url
          );

        const json = await response.json();
        if (json.Response !== "True") throw new Error(json.Error);

        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, [title]);

  return { data, loading, error };
}
