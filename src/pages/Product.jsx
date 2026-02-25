import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ReviewSystem from "../components/ReviewSystem";

export function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10 text-center">Produto não encontrado.</div>;
  }

  const isAvailable = product.status === "disponivel";

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Imagem do Produto */}
        <div className="rounded-2xl overflow-hidden bg-gray-100">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Detalhes do Produto */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {isAvailable ? 'Disponível' : 'Vendido'}
            </span>
            <span className="text-sm text-gray-400">Tamanho {product.size}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-black text-green-600 mb-6">
            R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
          
          <div className="border-t pt-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-2">Descrição</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Sistema de Reviews específico deste produto */}
      <div className="mt-16">
        <ReviewSystem productId={product.id} />
      </div>
    </main>
  );
}