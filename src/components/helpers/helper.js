import {useEffect, useState} from 'react';
import axios from 'axios';
const key = process.env.REACT_APP_APIKEY;

export async function searchMovies (title, setSearchResults) {
  if (title.length > 3) {
    // console.log(title);
    const config = {
      method: "get",
      url: `http://www.omdbapi.com/?s=${title}&apikey=${key}`,
      headers: {
        // Cookie: "__cfduid=d5783c75bc68c46c08343513a788f7ac01598409813",
      },
    };

    axios(config)
      .then(function (response) {
        setSearchResults(response.data.Search) //  ? response.data.Search : null;
        // console.log(JSON.stringify(response.status));
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log("Not long enough movie title string to search");
  }
};

export function useDebounce(search, delay) {
  const [debounced, setDebounced] = useState(search)
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounced(search)
    }, delay);
    return () => clearTimeout(handle);
  }, [search, delay]);
  // console.log(debounced);
  return debounced;
}