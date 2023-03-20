import { useState, useEffect } from "react";
import axios from "axios";


export default function useFetch(endpoint, query) {
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },

        headers: {
          'X-RapidAPI-Key': "d20786080amsh95ccf63cca5bd72p1c9f24jsna2e899516747",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      

      const fetchData = async() => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            alert("There is an error");
            
        } finally {
            setIsLoading(false);

        }
      }

    useEffect(()=>{
        fetchData();
    },[])

    const refetch = () =>{
      setIsLoading(true);
      fetchData();
    }

  return {data, isLoading, error, refetch};
}
