import React from 'react';
import './App.css';
import Clock from './components/clock.js'
import Weather from './components/weather.js'
import Twitch from './components/twitch.js'
import Compliment from './components/compliment.js'
import UserSelect from './components/user-select.js'

const App = () => {
  return (
    <div>
      <UserSelect />
    </div>
  );
}

export default App;
