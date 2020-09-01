import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import Shoppies from '../components/Shoppies';
import Title from '../components/Title';
import Results from '../components/Results';
import ResultItem from '../components/ResultItem';
import Nominations from '../components/Nominations'
import NominationItem from '../components/NominationItem'
import NominateBtn from '../components/NominateBtn'

const nominee = [
  {
    id: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    title: 'The Avengers',
    year: '2012',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  }
]

const nominee5 = [
  {
    id: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    title: 'The Avengers',
    year: '2012',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 2,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 3,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 4,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  }
]

const nominee6 = [
  {
    id: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    title: 'The Avengers',
    year: '2012',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 2,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 3,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 4,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  },
  {
    id: 5,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    title: 'Avengers: End Game',
    year: '2019',
    nominatedBtnDisabled: false,
    setNominatedBtnDisabled: action("setNominatedBtnDisabled"),
  }
]

storiesOf("NominationItem", module)
  .add("Got Nomination", () => (
    <NominationItem
      title={'No Time to Die'}
      year={'2020'}
    />
  ));

storiesOf("Nominations", module)
  .add("0 Nominees", () => (
    <Nominations 
      nominee={[]}
      
    />
  ))
  .add("2 Nominees", () => (
    <Nominations 
      nominee={nominee}
      
    />
  ))
  .add("5 Nominees", () => (
    <Nominations 
      nominee={nominee5}
      
    />
  ))
  .add("6 Nominees", () => (
    <Nominations 
      nominee={nominee6}
      
    />
  ))