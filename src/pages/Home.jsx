import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  // Filtros de categoria
  const femaleProducts = products.filter(p => p.category === "Feminino");
  const maleProducts = products.filter(p => p.category === "Masculino");
  const otherProducts = products.filter(p => p.category === "Outros");

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-12">
      
      {/* SEÇÃO FEMININA */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 uppercase tracking-widest">
          Feminino
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {femaleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SEÇÃO MASCULINA */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 uppercase tracking-widest">
          Masculino
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {maleProducts.length > 0 ? (
            maleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-sm text-gray-400 italic">Em breve novidades masculinas...</p>
          )}
        </div>
      </section>

      {/* SEÇÃO OUTROS */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 uppercase tracking-widest">
          Outros
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {otherProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </main>
  );
}