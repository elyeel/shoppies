import React, {useEffect} from "react";
import './NominateBtn.css';

export default function NominateBtn(props) {
  const nominateMovie = event => {
    event.preventDefault();
    // useEffect(() => {console.log(props.nominateBtnDisabled)})
    props.setNominateBtnDisabled(true);
    // useEffect here?
    // console.log(props.nominateBtnDisabled)
    if (props.nominee == null) {
      props.setNominee([{
        imdbID: props.imdbID,
        poster: props.poster,
        title: props.title,
        year: props.year,
        nominateBtnDisabled: props.nominateBtnDisabled,
        setNominateBtnDisabled: props.setNominateBtnDisabled
      }])
    } else {
      // const id = props.nominee.length;
      props.setNominee([
        ...props.nominee,
        {
          imdbID: props.imdbID,
          poster: props.poster,
          title: props.title,
          year: props.year,
          nominateBtnDisabled: props.nominateBtnDisabled,
          setNominateBtnDisabled: props.setNominateBtnDisabled

        }
      ])
    }

  }

  return (
    <button className='nominatebtn' onClick={nominateMovie} disabled={props.nominateBtnDisabled}>
      Nominate
    </button>
  );
}
