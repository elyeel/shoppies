import React from "react";
import NominateBtn from './NominateBtn';

export default function ResultItem(props) {
  return (
    <li>
      <h3>
        <span>
          <img src={props.poster} alt="Poster"></img>
        </span>
        {props.title} ({props.year})
        <NominateBtn 
          nominee={props.nominee}
          setNominee={props.setNominee}
        />
      </h3>
    </li>
  );
}
