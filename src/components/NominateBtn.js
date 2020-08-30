import React from "react";

export default function NominateBtn(props) {
  const nominateMovie = event => {
    event.preventDefault();
    props.setNominateBtnDisabled(true);
    console.log(props.nominateBtnDisabled)
    if (props.nominee == null) {
      props.setNominee([{
        poster: props.poster,
        title: props.title,
        year: props.year,
        nominateBtnDisabled: props.nominateBtnDisabled,
        setNominateBtnDisabled: props.setNominateBtnDisabled
      }])
    } else {

      props.setNominee([
        ...props.nominee,
        {
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
    <button onClick={nominateMovie} disabled={props.nominateBtnDisabled}>
      Nominate
    </button>
  );
}
