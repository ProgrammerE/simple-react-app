import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Users</h1>
        <header className="App-header">
          <button onClick={callApi}>Call API</button>
        </header>
      </div>
  );

}

function callApi() {
    fetch('https://odd-teal-hummingbird-gear.cyclic.app', { method: 'GET' })
        .then(books => books.json())
        .then(json => alert(JSON.stringify(json)))
}

export default App;
