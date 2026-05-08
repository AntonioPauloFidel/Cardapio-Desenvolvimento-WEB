import React, { useState } from 'react'; // Importamos o useState aqui
import ItemCardapio from "./components/ItemCardapio";

const ListaCardapio = () => {
  // Criamos o estado do contador começando em 0
  const [carrinho, setCarrinho] = useState(0);

  // Função para aumentar o contador
  const adicionarAoCarrinho = () => {
    setCarrinho(carrinho + 1);
  };

  const produtos = [
    { id: 1, nome: "Abacate", icone: "🥑", preco: 8.50, categoria: "Gorduras" },
    { id: 2, nome: "Limão", icone: "🍋", preco: 2.00, categoria: "Cítricas" },
    { id: 3, nome: "Mamão", icone: "🥭", preco: 5.90, categoria: "Doces" },
    { id: 4, nome: "Pera", icone: "🍐", preco: 4.50, categoria: "Doces" },
    { id: 5, nome: "Uva", icone: "🍇", preco: 7.00, categoria: "Cítricas" },
  ];

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Visual do Contador no topo */}
      <div className="flex justify-between items-center mb-10 bg-green-50 p-4 rounded-2xl border border-green-100">
        <h2 className="text-2xl font-bold uppercase tracking-tighter">Seleção do Dia</h2>
        <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg shadow-green-200">
          🛒 Itens no pedido: {carrinho}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <ItemCardapio 
            key={produto.id} 
            fruta={produto.nome}
            icone={produto.icone}
            preco={produto.preco}
            categoria={produto.categoria}
            // Passamos a função de adicionar como uma prop!
            onAdicionar={adicionarAoCarrinho}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaCardapio;