import React, { useState } from 'react';

import Select from '../../components/Select/Select';
// import Head from '../../components/Head/Head';
// import Middle from '../../components/Middle/Middle';
// import Bottom from '../../components/Bottom/Bottom';
import Phrase from '../../components/Phrase/Phrase';
import Preview from '../../components/Preview/Preview';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');

  return ( 
    <main>
      {/* <Head />
      <Middle />
      <Bottom /> */}
      <Preview 
        head={head} 
        middle={middle} 
        bottom={bottom}
      />
      <Phrase />
      <Select 
        setHead={setHead} 
        setMiddle={setMiddle} 
        setBottom={setBottom}
      />
    </main>

  );
}