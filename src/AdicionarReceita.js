import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adicionarReceita } from './api';

const AdicionarReceita = () => {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaReceita = {
      id: Date.now(),
      titulo,
      ingredientes: ingredientes.split(',').map(ing => ing.trim()),
      modoPreparo
    };
    adicionarReceita(novaReceita).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-success text-center">Adicionar Nova Receita</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título:</label>
          <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredientes (separados por vírgula):</label>
          <input type="text" className="form-control" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Modo de Preparo:</label>
          <textarea className="form-control" value={modoPreparo} onChange={(e) => setModoPreparo(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Receita</button>
      </form>
    </div>
  );
};

export default AdicionarReceita;
