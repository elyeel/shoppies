import React, { useState } from "react";
import NominateBtn from "./NominateBtn";
import './ResultItem.css';

export default function ResultItem(props) {
  const [nominateBtnDisabled, setNominateBtnDisabled] = useState(false);

  return (
    <article className="result_item">
      <img className="result_poster" src={props.poster} alt='Poster N/A'></img>
      <div className="result_info">
        <div className='title'>{props.title}</div>
        <div className='year'>{props.year}</div>
        <div>
          <NominateBtn
            nominee={props.nominee}
            setNominee={props.setNominee}
            imdbID={props.imdbID}
            poster={props.poster}
            title={props.title}
            year={props.year}
            nominateBtnDisabled={nominateBtnDisabled}
            setNominateBtnDisabled={setNominateBtnDisabled}
          />
        </div>
      </div>
    </article>
  );
}
