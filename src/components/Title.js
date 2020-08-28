import React, {useState} from 'react';
import './Title.css';

export default function Title(props) {


  return (
    <form autoComplete='off' onSubmit={event => event.preventDefault()}>
      <h3>Movie Title</h3>
      <input 
        onChange={event => props.setTitle(event.target.value)}
        name='title'
        type='text'
        placeholder='Enter movie title to search'

      />
      <section></section>
    </form>
  )
}