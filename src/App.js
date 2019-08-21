import React from 'react';
import './App.css';
import Clock from './components/clock.js'
import Weather from './components/weather.js'

const App = () => {
  return (
    <div>
      <Clock />
      <Weather />
    </div>
  );
}

export default App;
