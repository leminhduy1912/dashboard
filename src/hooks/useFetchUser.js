import { useEffect, useState } from "react";
import { getAllUser } from "../service/user.service";
import { ConvertToQueryParams } from "../utils/ConvertToQueryParams";

export const useFetchUser = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  console.log(ConvertToQueryParams(url));
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getAllUser(ConvertToQueryParams(url));
        setData(res.data.result);
        setPagination(res.pagination);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, pagination, error, loading };
};
