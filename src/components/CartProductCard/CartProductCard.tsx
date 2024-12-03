import { useOutletContext } from "react-router-dom";
import { CartProduct, OutletContextType } from "../../types/types";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type ProductCardProps = {
  product: CartProduct;
  index: number;
};

//Creates the card of individual product in the Cart
function CartProductCard({ product, index }: ProductCardProps) {
  const { cartProducts, setCartProducts, handleRemoveFromCart } =
    useOutletContext<OutletContextType>();

  const [quantity, setQuantity] = useState(product.quantity); //Current quantity of product

  //Increments quantity and directly changes the no. of products in the Cart
  const incrementQuantity = () => {
    const updatedQuantity = quantity + 1; //+1
    setQuantity(updatedQuantity);
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[index].quantity = updatedQuantity; //Updates the quantity;
    setCartProducts(updatedCartProducts);
  };

  //Decrements quantity and directly changes the no. of products in the Cart
  const decrementQuantity = () => {
    if (quantity <= 1) {
      //If the quantity of product is only 1, decrementing it would remove it from the Cart
      handleRemoveFromCart(index);
    } else {
      const updatedQuantity = quantity - 1; //Else -1
      setQuantity(updatedQuantity);
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[index].quantity = updatedQuantity; //Updates the quantity;
      setCartProducts(updatedCartProducts);
    }
  };

  return (
    <>
      <div className="bg-[#242424] p-2 sm:p-5 rounded-lg flex gap-3 sm:gap-8 items-center justify-between">
        {/* Image of the product */}
        <div className=" flex items-center justify-center bg-white p-1 rounded-lg w-[80px] md:w-[120px] sm:justify-between">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Title */}
        <h2 className="text-wrap font-bold pl-2 sm:p-0">{product.title}</h2>

        {/* Total price of individual product */}
        <div>{parseFloat((product.price * product.quantity).toFixed(2))} $</div>
        <div className="flex gap-1 sm:gap-3 items-center flex-col sm:flex-row">
          {/* Increment button */}
          <button
            type="button"
            className="font-bold text-lg text-[#BB86F6]"
            onClick={incrementQuantity}
          >
            <FaPlus />
          </button>

          {/* Quantity */}
          <div>{quantity}</div>

          {/* Decrement button */}
          <button
            type="button"
            className="font-bold text-lg text-[#BB86F6]"
            onClick={decrementQuantity}
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </>
  );
}

export default CartProductCard;
