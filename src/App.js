import './App.css';

function App() {

  return (
    
    fetch('https://odd-teal-hummingbird-gear.cyclic.app/books', { method: 'GET' })
      .then(data => data.json())
      .then(json => alert(JSON.stringify(json)))
    
  );
}
export default App;
