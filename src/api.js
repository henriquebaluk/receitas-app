import receitas from './receitas.json';

export const obterReceitas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(receitas);
    }, 500);
  });
};

export const obterReceitaPorId = (id) => {
  return new Promise((resolve) => {
    const receita = receitas.find((r) => r.id === id);
    setTimeout(() => {
      resolve(receita);
    }, 500);
  });
};

export const adicionarReceita = (novaReceita) => {
  return new Promise((resolve) => {
    receitas.push(novaReceita);
    setTimeout(() => {
      resolve(novaReceita);
    }, 500);
  });
};
