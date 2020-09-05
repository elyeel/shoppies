import React from "react";
import ResultItem from "./ResultItem";
import "./Results.css";

export default function Results(props) {
  return (
    <>
      
      <div className="results">
        {props.searchResults
          ? props.searchResults.map((elem, i) => (
              <ResultItem
                key={i}
                imdbID={elem.imdbID}
                poster={elem.Poster}
                title={elem.Title}
                year={elem.Year}
                nominee={props.nominee}
                setNominee={props.setNominee}
              />
            ))
          : ""}
      </div>
    </>
  );
}
