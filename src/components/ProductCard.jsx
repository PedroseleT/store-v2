import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  const isAvailable = product.status === "disponivel";

  return (
    <Link to={`/produto/${product.id}`} className="group">
      <div className="overflow-hidden rounded-lg bg-gray-100 relative">
        {/* IMAGEM DO PRODUTO */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* BOLINHA DE STATUS NO CANTO DA FOTO */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm border border-gray-100">
          <span className={`h-2 w-2 rounded-full ${isAvailable ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
          <span className="text-[9px] font-black uppercase tracking-tighter text-gray-800">
            {isAvailable ? 'Disponível' : 'Vendido'}
          </span>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-sm font-medium">
            {product.name}
          </h2>
          {/* TAMANHO DISCRETO AO LADO DO NOME */}
          <span className="text-[10px] font-bold text-gray-400 border border-gray-200 px-1.5 rounded flex-shrink-0">
            {product.size}
          </span>
        </div>

        <p className="text-base font-bold mt-1 text-green-600">
          R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </div>
    </Link>
  );
}