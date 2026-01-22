import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <Link to={`/produto/${product.id}`} className="group">
      <div className="overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3">
        <h2 className="text-sm font-medium">
          {product.name}
        </h2>

        <p className="text-base font-bold mt-1">
          R$ {product.price}
        </p>
      </div>
    </Link>
  );
}
