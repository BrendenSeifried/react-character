import React from 'react';
import './Bottom.css';

export default function Middle({ setBottom }) {
  return (
    <div className="picker3">
      <label>
        Bottom
        <select id="middle-dropdown" 
          onChange={(e) => 
            setBottom(e.target.value)}
        >
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </label>
    </div>
  );
}