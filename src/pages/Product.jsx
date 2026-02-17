import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { ArrowLeft, MessageCircleMore } from "lucide-react";
import ReviewSystem from "../components/ReviewSystem";

export function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(product?.images[0]);

  if (!product) return null;

  const isAvailable = product.status === "disponivel";
  const whatsappUrl = `https://wa.me/5519992676339?text=Olá! Tenho interesse no produto: ${product.name}`;

  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-black mb-6 transition w-fit">
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Voltar</span>
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* GALERIA */}
        <div>
          <div className="bg-gray-100 rounded-lg overflow-hidden group aspect-[4/5]">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`border-2 rounded-md overflow-hidden w-20 h-20 transition-all ${
                  activeImage === img ? "border-black" : "border-transparent opacity-60"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* INFORMAÇÕES */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            {/* BOLINHA DE STATUS */}
            <span className={`h-3 w-3 rounded-full ${isAvailable ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              {isAvailable ? 'Disponível' : 'Vendido'}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center flex-wrap gap-3">
            {product.name}
            {product.size && (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200">
                TAM: {product.size}
              </span>
            )}
          </h1>

          <p className="text-2xl font-semibold text-green-600 mt-4">
            R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">
              Descrição
            </h3>
            <p className="text-gray-600 leading-relaxed italic">
              "{product.description}"
            </p>
          </div>

          {/* BOTÃO WHATSAPP - Só funciona se estiver disponível */}
          {isAvailable ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full bg-green-500 text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-green-600 transition active:scale-95 shadow-lg shadow-green-200"
            >
              <MessageCircleMore size={22} />
              Me chame no Whatsapp
            </a>
          ) : (
            <button disabled className="mt-10 w-full bg-gray-200 text-gray-500 py-4 rounded-full font-bold cursor-not-allowed">
              Peça Indisponível
            </button>
          )}
        </div>
      </div>
      <ReviewSystem productId={id} />
    </main>
  );
}