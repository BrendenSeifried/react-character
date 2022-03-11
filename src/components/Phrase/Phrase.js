import './Phrase.css';

import React from 'react';

export default function Phrase({ setPhrase, phrase, phraseArray, setPhraseArray }) {
  const logPhrase = () => {
    setPhrase('');
    setPhraseArray((prevState) => [...prevState, phrase]);
    
  };
  return (
    <div>
      <label>
    Add a catch phrase
        <input id="phrase-stuff" 
          value={phrase}
          type="text"
          onChange={(e) => 
            setPhrase(e.target.value)}
        /> 
        
        <button id="catchphrase-button" 
          onClick={ 
            logPhrase
          }>
          Add</button>
      </label>

      <ul>
        {phraseArray.map((data)=> (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>

  );
}

