import React from "react";
import ResultItem from './ResultItem';


export default function Results(props) {
  

  return (

    <ul>
      { props.searchResults ? (

        props.searchResults.map((elem, i) => (
          <ResultItem 
            id={i}
            poster={elem.Poster}
            title={elem.Title}
            year={elem.Year}
            nominee={props.nominee}
            setNominee={props.setNominee}
          />
        ))
      ) : ''
      }
    </ul>

  )
}