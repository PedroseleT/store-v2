import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 py-2 grid grid-cols-3 items-center">
        
        {/* COLUNA 1: LOGO */}
        <div className="flex justify-start">
          <Link to="/">
            <img
              src="/img/logo.png"
              alt="Logo da loja"
              className="h-20 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* COLUNA 2: TEXTO CENTRALIZADO */}
        <div className="flex justify-center">
          <h2 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-center leading-tight">
            PRODUTOS QUE COMPREI E QUERO ME DESAPEGAR
          </h2>
        </div>

        {/* COLUNA 3: ESPAÇO VAZIO (Para equilibrar o centro) */}
        <div className="flex justify-end">
          {/* Espaço reservado para ícone de carrinho no futuro */}
        </div>

      </div>
    </header>
  );
}