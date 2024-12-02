import { Link, useOutletContext } from "react-router-dom";
import { OutletContextType, Product } from "../../types/types";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { handleAddToCart } = useOutletContext<OutletContextType>();

  const [quantity, setQuantity] = useState(1);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(event.target.value);
      setQuantity(value);
      console.log(value)
  }

  return (
    <>
      <div className="product text-white bg-[#242424] flex flex-col align-center p-3 gap-2 rounded-xl">
        <Link to={`/shop/products/${product.id}`}>
          <div className=" product-img-container object-cover w-full h-[230px] flex items-center justify-center bg-white rounded-xl">
            <img
              src={product.image}
              alt={product.title}
              style={{
                objectPosition: "center",
                objectFit: "contain",
                height: "90%",
                width: "90%",
              }}
            />
          </div>
        </Link>

        <h3 className="font-bold pt-3 whitespace-nowrap overflow-hidden text-ellipsis text-xl text-white">
          {product.title}
        </h3>
        <div className="text-lg flex gap-8 items-center ">
          <p>Price: {product.price} $</p>
          <input type="number" value={quantity} onChange={handleOnChange} className="text-[#242424] px-1 py-0.5 w-8 rounded-sm text-sm text-bold"/>
          </div>
        <button
          type="button"
          className="p-2  bg-[#BB86F6] mt-2 text-lg font-bold text-[#242424] rounded-xl hover:bg-[#a063e6]"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
