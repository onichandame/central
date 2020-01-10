import React from 'react'
import Row from 'react-bootstrap/Row'

import Bar from './Bar'
import Register from './Register'

import './App.css'

function App() {
  return (
    <Row id="app">
      <Bar />
      <Register />
    </Row>
  );
}

export default App
