import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [date, setDate] = useState('')

  const createDate = (string) => {
    return new Date(string)
  }
  useEffect(()=>{
    setInterval(()=>{
      setDate(new Date())
    }, 1000)
  },[]);

  const computeDegreeSec = (date) => {
    return createDate(date).getSeconds()*6
  }
  const computeDegreeMin = (date) => {
    return createDate(date).getMinutes()*6
  }
  const computeDegreeHour = (date) => {
    return createDate(date).getHours()*15
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="clock">
          <div className="dot" />
          <div className="line long" style={{transform: `rotate(${computeDegreeSec(date)}deg)`}} />
          <div className="line mid" style={{transform: `rotate(${computeDegreeMin(date)}deg)`}} />
          <div className="line short" style={{transform: `rotate(${computeDegreeHour(date)}deg)`}} />
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
