/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { OutletContextType, Product } from "../../types/types";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

//Products in-detail Page
function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const {
    products,
    handleAddToCart,
    handleIncrementQuantity,
    handleDecrementQuantity,
  } = useOutletContext<OutletContextType>();

  const [quantity, setQuantity] = useState<number>(1); //Quantity
  const product: Product | any = products.find((p) => p.id === Number(id)); //Gets the product from products array

  if (!product) {
    return (
      <div className="min-h-[80vh] text-white text-4xl flex items-center justify-center font-bold w-full text-center">
        Product loading
      </div>
    );
  }

  return (
    <>
      <main className="bg-[#1F1B24] min-h-[90vh] text-white">
        {/* Back arrow button; navigates back to the Shop page */}
        <button type="button" className="w-[60px]">
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

        <div className="w-full flex flex-col items-center my-8 p-8 justify-center gap-8 lg:flex-row">
          {/* Product image */}
          <div className="flex justify-center items-center md:w-[500px] lg:w-[700px] bg-white rounded-xl object-cover">
            <img
              src={product.image}
              alt={product.title}
              style={{
                objectPosition: "center",
                objectFit: "contain",
                height: "90%",
                width: "90%",
                padding: "10px",
              }}
            />
          </div>

          <section className="flex flex-col gap-4">
            {/* Title */}
            <h1 className="text-5xl font-bold">{product.title}</h1>

            {/* Description */}
            <article>
              <p className="text-sm">{product.description}</p>
            </article>

            {/* Price */}
            <div className="text-xl flex gap-14 items-center">
              <p>Price: {product.price} $</p>

              {/* Increment button */}
              <div className="flex gap-3">
                <button
                  className="font-bold text-xl text-[#BB86F6]"
                  type="button"
                  onClick={() => handleIncrementQuantity(quantity, setQuantity)}
                >
                  <FaPlus />
                </button>

                {/* Quantity */}
                <div className="text-xl">{quantity}</div>

                {/* Decrement button */}
                <button
                  className="font-bold text-xl text-[#BB86F6]"
                  type="button"
                  onClick={() => handleDecrementQuantity(quantity, setQuantity)}
                >
                  <FaMinus />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              type="button"
              className="p-2 bg-[#BB86F6] mt-2 text-2xl font-bold text-[#242424] rounded-xl hover:bg-[#a063e6] px-10 py-4 sm:w-[300px]"
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
          </section>
        </div>
      </main>
    </>
  );
}

export default ProductPage;
