import React from 'react';
import './App.css'; // Ensure you have this import for your CSS file
import { useNavigate } from 'react-router-dom';
import './champselect.js'
import './champselect.css'

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content">
        <h1>Hello</h1>
        <button onClick={() => navigate('/champselect')}>Click Me</button>
        <button onClick={() => navigate('/champselect')}>Blue</button>
        <button onClick={() => navigate('/champselect')}>Red</button>
        <button onClick={() => navigate('/spec')}>Spec</button>
      </div>
    </div>
  );
}

export default App;