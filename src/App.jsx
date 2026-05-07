import React from 'react';

const LandingPageEstatica = () => {
  const cardapio = ["Abacate", "Limão", "Mamão", "Pera", "Uva"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* HEADER / LOGO */}
      <header className="p-6 text-center bg-white shadow-sm">
        <h1 className="text-3xl font-black text-green-600 tracking-widest uppercase">
          Natural Store
        </h1>
      </header>

      {/* HERO SECTION */}
      <section className="py-16 px-6 bg-green-500 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frutas da Estação</h2>
        <p className="text-lg opacity-90">Qualidade direto do produtor para sua mesa.</p>
      </section>

      {/* CARDÁPIO ESTÁTICO */}
      <main className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <h3 className="text-2xl font-semibold text-gray-600 uppercase tracking-widest">O Cardápio</h3>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardapio.map((fruta, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              {/* Ícones Estáticos por Fruta */}
              <div className="text-5xl mb-4 grayscale hover:grayscale-0 transition duration-300">
                {fruta === "Abacate" && "🥑"}
                {fruta === "Limão" && "🍋"}
                {fruta === "Mamão" && "🥭"}
                {fruta === "Pera" && "🍐"}
                {fruta === "Uva" && "🍇"}
              </div>
              
              <h4 className="text-xl font-bold text-gray-800">{fruta}</h4>
              <p className="text-sm text-gray-500 mt-2 italic">Disponível em estoque</p>
              
              <div className="mt-6 pt-6 border-t border-gray-50 w-full text-green-600 font-bold">
                R$ 8,50 /kg
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* INFORMAÇÕES DE CONTATO ESTÁTICAS */}
      <section className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-sm text-gray-600">
          <div>
            <h5 className="font-bold uppercase mb-2 text-gray-900">Onde estamos</h5>
            <p>Rua das Flores, 123 - Mercado Central</p>
            <p>São Paulo, SP</p>
          </div>
          <div className="md:text-right">
            <h5 className="font-bold uppercase mb-2 text-gray-900">Horário de Funcionamento</h5>
            <p>Segunda a Sexta: 08:00 às 18:00</p>
            <p>Sábados: 08:00 às 13:00</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 text-center text-xs text-gray-400 uppercase tracking-widest">
        &copy; 2024 Natural Store - Cardápio de Exibição
      </footer>
      
    </div>
  );
};

export default LandingPageEstatica;