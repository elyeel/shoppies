import React from "react";


export default function Results(props) {
  

  return (

    <ul>
      <li>
        {props.searchResults ? props.searchResults[0].Title : "---"}
      </li>
    </ul>

  )
}