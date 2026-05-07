import React from 'react';
import ItemCardapio from "./components/ItemCardapio";
const ListaCardapio = () => {

  const produtos = [
    { id: 1, nome: "Abacate", icone: "🥑", preco: 8.50, categoria: "Gorduras" },
    { id: 2, nome: "Limão", icone: "🍋", preco: 2.00, categoria: "Cítricas" },
    { id: 3, nome: "Mamão", icone: "🥭", preco: 5.90, categoria: "Doces" },
    { id: 4, nome: "Pera", icone: "🍐", preco: 4.50, categoria: "Doces" },
    { id: 5, nome: "Uva", icone: "🍇", preco: 7.00, categoria: "Cítricas" },
  ];

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-tighter">
        Seleção do Dia
      </h2>
      
      {/* Grid que organiza os itens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <ItemCardapio 
            key={produto.id} 
            fruta={produto.nome}
            icone={produto.icone}
            preco={produto.preco}
            categoria={produto.categoria}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaCardapio;