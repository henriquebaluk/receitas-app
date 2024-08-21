import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obterReceitas } from './api';

const Home = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    obterReceitas().then((data) => setReceitas(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center mb-4">Receitas Deliciosas</h1>
      <ul className="list-group">
        {receitas.map((receita) => (
          <li key={receita.id} className="list-group-item">
            <Link to={`/receita/${receita.id}`} className="text-decoration-none">
              {receita.titulo}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link to="/adicionar" className="btn btn-success">Adicionar Nova Receita</Link>
      </div>
    </div>
  );
};

export default Home;
