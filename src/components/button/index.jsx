import React from 'react';

const Botao = ({ children, onClick, variant = "primary", className = "" }) => {
  // Definimos os estilos base
  const baseStyles = "px-6 py-2 rounded-xl font-bold transition-all duration-200 transform active:scale-95 shadow-sm";
  
  // Criamos variantes para o botão não ser sempre igual
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 shadow-green-200",
    secondary: "bg-white border-2 border-green-600 text-green-600 hover:bg-green-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Botao;