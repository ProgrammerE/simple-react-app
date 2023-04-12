import React from 'react';
import './App.css';

function callApi() {
  alert('Button was pressed!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Call API</button>
      </header>
    </div>
  );
}

export default App;
