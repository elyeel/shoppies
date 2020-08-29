import React from "react";

export default function NominateBtn(props) {
  const nominateMovie = event => {
    event.preventDefault();
    props.setNominee([
      ...props.nominee,
      {
        poster: props.poster,
        title: props.title,
        year: props.year
      }
    ])
  }

  // function nominateMovie(poster, title, year) {
  //   props.setNominee([
  //     props.nominee,
  //     {
  //       poster,
  //       title,
  //       year,
  //     },
  //   ]);
  // }

  return (
    <button onClick={nominateMovie()}>
      Nominate
    </button>
  );
}
