import { useEffect, useState } from "react";
import { useApi } from "./ApiProvider";

export default function useQuery(resource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { requestGet } = useApi();

  const getQuery = async () => {
    setLoading(true);
    try {
      const result = await requestGet(resource);
      setData(result);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getQuery();
  }, []);
  return { data, loading, error };
}
