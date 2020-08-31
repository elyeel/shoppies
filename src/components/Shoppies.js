import React, {useState} from 'react';
import Title from './Title'
import Results from './Results';
import { Nominations } from './Nominations'
import './Shoppies.css';

export default function Shoppies(props) {
  const [title, setTitle] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [nominee, setNominee] = useState();


  return (
    <div className='main'>
          
      { nominee && nominee.length >=5 && <img src='./Vector-Text-Banner-PNG-Transparent-Image.png' alt='5 Nominations Selected'/>}
      <h1>The Shoppies</h1>
      <div className='search'>
        <Title 
          title = {title}
          setTitle = {setTitle}
          searchResults = {searchResults}
          setSearchResults = {setSearchResults}
        />
      </div>
      <div className='result_container'>
        <div className='result_search'>
          <Results
            searchResults = {searchResults}
            setSearchResults = {setSearchResults}
            nominee = {nominee}
            setNominee = {setNominee}
          />
        </div>
        <div className='nominations'>
          <Nominations 
            nominee = {nominee}
            setNominee = {setNominee}
          />
        </div>
      </div>
    </div>
  )
}