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
    <ul>
      {props.nominee ? (
        props.nominee.map((nominated, index) => (
          <NominationItem 
            key={index}
            title={nominated.title}
            poster={nominated.poster}
            year={nominated.year}
            nominateBtnDisabled={nominated.nominateBtnDisabled}
            setNominateBtnDisabled={nominated.setNominateBtnDisabled}
          />
        ))
      )
      : ''}
    </ul>
  )
}