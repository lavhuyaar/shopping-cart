import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/types";

function Shop() {
  const products = useOutletContext<Product[]>();
  return (
    <div className="products-container" key='products-container'>
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
}

export default Shop;
