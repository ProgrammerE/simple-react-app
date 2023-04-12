import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [books, setData] = useState(null);

  useEffect(() => {
    fetch('https://odd-teal-hummingbird-gear.cyclic.app/books')
      .then(response => response.json())
      .then(books => setData(books))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {books ? (
        <pre>{JSON.stringify(books, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default App;
