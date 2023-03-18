import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react'
import {RAPID_API_KEY} from "@env"

const rapidAPIKey = RAPID_API_KEY;

export default function useFetch({endpoint, query}) {
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': rapidAPIKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async() => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
            
        } catch (error) {
            setError(error);
            alert("There is an error");
            
        } finally {
            setIsLoading(false);

        }
      }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>useFetch</div>
  )
}
