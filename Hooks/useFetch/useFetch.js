import { useEffect, useState } from "react";
import axios from "axios";
function useFetch(url) {
  const [error, setError] = useState();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try {
      const { data: responsetData } = await axios.get(url);
      setdata(responsetData);
      setloading(false);
    } catch (error) {
      setError(error.message);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { error, loading, data };
}

export default useFetch;
