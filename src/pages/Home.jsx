import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-8">
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
