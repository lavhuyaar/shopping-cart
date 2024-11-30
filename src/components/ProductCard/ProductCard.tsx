
import { Product } from "../../types/types"

type ProductCardProps =  {
  product: Product
}

function ProductCard({product}:  ProductCardProps) {
  return (
    <>
      <div className="product">
        <div>{product.title}</div>
        <div>{product.price}</div>
        <button>Add to cart</button>
      </div>
    </>
  )
}

export default ProductCard