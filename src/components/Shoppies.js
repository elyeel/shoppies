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
    <main>
      <h1>Shoppies</h1>
      <div>
        <Title 
          title = {title}
          setTitle = {setTitle}
          searchResults = {searchResults}
          setSearchResults = {setSearchResults}
        />
      </div>
      <div>
        <section>
          <Results
            searchResults = {searchResults}
            setSearchResults = {setSearchResults}
            nominee = {nominee}
            setNominee = {setNominee}
          />
        </section>
        <section>
          <Nominations 
            nominee = {nominee}
            setNominee = {setNominee}
          />
        </section>
      </div>
    </main>
  )
}