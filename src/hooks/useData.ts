import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";

export interface APIResponse<T> {
  count: Number;
  results: T[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface Props{
    apiEndpoint:string
}

const useData = <T>({apiEndpoint}:Props) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<APIResponse<T>>(apiEndpoint)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError("could not fetch the response");
        setLoading(false);
      });
  }, []);
  return { data, error, isLoading };
};

export default useData;
