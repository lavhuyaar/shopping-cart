import { Link } from "react-router-dom";
import { Product } from "../../types/types";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className="product">
        <div>{product.title}</div>
        <div>{product.price}</div>
        <button>Add to cart</button>
        <Link to={`/shop/products/${product.id}`}>more</Link>
      </div>
    </>
  );
}

export default ProductCard;
