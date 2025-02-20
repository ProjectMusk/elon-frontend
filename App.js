import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to Elon's Link Blaster!</h1>
        <Routes>
          <Route path="/" element={<p>Blast off with your links here!</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
