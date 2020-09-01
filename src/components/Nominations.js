import React from "react";
import NominationItem from "./NominationItem";
import "./Nominations.css";

export default function Nominations(props) {
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
      {props.nominee && props.nominee.length >= 5 && (
        <div className="banner">
          {/* <img src='./Vector-Text-Banner-PNG-Transparent-Image.png' alt='5 Nominations Selected'/> */}
          <h3 className="selected">{props.nominee.length} Nominations Selected</h3>
        </div>
      )}
      <div className='nom_header'>
        <h2>Nominations List:</h2>
      </div>

      <ul>
        {props.nominee
          ? props.nominee.map((nominated, index) => (
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
          : ""}
      </ul>
    </>
  );
}
