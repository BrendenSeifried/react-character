import React, { useState } from 'react';

import Head from '../../components/Head/Head';
import Middle from '../../components/Middle/Middle';
import Bottom from '../../components/Bottom/Bottom';
import Phrase from '../../components/Phrase/Phrase';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');
}