
import { compassSharp } from "ionicons/icons";
import { useState, useEffect } from "react";

import got from "../api/got";

const API_KEY = "ZWQtNhsIJMEKJnsoGivLfhFMRf8DY2oMs3TvmrZ3"

const useFetch = () => {
  const [data, setData] = useState({
    name: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await got.get(`?query=${data.name}&api_key=${API_KEY}`);
            setData({ ...data, results: res.data });

          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.name]);

  return { data, setData };
};

export default useFetch;