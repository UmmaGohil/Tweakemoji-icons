import React from 'react';
import Angry from './node_modules/components/Angry'
import Happy from './node_modules/components/Happy'
import Sad from './node_modules/components/Sad'


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Angry colour={'#fff'} size={150}/>
        <Happy colour={'red'} />
        <Sad colour={'green'} />
      </header>
    </div>
  );
}

export default App;
