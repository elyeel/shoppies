import React from "react";
import NominationItem from './NominationItem'

export function Nominations (props) {
  // const createNomination = () => {
  //   if (props.nominee[0]) {
  //     props.nominee.map((nominated, index) => {
  //       return <NominationItem 
  //         id={index}
  //         title={nominated.title}
  //         year={nominated.year}
  //         poster={nominated.poster}
  //       />
  //     })
  //   }
  // }

  return (
    <>
    { props.nominee && props.nominee.length >= 5 && <h3>5 Nominations Selected</h3> } 
    <ul>
      {props.nominee ? (
        props.nominee.map((nominated, index) => (
          <NominationItem 
            key={index}
            idx={index}
            title={nominated.title}
            poster={nominated.poster}
            year={nominated.year}
            nominateBtnDisabled={nominated.nominateBtnDisabled}
            setNominateBtnDisabled={nominated.setNominateBtnDisabled}
            nominee={props.nominee}
            setNominee={props.setNominee}
          />
        ))
      )
      : ''}
    </ul>
    </>
  )
}