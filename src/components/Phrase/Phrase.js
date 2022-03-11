import './Phrase.css';

import React from 'react';

export default function Phrase({ setPhrase }) {
  return (
    <div>
      <label>
    Add a catch phrase
        <input id="middle-dropdown" 
          onChange={(e) => 
            setPhrase(e.target.value)}
        />
        <button id="catchphrase-button">Add</button>
      </label>
    </div>

  );
}


