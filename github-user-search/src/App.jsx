import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
