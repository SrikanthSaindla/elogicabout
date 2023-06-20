import React from 'react'

import "./App.css";
import Section from './Components/who_are_we_section';
import Culture from './Components/our_culture';
import Home from './Components/Home_section';
import Horizontal from './Components/Horizontal';

const App = () => {
  return (
    <div>
      <Home />
      <Section />
      <Culture />
      <Horizontal />
       
    </div>
  );
}

export default App
