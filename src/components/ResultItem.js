import React, {useState} from "react";
import NominateBtn from './NominateBtn';

export default function ResultItem(props) {
  const [nominateBtnDisabled, setNominateBtnDisabled] = useState(false);

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
          poster={props.poster}
          title={props.title}
          year={props.year}
          nominateBtnDisabled={nominateBtnDisabled}
          setNominateBtnDisabled={setNominateBtnDisabled}
        />
      </h3>
    </li>
  );
}
