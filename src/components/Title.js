import React from "react";
import axios from 'axios';
import "./Title.css";
const key = process.env.REACT_APP_APIKEY;


export default function Title(props) {
  const searchMovies = async (title) => {
    if (title.length > 3) {
      const config = {
        method: "get",
        url: `http://www.omdbapi.com/?s=${title}&apikey=${key}`,
        headers: {
          Cookie: "__cfduid=d5783c75bc68c46c08343513a788f7ac01598409813",
        },
      };

      axios(config)
        .then(function (response) {
          props.setSearchResults(response.data.Search);
          // console.log(JSON.stringify(response.status));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Not long enough movie title string to search");
    }
  };

  return (
    <form className='form' autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <h3 className='title_search'>Movie Title</h3>
      <input
        className='searchbar'
        onChange={(event) => {
          props.setTitle(event.target.value);
          searchMovies(props.title);
        }}
        name="title"
        type="text"
        placeholder="Enter movie title to search"
      />
      <section></section>
    </form>
  );
}
