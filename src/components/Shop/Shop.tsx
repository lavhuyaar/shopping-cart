import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/types";

function Shop() {
  const products = useOutletContext<Product[]>();
  return (
    <main className="bg-[#388087] min-h-[90vh]">
      <div
        className="products-container grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7 p-7"
        key="products-container"
      >
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Shop;
