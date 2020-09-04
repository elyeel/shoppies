import React, { useEffect } from "react";
import "./Title.css";
import {searchMovies, useDebounce} from "./helpers/helper"

export default function Title(props) {

  // search movie title and using debounce to wait for timeout before searching

  const debouncedSearchTitle = useDebounce(props.title, 1000);
  // console.log(debouncedSearchTitle);
  useEffect(() => {
    if (debouncedSearchTitle) {
      searchMovies(debouncedSearchTitle, props.setSearchResults);
    }
  }, [debouncedSearchTitle]);

  return (
    <form className='form' autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <h3 className='title_search'>Movie Title</h3>
      <input
        className='searchbar'
        onChange={(event) => {
          props.setTitle(event.target.value);
        }}
        name="title"
        type="text"
        placeholder="Enter movie title to search"
      />
      <section></section>
    </form>
  );
}
