import React, { useEffect } from "react";
import "./Title.css";
import { searchMovies, useDebounce } from "./helpers/helper";

export default function Title(props) {
  // search movie title and using debounce to wait for timeout before searching

  const debouncedSearchTitle = useDebounce(props.title, 1000);
  // console.log(debouncedSearchTitle);
  useEffect(() => {
    if (debouncedSearchTitle) {
      searchMovies(debouncedSearchTitle, props.setSearchResults);
    }
    if (props.setSearchResults.length > 0) props.setSearching(false);
  }, [debouncedSearchTitle]);

  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={(event) => event.preventDefault()}
    >
      <h3 className="title_search">Movie Title</h3>
      <div className="searchbar">
        <input
          onChange={(event) => {
            props.setTitle(event.target.value);
            props.setSearching(true);
          }}
          name="title"
          type="text"
          placeholder="Enter movie title to search"
        />
        {props.searching && (
          <>
            <img src="/rotating-arrow.png" alt="None" className="spinner" />
            <label className="searching"> Searching ... </label>
          </>
        )}
      </div>
      <section></section>
    </form>
  );
}
