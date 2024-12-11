import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";

export interface APIResponse {
  count: Number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const userGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<APIResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError("could not fetch the response");
        setLoading(false);
      });
  }, []);
  return { genres, error, isLoading };
};

export default userGenres;
