import React from 'react';
import './App.css';
import Clock from './components/clock.js'
import Weather from './components/weather.js'
import Twitch from './components/twitch.js'

const App = () => {
  return (
    <div>
      <Clock />
      <Weather />
      <Twitch />
    </div>
  );
}

export default App;
