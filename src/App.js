import React from 'react';
import './App.css';

function callApi() {
  fetch('https://postman-echo.com/get', { method: 'GET' })
    .then(response => response.json())
    .then(data => alert(data.title) ) // Displays the firstName from the API response
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
