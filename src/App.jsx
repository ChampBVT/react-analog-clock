import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      setDate({
        sec: newDate.getSeconds(),
        min: newDate.getMinutes(),
        hour: newDate.getHours(),
      });
    }, 1000);
  }, []);

  const computeDegreeSecMin = (value) => value * 6;
  const computeDegreeHour = (value) => value * 15;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="clock">
          <div className="dot" />
          <div className="line long" style={{ transform: `rotate(${computeDegreeSecMin(date.sec)}deg)` }} />
          <div className="line mid" style={{ transform: `rotate(${computeDegreeSecMin(date.min)}deg)` }} />
          <div className="line short" style={{ transform: `rotate(${computeDegreeHour(date.hour)}deg)` }} />
        </div>
        <p>
          React APP Analog Clock with CSS & JS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
