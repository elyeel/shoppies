import React, {useState} from 'react';
import './Shoppies.css';
import Title from './Title';

export default function Shoppies(props) {
  const [title, setTitle] = useState('');


  return (
    <main>
      <h1>Shoppies</h1>
      <div>
        <Title 
          title = {title}
          setTitle = {setTitle}
        />
      </div>
      <div>
        <section>

        </section>
        <section>

        </section>
      </div>
    </main>
  )
}