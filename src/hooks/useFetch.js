import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError("");
    setData(null);

    const fetching = async (url) => {
      try {
        const response = await fetch(url);

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

    fetching(url);
  }, [url]);

  return { data, loading, error };
}
