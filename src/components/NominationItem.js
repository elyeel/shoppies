import React from 'react';

export default function NominationItem (props) {
  // remove nomination function here
  const removeNomineeFromList = (event) => {
    event.preventDefault();
    if (props.nominee.length > 1) props.setNominee(props.nominee.filter(nom => {return nom.id !== props.idx}));
    else props.setNominee([]);
    console.log(props.nominee.length);
  }

  return (
    <li>
      <span>{props.title}</span>
      <span>{props.year}</span>
      <button onClick={removeNomineeFromList}>Remove</button>
    </li>
  )
}