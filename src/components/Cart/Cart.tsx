import { useOutletContext, Link } from "react-router-dom";
import { CartProduct, OutletContextType } from "../../types/types";
import CartProductCard from "../CartProductCard/CartProductCard";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type product = CartProduct;

//Cart Page
function Cart() {
  const { cartProducts, handleCheckout } =
    useOutletContext<OutletContextType>();

  const [totalPrice, setTotalPrice] = useState<number>(); //Total price of all products in the Cart

  //Loops through cartProducts array and calculate the total price based on the total quantity
  useEffect(() => {
    const getTotalPrice = () => {
      let price = 0;
      for (let i = 0; i < cartProducts.length; i++) {
        price += cartProducts[i].quantity * cartProducts[i].price;
      }
      setTotalPrice(parseFloat(price.toFixed(2))); //Limits decimal upto 2 digits
    };

    getTotalPrice();
  }, [totalPrice, cartProducts]);

  return (
    <>
      {cartProducts.length > 0 ? (
        // If Cart is not empty
        <main className=" bg-[#1F1B24] text-white flex flex-col items-center">
          {/* Back arrow button; navigates back to the Shop page */}
          <button type="button" className="w-[60px] self-start">
            <Link to="/shop">
              <FaArrowLeft
                style={{
                  width: "40px",
                  height: "40px",
                  position: "relative",
                  left: "20px",
                  top: "20px",
                  marginBottom: "10px",
                }}
              />
            </Link>
          </button>

          {/* Grid of cards of products in the Cart */}
          <div className="grid gap-5 p-3 mt-[30px]">
            {cartProducts.map((product: product, index) => (
              <CartProductCard product={product} key={index} index={index} />
            ))}
          </div>
          <div className="mt-4 text-center font-bold flex flex-col justify-center items-center p-3 gap-7 sm:flex-row sm:justify-normal">
            {/* Total price of all the products in the Cart */}
            <div className="text-xl">Total price: {totalPrice} $</div>

            {/* Checkout button */}
            <div>
              <button
                type="button"
                onClick={handleCheckout}
                className="p-3 px-10 bg-[#BB86F6] hover:bg-[#a063e6] text-black rounded-lg text-3xl"
              >
                Checkout
              </button>
            </div>
          </div>
        </main>
      ) : (
        // If cart is empty
        <main className="flex justify-center items-center bg-[#1F1B24] text-white text-center">
          <h3 className="p-3 text-3xl md:text-5xl font-bold">
            Cart is empty :(
          </h3>
        </main>
      )}
    </>
  );
}

export default Cart;
