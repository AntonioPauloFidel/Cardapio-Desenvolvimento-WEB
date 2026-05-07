import React from 'react';

// Este componente representa um único item da lista
const ItemCardapio = ({ fruta, icone, preco, categoria }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icone}</div>
      <h4 className="text-lg font-bold text-gray-800">{fruta}</h4>
      <p className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-2">
        {categoria}
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-900 font-black text-xl">
          R$ {preco.toFixed(2)}
        </span>
        <button className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemCardapio;