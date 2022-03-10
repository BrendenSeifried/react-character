import React from 'react';
import './Middle.css';

export default function Middle({ setMiddle }) {
  return (
    <div className="picker2">
      <label>
        Middle
        <select id="middle-dropdown" 
          onChange={(e) => 
            setMiddle(e.target.value)}
        >
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
        </select>
      </label>
    </div>
  );
}