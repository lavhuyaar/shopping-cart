import { Link } from "react-router-dom";
import { Product } from "../../types/types";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className="product text-[#388087] bg-[#F8F8F8] flex flex-col align-center p-3 gap-2">
        <div className="object-cover w-full h-[230px] bg-white flex items-center justify-center" >
          <img src={product.image} alt={product.title} style={{objectPosition: 'center', objectFit: 'contain', height: '90%', width: '90%'}}/>
        </div>
        <h3 className="font-bold pt-3 whitespace-nowrap overflow-hidden text-ellipsis text-xl text-[#34495E]">{product.title}</h3>
        <div className="text-xl">{product.price} $</div>
        <button className="p-2  bg-[#48C9B0] mt-2 text-lg font-bold">Add to cart</button>
        <Link to={`/shop/products/${product.id}`}>more</Link>
      </div>
    </>
  );
}

export default ProductCard;
