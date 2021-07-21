import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlatFile from 'flatfile';
import ReactCsv from 'react-csv';

function App() {
  return (
    <div className="App">
      <h3>Using Flatfile</h3>
      <FlatFile/>
      <h3>Using React csv</h3>
      <ReactCsv/>
    </div>
  );
}

export default App;
