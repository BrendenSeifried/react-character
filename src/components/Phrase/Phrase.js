import './Phrase.css';

import React from 'react';

export default function Phrase({ setPhrase }) {
  const logPhrase = () => {
    setPhrase((prevState) => [...prevState, setPhrase]);
  };
  return (
    <div>
      <label>
    Add a catch phrase
        {/* <input id="middle-dropdown" 
          onChange={(e) => 
            setPhrase(e.target.value)}
        /> */}
        <input></input>
        <button id="catchphrase-button" 
          onClick={ 
            logPhrase
          }>
          Add</button>
      </label>
      <ul>
        {logPhrase.map((data)=> (
          <li key={data}>{data}</li>
        ))};
      </ul>
    </div>

  );
}

