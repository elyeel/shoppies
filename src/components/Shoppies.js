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
      <h1>Shoppies</h1>
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