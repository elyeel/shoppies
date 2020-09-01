import React from 'react';
import './NominationItem.css'

export default function NominationItem (props) {
  // remove nomination function here
  const removeNomineeFromList = (event) => {
    event.preventDefault();
    if (props.nominee.length > 1) props.setNominee(props.nominee.filter(nom => {return nom.imdbID !== props.imdbID}));
    else props.setNominee([]);
    // console.log(props.nominee.length);
    props.setNominateBtnDisabled(false);
  }

  return (
    <li className='nominee'>
      <span>{props.title}</span>,
      <span> {props.year} </span>  
      <button className='removebtn' onClick={removeNomineeFromList}>Remove</button>
    </li>
  )
}