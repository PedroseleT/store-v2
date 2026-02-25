import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ReviewSystem from "../components/ReviewSystem";
import { useState } from "react";

export function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <div className="p-10 text-center">Produto não encontrado.</div>;
  }

  const isAvailable = product.status.toLowerCase() === "disponivel";

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Galeria de Imagens */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-[500px] object-cover transition-all duration-300"
            />
          </div>
          {/* Miniaturas */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                  activeImage === index ? "border-blue-600 scale-95" : "border-transparent opacity-60"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="miniatura" />
              </button>
            ))}
          </div>
        </div>

        {/* Detalhes */}
        <div className="flex flex-col py-4">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm border ${
              isAvailable ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
            }`}>
              {isAvailable ? 'Disponível' : 'Vendido'}
            </span>
            <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
              TAMANHO {product.size}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{product.name}</h1>
          <p className="text-3xl font-black text-green-600 mb-8">
            R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Descrição Detalhada</h3>
            <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <ReviewSystem productId={product.id} />
      </div>
    </main>
  );
}