import React from 'react';

export default function NominationItem (props) {

  return (
    <li>
      <span>{props.title}</span>
      <span>{props.year}</span>
      <button>Remove</button>
    </li>
  )
}