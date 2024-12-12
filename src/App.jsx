import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Choice from './components/Choice';
import Config from './components/singleplayer/Config';
import Play from './components/singlePlayer/Play';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/singleplayer/config" element={<Config/>} />
        <Route path="/play" element={<Play/>} />
      </Routes>
    </Router>
  );
}

export default App;
