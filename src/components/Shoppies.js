import React, {useState} from 'react';
import Title from './Title'
import Results from './Results';
import Nominations from './Nominations'
import './Shoppies.css';

export default function Shoppies(props) {
  const [title, setTitle] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [nominee, setNominee] = useState();
  const [searching, setSearching] = useState(false);

  return (
    <div className='main'>
          
      {/* { nominee && nominee.length >=5 && <img src='./Vector-Text-Banner-PNG-Transparent-Image.png' alt='5 Nominations Selected'/>} */}
      <div className='search'>
      <h1>The Shoppies</h1>
        <Title 
          title = {title}
          setTitle = {setTitle}
          searchResults = {searchResults}
          setSearchResults = {setSearchResults}
          searching = {searching}
          setSearching = {setSearching}
        />
      </div>
      <div className='result_container'>
        <div className='result_search'>
          <Results
            searching = {searching}
            setSearching = {setSearching}
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