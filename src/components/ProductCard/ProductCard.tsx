import { Link, useOutletContext } from "react-router-dom";
import { OutletContextType, Product } from "../../types/types";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { handleAddToCart, handleIncrementQuantity, handleDecrementQuantity } =
    useOutletContext<OutletContextType>();

  const [quantity, setQuantity] = useState<number>(1);

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

        <div className="text-lg flex gap-8 items-center justify-between">
          <p>Price: {product.price} $</p>

          <div className="flex gap-3">
            <button
              className="font-bold text-lg text-[#BB86F6]"
              type="button"
              onClick={() => handleIncrementQuantity(quantity, setQuantity)}
            >
              <FaPlus />
            </button>
            <div>{quantity}</div>
            <button
              className="font-bold text-lg text-[#BB86F6]"
              type="button"
              onClick={() => handleDecrementQuantity(quantity, setQuantity)}
            >
              <FaMinus />
            </button>
          </div>
        </div>

        <button
          type="button"
          className="p-2  bg-[#BB86F6] mt-2 text-lg font-bold text-[#242424] rounded-xl hover:bg-[#a063e6]"
          onClick={() => {
            handleAddToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: quantity,
              image: product.image,
            });
            setQuantity(1);
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
