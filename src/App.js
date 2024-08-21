import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DetalhesReceita from './DetalhesReceita';
import AdicionarReceita from './AdicionarReceita';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receita/:id" element={<DetalhesReceita />} />
        <Route path="/adicionar" element={<AdicionarReceita />} />
      </Routes>
    </Router>
  );
};

export default App;
