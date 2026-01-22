import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Mudamos de max-w-6xl para max-w-full e adicionamos px-4 para não encostar no vidro */}
      <div className="max-w-full mx-auto px-4 py-2 flex items-center justify-between">
        
        <Link to="/">
          <img
            src="/img/logo.png"
            alt="Logo da loja"
            className="h-25 w-auto object-contain" // Diminuí um pouco a altura para ficar mais elegante
          />
        </Link>

        {/* Aqui você pode colocar o ícone do carrinho depois */}
      </div>
    </header>
  );
}
