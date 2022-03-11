import React from 'react';
import './Preview.css';

export default function Preview({ headimg, middleimg, bottomimg }) {
  return (
    <div>
      <div className='denver' style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/${headimg}-head.png)` } }>
        
      </div>
      <div className='denver2' style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/${middleimg}-middle.png)` } }>

      </div>
      <div className='denver3' style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/${bottomimg}-pants.png)` } }>

      </div>
    </div>
  
  );
}