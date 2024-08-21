import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obterReceitaPorId } from './api';

const DetalhesReceita = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    obterReceitaPorId(Number(id)).then((data) => setReceita(data));
  }, [id]);

  if (!receita) return <p>Carregando...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-info text-center">{receita.titulo}</h2>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Ingredientes</h3>
          <ul className="list-group mb-4">
            {receita.ingredientes.map((ingrediente, index) => (
              <li key={index} className="list-group-item">
                {ingrediente}
              </li>
            ))}
          </ul>
          <h3 className="card-title">Modo de Preparo</h3>
          <p className="card-text">{receita.modoPreparo}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalhesReceita;
