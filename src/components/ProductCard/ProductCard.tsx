import { Link, useOutletContext } from "react-router-dom";
import { OutletContextType, Product } from "../../types/types";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
type ProductCardProps = {
  product: Product;
};

//Creates individual card of the product from products array in Shop page
function ProductCard({ product }: ProductCardProps) {
  const { handleAddToCart, handleIncrementQuantity, handleDecrementQuantity } =
    useOutletContext<OutletContextType>();

  const [quantity, setQuantity] = useState<number>(1); //Quantity

  return (
    <>
      {product ? (
        <div className="product text-white bg-[#242424] flex flex-col align-center p-3 gap-2 rounded-xl">
          {/* Clicking the image redirects to the in-detail page of the product */}
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

          {/* Product title */}
          <h3 className="font-bold pt-3 whitespace-nowrap overflow-hidden text-ellipsis text-xl text-white">
            {product.title}
          </h3>

          {/* Product price */}
          <div className="text-lg flex gap-8 items-center justify-between">
            <p>Price: {product.price} $</p>

            {/* Increment button */}
            <div className="flex gap-3">
              <button
                className="font-bold text-lg text-[#BB86F6]"
                type="button"
                onClick={() => handleIncrementQuantity(quantity, setQuantity)}
              >
                <FaPlus />
              </button>

              {/* Quantity */}
              <div>{quantity}</div>

              {/* Decrement button */}
              <button
                className="font-bold text-lg text-[#BB86F6]"
                type="button"
                onClick={() => handleDecrementQuantity(quantity, setQuantity)}
              >
                <FaMinus />
              </button>
            </div>
          </div>

          {/* Add to Cart button; sends an object to add in cartProducts array */}
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
      ) : (

        <div className="flex items-center justify-center h-[230px]"><ClipLoader color="white"/></div>
        
      )}
    </>
  );
}

export default ProductCard;
