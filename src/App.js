import React from 'react';
import logo from './logo.svg';
import './App.css';
import Angry from './components/Angry/Angry'
import Happy from './components/Happy/Happy'
import Sad from './components/Sad/Sad'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Angry colour={'#fff'}/>
        <Happy colour={'red'} />
        <Sad colour={'green'} />
      </header>
    </div>
  );
}

export default App;
