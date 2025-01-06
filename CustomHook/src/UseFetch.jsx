import { useState, useEffect } from "react";

function useFetch(URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(URL);

        if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (URL) fetchData(); // Only fetch if URL is provided
  }, [URL]); // URL as a dependency

  return { data, loading, error };
}

export default useFetch;

