import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../types/types";

function Cart() {
  const { cartProducts, handleRemoveFromCart } =
    useOutletContext<OutletContextType>();

  return (
    <>
      {cartProducts.length > 0 ? (
        <main className=" bg-[#1F1B24] text-white">
          {cartProducts.map((product, index) => (
            <div key={index}>
              <div>{product.title}</div>
              <div>{product.quantity}</div>
              <button type="button" onClick={() => handleRemoveFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
        </main>
      ) : (
        <main className="flex justify-center items-center text-5xl font-bold bg-[#1F1B24] text-white">
          Cart empty
        </main>
      )}
    </>
  );
}

export default Cart;
