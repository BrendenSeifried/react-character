import React, { useState } from 'react';

import Head from '../../components/Head/Head';
import Middle from '../../components/Middle/Middle';
import Bottom from '../../components/Bottom/Bottom';
import Phrase from '../../components/Phrase/Phrase';
import Preview from '../../components/Preview/Preview';

import './Main.css';

export default function Main() {
  const [headimg, setHead] = useState('bird');
  const [middleimg, setMiddle] = useState('blue');
  const [bottomimg, setBottom] = useState('blue');
  const [phraseimg, setPhrase] = useState('');

  return ( 
    <main>
      <div className='controls'>
        <Head setHead={ setHead } 
          headimg={headimg}/>

        <Middle setMiddle={ setMiddle } 
          middleimg={middleimg}/>

        <Bottom setBottom={ setBottom } 
          bottomimg={bottomimg}/>

        <Phrase setPhrase={ setPhrase } 
          phraseimg={phraseimg}
        />
      </div>
      
      <Preview 
        headimg={headimg} 
        middleimg={middleimg} 
        bottomimg={bottomimg}
      />
      
     
    </main>

  );
}