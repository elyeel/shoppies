import React from "react";
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

  // const checkNominations = (event) => {
  //   if (props.nominee && props.nominee.length > 0 && props.searchResults) (
  //     props.nominee.map(nomi => (
  //       props.searchResults.map(res => (
  //         if (nomi.imdbID === res.imdbID) nomi.setNominatedBtnDisabled(true)
  //       ))
  //     ))
  //    ) else return;
  // }

  // works, but still disabling the button for 2nd search from previously search
  const checkNominations = () => {
    if (props.nominee && props.nominee.length > 0) {
      let found = false;
      for (let nomi of props.nominee) {
        if (props.imdbID === nomi.imdbID) {props.setNominateBtnDisabled(true)
        found = true}
      }
      if (!found) props.setNominateBtnDisabled(false) 
    }
  }

  checkNominations();

  return (
    <button className='nominatebtn' onClick={nominateMovie} disabled={props.nominateBtnDisabled}>
      Nominate
    </button>
  );
}
