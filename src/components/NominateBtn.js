import React, {useEffect} from "react";

export default function NominateBtn(props) {
  const nominateMovie = event => {
    event.preventDefault();
    // useEffect(() => {console.log(props.nominateBtnDisabled)})
    props.setNominateBtnDisabled(true);
    // useEffect here?
    console.log(props.nominateBtnDisabled)
    if (props.nominee == null) {
      props.setNominee([{
        id: 0,
        poster: props.poster,
        title: props.title,
        year: props.year,
        nominateBtnDisabled: props.nominateBtnDisabled,
        setNominateBtnDisabled: props.setNominateBtnDisabled
      }])
    } else {
      const id = props.nominee.length;
      props.setNominee([
        ...props.nominee,
        {
          id,
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
