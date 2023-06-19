import React from 'react'

import "./App.css";
import Section from './Components/who_are_we_section';
import Culture from './Components/our_culture';
import Home from './Components/Home_section';

const App = () => {
  return (
    <div>
      <Home />
      <Section />
      <Culture />
    </div>
  );
}

export default App
